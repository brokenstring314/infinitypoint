## C#异步拦截器空引用异常问题

### 问题描述

当使用Castle DynamicProxy等AOP框架拦截异步方法时，如果在拦截器中提前返回（不调用`invocation.Proceed()`），比如直接return，对于返回`Task<T>`类型的方法会返回null，导致调用方`await`时抛出空引用异常。

### 错误特征

```plain
System.NullReferenceException: Object reference not set to an instance of an object.
   at YourNamespace.YourClass.YourMethod() in YourFile.cs:line XX
```

- 异常行指向`await someAsyncMethod()`
- 实际问题出在拦截器返回了null
- 难以通过堆栈跟踪定位根本原因，因为错误发生在await内部

### 解决方案

在拦截器中正确处理异步方法的返回值：

```csharp
// 拦截器中处理被禁用接口时的返回值
if (settings?.IsEnabled == false)
{
    // 对于Task<T>类型的方法
    if (invocation.Method.ReturnType.IsGenericType && 
        invocation.Method.ReturnType.GetGenericTypeDefinition() == typeof(Task<>))
    {
        var returnType = invocation.Method.ReturnType.GetGenericArguments()[0];
        var defaultValue = returnType.IsValueType ? Activator.CreateInstance(returnType) : null;
        var tcs = typeof(TaskCompletionSource<>).MakeGenericType(returnType);
        var taskCompletionSource = Activator.CreateInstance(tcs);
        tcs.GetMethod("SetResult").Invoke(taskCompletionSource, new[] { defaultValue });
        invocation.ReturnValue = tcs.GetProperty("Task").GetValue(taskCompletionSource);
    }
    // 对于Task类型的方法
    else if (invocation.Method.ReturnType == typeof(Task))
    {
        invocation.ReturnValue = Task.CompletedTask;
    }
    return;
}
```

### 防御性编程

在调用可能被拦截的方法后检查返回值：

```csharp
var response = await _service.SomeMethodAsync();
if (response == null)
{
    // 处理拦截器返回null的情况
    return;
}
```

<!-- <Update /> -->