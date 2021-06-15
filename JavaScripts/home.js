function com() {
    location.href = '../htmls/ai.html';
}

function mul() {
    var y = document.getElementById('main');
    y.style.filter = 'blur(2px)';
    var x = document.getElementById('info');
    x.style.display = 'inline';
}

function multiplayer() {
    var p1 = document.getElementById('player1').value;
    var p2 = document.getElementById('player2').value;
    console.log(p1 + " " + p2);
    if (p1 != '' && p2 != '') {
        sessionStorage.setItem("p1", p1);
        sessionStorage.setItem("p2", p2);
        location.href = '../htmls/index.html';
    }
}