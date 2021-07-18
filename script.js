let page = document.querySelector('.page');
page.classList.add('dark-theme');
let themeButton = document.querySelector('.theme-button');
themeButton.onclink = function () {
    page.classList.toggle('.dark-theme');
}