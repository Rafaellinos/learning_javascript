

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById('movie-list');

  
  if (movies.length === 0) {
    movieList.classList.toggle('visible');
    return;
  } else {
    movieList.classList.toggle('visible');
  }
  movieList.innerHTML = '';
  movies.forEach((value, index, array) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.textContent = value.info.title;
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
    id: Math.random(),
  };
  movies.push(newMovie);
  renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);