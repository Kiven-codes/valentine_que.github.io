document.getElementById('yes').addEventListener('click', function () {
    document.getElementById('message').innerHTML = "yeayyyyy, hehe lovee youuuuu!! <br><img src='cute-bubu.gif' alt='Valentine's GIF'>";
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('answer').style.display = 'none';
});

document.getElementById('no').addEventListener('click', function () {
    document.getElementById('message').innerHTML = "Oh no! Maybe next time. <br><img src='https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif' alt='Sad GIF'>";
});