// jQUeryによる初期処理
$(function(){
    // boostrap-colorpickerの初期設定
    var colorPicker = $("#color-picker");
    colorPicker.colorpicker({
        "format": "hex"
    });

    // 色変更時のハンドラ
    colorPicker.on("changeColor", function(event){
        // 変更された色を取得
        var colorHex = event.color.toHex();
        // テーマカラー設定を変更
        $("meta[name=theme-color]").attr("content", colorHex);
        // パネル背景色変更
        $("#color-panel").css("background-color", colorHex);
    });

    // 色の初期設定
    colorPicker.colorpicker("setValue", "#ff0000");
    colorPicker.trigger("change", colorPicker.colorpicker("getValue"));
})