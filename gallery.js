$(document).ready(function() {

    var imgCnt = 13;

    for (i = 1; i <= imgCnt; i++) {

        var row = Math.ceil(i/3);

        if(i % 3 === 1) {
            $('<div class="row" id="row-' + row + '"></div>')
                .appendTo('#gallery');
        }

        $('<a href="images/' + i + '.jpg" target="_blank"><img src="images/' + i + '.jpg"/></a>')
            .appendTo('#row-' + row);

        // Wait for images to load.
        $(window).on("load", function() {
            var rowDiv = $('#row-1');
            console.log("1: row " + 1 + " height " + rowDiv.height());
        })
    }

//    // Wait for images to load.
//    $(window).on("load", function() {
//        var rowDiv = $('#row-1');
//        console.log("2: row " + 1 + " height " + rowDiv.height());
//    })

});