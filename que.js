document.getElementById('yes').addEventListener('click', function () {
    document.getElementById('message').innerHTML = "yeayyyyy, hehe lovee youuuuu!! <br><img src='cute-bubu.gif' alt='Valentine's GIF'>";
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('answer').style.display = 'none';
});

document.getElementById('no').addEventListener('click', function () {
    document.getElementById('message').innerHTML = "Pleaseeeeeee. <br><img src='mochi-mochimons.gif' alt='Sad GIF'>";
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('answer').style.display = 'none';
});

window.addEventListener('load', function () {
    var audio = document.getElementById('background-music');
    audio.play();
});
