function renderClock() {
  const timeObject = new Date();
  let hours = timeObject.getHours();
  const minutes = renderLeadingZero(timeObject.getMinutes());
  const seconds = renderLeadingZero(timeObject.getSeconds());
  const isAm = hours < 12 || hours === 0;
  let amPm = isAm ? 'AM' : 'PM';

  const clockDisplay = document.getElementById('timeDisplay');
  clockDisplay.textContent = `${formatHour(
    hours
  )}:${minutes}:${seconds} ${amPm}`;
}

function renderLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}

function renderDate() {
  const dateObject = new Date();
  let day = dayNames[dateObject.getDay()];
  let month = monthNames[dateObject.getMonth()];
  let date = dateObject.getDate();
  let year = dateObject.getFullYear();

  const dateDisplay = document.getElementById('dateDisplay');
  dateDisplay.textContent = `${day}, ${month} ${appendDateSuffix(
    date
  )} ${year} `;
}

function appendDateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

setInterval(() => {
  renderClock();
  renderDate();
}, 1000);

renderClock();
renderDate();
