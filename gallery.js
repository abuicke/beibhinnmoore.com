$(document).ready(function() {
    
    $(window).on('load', function() {
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 0
        });
        
        loadImages(1, 41);
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
    setTimeout(function() {
        $('#image-' + index)
            .attr("src", "images/" + index + ".jpg")
            .on('load', f); 
    }, 2000);
}

function loadPlaceholder(index, f) {
    $('#image-' + index)
        .attr("src", "images/placeholders/" + index + ".jpg")
        .on('load', f);
}