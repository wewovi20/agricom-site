const userU = JSON.parse(localStorage.getItem("user"));
console.log(`user name is ${userU.username}`);
let username = document.getElementById("userName");
username.innerHTML = userU.username;