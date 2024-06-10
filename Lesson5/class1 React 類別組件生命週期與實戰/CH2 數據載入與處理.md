# 第二章：數據載入與處理

## 2.1 資料載入策略

回顧前章的組件生命週期，我們可以在不同的生命週期方法中載入數據。在實際應用中，我們需要根據具體的需求來選擇合適的策略。

### 2.1.1 生命週期方法中的資料載入

在 React 組件的不同生命週期方法中載入數據各有利弊。常見的策略包括：

- `componentDidMount`：這是載入數據的理想時機。組件已經渲染完畢，可以安全地進行 DOM 操作並載入數據。

  優點：
    - 確保組件已經掛載，避免空指針錯誤。
    - 只會執行一次，不會因為組件重渲染而重複執行。

  缺點：
    - 較慢的數據載入可能導致初次渲染時顯示不完整或空白。

  示例：

    ```tsx
    interface IData {
      id: number;
      value: string;
    }

    interface IDataState {
      data: IData[];
    }

    class DataComponent extends React.Component<{}, IDataState> {
      state = {
        data: []
      };

      componentDidMount() {
        fetch('https://api.example.com/data')
          .then(response => response.json())
          .then(data => this.setState({ data }));
      }

      render() {
        return (
          <div>
            {this.state.data.map(item => (
              <div key={item.id}>{item.value}</div>
            ))}
          </div>
        );
      }
    }
    ```

- `componentDidUpdate`：當 props 或 state 更新後，可以在此載入數據，尤其是當載入的數據依賴於更新的 props 或 state。

  優點：
    - 可以根據更新的 props 或 state 載入新的數據。

  缺點：
    - 需要小心避免無限循環。

  示例：

    ```tsx
    interface IProfileProps {
      userID: number;
    }

    interface IProfileState {
      userData: any;
    }

    class Profile extends React.Component<IProfileProps, IProfileState> {
      state = {
        userData: {}
      };

      componentDidMount() {
        this.fetchUserData(this.props.userID);
      }

      componentDidUpdate(prevProps: IProfileProps) {
        if (this.props.userID !== prevProps.userID) {
          this.fetchUserData(this.props.userID);
        }
      }

      fetchUserData(userID: number) {
        fetch(`https://api.example.com/users/${userID}`)
          .then(response => response.json())
          .then(data => this.setState({ userData: data }));
      }

      render() {
        return <div>{/* 顯示用戶數據 */}</div>;
      }
    }
    ```

## 2.2 狀態管理與更新

### 2.2.1 管理組件狀態

有效的狀態管理可以使組件更加可維護和易於擴展。React 提供了 `this.setState` 方法來更新狀態。

### 2.2.2 根據用戶輸入更新狀態

當用戶輸入改變時，更新組件狀態以反映輸入的變化。這樣輸入框等表單元素就可以與組件的狀態保持同步。這很常用於動態表單的實現。

- 例如，當用戶註冊帳號，設置密碼時，我們可以在用戶輸入時即時更新組件的狀態，並給與密碼強度的提示。

示例：

```tsx
interface IFormState {
  username: string;
  password: string;
  passwordStrength: string;
}

class FormComponent extends React.Component<{}, IFormState> {
  state = {
    username: '',
    password: '',
    passwordStrength: ''
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    this.setState({[name]: value} as Pick<IFormState, keyof IFormState>, this.updatePasswordStrength);
  }

  updatePasswordStrength = () => {
    const {password} = this.state;
    let strength = 'Weak';
    if (password.length > 6) strength = 'Medium';
    if (password.length > 10) strength = 'Strong';
    this.setState({passwordStrength: strength});
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          placeholder="Password"
        />
        <p>Password Strength: {this.state.passwordStrength}</p>
      </form>
    );
  }
}
```

這個範例展示了一個用戶註冊表單，當用戶輸入密碼時，會即時更新組件的狀態並顯示密碼強度。

### 2.2.3 根據伺服器響應更新狀態

在收到伺服器的響應後，更新組件的狀態以顯示新的數據。

在前一章的例子中，我們在 `componentDidMount` 方法中發送請求，並在響應返回後更新組件的狀態。並渲染學校課程列表，就是一個很好的例子。

示例：

```tsx
interface ICourseListStates {
  courses: Course[];
}

class CourseList extends Component<{}, ICourseListStates> {
  state: ICourseListStates = {
    courses: []
  };

  componentDidMount() {
    /**
     * 透過 `fetch` 來取得課程資料，並將資料設定到 `state` 中。
     * API 位址：`https://whats2000.github.io/NSYSUCourseAPI/1122/20240517_101137/page_1.json`
     * 以上位置若找不到變更，請自行修改替換 `20240517_101137` 成可用日期。查看當前最新時間：https://whats2000.github.io/NSYSUCourseAPI/1122/version.json
     */
    fetch('https://whats2000.github.io/NSYSUCourseAPI/1122/20240517_101137/page_1.json')
      .then(response => response.json())
      .then(data => this.setState({courses: data}));
  }

  render() {
    return (
      <>
        {this.state.courses.map(course => (
          <CourseRow key={course.id} course={course}/>
        ))}
      </>
    );
  }
}
```

## 2.3 錯誤處理與載入狀態

### 2.3.1 處理載入過程中的錯誤

在數據載入過程中，可能會發生錯誤，我們需要有效地處理這些錯誤。

很多時候，網頁伺服器可能會正常運行，用戶端會拿到網頁。但是數據請求可能會失敗。這可能是因為網絡問題、伺服器問題或用戶輸入錯誤等原因。

下方是一個處理錯誤的並顯示錯誤消息的示例。當數據請求失敗時，會顯示錯誤消息。

示例：

```tsx
interface IErrorState {
  data: any[];
  error: string | null;
}

class ErrorHandlingComponent extends React.Component<{}, IErrorState> {
  state = {
    data: [],
    error: null
  };

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => this.setState({data}))
      .catch(error => this.setState({error: error.message}));
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error}</div>;
    }
    return (
      <div>
        {this.state.data.map(item => (
          <div key={item.id}>{item.value}</div>
        ))}
      </div>
    );
  }
}
```

### 2.3.2 顯示載入狀態

在數據載入過程中，可以顯示一個載入指示器，讓用戶知道數據正在載入中。

這是個很好的用戶體驗設計，用戶可以知道數據正在載入中，而不是看到空白頁面。一般搭配前端樣式庫的載入動畫，如 Bootstrap 的 Spinner。

示例：

```tsx
interface ILoadingState {
  data: any[];
  loading: boolean;
}

class LoadingComponent extends React.Component<{}, ILoadingState> {
  state = {
    data: [],
    loading: true
  };

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => this.setState({data, loading: false}))
      .catch(error => this.setState({loading: false}));
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {this.state.data.map(item => (
          <div key={item.id}>{item.value}</div>
        ))}
      </div>
    );
  }
}
```

### 2.3.3 綜合應用

將錯誤處理和載入狀態結合在一起，構建一個更健壯的數據載入組件。

資料載入過程中，可能會發生三種情況：
- 數據載入成功，顯示數據。
- 數據載入失敗，顯示錯誤消息。
- 數據載入中，顯示載入狀態。

善用這三種情況，可以提供更好的用戶體驗。

```tsx
interface IComprehensiveState {
  data: any[];
  loading: boolean;
  error: string | null;
}

class ComprehensiveComponent extends React.Component<{}, IComprehensiveState> {
  state = {
    data: [],
    loading: true,
    error: null
  };

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => this.setState({data, loading: false}))
      .catch(error => this.setState({error: error.message, loading: false}));
  }

  render() {
    const {data, loading, error} = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        {data.map(item => (
          <div key={item.id}>{item.value}</div>
        ))}
      </div>
    );
  }
}
```

### 2.3.4 練習

假設你正在開發一個用於顯示國際空間站（ISS）位置的應用程式，從公共 API 獲取 ISS 的當前位置數據，並顯示在組件中。要求如下：

1. 創建一個 ISSLocationComponent 類組件，該組件在掛載時發送請求獲取 ISS 的當前位置數據。
2. 使用 componentDidMount 方法來請求數據，並在數據返回後更新組件的狀態。
3. 處理數據請求過程中的錯誤，並顯示錯誤消息。
4. 在數據載入過程中顯示載入狀態。
5. 將獲取到的 ISS 位置數據顯示在組件中。

API 位址：`http://api.open-notify.org/iss-now.json`
