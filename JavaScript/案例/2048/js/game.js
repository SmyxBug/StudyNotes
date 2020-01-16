$(document).keydown(function(event) {
    if ('37' == event.keyCode) { // 左键
        // 判断当前的按键方向是否可以动
        if (moveLeft()) {
            // 再次随机产生一个数字
            generateOneRandomNumber();
            // 判断当前游戏是否已经game over
            isGameOver();
        }
    } else if ('38' == event.keyCode) { // 上键
        
    } else if ('39' == event.keyCode) { // 右键
        
    } else if ('40' == event.keyCode) { // 下键
        
    }
});