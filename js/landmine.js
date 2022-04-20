let ok = Number(localStorage.getItem("ok"));
let all = Number(localStorage.getItem("all"));
// null判定
if (!ok){
    ok = Number(0);
}
if (!all){
    all = Number(0)
}
$("#score").html(ok + "/" + all);


var H = 0;
var W = 0;

var generate_flag = false;

$("#generator").on("click", function () {
    // console.log(1);
    if (generate_flag) return;
    generate_flag = true;
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

var save_flag = false;

$("#save").on("click", function () {
    if (save_flag == true) return;
    save_flag = true;
    // 既にH,Wはある
    // H = Number($("#tate").val());
    // W = Number($("#yoko").val());
    console.log("SAVE",H,W);

    // 一旦全削除して追加
    $("#field").empty();
    for (i = 0; i < H; i++){
        let gyou = '<tr>' //'<tr id="' + i + 'gyou">'
        for (j = 0; j < W; j++){
            const idx = i * MAX + j
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

    // 本当は全部色を書き換えたかったけど。。。
    // for (i = 0; i < H; i++){
    //     for (j = 0; j < W; j++){
    //         const num = i*MAX + j;
    //         let ind = "#" + num  + "ban";
    //         console.log(ind);
    //         $(ind).css('background-color', '#c0c0c0');
    //     }
    // }
})

var check_flag = false;

$("#check").on("click", function () {
    if (check_flag == true) return;
    check_flag = true;
    let total = H * W;
    let correct = 0;
    console.log(remember);
    console.log(answer);
    for (let i = 0; i < H; i++){
        for (let j = 0; j < W; j++){
            // console.log(remember[i*W+j], answer[i*W+j])
            if (remember[i*MAX+j] == answer[i*MAX+j]) correct++;
        }
    }
    console.log("ans",correct,total)
    let message = correct + "/" + total;
    $("#result").html(message);

    // Local Storageの書き換え
    ok += correct;
    all += total;
    localStorage.setItem("ok",ok);
    localStorage.setItem("all",all);
    let score_message = ok + "/" + all;
    $("#score").html(score_message);
})


// //ここより上は動作する。

// $("test").on("click", function() {
//     alert("X");
// })

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

// $(document).on("click", "#0ban", function() {
//     alert("Z");
//     alert("ZZ")
// });

const MAX = 50;
var remember = [];
var answer = [];
for (let i = 0; i < MAX*MAX; i++){
    remember.push(0);
    answer.push(0);
}


for (i = 0; i < MAX; i++){
    for (j = 0; j < MAX; j++) {
        const num = i*MAX + j;
        let ind = "#" + num  + "ban"
        // console.log(ind);
        $(document).on("click", ind, function() {
            let now_ind = $(this).attr("id");
            now_ind = now_ind.slice(0,-3);
            console.log(now_ind);
            if (save_flag == false) {
                remember[now_ind] ^= 1;
            } else{
                answer[now_ind] ^= 1;
            }
            
            // console.log(REM);
            console.log($(this).css('background-color'));
            if ($(this).css('background-color') != 'rgb(255, 0, 0)'){
                $(this).css('background-color', 'rgb(255, 0, 0)');
            } else{
                $(this).css('background-color', 'rgba(0, 0, 0, 0)');
            }
        });
    }
}

function Oseta(Cell){
    alert("A");
    // Cell.innerText ="押した";
    Cell.innerText = "1";
};


//モーダル
$(function(){
	// 変数に要素を入れる
	var open = $('#check'),
		close = $('.modal-close'),
		container = $('.modal-container');

    // console.log(save_flag);
    

	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){	
		container.addClass('active');
		return false;
	});

	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){	
		container.removeClass('active');
	});

	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
		if(!$(e.target).closest('.modal-body').length) {
			container.removeClass('active');
		}
	});
});

//Reset
$("#reset").on("click", function () {
    $("#field").empty();
    generate_flag = false;
    save_flag = false;
    check_flag = false;
    for (let i = 0; i < MAX*MAX; i++){
        remember[i] = 0;
        answer[i] = 0;
    }
})

//Clear
$("#clear").on("click", function() {
    localStorage.clear();
    ok = 0;
    all = 0;
    $("#score").html(ok + "/" + all);
})