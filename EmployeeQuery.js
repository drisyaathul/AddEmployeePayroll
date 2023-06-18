window.addEventListener('DOMContentLoaded', () => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
      if (name.value.length == 0) {
        nameError.textContent = '';
        return;
      }
      try {
        (new EmployeePayrollData()).name = name.value;
        nameError.textContent = '';
      } catch (e) {
        nameError.textContent = e;
      }
    });
});


  
  