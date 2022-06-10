let i = 0;
let images = [];
let time = 3000;

// Image list
images[0] = 'pic1.avif';
images[1] = 'pic2.avif';
images[2] = 'pic3.avif';
images[3] = 'pic4.avif';


// Change Image
function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;
