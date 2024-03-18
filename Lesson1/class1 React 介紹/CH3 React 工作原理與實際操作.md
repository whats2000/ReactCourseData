# 第三章: React 工作原理與實際操作

在本小節中，我們將通過一個簡單的例子來深入探索React的工作原理和實際操作方式。我們會使用CDN來引入React和ReactDOM，這有助於我們理解React是如何在幕後運作的，以及它是如何與DOM進行交互的。

## 3.1 使用CDN引入React

要開始我們的React之旅，首先需要在HTML文件的`<head>`標籤中引入React和ReactDOM。這可以通過添加以下`<script>`標籤來實現：

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

引入這兩個腳本後，我們就可以在我們的應用中使用React和ReactDOM的所有功能了。

## 3.2 創建和渲染元素

下一步，我們將創建一個簡單的元素結構並將其渲染到DOM中。目標是在`div#root`內創建以下結構：

```
div#root
└── div#one
    └── p
        ├── "This a p tag text!"
        └── "Another Text!"
```

為了實現這一目標，我們將採用React的`React.createElement`和`ReactDOM.createRoot`方法。
係參考`class2_2 Example.html`。

### 使用React.createElement

`React.createElement`是React用來描述應用中UI組件的方法。它接受三個參數：元素類型（如`'div'`或`'p'`）、元素的屬性（如`id`或`className`）、以及任意數量的子元素。這些子元素可以是更多的React元素，或者簡單的字符串（用於文本節點）。

### 使用ReactDOM.createRoot和render方法

在React 18中，`ReactDOM.createRoot`用於創建一個根渲染器，這是一種新的渲染方式，不同於React 17及之前版本的`ReactDOM.render`方法。`createRoot`方法接受一個DOM容器作為參數，返回一個根渲染器實例，然後我們可以使用這個實例的`render`方法來渲染我們的React元素。

```html
<div id="root"></div>
<script>
    // 使用React.createElement創建<p>元素，並添加兩段文本作為子元素
    const p = React.createElement('p', null, 'This a p tag text!', 'Another Text!');
    // 再創建一個<div>元素，並將創建的<p>元素作為子元素
    const divOne = React.createElement('div', {id: "one"}, p);

    // 使用ReactDOM.createRoot創建根渲染器，並將divOne渲染到#root元素中
    const divRoot = ReactDOM.createRoot(document.getElementById('root'));
    divRoot.render(divOne);
</script>
```

通過這個過程，我們展示了React如何簡化DOM元素的創建和管理。這種宣告式的開發方式讓我們無需直接操作DOM，從而提高了開發效率並優化了應用性能。

## 3.3 練習題

建立個列表並渲染到DOM中，列表內容如下：

```
div#root
└── ul#list
    ├── li
    |   └── "Item 1"
    ├── li
    |   └── "Item 2"
    └── li
        └── "Item 3"
```

### 參考預期結果

```html
<div id="root">
    <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</div>
```