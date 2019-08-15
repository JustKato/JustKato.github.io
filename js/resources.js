var contents = $('.content');

$(document).ready(() => {
    SwitchPage('./html/resources/home.html');
});

function SwitchPage(page) {
    ShowLoading();
    contents.load(page, {}, () => {
        CloseLoading();
    });
}

function ShowLoading() {
    $('.loading').css('opacity', '1');
}

function CloseLoading() {
    $('.loading').css('opacity', '0');
}