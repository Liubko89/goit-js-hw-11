import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from '../src/img/octagon.svg';

const formSearch = document.querySelector('.form');
const imageList = document.querySelector('.image-list');

const BASE_URL = 'https://pixabay.com/api';
const KEY = '41861239-c6b09579488337e808a164f07';

formSearch.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;

  fetchImages(form.elements.input.value)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          iconUrl: icon,
          theme: 'dark',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageSize: '16px',
          messageColor: 'white',
          backgroundColor: '#EF4040',
          position: 'topRight',
          timeout: 7000,
        });
      }
    })
    .catch(console.error);

  form.reset();
}

function fetchImages(value) {
  return fetch(
    `${BASE_URL}?key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

function onFetchError() {}

function renderImages() {}
