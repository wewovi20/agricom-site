const btn = document.querySelector("#btnSignup");

btn.onclick = async function submit() {
    const username = document.getElementById("defaultForm-username").value.trim();
  const email = document.getElementById("defaultForm-email").value.trim();
  const password = document.getElementById("defaultForm-pass").value.trim();
console.log(email, password)
  //   alert(email, password);

  await fetch("http://localhost:4000/agricom/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        username,
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      window.alert("User successfully created,")
      window.location.href = './login.html'
    })
    .catch((error) => {
      window.alert(error)
    });
};