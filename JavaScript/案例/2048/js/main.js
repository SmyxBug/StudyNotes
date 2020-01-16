/* 公共参数定义区域 */
const oGirds = new Array();// 定义一个盒子数组
const score = 0; // 定义分数
/* 公共方法定义区域 */
window.onload = function () {
    this.newGame();
}
function newGame() {
    initGameCell();// 初始化游戏界面(棋盘格子和数字格子)
    generateOneRandomNumber(); // 生成一个随机数
    generateOneRandomNumber(); // 生成一个随机数
}
function initGameCell() {
    for (let i = 0; i < 4; i++) {
        oGirds[i] = new Array(); // 转换成二位数组
        for (let j = 0; j < 4; j++) {
            oGirds[i][j] = 0; // 初始化值
            let oCellId = "grid-cell-" + i + "-" + j;
            let oCell = document.getElementById(oCellId); // 获取盒子对象
            oCell.style.top = getCellPolTop(i) + "px";
            oCell.style.left = getCellPolLeft(j) + "px";
        }
    }
    createNumberCell(); // 初始化显示数字的格子
}
function createNumberCell() {
    for (let i = 0; i < 4; i++) {// 需要循环生成4*4的格子区域
        for (let j = 0; j < 4; j++) {
            $('#grid-container').append("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>"); // 追加数字格子
            const oNumCell = $('#number-cell-' + i + '-' + j);
            if (oGirds[i][j] == 0) {
                oNumCell.css("width", "0px");
                oNumCell.css("height", "0px");
                oNumCell.css("top", getCellPolTop(i) + 50);
                oNumCell.css("left", getCellPolLeft(j) + 50);
            } 
            // 数字不为0的时候需要设置样色显示数字
            else {
                oNumCell.css("width", "100px");
                oNumCell.css("height", "100px");
                oNumCell.css("top", getCellPolTop(i, j) + 50);
                oNumCell.css("left", getCellPolLeft(i, j) + 50);
                oNumCell.css("background-color", getBackgroundColor());
                oNumCell.css("color", getNumberColor());
                oNumCell.text(oGirds[i][j]);
            }
        }
    }
}
function generateOneRandomNumber() {
    // 随机一个位置
    let random_x = parseInt(Math.floor(Math.random() * 4));
    let random_y = parseInt(Math.floor(Math.random() * 4));
    while (true) { // 循环判断是否已经有值存在 不存在直接跳出循环赋值 存在重新随机获取格子位置填充
        if (oGirds[random_x][random_y] == 0) {
            break;
        }
        random_x = parseInt(Math.floor(Math.random() * 4));
        random_y = parseInt(Math.floor(Math.random() * 4));
    }
    // 随机一个数字
    let randNumber = Math.random() < 0.5 ? 2 : 4;
    // 在随机位置显示随机数字
    oGirds[random_x][random_y] = randNumber;
    showNumberWithAnimation(random_x, random_y, randNumber); // 动画效果
}