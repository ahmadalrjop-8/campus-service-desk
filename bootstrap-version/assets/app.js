// Form behaviour: uses the browser's NATIVE constraint validation
// (required, pattern, minlength, type=email) via form.checkValidity().
// Bootstrap only styles the result through the .was-validated class.
const form = document.getElementById('request-form');
const statusAlert = document.getElementById('status-alert');

form.addEventListener('submit', (event) => {
  event.preventDefault();               // no server: demo only
  form.classList.add('was-validated');

  if (!form.checkValidity()) {          // failure / edge case
    statusAlert.className = 'alert alert-danger';
    statusAlert.textContent = 'Request not sent: fix the highlighted fields.';
    form.querySelector(':invalid').focus();
    return;
  }

  statusAlert.className = 'alert alert-success';  // success case
  statusAlert.textContent = 'Request sent (demo). Reference: #1004.';
  form.reset();
  form.classList.remove('was-validated');
});
