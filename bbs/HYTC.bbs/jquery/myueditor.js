$(function () {
    UE.getEditor('myUe');

    //alert("sada");

    $(document).on("click", "#npost", function () {
        //UE.getEditor('myUe').setHeight(600);
        checkLogin();

        

        var txt = getContent();


        //得到当前登录ID
        var curUserID = $("#curUserTmpHide").html();

        //借助ajax插入数据库
        $.ajax({
            type: "post",
            url: "wsTest.asmx/insertReply",
            data: "{'blogID':' 0 ','userID':'" + curUserID + "','content':'" + txt + "'}",
            dataType: "json",
            contentType: "application/json",
            success: function (res) {
                if (res.d != null) {
                    //发帖成功
                    //                    $("#txtReply").val("");
                    //                    $("#txtReply").hide();
                    //                    $("#btnReply").attr("showFlag", "hide");
                    //                    $("#txtReply").css("background-image", "url('../../Images/hfbg.jpg')");
                    $("#nopeArea").css("background-image", "url('../../Images/huifu.jpg')");
                    //将成功发表的回复追加到回复列表
                    //appendReply(res.d);


                }
                else {
                    //alert("发帖失败");
                }
            }
        });

    });

    //
});


function getContent() {
    var arr = [];
    arr.push("使用editor.getContent()方法可以获得编辑器的内容");
    arr.push("内容为：");
    arr.push(UE.getEditor('myUe').getContent());
    //alert(arr.join("\n"));
}


function checkLogin() {
    $.ajax({
        type: "post",
        url: "wsTest.asmx/readUserSession",
        async: false,
        data: "{}",
        dataType: "json",
        contentType: "application/json",
        success: function (res) {
            if (res.d == null) {

                //var divId = document.getElementById('mxh');
                //divId.style.left = (document.body.clientWidth - divId.clientWidth) / 2 + document.body.scrollLeft;
                //divId.style.top = (document.body.clientHeight - divId.clientHeight) / 2 + document.body.scrollTop;

                //<div id=mxh 
                //style="position:absolute;left:200px;top:30px;width:200px;height:200px; background-color:navy;border:2px">我是居中显示的了。</div> </body>

                //                var l=document.body.scrollLeft;
                //                var t=document.body.scrollTop;
                //                $("#mFormLogin").css({
                //                    //"left":"100px+"+l+"px",
                //                    "top": "100px+" + t + "px"
                //                });
                //$("#mMengban").show();
                $("#mFormLogin").show();
                
            }

        }
    });
}
