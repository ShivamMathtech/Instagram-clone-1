let signUpBtn = document.querySelector(".signup-form");
signUpBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  let Email = document.querySelector("input[id='email']").value;
  let pasword = document.querySelector("input[id='password']").value;
  let fullName = document.querySelector("input[id='fullname']").value;
  let useName = document.querySelector("input[id='username']").value;
  // Put the data into the data base
  let registrationdata = {
    email: Email,
    password: pasword,
    fullName: fullName,
    username: useName,
  };

  // Send the data to the server for registration
  fetch("http://localhost:4000/auth/signup", {
    method: "POST",
    body: JSON.stringify(registrationdata),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      (response) => response.json();
    })
    .then((data) => {
      (data) => console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  // clear the form data
  document.querySelector("input[id='email']").value = "";
  document.querySelector("input[id='password']").value = "";
  document.querySelector("input[id='fullname']").value = "";
  fetch("http://localhost:4000/auth/signup", {
    method: "POST",
    body: JSON.stringify(registrationdata),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      (response) => response.json();
    })
    .then((data) => {
      (data) => console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  // clear the form data
  document.querySelector("input[id='email']").value = "";
  document.querySelector("input[id='password']").value = "";
  document.querySelector("input[id='fullname']").value = "";
  document.querySelector("input[id='username']").value = "";
});
