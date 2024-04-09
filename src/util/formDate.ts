function formatDate(dateString: string) {
    let date = new Date(dateString);
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0'); // 补齐月份前面的0
    let day = String(date.getDate()).padStart(2, '0'); // 补齐日期前面的0
    let hours = String(date.getHours()).padStart(2, '0'); // 补齐小时前面的0
    let minutes = String(date.getMinutes()).padStart(2, '0'); // 补齐分钟前面的0
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  }

  export default formatDate;