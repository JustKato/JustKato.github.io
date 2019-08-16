var contents = $('.content');
let menu_threshold = innerWidth/4;

$(document).ready(() => {
    SwitchPage('/html/resources/home.html');

    $(document).mousemove((e) => {

        if ( innerWidth < 1000 ) return;

        // Checking if it's already open since it's easier on the CPU :)
        if ( !IsMenuOpen() && e.pageX < menu_threshold ) {
            ShowMenu();
        }

        if ( IsMenuOpen() && e.pageX > menu_threshold ) {
            HideMenu();
        }

    });

    $(document).click((e) => {
        // noinspection EqualityComparisonWithCoercionJS
        if ( e.pageX > menu_threshold )
            HideMenu();
    });

});

function SwitchPage(page) {
    ShowLoading();

    $.ajax({
        url: page,
        complete: msg => {
            contents.html(msg.responseText);
            setTimeout(() => {
                CloseLoading();
            }, 200)
        }
    })

}

function LoadHome() {
    ShowLoading();
    $.ajax({
        url: '/html/resources/home.html',
        complete: msg => {
            contents.html(msg.responseText);
            setTimeout(() => {
                CloseLoading();
            }, 200)
        }
    })
}

function ShowLoading() {
    $('.loading').css('opacity', '1');
}

function CloseLoading() {
    $('.loading').css('opacity', '0');
}

function ToggleMenu() {
    if ( !$(`header`).hasClass('hidden') )
        HideMenu();
    else
        ShowMenu();

}

function ShowMenu() {
    $(`header`).removeClass('hidden');
}

function HideMenu() {
    $(`header`).addClass('hidden');
}

/**
 * @return {boolean}
 */
function IsMenuOpen() {
    return !$(`header`).hasClass('hidden');
}