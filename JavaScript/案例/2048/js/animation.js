/**
 * 根据x,y坐标(格子的行列)填充随机数
 * @param {*} random_x 行
 * @param {*} random_y 列
 * @param {*} randNumber 随机数
 */
function showNumberWithAnimation(random_x, random_y, randNumber) {
    var numberCell = $("#number-cell-" + random_x + "-" + random_y);
    numberCell.css("background-color", getBackgroundColor(randNumber));
    numberCell.css("color", getNumberColor(randNumber));
    numberCell.text(randNumber);
    numberCell.animate({
        width: "100px",
        height: "100px",
        top: getCellPolTop(random_x),
        left: getCellPolLeft(random_y)
    }, 100);
}