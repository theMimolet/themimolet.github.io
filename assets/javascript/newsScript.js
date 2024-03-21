// import data from '../json/newsStorage.json' assert { type: 'json' };

// console.log(data);

fetch('../json/newsStorage.json')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error));
