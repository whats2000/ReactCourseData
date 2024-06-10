# 第三章：React 組件屬性進階二

## 3.1 `props` 的批量傳遞

在 React 中使用類別組件時，通常也會遇到需要將多個 `props` 從父組件傳遞到子組件的情形。使用 TypeScript
和類別組件時，展開運算符 (`...`) 依然是一個非常有效的工具來實現這一功能。

### 3.1.1 介紹

展開運算符可以將一個物件的所有可枚舉屬性，快速地拓展到新的物件中。這在 React 的類別組件中用於批量傳遞 `props`
是非常方便的，尤其是當組件需要接收大量來自父組件的數據時。

回憶起展開運算符用法

```ts
const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3};

console.log(obj2); // { a: 1, b: 2, c: 3 }
```

### 3.1.2 使用展開運算符傳遞 `props`

在類別組件中，當我們使用展開運算符來傳遞 `props`，可以將父組件中的多個屬性一次性傳遞給子組件。

```tsx
class ParentComponent extends Component {
  render() {
    const userInfo = {
      name: 'Alice',
      age: 30,
      location: 'Taiwan'
    };
    return <ChildComponent {...userInfo} />;
  }
}
```

等校於

```tsx
class ParentComponent extends Component {
  render() {
    const userInfo = {
      name: 'Alice',
      age: 30,
      location: 'Taiwan'
    };
    
    return (
      <ChildComponent
        name={userInfo.name}
        age={userInfo.age}
        location={userInfo.location}
      />)
  }
}
```

子組件使用展開運算符接收 `props`：

```tsx
interface IChildProps {
  name: string;
  age: number;
  location: string;
}

class ChildComponent extends Component<IChildProps> {
  render() {
    const {name, age, location} = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
      </div>
    );
  }
}
```

### 3.1.3 討論

這種批量傳遞 `props` 的方法提高了開發效率並減少了程式碼冗餘。然而，它也可能帶來一些問題，如：

1. 性能考慮：如果子組件只使用父組件中的部分 `props`，使用展開運算符可能會導致不必要的屬性被傳遞，這可能會輕微影響性能或觸發不必要的重新渲染。
2. 命名衝突：使用展開運算符時，需要確保傳遞的物件中的屬性名不會與子組件內部已有的 `props`
   名稱發生衝突，以避免無意中覆蓋子組件的現有 `props`。

### 3.1.4 練習

假設你正在開發一個使用者介面，其中包含一個 `UserProfile` 組件，這個組件需要顯示使用者的名稱、年齡和位置信息。你有一個父組件 `App`，它從服務器獲取一個包含多個使用者信息的數據對象。你的任務是使用展開運算符 (`...`) 將每個使用者的信息作為 `props` 傳遞給 `UserProfile` 組件。

#### 要求：

1. 創建一個 `UserProfile` 類別組件，它接收 `name`、`age` 和 `location` 作為 `props`。
2. 在 `App` 組件中，設定一個狀態，包含至少三個使用者的信息。
3. 使用展開運算符將每個使用者的信息從 `App` 傳遞給 `UserProfile`。
4. 確保在 `UserProfile` 組件中正確顯示所有傳入的 `props`。

#### 額外挑戰：

- 增加一個按鈕到 `App` 組件，當點擊時，隨機更改其中一個使用者的年齡，並觀察 `UserProfile` 組件的響應。
