let loginbtn = document.querySelector(".form ");

loginbtn.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector(".form input[type='email']").value;
  let password = document.querySelector(".form input[type='password']").value;
  fetch()
    .then((response) => response.json())
    .then((data) => console.log("logged in successfully"))
    .catch((error) => {
      console.error("Error:", error);
      alert("Invalid email or password. Please try again.");
    });
});
