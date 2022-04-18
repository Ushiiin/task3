
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
            gyou += '<td id="' + idx + 'ban"></td>'
        }
        gyou += "</tr>"
        console.log(gyou);
        $("#field").append(gyou);
    }
});

for (i = 0; i < H; i++){
    for (j = 0; j < W; j++) {
        const idx = i * H + j;
        const ind = '#' + idx + 'ban';
        console.log(ind);
        $("#0ban").on("click", function () {
            alert("A");
        })
    }
}