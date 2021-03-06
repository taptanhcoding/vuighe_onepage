
// xử lý history box
var historySearch = document.querySelector('.header__search-history');
historySearch.onmousedown = function(e) {
    e.preventDefault();
    e.stopPropagation()
}

// xử lý phần slider

// hàm toggle class
Object.prototype.toggleMultiClass = function(class1, class2) {
    this.classList.toggle(class1);
    this.classList.toggle(class2);
}



// hàm thay đổi info anime
function changeAnimeText(view,name) {
    document.querySelector('.anime__info-view').innerHTML = `${view}`;
    document.querySelector('.anime__info-name').innerHTML = `${name}`;
}


function setText(x) {
    switch(x) {
        case 1 :
            changeAnimeText('23,577 lượt xem','Tomodaki Game')
            break;
        case 2 :
            changeAnimeText('49,577 lượt xem','Dấu ấn rồng thiêng')
            break;
        case 3 :
            changeAnimeText('93,577 lượt xem','Pháp sư trừ tà')
            break;
        case 4 :
            changeAnimeText('3,577 lượt xem','Chuyện tình công sở')
            break;    
        case 5 :
            changeAnimeText('7,577 lượt xem','Pháp sư mạnh nhất')
            break;
        case 6 :
            changeAnimeText('12,577 lượt xem','Lời nói dối tháng tư')
            break;
        default :
            changeAnimeText('46,577 lượt xem','Love war')

    }
}


// hàm chạy slider tự động
setInterval(function() {
    var numberSlider = Number.parseInt(document.querySelector('.content__slider-item-main .content__slider-item-img').getAttribute('number'));
    if(numberSlider < 7) {
        numberSlider++;
    } else {
        numberSlider = 1;
    }
    document.querySelector('.content__slider-item-main .content__slider-item-img').setAttribute('number',numberSlider);
    document.querySelector('.content__slider-item-main .content__slider-item-img').setAttribute('src',`./assets/img/slider/slider-${numberSlider}.jpg`);
    setText(numberSlider);
    
},10000);

// hàm thay đổi slider ở dạng click
const mainSlider = document.querySelector('.content__slider-item-main .content__slider-item-img');

function changeAnime(x) {
    var valueNumber = Number.parseInt(x.getAttribute('number'));
    mainSlider.setAttribute('src',`./assets/img/slider/slider-${valueNumber}.jpg`);
    mainSlider.setAttribute('number',valueNumber);
    setText(valueNumber)
}

// thực hiện thay đỏi slide khi click
var sliderChanges = document.querySelectorAll("a.content__slider-item:not(.content__slider-item-main)");

for(var sliderChange of sliderChanges) {
    sliderChange.onmouseover = function() {
    changeAnime(this);

    }
}

// hành động change themes

var changeTheme = document.querySelector('.header__more-themes');
var mainArrow = document.querySelector('#main');

changeTheme.onclick = function(e) {
    mainArrow.toggleMultiClass('light','dark');
    modalAccount.toggleMultiClass('light', 'dark');
    e.preventDefault();
}



// xử lý modal account
var account = document.getElementById('account');
var modalAccount = document.querySelector('.modal');
var modalAccountBox = document.querySelector('.modal__account');
var modalClose = document.querySelector('.modal__account-close');

account.addEventListener('click', function(e) {
    e.preventDefault();
    modalAccount.style.display = 'block';
    modalAccountBox.style.display = 'block';
    modalAccountBox.style.animation = 'fadeIn ease 0.5s';
    modalAccountBox.style.transform = "translateX(0)";

});

account.addEventListener('click', closeMobileBar);

modalClose.addEventListener('click', closeAccountBox)

modalAccountBox.onclick = function(e) {
    e.stopPropagation();

}

document.addEventListener('click', closeAccountBox);

document.querySelector('#account').onclick = function(e) {
    e.stopPropagation();
}

function closeAccountBox() {
    modalAccountBox.style.transform = "translateX(100%)";
    setTimeout(function() {
        modalAccount.style.display = 'none';
        modalAccountBox.style.display = 'none';
    },500)
}
// xử lý chuyển tab khi clickk vào đăng ký đăng nhập


toggleAccountBox();
////////////////////////////////////////////////////////////////
// nabbar mobile
var mobileBarIcon = document.querySelector('.header__bar--mobile-icon');
var mobileBar = document.querySelector('.bar__mobile');
var mobileBarClose = document.querySelector('.bar__mobile-close');

mobileBarIcon.onclick = function() {
    mobileBar.style.display = 'block';
    setTimeout(() => {
        mobileBar.style.transform = 'translateX(0%)';    
    },300)
}
// xử lý đóng mở 
mobileBarIcon.addEventListener('click', openMobileBar);
mobileBarIcon.addEventListener('click', closeAccountBox);
mobileBarIcon.addEventListener('click', function(e) {
    e.stopPropagation();
});

mobileBarClose.onclick = function() {
    mobileBar.style.transform = 'translateX(-100%)';    

    setTimeout(() => {
        mobileBar.style.display = 'none';
    },500)

}

document.addEventListener('click', closeMobileBar);


mobileBar.onclick = function(e) {
    e.stopPropagation();
};



function openMobileBar() {
    mobileBar.style.display = 'block';
    setTimeout(() => {
        mobileBar.style.transform = 'translateX(0%)';    
    },300)
}

function closeMobileBar() {
    mobileBar.style.transform = 'translateX(-100%)';    

    setTimeout(() => {
        mobileBar.style.display = 'none';
    },500)
}

function toggleAccountBox () {
    var contentAcc = document.querySelector('.modal__account-title');
    var accTitles = document.querySelectorAll('.modal__account-act');
    var line = contentAcc.querySelector('.line');
    var accContents = document.querySelectorAll('.account__box-list');
    Array.from(accTitles).forEach(function(accTitle, index) {
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