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

    // btn.onclick = function() {
    //     count += 1;
    //     // changing the y position
    //     y -= 25;
    //     function draw() {
    //     // clearing the canvas
    //     context.clearRect(0, 0, 600, 400);

    //     // redrawing the circle
    //     context.beginPath();
    //     context.arc(x, y, 50, 0, 2*Math.PI);
    //     context.fillStyle="red";
    //     context.fill();
        
    //     // drawing the count value
    //     context.font = '25px Arial';
    //     context.fillStyle = 'white';
    //     context.fillText("Count: " + count, 20, 30);

    //     window.requestAnimationFrame(draw);
    //     }
    //     draw();
    // }
    document.onkeydown = function() {
        count += 1;
        y -= 25;
        function draw() {
            // clearing the canvas
            context.clearRect(0, 0, 600, 400);
    
            // redrawing the circle
            context.beginPath();
            context.arc(x, y, 50, 0, 2*Math.PI);
            context.fillStyle="red";
            context.fill();
            
            // drawing the count value
            context.font = '25px Arial';
            context.fillStyle = 'white';
            context.fillText("Count: " + count, 20, 30);
    
            window.requestAnimationFrame(draw);
            }
            draw();
    }
    document.ontouchstart = function() {
            count += 1;
            y -= 25;
        function draw() {
            // clearing the canvas
            context.clearRect(0, 0, 600, 400);
    
            // redrawing the circle
            context.beginPath();
            context.arc(x, y, 50, 0, 2*Math.PI);
            context.fillStyle="red";
            context.fill();
            
            // drawing the count value
            context.font = '25px Arial';
            context.fillStyle = 'white';
            context.fillText("Count: " + count, 20, 30);
    
            window.requestAnimationFrame(draw);
            }
            draw();
    }  
}