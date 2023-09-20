/* Add and removes the .open class when clicked */
function toggleMenu() {
    const menu = document.querySelector('.menu-links')
    const icon = document.querySelector('.hamburger-icon')
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}

/* Adds message when newsletter-button is clicked */
const newsletterBtn = document.getElementById('newsletter-btn')
newsletterBtn.addEventListener('click', function () {
    document.getElementById('thanks-msg').innerHTML =
        'Thank You For Subscribing!'
})
