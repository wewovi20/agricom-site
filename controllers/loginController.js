const btn = document.querySelector("#btnLogin");

btn.onclick = async function submit() {
  const email = document.getElementById("defaultForm-email").value.trim();
  const password = document.getElementById("defaultForm-pass").value.trim();
console.log(email, password)
  //   alert(email, password);

  await fetch("http://localhost:4000/agricom/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      //   console.log("user: ", JSON.stringify(data));
      if (data.success === true /*&& data.isAdmin === true*/) {
        location.href = "/homepage.html";
      } 
      //else if (data.success === true && data.isAdmin !== true) {
       // location.href = "../salesAgent/homepage.html";
     // } 
      else {
        alert(data.error.toString());
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const logoutV = document.getElementById('#logout')
logoutV.onclick = function logoutF() {
  return logout();
}

function logout() {
  window.localStorage.clear();
  window.location.reload(true);
  window.location.replace('/index.html');

}


// function getCurrentUser() {
//   var userName = localStorage.getItem('username');
  
//   try {
//     return JSON.parse(userName);
//   } catch (ex) {
//     return null; // or do some other error handling
//   }
// }
// var saveUser = getCurrentUser();
// if(saveUser){
//   let username = getElementById('userName')
//   username.innerHTML = saveUser.userName
//   console.log(saveUser.userName)
  
// }
