/*
 * Ex 3
 */

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const data = new FormData(form);

  fetch('/articles', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.fromEntries(data))
  })
    .catch(err => console.error('fail', err))
    .then(r => r.json())
    .then(data => {
      e.target.reset();
      document.querySelector('#result').innerHTML = data.message;
    })
})
