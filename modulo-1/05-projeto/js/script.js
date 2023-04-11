function changeTitle() {
    const title = document.getElementById('title')
    title.style.opacity = 0
    title.innerText = 'Welcome to Pokedex app'
    setTimeout(()=>{
        title.style.opacity = 1
    }, 500)
}