class Printer {
  // 重載簽名定義
  print(text: string): void;
  print(texts: string[], separator: string): void;

  // 實現方法
  print(text: string | string[], separator?: string): void {
    if (Array.isArray(text)) {
      console.log(text.join(separator || ' ')); // 使用 separator 或默認空格連接文字
    } else {
      console.log(text); // 印出單一字符串
    }
  }
}

const printer = new Printer();
printer.print('Hello,world!');                    // Hello,world!
printer.print(['Hello', 'world!'], '_'); // Hello_world!
