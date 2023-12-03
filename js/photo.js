const photoPaths = [
    '/photo/1.jpg',
    '/photo/2.jpg',
    '/photo/3.jpg'
    // '/photo/4.jpg'
];

let _index = 0;
const photo = document.getElementById('photo');

function showPhoto(index) {
    _index = (index + photoPaths.length) % photoPaths.length;
    console.log(_index)
    photo.src = photoPaths[_index];
}

function prev() {
    showPhoto(_index-1);
}
function next() {
    showPhoto(_index+1);
}

showPhoto(_index);