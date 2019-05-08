window.onload = function() {
    var isClicked = false;
    document.getElementById('link').addEventListener('click', function(){
        if(!isClicked) {
            document.getElementById('link').style.color = 'red'
            isClicked = true;
        }
    });
}