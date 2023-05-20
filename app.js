var button1 = document.getElementById('btn1')
var button2 = document.getElementById('btn2')
var button3 = document.getElementById('btn3')
var button4 = document.getElementById('btn4')
var button5 = document.getElementById('btn5')
var button6 = document.getElementById('btn6')
var button7 = document.getElementById('btn7')


var redColor = document.getElementById('red')


var textBold = document.getElementById('bold').value





var bold = false;
var italic = false;
var centreText = false;
var rightText = false;
var leftText = false;
var eraseText = false;
var underLine = false;

button1.addEventListener('click', boldTheText)
button2.addEventListener('click', italicTheText)
button3.addEventListener('click', centreTheText)
button4.addEventListener('click', rightTheText)
button5.addEventListener('click', leftTheText)
button6.addEventListener('click', underLineTheText)
button7.addEventListener('click', eraseAllText)


function boldTheText() {

    if (bold) {
        document.getElementById('bold').style.fontWeight = '500';
        document.getElementById('btn1').style.fontWeight = '500';
        bold = false;
    } else {
        document.getElementById('bold').style.fontWeight = 'bold';
        document.getElementById('btn1').style.fontWeight = 'bold';
        bold = true;
    }
}
function italicTheText() {
    if (italic) {
        document.getElementById('bold').style.fontStyle = 'normal';
        document.getElementById('btn2').style.fontStyle = 'normal';
        italic = false;
    } else {
        document.getElementById('bold').style.fontStyle = 'italic';
        document.getElementById('btn2').style.fontStyle = 'italic';
        italic = true;
    }
}
function centreTheText() {
    if (centreText) {
        document.getElementById('bold').style.textAlign = 'start';
        document.getElementById('btn3').style.textAlign = 'start';
        centreText = false;
    } else {
        document.getElementById('bold').style.textAlign = 'center';
        document.getElementById('btn3').style.textAlign = 'center';
        centreText = true;
    }
}

function rightTheText() {
    if (rightText) {
        document.getElementById('bold').style.textAlign = 'start';
        document.getElementById('btn4').style.textAlign = 'start';
        rightText = false;
    } else {
        document.getElementById('bold').style.textAlign = 'right';
        document.getElementById('btn4').style.textAlign = 'right';
        rightText = true;
    }
}
function leftTheText() {
    if (leftText) {
        document.getElementById('bold').style.textAlign = 'right';
        document.getElementById('btn5').style.textAlign = 'right';
        leftText = false;
    } else {
        document.getElementById('bold').style.textAlign = 'left';
        document.getElementById('btn5').style.textAlign = 'left';
        leftText = true;
    }
}
function underLineTheText() {
    if (underLine) {
        document.getElementById('bold').style.textDecoration = '';
        document.getElementById('btn6').style.textDecoration = 'none';
        underLine = false;
    } else {
        document.getElementById('bold').style.textDecoration = 'underline';
        document.getElementById('btn6').style.textDecoration = 'underline';
        underLine = true;
    }
}

function eraseAllText() {
    if (eraseText) {
        document.getElementById('bold').value = '';
        eraseText = false;
    } else {
        document.getElementById('bold').value = document.getElementById('bold').value
        eraseText = true;
    }
}

function setColor()
  {
    var color = document.getElementById("color").value;
    document.getElementById("bold").style.color = color;
  }

  

