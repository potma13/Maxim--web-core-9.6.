import '../scss/style.scss'
import './swiper/swiper.js';

// Переход на страницу сервисы 
const menu = document.getElementById('sideMenu');
const openBtn = document.querySelector('.open-menu');
const closeBtn = document.querySelector('.close-menu');

openBtn.addEventListener('click', () => {
  menu.classList.add('active');
  closeBtn.style.display = 'inline-block';
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  openBtn.style.display = 'inline-block';
});

// Рамка при клике
window.onload = function() {
    const menuItems = document.querySelectorAll('.scroll-menu__text');
    
    // Делаем первый элемент активным при загрузке
    if (menuItems.length > 0) {
        menuItems[0].classList.add('active');
    }
    
    // Добавляем обработчик клика на все элементы
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Убираем активный класс у всех
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            // Добавляем активный класс к clicked
            this.classList.add('active');
        });
    });
};

document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expand');
    const tabHeaderText = document.querySelector('.tab-header__text');
    const getBaseText = () => {
    const base = 'Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.';
    const width = window.innerWidth;
    
    if (width >= 768 && width < 1366) {
        return base + '\n\nМы успешно работаем с 1992 года и заслужили репутацию надежного партнера';
    } else if (width >= 1366) {
        return base + '\n\nМы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.';
    }
    return base;
};

const additionalText = '\n\nМы предлагаем полный спектр услуг по ремонту и обслуживанию техники Dell. Наши специалисты имеют сертификаты производителя и используют оригинальные запчасти.';

// Инициализация начального текста
tabHeaderText.textContent = getBaseText();

    // Первый expand - текст
    expandButtons[0].addEventListener('click', function() {
        const icon = this.querySelector('img');
        const text = this.querySelector('.expand__text');
        
        if (text.textContent === 'Читать далее') {
            icon.src = 'img/icon_up.png';
            text.textContent = 'Скрыть';
            tabHeaderText.textContent = getBaseText() + additionalText;
        } else {
            icon.src = 'img/icon_down.png';
            text.textContent = 'Читать далее';
            tabHeaderText.textContent = getBaseText();
        }
    });

    // Второй и третий expand - слайды
    expandButtons[1].addEventListener('click', function() {
        toggleAllSlides(this);
    });

    expandButtons[2].addEventListener('click', function() {
        toggleAllSlides(this);
    });

    function toggleAllSlides(button) {
        const icon = button.querySelector('img');
        const text = button.querySelector('.expand__text');
        const allSlides = button.closest('.brand-container').querySelectorAll('.swiper-slide');
        
        if (text.textContent === 'Показать всё') {
            icon.src = 'img/icon_up.png';
            text.textContent = 'Скрыть';
            allSlides.forEach(slide => slide.style.display = 'block');
        } else {
            icon.src = 'img/icon_down.png';
            text.textContent = 'Показать всё';
            allSlides.forEach(slide => slide.style.display = '');
        }
    }
});

// Переключение языка
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Активируем RU по умолчанию
    const ruButton = document.querySelector('.lang-btn[data-lang="ru"]');
    if (ruButton) {
        ruButton.classList.add('active');
    }
    
    // Обработчик клика по кнопкам
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Здесь можно добавить логику смены языка
            const selectedLang = this.getAttribute('data-lang');
            console.log('Выбран язык:', selectedLang);
            // changeLanguage(selectedLang); // Ваша функция смены языка
        });
    });
});
