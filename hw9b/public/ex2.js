/*
 * Ex 2
 */

document.querySelector('#api-call').addEventListener('click', (e) => {
  e.preventDefault();

  fetch('/api/countries', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Emile',
      countries: [
        {name: 'France', year: 2000},
        {name: 'Germany', year: 2010},
        {name: 'Spain', year: 2012},
        {name: 'Italy', year: 2014},
        {name: 'Sweden', year: 2016},
        {name: 'USA', year: 2022}
      ]
    })
  })
    .catch((err) => console.error(err))
    .then((res) => res.json())
    .then(function(data) {
      document.querySelector('#result').innerHTML = data.message;
    });
});
