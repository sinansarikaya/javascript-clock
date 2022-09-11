// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString

const boxes = document.querySelectorAll(".clock .box");
const date = document.querySelector(".date");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const showTime = () => {
  const today = new Date();
  const d = days[today.getDay()];
  const y = today.getFullYear();
  const m = months[today.getMonth()];

  //fullTime = today.toLocaleTimeString("no-NO");
  fullTime = today.toLocaleTimeString();

  date.innerText = `${d} ${m} ${y}`;
  let nTime = fullTime.split(":");
  boxes[0].innerText = nTime[0];
  boxes[1].innerText = nTime[1];
  boxes[2].innerText = nTime[2];
  setTimeout(showTime, 1000);
};
showTime();
