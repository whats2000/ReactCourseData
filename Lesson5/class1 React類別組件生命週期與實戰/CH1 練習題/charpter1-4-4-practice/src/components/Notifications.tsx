/**
 * 創建一個 Notifications 類組件，該組件在掛載時訂閱消息，並在卸載時取消訂閱。
 * 使用 componentDidMount 方法來訂閱消息服務。
 * 使用 componentWillUnmount 方法來取消訂閱消息服務。
 * 在組件中顯示接收到的消息。
 */
import { Component } from 'react';

interface INotificationState {
  messages: string[];
}

interface INotificationProps {
  handleHideNotification: () => void;
}

class Notifications extends Component<INotificationProps, INotificationState> {
  subscription: any;

  state = {
    messages: []
  };

  /**
   * 組件掛載後訂閱消息服務
   */
  componentDidMount() {
    this.subscription = this.subscribeToMessages((message: string) => {
      this.setState(prevState => ({
        messages: [...prevState.messages, message]
      }));
    });
  }

  /**
   * 組件卸載時取消訂閱消息服務
   */
  componentWillUnmount() {
    // Your code here

    // End of your code
  }

  /**
   * 模擬一個消息服務訂閱，實際上可以是 WebSocket, Server-Sent Events, 或其他
   * @param callback
   */
  subscribeToMessages(callback: (message: string) => void) {
    return setInterval(() => {
      const newMessage = `New message received at ${new Date().toLocaleTimeString()}`;
      callback(newMessage);
    }, 3000);
  }

  /**
   * 取消訂閱消息服務
   * @param subscription
   */
  unsubscribeFromMessages(subscription: any) {
    clearInterval(subscription);
  }

  render() {
    // 我個人很不建議在 render 這定義樣式，這裡只是為了簡化範例，之後會教用 Styled Components 來處理樣式
    return (
      <div style={{
        position: 'fixed',
        zIndex: 1,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(0,0,0,0.4)'
      }}>
        <div style={{
          backgroundColor: '#fefefe',
          margin: '15% auto',
          padding: '20px',
          border: '1px solid #888',
          width: '80%',
          position: 'relative'
        }}>
          <button style={{
            position: 'absolute',
            right: '10px',
            top: '10px',
            fontSize: '18px',
            fontWeight: 'bold',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer'
          }} onClick={this.props.handleHideNotification}>X</button>
          <h2>Notifications</h2>
          <ul>
            {this.state.messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Notifications;

