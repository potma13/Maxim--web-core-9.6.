import '../scss/style.scss'

// Переход на страницу сервисы 
    // Обработчик кликов по пунктам меню
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('div[data-page]');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const pageUrl = this.getAttribute('data-page');
            window.location.href = pageUrl;
        });
    });
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

// Показать/Скрыть текст
document.addEventListener('DOMContentLoaded', function() {
    const expandButton = document.querySelector('.expand');
    const expandIcon = document.querySelector('.expand__icon img');
    const expandText = document.querySelector('.expand__text');
    const tabHeaderText = document.querySelector('.tab-header__text');
    
    // Дополнительный текст, который будет появляться
    const additionalText = ' Мы предлагаем полный спектр услуг по ремонту и обслуживанию техники Dell. Наши специалисты имеют сертификаты производителя и используют оригинальные запчасти.';
    
    // Сохраняем оригинальный текст
    const originalText = tabHeaderText.textContent;
    
    expandButton.addEventListener('click', function() {
        if (expandText.textContent === 'Читать далее') {
            // Меняем на "Скрыть" и меняем иконку
            expandIcon.src = 'img/icon_up.png';
            expandText.textContent = 'Скрыть';
            
            // Добавляем дополнительный текст
            tabHeaderText.textContent = originalText + additionalText;
        } else {
            // Возвращаем обратно на "Читать далее" и меняем иконку
            expandIcon.src = 'img/icon_down.png';
            expandText.textContent = 'Читать далее';
            
            // Возвращаем оригинальный текст
            tabHeaderText.textContent = originalText;
        }
    });
});