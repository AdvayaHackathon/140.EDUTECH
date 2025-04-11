// Load scheduled classes
const classes = JSON.parse(localStorage.getItem("scheduledClasses")) || [];
const classList = document.getElementById("class-list");
classes.forEach(cls => {
  const li = document.createElement("li");
  li.textContent = `${cls.subject} on ${cls.date} at ${cls.time}`;
  classList.appendChild(li);
});

// Load polls
const polls = JSON.parse(localStorage.getItem("polls")) || [];
const pollList = document.getElementById("poll-list");
polls.forEach(poll => {
  const li = document.createElement("li");
  li.textContent = `Poll: ${poll.question}`;
  pollList.appendChild(li);
});

// Load assignments
const assignments = JSON.parse(localStorage.getItem("assignments")) || [];
const assignmentList = document.getElementById("assignment-list");
assignments.forEach(assign => {
  const li = document.createElement("li");
  li.innerHTML = `Title: ${assign.title} <br> File: <a href="${assign.file}" target="_blank">View</a>`;
  assignmentList.appendChild(li);
});
