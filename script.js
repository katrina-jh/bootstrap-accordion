const checkboxes = document.querySelectorAll('.form-check-input');
const textarea = document.querySelector('textarea');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
      console.log(checkbox.value);
    } else {
      console.log('un-checked');
    }
  });
});

textarea.addEventListener('keypress', function () {
  console.log(textarea.value);
});
