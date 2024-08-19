const btnSubmit = document.querySelector("button[type='submit']");
const userInput = document.querySelector("input[type='email']");
const errorMsg = document.querySelector(".alert__section");
const articleFooter = document.querySelector(".article__footer");

btnSubmit.addEventListener("click", () => {
  let userInputVal = userInput.value;

  if (userInputVal.includes("@") || !userInputVal.length === 0) {
    errorMsg.classList.remove("error");
    articleFooter.classList.remove("error");
    userInput.value = ` `;
  } else {
    errorMsg.classList.add("error");
    articleFooter.classList.add("error");
  }
});
