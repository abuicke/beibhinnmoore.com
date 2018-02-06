$(document).ready(function() {

    $(window).on("load", function() {

        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 0
        }); 

    });

});