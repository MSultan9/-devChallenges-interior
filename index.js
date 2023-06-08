document.getElementById("menu").addEventListener('click', () => {
    document.querySelector('nav').classList.add('open')
})

document.getElementById("close").addEventListener('click', () => {
    document.querySelector('nav').classList.remove('open')
})