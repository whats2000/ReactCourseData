import React from "react";

interface IUserProps {}

interface IUserState {
  name: string;
  totalSpent: number;
  loyaltyLevel: string;
}

class UserComponent extends React.Component<IUserProps, IUserState> {
  state = {
    name: "Alice",
    totalSpent: 0,
    loyaltyLevel: "Bronze"
  };

  // `_prevProps` 是上一次的 props，由於我們沒有使用到 props，所以可以省略。用 `_` 來表示我們不會使用到這個參數。
  componentDidUpdate(_prevProps: IUserProps, prevState: IUserState) {
    /**
     * - 消費總額小於 1000 元，積分等級為 "Bronze"
     * - 消費總額在 1000 至 5000 元之間，積分等級為 "Silver"
     * - 消費總額超過 5000 元，積分等級為 "Gold"
     */
    // Your code here

    // End of your code
  }

  increaseSpending = () => {
    this.setState(prevState => ({ totalSpent: prevState.totalSpent + 500 }));
  }

  render() {
    const { name, totalSpent, loyaltyLevel } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <p>消費總額: {totalSpent}</p>
        <p>積分等級: {loyaltyLevel}</p>
        <button onClick={this.increaseSpending}>增加消費</button>
      </div>
    );
  }
}

export default UserComponent;
