function ToggleSettings() {
    if ( $('.settings .menu').css('opacity') !== '0') {
        $('.settings .menu').css('opacity', '0');
        $('.settings .menu').css('border', 'none');
    } else {
        $('.settings .menu').css('opacity', '1');
        $('.settings .menu').css('border', '2px solid var(--late0)');
    }
}


$(document).ready(() => {

    try { ChangeBg(localStorage.getItem("theme")); } catch (e) {};

    $('#theme_select').change(() => {
        let value = $('#theme_select').val();

        ChangeBg(value);
        localStorage.setItem("theme", value);
    })
});