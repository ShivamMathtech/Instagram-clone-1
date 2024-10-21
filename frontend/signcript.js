let signUpBtn = document.querySelector(".signup-form");
signUpBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  let Email = document.querySelector("input[id='email']").value;
  let pasword = document.querySelector("input[id='password']").value;
  let fullName = document.querySelector("input[id='fullname']").value;
  let useName = document.querySelector("input[id='username']").value;
  // Put the data into the data base
  fetch()
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
