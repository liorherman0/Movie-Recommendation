document.addEventListener('DOMContentLoaded', function () {
    const preferencesForm = document.getElementById('preferences-form');
    const genreSelect = document.getElementById('genre');
    const recommendationsElement = document.getElementById('recommendations');

    preferencesForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const selectedGenre = genreSelect.value;
        // Call a function to fetch movie recommendations based on selected genre
        // For simplicity, let's just display sample recommendations
        displayRecommendations([
            { title: 'Movie 1', genre: 'Action' },
            { title: 'Movie 2', genre: 'Action' },
            { title: 'Movie 3', genre: 'Action' },
        ]);
    });

    function displayRecommendations(movies) {
        recommendationsElement.innerHTML = '';
        if (movies.length === 0) {
            recommendationsElement.textContent = 'No recommendations found.';
            return;
        }
        const heading = document.createElement('h2');
        heading.textContent = 'Recommended Movies';
        recommendationsElement.appendChild(heading);
        const ul = document.createElement('ul');
        movies.forEach(movie => {
            const li = document.createElement('li');
            li.textContent = `${movie.title} (${movie.genre})`;
            ul.appendChild(li);
        });
        recommendationsElement.appendChild(ul);
    }
});
