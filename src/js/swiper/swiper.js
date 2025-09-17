import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

let swiperInstances = []; // массив для хранения инициализированных swiper

function initSwipers() {
    const sliders = document.querySelectorAll('.brand__content');

    sliders.forEach((mslider, index) => {
        let swiperInit = mslider.dataset.swiperInit === 'true';

        if (window.innerWidth <= 767 && !swiperInit) {
            const slides = Array.from(mslider.children);

            // создаем wrapper и переносим в него слайды
            const wrapper = document.createElement('div');
            wrapper.classList.add('swiper-wrapper');
            slides.forEach(slide => wrapper.appendChild(slide));

            // очищаем контейнер и добавляем wrapper
            mslider.innerHTML = '';
            mslider.appendChild(wrapper);

            // создаем пагинацию
            const pagination = document.createElement('div');
            pagination.classList.add('swiper-pagination');
            mslider.appendChild(pagination);

            // инициализируем Swiper
            const swiper = new Swiper(mslider, {
                modules: [Pagination],
                slidesPerView: 'auto',
                spaceBetween: 10,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
            });

            swiperInstances.push(swiper);
            mslider.dataset.swiperInit = 'true';
        } else if (window.innerWidth > 767 && swiperInit) {
            // разворачиваем слайды обратно
            const wrapper = mslider.querySelector('.swiper-wrapper');
            if (wrapper) {
                while (wrapper.firstChild) {
                    mslider.appendChild(wrapper.firstChild);
                }
                wrapper.remove();
            }

            // удаляем пагинацию
            const pagination = mslider.querySelector('.swiper-pagination');
            if (pagination) pagination.remove();

            // уничтожаем Swiper
            const swiper = swiperInstances[index];
            if (swiper) swiper.destroy(true, true);

            mslider.dataset.swiperInit = 'false';
        }
    });
}

window.addEventListener('resize', initSwipers);
window.addEventListener('load', initSwipers);
