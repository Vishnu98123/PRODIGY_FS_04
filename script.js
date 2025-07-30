
const socket = io("http://localhost:5000");
let room = "", username = "", token = "";

async function register() {
  const user = document.getElementById('auth-username').value;
  const pass = document.getElementById('auth-password').value;
  const res = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: user, password: pass })
  });
  const data = await res.json();
  alert(data.message);
}

async function login() {
  const user = document.getElementById('auth-username').value;
  const pass = document.getElementById('auth-password').value;
  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: user, password: pass })
  });
  const data = await res.json();
  if (data.token) {
    token = data.token;
    username = user;
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('chat-container').style.display = 'block';
    document.getElementById('user-display').textContent = username;
  } else {
    alert("Login failed");
  }
}

function joinRoom() {
  room = document.getElementById("room").value;
  socket.emit("join_room", room);
  fetch(`http://localhost:5000/api/messages/${room}`)
    .then(res => res.json())
    .then(messages => {
      const histBox = document.getElementById("history-box");
      histBox.innerHTML = "";
      messages.forEach(msg => {
        histBox.innerHTML += `<p><strong>${msg.username}:</strong> ${msg.content}</p>`;
      });
    });
}

function sendMessage() {
  const msg = document.getElementById("message").value;
  socket.emit("send_message", { room, username, message: msg });
  document.getElementById("chat-box").innerHTML += `<p><strong>You:</strong> ${msg}</p>`;
  document.getElementById("message").value = "";
}

socket.on("receive_message", (data) => {
  document.getElementById("chat-box").innerHTML += `<p><strong>${data.username}:</strong> ${data.message}</p>`;
});
