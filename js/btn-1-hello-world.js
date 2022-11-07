alert('Привет, мир');
const btn = document.querySelector('.btn-warning');
const header = document.querySelector('.body__header-container');

btn.addEventListener('click', () => {
  header.classList.toggle('d-none');
});
