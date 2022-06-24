const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const boxLogo =  $('.header__logo-img');
const headerElement = $('.header');
const changeThemeBtn = headerElement.querySelector('.header__more-themes');
const main = $('#main');
const modalAccount = $('.modal');
const mobileNav =  $('.bar__mobile');
const accountBtn = document.getElementById('account');
const modalAccountBox = $('.modal__account');
const modalClose = $('.modal__account-close');
const mobileNavBtn = $('.header__bar--mobile-icon');
const mobileNavBtnClose = $('.bar__mobile-close')
const historySearch = $('.header__search-history');
const animeInfo = $('.anime__info-view');
const animeName = $('.anime__info-name');
const sliderChanges = $$("a.content__slider-item:not(.content__slider-item-main)");
const mainSlider = $('.content__slider-item-main .content__slider-item-img');

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
        }
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
    handleHistory: function() {
        historySearch.onmousedown = function(e) {
            e.preventDefault();
            e.stopPropagation()
        }
    },
    changeAnimeText: function(view,name) {
        animeInfo.innerHTML = `${view}`;
        animeName.innerHTML = `${name}`;
    },
    setText: function(x) {
        const _this = this;
        switch(x) {
            case 1 :
                _this.changeAnimeText('23,577 lượt xem','Tomodaki Game')
                break;
            case 2 :
                _this.changeAnimeText('49,577 lượt xem','Dấu ấn rồng thiêng')
                break;
            case 3 :
                _this.changeAnimeText('93,577 lượt xem','Pháp sư trừ tà')
                break;
            case 4 :
                _this.changeAnimeText('3,577 lượt xem','Chuyện tình công sở')
                break;    
            case 5 :
                _this.changeAnimeText('7,577 lượt xem','Pháp sư mạnh nhất')
                break;
            case 6 :
                _this.changeAnimeText('12,577 lượt xem','Lời nói dối tháng tư')
                break;
            default :
                _this.changeAnimeText('46,577 lượt xem','Love war')
        }
    },
    changeAnime: function(x) {
        var valueNumber = Number.parseInt(x.getAttribute('number'));
        mainSlider.setAttribute('src',`./assets/img/slider/slider-${valueNumber}.jpg`);
        mainSlider.setAttribute('number',valueNumber);
        this.setText(valueNumber)
    },
    sliderAuto: function() {
        const _this = this;
        setInterval(function() {
            var numberSlider = Number.parseInt(document.querySelector('.content__slider-item-main .content__slider-item-img').getAttribute('number'));
            if(numberSlider < 7) {
                numberSlider++;
            } else {
                numberSlider = 1;
            }
            document.querySelector('.content__slider-item-main .content__slider-item-img').setAttribute('number',numberSlider);
            document.querySelector('.content__slider-item-main .content__slider-item-img').setAttribute('src',`./assets/img/slider/slider-${numberSlider}.jpg`);
            _this.setText(numberSlider);
            
        },3000);
    },
    sliderAction: function() {
        const _this = this;
        for(var sliderChange of sliderChanges) {
            sliderChange.onmouseover = function() {
            _this.changeAnime(this);
        
            }
        }
    },
    handleSlider : function() {

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

        // xử lý tab history
        this.handleHistory();

        // xử lý slider
        this.sliderAuto();
        this.sliderAction();
    }
};

app.start();
