function dateDiff(current, birth) {
  let yearDiff = current.getFullYear() - birth.getFullYear();
  let monthDiff = current.getMonth() - birth.getMonth();
  let dayDiff = current.getDate() - birth.getDate();

  if (dayDiff < 0) {
    const lastMonthDays = new Date(current.getFullYear(), current.getMonth(), 0).getDate();
    dayDiff += lastMonthDays;
    monthDiff--;
  }

  if (monthDiff < 0) {
    monthDiff += 12;
    yearDiff--;
  }

  return { yearDiff, monthDiff, dayDiff };
}
function getAge() {
  const day = parseInt(document.getElementById("day").value, 10);
  const month = parseInt(document.getElementById("month").value, 10);
  const year = parseInt(document.getElementById("year").value, 10);
  const birthdate = new Date(year, month - 1, day);
  const currentDate = new Date();
  const { yearDiff, monthDiff, dayDiff } = dateDiff(currentDate, birthdate);

  document.getElementById("result__year").innerHTML = yearDiff
  document.getElementById("result__month").innerHTML = monthDiff
  document.getElementById("result__day").innerHTML = dayDiff
}
