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
        }
    })

}

function ShowLoading() {
    $('.loading').css('opacity', '1');
}

function CloseLoading() {
    $('.loading').css('opacity', '0');
}