//$(function () {
//    $("#btnTest").click(function () {
//        $.ajax({
//            url: "wsTest.asmx/HelloWorld",
//            type: "post",
//            data: "{}",
//            dataType: "json",
//            contentType: "application/json",
//            success: function () {
//                alert("ok!");
//            }
//        });
//    });
//});

$(function () {
    $("#btnTest").click(function () {
        var id = $("#txtuserId").val();
        var pwd = $("#txtuserPwd").val();
        var d="{userId:'"+id+"',userPwd:'"+pwd+"'}";
        //通过ajax调用ws中的checkUser方法
        $.ajax({
            url: "wsTest.asmx/checkUser",
            type: "post",
            dataType: "json",
            contentType: "application/json",
            data:d,
            success: function (res) {
                alert(res.d);
            }
        });
    });
});