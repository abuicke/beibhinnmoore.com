$(document).ready(function() {

    $(window).on('load', function() {
        $('.grid').one('layoutComplete', function() {
            loadImages(1, 41);
        }).masonry({
            itemSelector: '.grid-item',
            columnWidth: 0
        });
    });
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

function loadPlaceholder(index, f) {
    $('#image-' + index)
        .attr("src", "images/placeholders/" + index + ".jpg")
        .on('load', f);
}