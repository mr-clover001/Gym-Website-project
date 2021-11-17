const messageButton = document.querySelector("#message-btn");
const memberButton = document.querySelector("#member-btn");

const memberDetails = [];
const messageD = [];

const toggleFun = () => {
  console.log("hello brother you done it");
  let element = document.getElementById("toggle");
  element.classList.toggle("item");
};

const signInPortal = () => {
  const name = document.getElementById("inputName").value;
  const lastName = document.getElementById("inputLastName").value;
  const email = document.getElementById("inputEmail4").value;
  const password = document.getElementById("inputPassword4").value;
  const address1 = document.getElementById("inputAddress").value;
  const address2 = document.getElementById("inputAddress2").value;
  const city = document.getElementById("inputCity").value;
  const state = document.getElementById("inputState").value;
  const zip = document.getElementById("inputZip").value;

  const mDetails = {
    firstName: name,
    lastName: lastName,
    email: email,
    password: password,
    address: address1,
    city: city,
    state: state,
    zip: zip,
  };

  memberDetails.push(mDetails);
  console.log(memberDetails);
};

const messagePortal = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const cDetails = {
    name: name,
    email: email,
    message: message,
  };

  messageD.push(cDetails);
  console.log(messageD);
};

memberButton.addEventListener("click", signInPortal);
messageButton.addEventListener("click", messagePortal);
