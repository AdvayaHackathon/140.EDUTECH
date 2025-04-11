function showSection(type) {
  const contentBox = document.getElementById("section-content");

  const templates = {
    host: `
      <h2>Host Class</h2>
      <input type="text" placeholder="Enter Class Title" id="host-title">
      <button onclick="hostClass()">Start Class</button>
    `,
    poll: `
      <h2>Create Poll</h2>
      <input type="text" id="poll-question" placeholder="Enter your question"><br><br>
      <input type="text" id="option1" placeholder="Option 1">
      <input type="text" id="option2" placeholder="Option 2"><br><br>
      <button onclick="createPoll()">Create</button>
    `,
    schedule: `
      <h2>Schedule Class</h2>
      <input type="datetime-local" id="class-time">
      <input type="text" placeholder="Topic" id="class-topic">
      <button onclick="scheduleClass()">Schedule</button>
    `,
    assignments: `
      <h2>Manage Assignments</h2>
      <textarea id="assignment" placeholder="Enter assignment details..."></textarea>
      <button onclick="saveAssignment()">Save</button>
    `,
    results: `
      <h2>Poll Results</h2>
      <pre id="result-box"></pre>
      <button onclick="viewResults()">Refresh</button>
    `,
    library: `
      <h2>Question Library</h2>
      <textarea id="library-question" placeholder="Add a question..."></textarea>
      <button onclick="saveToLibrary()">Save</button>
      <ul id="question-list"></ul>
    `
  };

  contentBox.innerHTML = templates[type];
}

function hostClass() {
  const title = document.getElementById("host-title").value;
  alert(`Class "${title}" hosted!`);
}

function createPoll() {
  const question = document.getElementById("poll-question").value;
  const options = [document.getElementById("option1").value, document.getElementById("option2").value];
  const pollData = { question, options };
  localStorage.setItem("activePoll", JSON.stringify(pollData));
  alert("Poll created!");
}

function scheduleClass() {
  const time = document.getElementById("class-time").value;
  const topic = document.getElementById("class-topic").value;
  const schedule = { time, topic };
  localStorage.setItem("scheduledClass", JSON.stringify(schedule));
  alert("Class Scheduled!");
}

function saveAssignment() {
  const text = document.getElementById("assignment").value;
  localStorage.setItem("assignment", text);
  alert("Assignment saved!");
}

function viewResults() {
  const votes = JSON.parse(localStorage.getItem("votes")) || {};
  const resultBox = document.getElementById("result-box");
  resultBox.innerText = JSON.stringify(votes, null, 2);
}

function saveToLibrary() {
  const q = document.getElementById("library-question").value;
  let questions = JSON.parse(localStorage.getItem("questionLibrary")) || [];
  questions.push(q);
  localStorage.setItem("questionLibrary", JSON.stringify(questions));
  displayLibrary();
}

function displayLibrary() {
  const list = document.getElementById("question-list");
  const questions = JSON.parse(localStorage.getItem("questionLibrary")) || [];
  list.innerHTML = questions.map(q => `<li>${q}</li>`).join("");
}
