// Validate Form
function validateForm() {
    // Get input value
    let name = document.forms['message-form']['name'].value;
    let email = document.forms['message-form']['email'].value;
    let country = document.forms['message-form']['country'].value;

    // Validate input
    if (name == '' || email == '' || country == '') {
        alert('Input tidak boleh kosong!');
        return false;
    }
}

// Image slider 
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    let i;
    let imgList = document.getElementsByClassName('img-slideshow');

    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = 'none';
    }

    imgList[slideIndex - 1].style.display = 'block';
}

setInterval(() => {
    
}, 2000);