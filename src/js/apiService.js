const API_KEY = '21950838-7a0b45ff646ade2665da57e66';
const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const PER_PAGE = 12;

export default class NewApiService {
    constructor () {
        this.searchQwery = '';
        this.page = 1;
    }
    fetchImg() {
        const url = `${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=${PER_PAGE}&key=${API_KEY}`;
    
        return fetch(url)
          .then(response => response.json())
          .then(data => {
            this.incrementPage();
            return data.hits;
          });
      }
      incrementPage() {
        this.page += 1;
      }
    
      resetPage() {
        this.page = 1;
      }
    
      get query() {
        return this.searchQuery;
      }
    
      set query(newQuery) {
        this.searchQuery = newQuery;
      }
}


  