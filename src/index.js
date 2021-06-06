import './sass/main.scss';
import NewApiService from './js/apiService';
import cardImgTpl from './templates/card-img.hbs';

const refs = {
    searchForm: document.getElementById('search-form'),
    listImg: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.loadMore')
}

const apiService = new NewApiService();
refs.loadMoreBtn.setAttribute("disabled", "disabled")

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', featchImg);

function onSearch(e) {
    e.preventDefault();
    apiService.query = e.currentTarget.elements.query.value;
    if (apiService.query === '') {
        return;
    }
    apiService.resetPage();
    clearListImgCard();
    featchImg();
}

function featchImg () {
    apiService.fetchImg().then(cardImg => {
        renderCardImgMarkup(cardImg);
    });
}
function renderCardImgMarkup(cardImg) {
    
    refs.listImg.insertAdjacentHTML('beforeend', cardImgTpl(cardImg));
    refs.loadMoreBtn.removeAttribute("disabled")
    refs.listImg.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
}

function clearListImgCard() {
    refs.listImg.innerHTML = '';
  }