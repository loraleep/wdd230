const daynames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const monthnames = ['January', 'Febuary', 'march', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December']
let date = new Date();
document.getElementById('date-time').textContent = daynames[date.getDay()] + ', ' + date.getDate() + ' ' + monthnames[date.getMonth()] + ' ' + date.getFullYear();