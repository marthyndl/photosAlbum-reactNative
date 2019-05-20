let url = 'https://jsonplaceholder.typicode.com/photos';

export const get_photos = () =>
  fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));
