const toggleMenu = document.getElementById('toggle-menu')
const menu = document.getElementById('menu')
const toggleTheme = document.getElementById('toggle-theme')

toggleMenu.addEventListener('click', () => {
    const expanded = toggleMenu.getAttribute('aria-expanded') === 'true' || false
    toggleMenu.setAttribute('aria-expanded', !expanded)
    menu.setAttribute('aria-expanded', !expanded)
})

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
