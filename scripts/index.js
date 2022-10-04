const headerSign = $('.header__sign')
headerSign.text('Личный кабинет');

headerSign.click(function () {
    $(this).toggleClass('header__sign_active')
});

headerSign.dblclick(function () {
    $(this).toggleClass('red')
});

$('.what-building__item').click(function () {
    $(this).css('background-color', 'green')
});


const modalBtn = $('.present__btn');
const modalClose = $('.modal-order__close');
const modalOrder = $('.modal-order');

modalBtn.click(function () {
    modalOrder.show(500);
});

modalClose.click(function () {
    modalOrder.hide(500);
});

const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalOrderInput.focus(function () {
    modalOrderTitle.text(`Введите ${$(this).attr('placeholder').toLowerCase()}`)
});

modalOrderInput.blur(function () {
    modalOrderTitle.text('Заполните форму')
});

const modalOrderWrap = $('.modal_order__wrapper');

modalOrderWrap.on('click', modalOrder.parent(), (function () {
    modalOrder.hide(500);
}));

$('.modal-order__form').submit(function (event) {
    event.preventDefault();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        type: 'POST',
        data: $(this).serialize(),
        success(data) {
            modalOrderTitle.text('Спасибо, ваша заявка принята. Номер заявки' + data.id)
            $('.modal-order__form').slideUp(300);
        },
        error() {
            modalOrderTitle.text('Что-то пошло не так. Попробуйте позже')
        }
    })
});

const burgerBtnOpen = $('.header__burger');
const burgerMenuWrap = $('.navigation');
const burgerMenuClose = $('.navigation__close');

burgerBtnOpen.on('click', function () {
    burgerMenuWrap.animate({
        left: 0,
    }, 500, function () {
        burgerMenuClose.animate({
            opacity: 1,
        }, 300);
    })
});


$(document).click(function (e) {
    if (!burgerBtnOpen.is(e.target) && !burgerMenuWrap.is(e.target) || burgerMenuClose.is(e.target)) {
        burgerMenuWrap.animate({
            left: -400,
        }, 500)
    };
});




