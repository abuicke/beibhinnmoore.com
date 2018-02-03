$(document).ready(function(){
    var containerWidth = $('#gallery').width();
    //    alert("width = " + getContainerWidth())

    for (i = 1; i <= 13; i++) {
        var css = get_css(i)
        console.log(css)
        $('<img/>')
            .addClass("grid-element")
            .attr('src', './images/' + i + '.jpg')
        //            .attr('width', '440')
        //            .css(css)
            .appendTo('#gallery');
    }
});

function get_css(row) {
    if(row % 3 === 1) {
        console.log("left")
        return {"left": "0", "position": "absolute"};
    }else if(row % 3 === 2) {
        console.log("middle")
        return {"position": "relative"};
    }else {
        console.log("right")
        return {"right": "0", "position": "absolute"};
    }
}