document.addEventListener('DOMContentLoaded', () => {
  const btn = $('.btn-success');
  const centerBlock = $('.light-blue');
  btn.click(() => {
    centerBlock.toggleClass('clicked');
  });
});
