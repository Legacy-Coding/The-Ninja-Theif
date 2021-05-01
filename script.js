score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        Theif = document.querySelector('.Theif');
        Theif.classList.add('animateTheif');
        setTimeout(() => {
            Theif.classList.remove('animateTheif')
        }, 900);
    }
    if (e.keyCode == 39) {
        Theif = document.querySelector('.Theif');
        TheifX = parseInt(window.getComputedStyle(Theif, null).getPropertyValue('left'));
        Theif.style.left = TheifX + 112 + "px";
    }
    if (e.keyCode == 37) {
        Theif = document.querySelector('.Theif');
        TheifX = parseInt(window.getComputedStyle(Theif, null).getPropertyValue('left'));
        Theif.style.left = (TheifX - 112) + "px";
    }
}

setInterval(() => {
    Theif = document.querySelector('.Theif');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(Theif, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(Theif, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 80 && offsetY < 60) {
        gameOver.innerHTML = "Game Over! Reload to Play Again  - Abhinav"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}