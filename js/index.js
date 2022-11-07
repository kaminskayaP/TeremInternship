/* eslint-disable no-undef */
alert('Привет, мир');
document.addEventListener('DOMContentLoaded', () => {
  const btnWarn = $('.btn-warning');
  const header = $('.body__header-container');
  const btnSucc = $('.btn-success');
  const centerBlock = $('.light-blue');

  btnWarn.click(() => {
    header.toggleClass('d-none');
  });
  btnSucc.click(() => {
    centerBlock.toggleClass('clicked');
  });
});
