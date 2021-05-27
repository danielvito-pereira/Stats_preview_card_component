
function alteraImagem() {
    var windowWidth = window.innerWidth;
    if (windowWidth <= 800) {
        document.getElementById("image").src ="images/image-header-mobile.jpg";
    } else {
        document.getElementById("image").src ="images/image-header-desktop.jpg";
    } 
};
alteraImagem();
