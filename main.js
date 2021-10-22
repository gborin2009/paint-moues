canvas= document.getElementById("myCanvas");
color="aqua";
width_of_line=1;
ctx= canvas.getContext("2d");
var mouseEvent="empty"
var last_position_of_x, last_position_of_y
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
 mouse_x= e.clientX-canvas.offsetLeft;
    mouse_y= e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =width_of_line;
ctx.moveTo(last_position_of_x,last_position_of_y)
ctx.lineTo(mouse_x,mouse_y)
ctx.stroke();
    }
    last_position_of_x=mouse_x
    last_position_of_y=mouse_y
}
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;
    mouseEvent="mouesDown"
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouesUP"

}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouesleave"

}