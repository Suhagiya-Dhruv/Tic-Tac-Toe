const player1name = "You"
const player2name = "Computer"
var title = document.getElementsByTagName('h3')[0];
var aer = document.getElementsByClassName('row');
var player1score = document.getElementById('player1');
var player2score = document.getElementById('player2');
var winningname = document.getElementById('winingname');
var winingtitle = document.getElementById('winingtitle');
var statustitle = document.getElementById('statustitle');
var win = document.getElementById('win');
var draw = document.getElementById('draw');
var body = document.getElementById('blur');
let p1score = 0;
let p2score = 0;
p1score = sessionStorage.getItem('p1score');
p2score = sessionStorage.getItem('p2score');
var count = 0
var player1 = 0
var player2 = 0
var boolean = false;
var arrplayer1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var arrplayer2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function check(arr) {
    if (arr[0] == 1 && arr[1] == 1 && arr[2] == 1) {
        return true
    } else if (arr[3] == 1 && arr[4] == 1 && arr[5] == 1) {
        return true
    } else if (arr[6] == 1 && arr[7] == 1 && arr[8] == 1) {
        return true
    } else if (arr[0] == 1 && arr[3] == 1 && arr[6] == 1) {
        return true
    } else if (arr[1] == 1 && arr[4] == 1 && arr[7] == 1) {
        return true
    } else if (arr[2] == 1 && arr[5] == 1 && arr[8] == 1) {
        return true
    } else if (arr[0] == 1 && arr[4] == 1 && arr[8] == 1) {
        return true
    } else if (arr[2] == 1 && arr[4] == 1 && arr[6] == 1) {
        return true
    } else {
        return false
    }
}
title.innerText = "It's " + player1name + "'s turn";
player1score.innerText = player1name + "'s score is : " + p1score;
player2score.innerText = player2name + "'s score is : " + p2score;
for (i = 0; i < aer.length; i++) {
    aer[i].onclick = function() {
        var b = Number(this.id);
        if (this.getAttribute("checked") != "true") {
            this.setAttribute("checked", "true")
            count++;
            if (count % 2 == 0) {
                this.innerHTML = "X";
                title.innerText = "It's " + player1name + "'s turn";
                player2++;
                arrplayer2[b - 1] = 1;
                if (check(arrplayer2) && player2 >= 3) {
                    statustitle.innerText = "Sorry !!";
                    winningname.innerText = player1name;
                    winingtitle.innerText = "Loss this Match";
                    win.style.display = 'inline';
                    body.style.filter = 'blur(2px)';
                    setTimeout(() => {
                        win.style.display = 'none';
                        body.style.filter = 'blur(0px)';
                    }, 3000);
                    boolean = true;
                    p2score++;
                    sessionStorage.setItem('p2score', p2score);
                    player2score.innerText = player2name + "'s score is : " + p2score;
                    click(player2name);
                }
            } else {
                this.innerHTML = "O";
                title.innerText = "It's " + player2name + "'s turn";
                player1++
                arrplayer1[b - 1] = 1;
                console.log(arrplayer2)
                if (check(arrplayer1) && player1 >= 3) {
                    winningname.innerText = player1name;
                    win.style.display = 'inline';
                    body.style.filter = 'blur(2px)';
                    setTimeout(() => {
                        win.style.display = 'none';
                        body.style.filter = 'blur(0px)';
                    }, 3000);
                    boolean = true;
                    p1score++;
                    sessionStorage.setItem('p1score', p1score);
                    player1score.innerText = player1name + "'s score is : " + p1score;
                    click(player1name);
                }
            }
            if (!boolean && count == 9) {
                draw.style.display = 'inline';
                body.style.filter = 'blur(2px)';
                setTimeout(() => {
                    draw.style.display = 'none';
                    body.style.filter = 'blur(0px)';
                }, 2000);
                click1();
            }
        }
    }
}

function click(name) {
    title.innerText = "Congratulations " + name + " have won the Game";
    for (i = 0; i < aer.length; i++) {
        aer[i].onclick = function() {
            var b = Number(this.id);
            this.setAttribute("checked", "true")
        }
    }
}

function click1() {
    title.innerText = "Match was DRAW";
    for (i = 0; i < aer.length; i++) {
        aer[i].onclick = function() {
            var b = Number(this.id);
            this.setAttribute("checked", "true")
        }
    }
}

function restrat() {
    sessionStorage.setItem('p2score', 0);
    sessionStorage.setItem('p1score', 0);
    location.reload();
}

function continues() {
    location.reload();
}

function back() {
    sessionStorage.clear();
    location.href = '../htmls/home.html';

}

function setting() {
    var mode = document.getElementsByTagName('body')[0];
    if (mode.style.color == 'yellow') {
        mode.style.backgroundColor = 'white';
        mode.style.color = 'black';

    } else {
        mode.style.backgroundColor = 'black';
        mode.style.color = 'yellow';
    }
}