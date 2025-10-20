document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');
  const successMessage = document.querySelector('#form-success');

  if (!form || !successMessage) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const errors = [];

    ['fullname', 'email', 'topic', 'message'].forEach((field) => {
      if (!formData.get(field)?.toString().trim()) {
        errors.push(field);
      }
    });

    if (!formData.get('agree')) {
      errors.push('agree');
    }

    form.querySelectorAll('.error').forEach((el) => el.classList.remove('error'));

    if (errors.length) {
      errors.forEach((field) => {
        const input = form.querySelector(`[name="${field}"]`);
        if (input) input.classList.add('error');
      });
      const firstError = form.querySelector('.error');
      if (firstError) firstError.focus();
      return;
    }

    setTimeout(() => {
      successMessage.hidden = false;
      form.reset();
    }, 600);
  });
});
