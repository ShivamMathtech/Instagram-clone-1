let loginbtn = document.querySelector(".form ");

loginbtn.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector(".form input[type='email']").value;
  let password = document.querySelector(".form input[type='password']").value;
  fetch(
    "http://localhost:4000/auth/login",
    // Send the data to the server for authentication
    {
      method: "POST",
      body: JSON.stringify({ email, password }), // Convert the data to JSON format
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
