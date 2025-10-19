# Markdown 扩展例子

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## 语法高亮

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## 数学公式


积分与求和的组合测试（涉及字体、界限、分数）这个公式结合了积分、求和、希腊字母、$\text{mathbb}$ 字体和特殊的数学运算符。
$$\int_{\mathbb{R}^n} \left( \sum_{k=1}^\infty \frac{1}{\sqrt{k!}} \right) \mathcal{F} \{ f(x) \} \cdot \nabla \mathbf{v} \ d^n x$$
公式解读（涉及的 $\text{KaTeX}$/$\text{LaTeX}$ 元素）：

字体$\mathbb{R}^n$表示实数空间（双线字体）

求和符号及上下界 $\sum_{k=1}^\infty$ 

分数$\frac{1}{\sqrt{k!}}$

复杂的嵌套分数和阶乘根号$\sqrt{k!}$

平方根$\text{mathcal}$ 

字体$\mathcal{F}$花体字母

梯度$\nabla$向量微分算子

粗体向量$\mathbf{v}$粗体字母，常用于向量

$a$ 变量 

$d^n x$微元符号


## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
