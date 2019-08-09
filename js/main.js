var enums = {
    themes: {
        FERN : "fern",
        DOCKS : "docks",
        DARK_SKY: "dark_sky"
    }
};

$(document).ready(() => {
    console.log("Successfully Loaded the document");
    PreLoadContainers();
});

$('.main-wrapper').on("click", (event) => {
    console.log("Clicked the main wrapper!");
});


function ScrollTo(loc) {
    window.location.hash = loc;
    setTimeout(() => {window.location.hash = null;}, 300)
}

function ChangeBg(theme) {
    theme = theme.toLowerCase();
    switch (theme) {
        case "fern":
            ChangeColor("--black1", "#121719");
            ChangeIntroBG("Images/BG/Ferns.jpg");
            $(`.intro .title h1, .intro .title h2`).css('color', '');
            $(`.intro .icons .icon`).css(`filter`, '');
            break;

        case "dark_sky":
            ChangeColor("--black1", "#121719");
            ChangeIntroBG("Images/BG/DarkSky.png");
            $(`.intro .title h1, .intro .title h2`).css('color', '');
            $(`.intro .icons .icon`).css(`filter`, '');
            break;


        case "docks":
            ChangeColor("--black1", "#171716");
            $(`.intro .title h1, .intro .title h2`).css('color', 'var(--black)');
            $(`.intro .icons .icon`).css(`filter`, `invert(1)`);

            ChangeIntroBG("Images/BG/Docks.jpg");
            break;

        default:
            break;
    }

}

function ChangeColor(key, value) {
    return;
    $(':root').css(key, value);
}

function ChangeIntroBG(img_link) {
    $('.intro').css('background-image', `url('${img_link}')`);
}