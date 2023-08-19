
var content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.?`;

var newContent = content;
var spacing = " ";
var position;
var coloredWord;
var currentPosition = 0;

function coloringWords() {

    position = newContent.indexOf(spacing);
    coloredWord = content.slice(0, currentPosition) + `<span style="color: red;">${newContent.slice(0, position)}</span>` + newContent.slice(position); 
    newContent = newContent.slice(position + 1);
    currentPosition += position + 1;

    if (position === -1) {
        coloredWord = content.slice(0, currentPosition) + `<span style="color: red;">${newContent.slice(0, newContent.length)}</span>`
        newContent = content; 
        currentPosition = 0;
    }
    
    document.getElementById("paragraph").innerHTML = coloredWord;
}

 setInterval(coloringWords, 500);