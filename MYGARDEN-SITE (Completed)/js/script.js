// Открытие меню
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Если константа navToggle и её содержимое существуют, то выполнится цикл
if (navToggle) {
    // При клике на navToggle будет добавляться класс .show-menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Закрытие меню через иконку 'крестик'
// Если константа navClose и её содержимое существуют, то выполнится цикл
if (navClose) {
    // При клике на navClose будет убираться класс .show-menu
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Закрытие меню при нажатии на оглавление
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    // При клике на navLink будет убираться класс .show-menu
    navMenu.classList.remove('show-menu');
}

// Перебираем все navLink'и на странице и привязываем к каждому функцию linkAction
navLink.forEach(n => n.addEventListener('click', linkAction));

// Изменение фона верхнего меню при скролле
function scrollHeader() {
    const header = document.getElementById('header');
    /*
    Когда скроллится страница и скролл превосходит отметку в 80 (области видимости),
    добавляется класс .scroll-header к header
    */
    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
    }
    else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// 'Аккордеон' для блока часто задаваемых вопросов (создание движения)
const accordionItems = document.querySelectorAll('.questions__item');

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header');

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');

        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
        else {
            console.log(Error('Ошибка открытия аккордеона!'));
        }
    });
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content');

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    }
    else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
};