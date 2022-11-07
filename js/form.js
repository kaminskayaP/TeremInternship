/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-parens */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const obj = {};
  const div = document.createElement('div');

  div.classList.add('pl-40');
  document.body.append(div);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const selects = document.querySelectorAll('.form__select');
    const inputs = document.querySelectorAll('.form__input');

    div.textContent = '';
    selects.forEach((select, i) => {
      obj[`select${i}`] = select.value;
    });
    inputs.forEach((input, i) => {
      obj[`input${i}`] = input.value;
    });
    div.innerHTML = JSON.stringify(obj);

    // eslint-disable-next-line no-sequences
    fetch('https://kaminskayap.github.io/TeremInternship/data.json', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      alert(response);
      if (!response.ok) {
        throw new Error('Error occurred!');
      }
      return response.json();
    }).catch((err) => {
      console.log(err);
    });
  });
});
