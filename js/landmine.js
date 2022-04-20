var H = 0;
var W = 0;

$("#generator").on("click", function () {
    // console.log(1);
    H = Number($("#tate").val());
    W = Number($("#yoko").val());
    console.log(H,W);

    for (i = 0; i < H; i++){
        let gyou = '<tr>' //'<tr id="' + i + 'gyou">'
        for (j = 0; j < W; j++){
            const idx = i * W + j
            // console.log(idx);
            // gyou += '<td id="' + idx + 'ban"></td>'
            gyou += `
                <td id=${idx}ban></td>
            `
        }
        gyou += "</tr>"
        console.log(gyou);
        $("#field").append(gyou);
    }
});

//ここより上は動作する。

$("test").on("click", function() {
    alert("X");
})

//ここのFor loopの部分が動作しない。


// // var ban = document.getElementById('test');//テーブルを取得

// //クリックした時のイベント
// for (var x=0; x < 2;x++){
//     for(var y = 0; y < 2; y++){
//         var oseta = ban.rows[x].cells[y];
//         console.log("X")
//         console.log(oseta);
//         oseta.onclick = function(){Oseta(this);}
//     }
// }
// function Oseta(Cell){
//     alert("A");
//     // Cell.innerText ="押した";
//     Cell.innerText = "1";
// };

var banmen = document.getElementById("field");//テーブルを取得

$(document).on("click", "#0ban", function() {
    alert("Z");
    alert("ZZ")
});

const MAX = 15

for (i = 0; i < MAX; i++){
    for (j = 0; j < MAX; j++) {
        const num = i*MAX + j;
        let ind = "#" + num  + "ban"
        // console.log(ind);
        $(document).on("click", ind, function() {
            // console.log("10");
            // alert(this);
            $(this).css('background-color', 'red');
        });
    }
}

function Oseta(Cell){
    alert("A");
    // Cell.innerText ="押した";
    Cell.innerText = "1";
};
