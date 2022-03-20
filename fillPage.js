if (localStorage.getItem('pokemons')) {
    document.querySelector('.card-list').innerHTML = localStorage.getItem('pokemons')
}