const boxLogo =  document.querySelector('.header__logo-img');
const headerElement = document.querySelector('.header');
const changeThemeBtn = headerElement.querySelector('.header__more-themes');
const main = document.querySelector('#main');
const modalAccount = document.querySelector('.modal');
const mobileNav =  document.querySelector('.bar__mobile');
const accountBtn = document.getElementById('account');
const modalAccountBox = document.querySelector('.modal__account');
const modalClose = document.querySelector('.modal__account-close');
const mobileNavBtn = document.querySelector('.header__bar--mobile-icon');
const mobileNavBtnClose = document.querySelector('.bar__mobile-close')

// hàm toggle class
Object.prototype.toggleMultiClass = function(class1, class2) {
    this.classList.toggle(class1);
    this.classList.toggle(class2);
}

// hàm hiển thị tuỳ chọn log/reg
function toggleAccountBox () {
    var contentAcc = document.querySelector('.modal__account-title');
    var accTitles = document.querySelectorAll('.modal__account-act');
    var line = contentAcc.querySelector('.line');
    var accContents = document.querySelectorAll('.account__box-list');

    
    Array.from(accTitles).forEach(function(accTitle, index) {
        if(accTitle.classList.contains('active')) {
            console.log(accTitle, accTitle.offsetWidth)
            line.style.width = accTitle.offsetWidth + 'px';
            line.style.left = accTitle.offsetLeft + 'px';
        }
        accTitle.onclick = function() {
            Array.from(accTitles).forEach((acc) => {acc.classList.remove('active')});
            this.classList.add('active');
            line.style.width = this.offsetWidth + 'px';
            line.style.left = this.offsetLeft + 'px';
    
            Array.from(accContents).forEach((acc) => {acc.classList.remove('active')});
    
            accContents[index].classList.add('active');
    
        }
    
    })
};

app = {
    Logo: {
        path: './assets/img/icon_page/icon_page.png'
    },
    Animes : [
        {
            id: 1,
            name: 'Spy x Family',
            path: '',
            imageFilm: './assets/img/slider/slider-1.jpg',
            image: './assets/img/slider/anime-1.jpg',
            filmId: 1,
            type: 1,
            view: 12345653
        },
        {
            id: 2,
            name: 'Dấu ấn rồng thiêng',
            path: '',
            imageFilm: './assets/img/slider/slider-2.jpg',
            image: './assets/img/slider/anime-2.jpg',
            filmId: 1,
            type: 1,
            view: 234564556
        },
        {
            id: 3,
            name: 'Bậc thầy trừ tà',
            path: '',
            imageFilm: './assets/img/slider/slider-3.jpg',
            image: './assets/img/slider/anime-3.jpg',
            filmId: 1,
            type: 1,
            view: 234234
        },
        {
            id: 4,
            name: 'High School Love',
            path: '',
            imageFilm: './assets/img/slider/slider-4.jpg',
            image: './assets/img/slider/anime-4.jpg',
            filmId: 1,
            type: 1,
            view: 9808087
        },
        {
            id: 5,
            name: 'Spy x Family',
            path: '',
            imageFilm: './assets/img/slider/slider-5.jpg',
            image: './assets/img/slider/anime-5.jpg',
            filmId: 1,
            type: 1,
            view: 12345653
        },
        {
            id: 6,
            name: 'Spy x Family',
            path: '',
            imageFilm: './assets/img/slider/slider-6.jpg',
            image: './assets/img/slider/anime-1.jpg',
            filmId: 1,
            type: 1,
            view: 12345653
        },
        {
            id: 7,
            name: 'Spy x Family',
            path: '',
            imageFilm: './assets/img/slider/slider-7.jpg',
            image: './assets/img/slider/anime-2.jpg',
            filmId: 1,
            type: 1,
            view: 12345653
        },
        {
            id: 8,
            name: 'Spy x Family',
            path: '',
            imageFilm: './assets/img/slider/slider-8.jpg',
            image: './assets/img/slider/anime-3.jpg',
            filmId: 1,
            type: 1,
            view: 12345653
        },
    ],
    New: [
        {
            id: 1,
            title: 'Live-action Moekare wa Orange-iro - Nữ sinh và chàng lính cứu hỏa',
            link: '',
            image: './assets/img/anime_news/news_1.jpg'
        },
        {
            id: 2,
            title: 'Ame o Tsugeru Hyouryuu Danchi - Hành trình "trôi về nhà"!',
            link: '',
            image: './assets/img/anime_news/news_2.jpg'
        },
        {
            id: 3,
            title: ' Bất ngờ với những bức ảnh do các diễn viên lồng tiếng của bộ phim Spy x Family vẽ lại tập 4',
            link: '',
            image: './assets/img/anime_news/news_3.jpg'
        },
        {
            id: 4,
            title: 'Bubble chính thức chuyển thể thành manga được đăng nhiều kỳ trên Shonen Jump+',
            link: '',
            image: './assets/img/anime_news/news_4.jpg'
        }
    ],
    Cartoon: [
        {
            id: 1,
            name: 'Những kẻ xấu xa',
            path: '',
            image: './assets/img/cartoon/cartoon_1.jpg',
            view: 214141234
        },
        {
            id: 2,
            name: 'Tân thời Minh nguyệt',
            path: '',
            image: './assets/img/cartoon/cartoon_2.jpg',
            view: 52346256
        },
        {
            id: 3,
            name: 'Băng hảo ma trù',
            image: './assets/img/cartoon/cartoon_3.jpg',
            path: '',
            view: 421341
        },
        {
            id: 4,
            name: 'tuyết ưng lãnh chủ 3',
            path: '',
            image: './assets/img/cartoon/cartoon_4.jpg',
            view: 9678974
        },
    ],
    loadLogo: function() {
        boxLogo.src = this.Logo.path;
    },
    changeTheme: function() {
        main.toggleMultiClass('light','dark');
        modalAccount.toggleMultiClass('light', 'dark');
        mobileNav.toggleMultiClass('light', 'dark');
        
    },
    showBar: function(element) {
        element.style.display = 'block';
        
        setTimeout(function() {
            element.style.transform = 'translateX(0%)';    
        },100)
    },
    hideBar: function(vector,element) {
        var translateVector;
        switch(vector) {
            case 'left':
                translateVector = -100;
                break;
            case 'right': 
                translateVector = 100;
                break;
        }
        element.style.transform = `translateX(${translateVector}%)`;
        setTimeout(function() {
            element.style.display = 'none';
        },500)
    },
    handleContent: function() {
        const _this = this;

        // thay đổi chủ để sáng tối khi click vào nút chủ đề
        changeThemeBtn.onclick = function(e) {
            _this.changeTheme();
            e.preventDefault();
        }

        // mở/đóng box account khi click
        accountBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            _this.hideBar('left',mobileNav);

            _this.showBar(modalAccount);
            toggleAccountBox();
        }


        modalClose. onclick = function() {
            _this.hideBar('right',modalAccount);
        }

        document.onclick = function() {
            _this.hideBar('right',modalAccount);
            _this.hideBar('left',mobileNav);
        }

        modalAccount.onclick = function(e) {
            e.stopPropagation();
        }
        // mở đóng nav khi click
        mobileNavBtn.onclick = function(e) {
            _this.showBar(mobileNav);
            e.stopPropagation();
            _this.hideBar('right',modalAccount);


        }

        mobileNavBtnClose.onclick = function() {
            _this.hideBar('left',mobileNav);
        }

        mobileNav.onclick = function(e) {
            e.stopPropagation();
        }
    },
    start: function() {
        //load logo 
        this.loadLogo();

        // xử lý trong web
        this.handleContent();
    }
};

app.start();