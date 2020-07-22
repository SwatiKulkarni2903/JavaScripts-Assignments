console.log("Background colors !!");

const arr = document.getElementById('attribute');
console.log(arr);
console.log(arr.getAttribute('id'));

//arr.setAttribute('style','color:tomato;');

arr.classList.add('blue');

arr.style.color="red";
arr.style.backgroundColor='yellowgreen';

/* var c=["blue","green","yellow","red"];
function changeColor()
{     
    for(let i=0;i<c.length;i++)
    {
        arr.style.backgroundColor=c[i];
    }
}
function start()
{
    setInterval(changeColor, 300);
}
  
  start()
 */
var c = ["blue", "black", "yellow", "red"];
/* var currentColorIndex = 0;

function changeColor() {
  document.bgColor = c[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % c.length;
  setTimeout(changeColor, 500);
}
 */

var colours = ["blue", "black", "yellow", "red"];

chainColours(colours);

function chainColours(colours) {
  if (colours.length) {
    setColour(colours[0]);
    setTimeout(function() {
      chainColours(colours.slice(1)); // Repeat with all colours except the first one
    }, 5000);
  }
}

function setColour(colour) {
  arr.style.background = colour;
}











