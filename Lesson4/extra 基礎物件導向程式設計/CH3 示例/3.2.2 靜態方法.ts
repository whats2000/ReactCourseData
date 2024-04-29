abstract class MathUtil {
  static sum(x: number, y: number): number {
    return x + y;
  }

  static subtract(x: number, y: number): number {
    return x - y;
  }
}

console.log(MathUtil.sum(10, 5));        // 輸出: 15
console.log(MathUtil.subtract(10, 5));   // 輸出: 5
