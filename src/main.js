import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from '../src/img/octagon.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formSearch = document.querySelector('.form');
const imageList = document.querySelector('.gallery');

const BASE_URL = 'https://pixabay.com/api';
const KEY = '41861239-c6b09579488337e808a164f07';
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

formSearch.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;

  if (!form.elements.input.value) {
    return;
  }

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
          timeout: 5000,
        });
      }
      imageList.innerHTML = createMarkup(data.hits);
      gallery.refresh();
    })
    .catch(handleError);

  form.reset();
}

function fetchImages(value) {
  return fetch(
    `${BASE_URL}?key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
        <span class="loader"></span>
        <a class="gallery-link" href="${largeImageURL}">
           <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
          />
        </a>
        <div class="container-additional-info">
        <div class="container-descr-inner"><p class="description">Likes</p><span class="description-value">${likes}</span></div>
        
        <div class="container-descr-inner"><p class="description">Views</p><span class="description-value">${views}</span></div>
        

        <div class="container-descr-inner"><p class="description">Comments</p><span class="description-value">${comments}</span></div>
        

        <div class="container-descr-inner"><p class="description">Downloads</p><span class="description-value">${downloads}</span></div>
        
        </div>
      </li>`
    )
    .join('');
}

function handleError(err) {
  console.error(err);
  iziToast.show({
    iconUrl: icon,
    theme: 'dark',
    message: `Sorry, there is a problem with connection with the server`,
    messageSize: '16px',
    messageColor: 'white',
    backgroundColor: '#EF4040',
    position: 'center',
    timeout: 5000,
  });
}
