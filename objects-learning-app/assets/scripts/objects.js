

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');
  
  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovie = !filter ? movies : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovie.forEach((value, index, array) => {
    const newMovieElement = document.createElement('li');
    const { info, ...otherProps } = value; // object Destructuring
    
    let { getFormattedTitle } = value;
    //getFormattedTitle = getFormattedTitle.bind(value); // bind o value(movie) na função, ou seja, a instancia
    let text = getFormattedTitle.call(value) + '-'; 
    // call chama a função imediatamente, podendo passar o "this" a instancia, passando tbm os para
    //metros da função
    
    for (const key in info) {
      if (key !== 'title') {
        text += `${key}: ${info[key]}`;
      }
    };
    newMovieElement.textContent = text;
    movieList.append(newMovieElement);
  });
  
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
    return;
  }

  const newMovie = {
    info: {
      title, // igual a title: title, se a variavel for o mesmo que a key
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHanlder = () => {
  const filterTerm = document.querySelector('#filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHanlder);