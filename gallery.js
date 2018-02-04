$(document).ready(function() {

    var imgCnt = 13;

    for (i = 1; i <= imgCnt; i++) {

        var row = Math.ceil(i/3);

        if(i % 3 === 1) {
            $('<div class="row" id="row-' + row + '"></div>')
                .appendTo('#gallery');
        }

        $('<a href="images/' + i + '.jpg" target="_blank"><img id="image-' + i + '" src="images/' + i + '.jpg"/></a>')
            .appendTo('#row-' + row);
    }

    // Wait for images to load.
    //    $(window).on("load", function() {
    setTimeout(function() {
        adjustImagePositions();
    }, 100);

});

function adjustImagePositions() {

    for (topRow = 2, bottomRow = 3; topRow <= 4; topRow++, bottomRow++) {
        for (column = 1; column <= 3; column++) {
            
            console.log("top image " + getImageId(column, topRow));
            console.log("bottom image " + getImageId(column, bottomRow));
            console.log("====================================================");
            
            var topImage = getImage(column, topRow);
            var bottomImage = getImage(column, bottomRow + 1);

            var imgHeight = topImage.clientHeight;
            var rowHeight = getRowHeight(2);

            if(imgHeight < rowHeight) {
                var delta = rowHeight - imgHeight;
                $("#" + getImageId(column, bottomRow)).css({bottom: delta});
            }
        }
    } 
}

function getImageId(column, row) {
    return 'image-' + (((row - 1) * 3) + column);
}

function getImage(column, row) {
    var imageId = getImageId(column, row);
    var img = document.getElementById(imageId); 
    return img;
}

function getRowHeight(row) {
    return $('#row-' + row).height();
}