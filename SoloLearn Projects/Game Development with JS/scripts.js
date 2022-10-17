window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 300;
    var y = 350;

    context.arc(x, y, 50, 0, 2*Math.PI);
    context.fillStyle="red";
    context.fill();

    let btn = document.getElementById("jump");
    let count = 0;

    btn.click = function() {
        count += 1;
    }
}