$(document).ready(function() {

    var imagesLoaded = 0;

    $('.grid-item').on('load', function() {
        // Run masonry after each row is loaded.
        if((imagesLoaded % 3) === 0) {
            $('.grid').masonry({
                itemSelector: '.grid-item',
                columnWidth: 0
            });
        }

        imagesLoaded++;
    });

    // Load the images in seqeunce so that the
    // most offscreen images are loaded last.
    for(i = 1; i <= 41; i++){
        $('#image-' + i).attr("src", "images/" + i + ".jpg");
    };
});