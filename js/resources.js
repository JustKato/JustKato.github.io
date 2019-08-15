var contents = $('.content');

$(document).ready(() => {
    SwitchPage('/html/resources/home.html');
});

function SwitchPage(page) {
    ShowLoading();

    $.ajax({
        url: page,
        complete: msg => {
            contents.html(msg.responseText);
            CloseLoading();
        }
    })

}

function LoadHome() {
    ShowLoading();

    $.ajax({
        url: '/html/resources/home.html',
        complete: msg => {
            contents.html(msg.responseText);
            CloseLoading();
        }
    })
}

function ShowLoading() {
    $('.loading').css('opacity', '1');
}

function CloseLoading() {
    $('.loading').css('opacity', '0');
}