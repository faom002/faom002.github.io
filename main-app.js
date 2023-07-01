const inputBtn = document.getElementById("button-email");
const inputBtnDismiss = document.getElementById("button-dismiss");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const modalForSubscribe = document.getElementById("modal-for-update");
const modalForSuccess = document.getElementById('modal-for-success');
const storeEmailFromInput = document.getElementById('br-email');

//hides modal for success modal 
modalForSuccess.hidden = true; 

const storeEmailInput = input => {
  storeEmailFromInput.innerHTML = `A confirmation email has been sent to <span class="thickerEmail">${input}</span>. Please open it and click the button inside to confirm your subscription`;
}


const subscribeToNewsletter = (input) => {
  if (emailPattern.test(input)) {
    storeEmailInput(input);
    modalForSubscribe.hidden = true;
    modalForSuccess.hidden = false;
  }
};

inputBtn.addEventListener("click", function () {
  const inputEmail = document.getElementById("input-email").value;
  subscribeToNewsletter(inputEmail);
});


inputBtnDismiss.addEventListener("click", function () {

  modalForSubscribe.hidden = false;
  modalForSuccess.hidden = true;
});
