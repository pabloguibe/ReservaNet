var events = [];

function addEvent() {
  var title = prompt("Event Title:");
  if (title) {
    events.push({ title: title, date: new Date() });
    renderEvents();
  }
}

function renderEvents() {
  var html = "";
  events.forEach(function (event) {
    html += `
      <li class="list-group-item">
        ${event.title} - ${event.date.toLocaleDateString()}
      </li>
    `;
  });
  document.getElementById("event-list").innerHTML = html;
}

document.getElementById("add-event-btn").addEventListener("click", function () {
  addEvent();
});

renderEvents();