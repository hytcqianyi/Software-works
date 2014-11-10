//$(function () {
//    //蒙版
//    $("#mMengban").css("opacity", 0.5);
//    //登录点击
//    $("#mLogin").click(function () {
//        $("#mMengban").show();
//        $("#mFormLogin").show();
//    });
//    //叉叉变化
//    $("#mLoginClose").hover(function () {
//        $("#mLoginClose").css("background-position", " -72px -48px")
//    }, function () {
//        $("#mLoginClose").css("background-position", " -56px -48px")
//    });
//    //叉叉点击
//    $("#mLoginClose").click(function () {
//        $("#mMengban").hide();
//        $("#mFormLogin").hide();
//    });
//    //注销点击
//    $("#mLogout").click(function () {
//        $.ajax({
//            url: "wsTest.asmx/Logout",
//            type: "post",
//            dataType: "json",
//            contentType: "application/json",
//            data: "{}",
//            success: function (res) {
//                window.location.reload();
//            }
//        });
//    });
//    //登录按钮点击
//    $("#mBtnLogin").click(function () {
//        var id = $("#txtUserID").val();
//        var pwd = $("#txtUserPwd").val();

//        if (id == "" || pwd == "") {
//            $("#mLoginError").html("请输入完整的信息啊");
//            return;
//        }
//        var d = "{userId:'" + id + "',userPwd:'" + pwd + "'}";
//        //通过ajax调用ws中的checkUser方法
//        $.ajax({
//            url: "wsTest.asmx/checkUser",
//            type: "post",
//            dataType: "json",
//            contentType: "application/json",
//            data: d,
//            success: function (res) {
//                if (res.d == "fail") {
//                    $("#mLoginError").html("账号密码不匹配!!!!!!!");
//                }
//                else {
//                    window.location.reload();
//                }
//            }
//        });
//    });
//});









$(function () {
    $(document).on("click", "#mLogin", function () {
        $("#mMengban").show();
        $("#mFormLogin").show();

    });

    //注销事件
    $(document).on("click", "#mLogout", function () {
        $.ajax({

            type: "post",
            url: "wsTest.asmx/closeUserSession",
            data: "{}",
            dataType: "json",
            contentType: "application/json",
            success: function () {
                //将div中显示登录和注册
                h = "<a id='mSignin' href='#'>注册</a><a id='mLogin' href='#'>登录</a>";
                $("#mUserArea").html(h);
            }

        });

    });
    //异步
    $("#mMengban").css("opacity", 0.5);
    //检测当前是否登录状态
    checkLoginState();


    $("#mLoginClose").click(function () {
        $("#mMengban").hide();
        $("#mFormLogin").hide();
    });
    $("#mLoginClose").hover(function () {
        $(this).css("background-position", "-72px -48px");
    }, function () {
        $(this).css("background-position", "-56px -48px");
    });

    $("#mBtnLogin").click(function () {
        var yhID = $("#txtUserID").val();
        var yhMM = $("#txtUserPwd").val();

        if (yhID == "" || yhMM == "") {
            $("#mLoginError").html("请输入完整的登录信息！");
            return; //结束function

        }
        //通过ajax去数据库验证
        $.ajax({
            type: "post",
            url: "wsTest.asmx/checkUser",
            data: "{userId:'" + yhID + "',userPwd:'" + yhMM + "'}",
            dataType: "json",
            contentType: "application/json",
            success: function (res) {
                if (res.d == null) {
                    $("#mLoginError").html("您输入的账号和密码不匹配！");
                }
                else {
                    //隐藏自己
                    $("#mMengban").hide();
                    $("#mFormLogin").hide();

                    //通过再次检测登录状态，改变用户区的显示
                    checkLoginState();
                }
            }
        });
    });

});
function checkLoginState() {
    $.ajax({
        type: "post",
        url: "wsTest.asmx/readUserSession",
        data: "{}",
        dataType: "json",
        contentType: "application/json",
        success: function (res) {
            var h = "";
            //            alert(res.d);
            if (res.d == null) {
                h = "<a id='mSignin' href='#'>注册</a><a id='mLogin' href='#'>登录</a>";
                $("#mUserArea").html(h);
                //                $("#mLogin").click(function() {
                //                    $("#mMengban").show();
                //                    $("#mFormLogin").show();

                //                });
            }
            else {
                h = "<a id='mLogout' href='#'>注销</a><a id='mUserA' href='Showuser.aspx?uid=" + res.d["UserID"] + "'>" + res.d["UserName"] + "</a>";
                $("#mUserArea").html(h);
                $("#curUserTmpHide").html(res.d["UserID"]);
            }

        }
    });
}