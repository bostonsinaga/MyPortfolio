// COLLECTION SCREENSHOTS //

// draw collection arrows
function drawArrow(name, direction) {
    let canvas = document.querySelector(name);
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.beginPath();

    if (direction == 'left') {
        ctx.moveTo(25, 5);
        ctx.lineTo(5, 30);
        ctx.lineTo(25, 55);
    }
    else if (direction == 'right') {
        ctx.moveTo(5, 5);
        ctx.lineTo(25, 30);
        ctx.lineTo(5, 55);
    }

    ctx.fill();
}

drawArrow('.screenshots_CRUD .arrow_left', 'left');
drawArrow('.screenshots_CRUD .arrow_right', 'right');
drawArrow('.screenshots_video_game .arrow_left', 'left');
drawArrow('.screenshots_video_game .arrow_right', 'right');

// collections CRUD arrows (being developed)

let screenshotsColor = ['red', 'green', 'blue'];
let currentColor_CRUD = 0;

document.querySelector('.screenshots_CRUD .arrow_left').onclick = () => {
    currentColor_CRUD--;
    if (currentColor_CRUD < 0) currentColor_CRUD = 2;
    document.querySelector('.screenshots_CRUD a').style.backgroundColor = screenshotsColor[currentColor_CRUD];
};
document.querySelector('.screenshots_CRUD .arrow_right').onclick = () => {
    currentColor_CRUD++;
    if (currentColor_CRUD > 2) currentColor_CRUD = 0;
    document.querySelector('.screenshots_CRUD a').style.backgroundColor = screenshotsColor[currentColor_CRUD];
};

/////////////////////////////////////

// collections video game arrows //

let maxScrshot_videoGame = 5;
let currentScrshot_videoGame = 0;
let nameScrshot_videoGame = [];
for (let i = 1; i <= maxScrshot_videoGame; i++) {
    nameScrshot_videoGame.push(`img/video_game_screenshot_${i}.jpg`);
}

function changeScrshot_videoGame() {
    document.querySelector('.screenshots_video_game img').src = nameScrshot_videoGame[currentScrshot_videoGame];
}
changeScrshot_videoGame();

document.querySelector('.screenshots_video_game .arrow_left').onclick = () => {
    currentScrshot_videoGame--;
    if (currentScrshot_videoGame < 0) currentScrshot_videoGame = maxScrshot_videoGame - 1;
    changeScrshot_videoGame();
};
document.querySelector('.screenshots_video_game .arrow_right').onclick = () => {
    currentScrshot_videoGame++;
    if (currentScrshot_videoGame >= maxScrshot_videoGame) currentScrshot_videoGame = 0;
    changeScrshot_videoGame();
};

/////////////////////////////////////