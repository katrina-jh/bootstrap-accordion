const checkboxes = document.querySelectorAll('.form-check-input');
const textarea = document.querySelector('textarea');

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('click', function () {
    if (checkboxes[i].checked) {
      console.log(checkboxes[i].value);
    } else {
      console.log('un-checked');
    }
  });
}

textarea.addEventListener('keypress', function () {
  console.log(textarea.value);
});
