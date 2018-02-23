$(document).ready(function() {
    console.log("document ready");
    $(window).on('load', function() {
        console.log("window loaded");
        $('.grid').one('layoutComplete', function() {
            console.log("layout complete");
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