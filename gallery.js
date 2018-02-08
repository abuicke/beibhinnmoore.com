$(document).ready(function() {
    loadImages(1, 41);
});

function loadImages(firstImage, lastImage) {
    loadImage(firstImage, func = function() {
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 0
        });

        if(firstImage < lastImage){
            loadImage(++firstImage, func);
        }
    });
}

function loadImage(index, f) {
    $('#image-' + index)
        .attr("src", "images/" + index + ".jpg")
        .on('load', f);
}