
// toLocaleDateString
const options = {weekday: 'log', day: 'numeric', month: 'long', year:'numeric'};
let date = new Date()
console.log(date)
document.getElementById('date-time').textContent = date

      const todaysdate = new Date();

      const now = new Intl.DateTimeFormat('en-US', { dateStyle})