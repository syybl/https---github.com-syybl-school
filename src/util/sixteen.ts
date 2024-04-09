
function sixteen(decimalString: string): string {
    let decimalNumber = parseInt(decimalString, 10); // 解析为十进制整数
    let hexadecimalString = decimalNumber.toString(16); // 转换为16进制字符串
    return hexadecimalString;
}

export default sixteen;