$(function () {
    //    alert("d");
//    //点击BlogList.aspx下的post
//    $(document).on("click", "#post", function () {
//        //  alert("sada");
//        $("#post").attr("herf", "post.aspx");
//        checkLogin();
//        
//    });

    //点击回复
    $(document).on("click", ".RebtnRR", function () {
        checkLogin();
        var userName = $(this).parent().parent().parent().find(".ReauthorTxt").attr("userName");
        $(this).parent().parent().parent().parent().parent().find(".txtRR").val("回复 " + userName + "： ");
    });



    //点击发表
    $(document).on("click", ".btnRR", function () {
        checkLogin();
        var Rereplyid = $(this).parent().parent().find(".btnShowReplys").attr("replyid");
        var txt = $(this).parent().find(".txtRR").val(); //val：输入的内容

        //得到当前回复ID
        var RblogID = Rereplyid;
        //得到当前登录ID
        var curUserID = $("#curUserTmpHide").html();

        //借助ajax插入数据库
        $.ajax({
            type: "post",
            url: "wsTest.asmx/insertReply",
            data: "{'blogID':'" + RblogID + "','userID':'" + curUserID + "','content':'" + txt + "'}",
            dataType: "json",
            contentType: "application/json",
            success: function (res) {
                if (res.d != null) {
                    //发帖成功
                    $(".txtRR").val("");

                    appendReReplyOfThisReply(res.d);

                }
                else {
                    alert("发帖失败");
                }
            }
        });

    });


    //点击查看回复
    $(document).on("click", ".btnShowReplys", function () {
        var open = $(this).attr("isopen");
        var yy = $(this).parent().parent();
        var rorContent = yy.find(".rorContent");
        var rorOpe = yy.find(".rorOpe");
        if (open == "no") {
            //获取该回复的所有回复

            var replyid = $(this).attr("replyid");
            rorOpe.show();
            rorContent.show();
            getReplyOfThisReply(replyid);
            $(this).attr("isopen", "yes");
            $(this).html("收起");
        }
        else {
            rorOpe.hide();
            rorContent.hide();
            var removereplyid = $(this).attr("replyid");
            RemoveReplyOfThisReply(removereplyid);
            $(this).attr("isopen", "no");
            $(this).html("查看回复");
        }
    });

    //点击底部回复
    $("#btnReply").click(function () {
        checkLogin();
        var sf = $(this).attr("showFlag");
        //        alert(sf);
        if (sf == "hide") {
            $("#txtReply").fadeIn(500);
            $(this).attr("showFlag", "show");
        }
        $("#txtReply").click(function () {
            $("#txtReply").css("background-image", "url('')");
        });
        if (sf == "show") {
            var txt = $("#txtReply").val(); //val：输入的内容
            if (txt == "") {
                $("#btnReply").click(function () {
                    $("#txtReply").css("background-image", "url('../../Images/hfbg.jpg')");
                });
                return;
            }
            // $("#txtReply").html(txt);

            //得到当前帖子ID
            var blogID = $("#hideTmp").html();
            //得到当前登录ID
            var curUserID = $("#curUserTmpHide").html();
            // alert(curUserID + " 为帖子 " + blogID + " 回复了一个 :" + txt);
            //借助ajax插入数据库
            $.ajax({
                type: "post",
                url: "wsTest.asmx/insertReply",
                data: "{'blogID':'" + blogID + "','userID':'" + curUserID + "','content':'" + txt + "'}",
                dataType: "json",
                contentType: "application/json",
                success: function (res) {
                    if (res.d != null) {
                        //发帖成功
                        $("#txtReply").val("");
                        $("#txtReply").hide();
                        $("#btnReply").attr("showFlag", "hide");
                        $("#txtReply").css("background-image", "url('../../Images/hfbg.jpg')");
                        $("#opeArea").css("background-image", "url('../../Images/huifu.jpg')");
                        //将成功发表的回复追加到回复列表
                        appendReply(res.d);

                    }
                    else {
                        alert("发帖失败");
                    }
                }
            });
        }
    });
});

//获取帖子的所有回复
$(function () {
    //得到当前帖子ID
    //alert("11");
    var blogID = $("#hideTmp").html();
    //alert(blogID);
    getReply(blogID);
});

//添加回复
function appendReply(replayinfo) {   
    var blogParentID;
    var blogID = $("#hideTmp").html();
    var replyStr;
    var replyID;
    var userHeadImage;
    var userName;
    $(replayinfo).each(function () {
        replyStr = this["blogContent"];
        replyID = this["blogID"];
        userHeadImage = this["userHeadImage"];
        userName = this["userName"];
        blogParentID = this["blogParentID"];
    });
    var html = "";
    html += '<div class="replyA">';
    html += '                <div class="replyL">';
    html += '                <a  href="Showuser.aspx?uid=2" class="Authorpic"><img src="' + userHeadImage + '" /></a>';
    html += '                <a href="ShowUser.aspx?uid=2" class="authorTxt">' + userName + '</a>';
    html += '                </div>';
    html += '                <div class="replyR">';
    html += '                    <div class="replyContent">' + replyStr + '</div>';
    html += '                    <div class="replyOfReply">';
    html += '                        <div class="rorTitle"><span isopen="no" replyid="' + replyID + '" class="btnShowReplys">查看回复</sapn></div>';
    html += '                        <ul class="rorContent' + replyID + '">';

    html += '                        </ul>';
    html += '                       <div class="rorOpe">';
    html += '                            <input class="txtRR"/>';
    html += '                            <div class="btnRR">发表</div>';
    html += '                        </div>';
    html += '                    </div>';
    html += '                </div>';
    html += '            </div>';

    $("#replyArea").append(html);

//    if (blogParentID == blogID) {
//        $("#replyArea").append(html);
//    }
//    else {
//        alert(".rorContent" + blogParentID);
//        $(".rorContent" + blogParentID).append(html);
//    }
};

//获得回复的回复据blogID
function getReplyOfThisReply(rid) {
    //alert(rid);
    if (rid == "") {
        return;
    }
    $.ajax({
        type: "post",
        url: "wsTest.asmx/getReplyByBlogID",
        data: "{'blogID':'" + rid + "'}",
        dataType: "json",
        contentType: "application/json",
        success: function (res) {
            //            alert("s");
            //            alert(res.d, length);
            $(res.d).each(function () {
                //var replyStr = this["blogContent"];
                //appendReply(this);
                //appendReplyOfThisReply(replyStr, rid);
                appendReReplyOfThisReply(this);
                //return res;
            });
        }
    });
}

//隐藏回复的回复
function RemoveReplyOfThisReply(rid) {
    //$(".ReplyOfThisReply"+rid).css("display", "none");
    //$("#txtReply").css("background-image", "url('')");
    //var html = "";
    $(".replyA" + rid).css("display", "none");
}



//添加回复的回复 及 添加回复的回复的回复
function appendReReplyOfThisReply(replayinfo) {
    var blogParentID;
    var replyStr;
    var replyID;
    var userHeadImage;
    var userName;
    $(replayinfo).each(function () {
        replyStr = this["blogContent"];
        replyID = this["blogID"];
        userHeadImage = this["userHeadImage"];
        userName = this["userName"];
        blogParentID = this["blogParentID"];
    });


    var html = "";
    //html += "<li><span class='ReplyOfThisReply" + rid + "'>" + replyStr + "</span></li>";

    html += '<div class="replyA' + blogParentID + '">';
    html += '                <div class="RereplyL">';
    html += '                <a  href="Showuser.aspx?uid=2" class="ReAuthorpic"><img src="' + userHeadImage + '" /></a>';
    html += '                <a href="ShowUser.aspx?uid=2" class="ReauthorTxt" userName="' + userName + '">' + userName + '</a>';
    html += '                </div>';
    html += '                <div class="RereplyR">';
    html += '                    <div class="RereplyContent">' + replyStr + '</div>';
    html += '                    <div class="RereplyOfReply">';
    html += '                            <div class="RebtnRR">回复</div>';
    html += '                        </div>';
    html += '                    </div>';
    html += '                </div>';
    html += '            </div>';
    $(".rorContent" + blogParentID).append(html);
}

//获取帖子的所有回复
function getReply(rid) {
    if (rid == "") {
        return;
    }
    $.ajax({
        type: "post",
        url: "wsTest.asmx/getReplyByBlogID",
        data: "{'blogID':'" + rid + "'}",
        dataType: "json",
        contentType: "application/json",
        success: function (res) {
            //            alert("s");
            //            alert(res.d, length);
            $(res.d).each(function () { 
                //bloginfo onee = (bloginfo)res[0];
                appendReply(this);
            });

            //appendReply(res.d);
            //            $(res.d).each(function () {
            //                var replyStr = this["blogContent"];
            //                var replyID = this["blogID"];
            //                appendReply(replyStr, replyID);
            //                //return res;
            //            });
        }
    });
}

//检测登录
function checkLogin() {
    $.ajax({
        type: "post",
        url: "wsTest.asmx/readUserSession",
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




//回回复
//$(document).on("click", ".btnRR", function () {

//    var txt = $(".txtRR").val(); //val：输入的内容
//    alert(txt);
//    //        if (txt == "") {
//    //            $("#txtRR").css("background-image", "url('../../Images/hfbg.jpg')");
//    //            return;
//    //        }
//    // $("#txtReply").html(txt);

//    //得到当前帖子ID
//    //        var yy = $(this).parent();
//    //        var rorTitle = yy.find(".rorTitle");
//    //        var replyid = $(".rorTitle").attr("replyid");
//    //        var blogID = replyid;
//    var blogID = $("#txtReply").html(txt);

//    //得到当前登录ID
//    var curUserID = $("#curUserTmpHide").html();
//    // alert(curUserID + " 为帖子 " + blogID + " 回复了一个 :" + txt);
//    //借助ajax插入数据库
//    $.ajax({
//        type: "post",
//        url: "wsTest.asmx/insertReply",
//        data: "{'blogID':'" + blogID + "','userID':'" + curUserID + "','content':'" + txt + "'}",
//        dataType: "json",
//        contentType: "application/json",
//        success: function (res) {
//            if (res.d != "") {
//                //发帖成功
//                alert("d");
//                //                    $("#txtReply").val("");
//                //                    $("#txtReply").hide();
//                //                    $("#btnReply").attr("showFlag", "hide");
//                //                    $("#txtReply").css("background-image", "url('../../Images/hfbg.jpg')");
//                //                    $("#opeArea").css("background-image", "url('../../Images/huifu.jpg')");
//                //将成功发表的回复追加到回复列表
//                //appendReply(txt, res.d);
//                getReply(res.d);
//            }
//            else {
//                alert("发帖失败");
//            }
//        }
//    });

//});



////添加回复的回复
//function appendReplyOfThisReply(replyStr, rid) {

//    var html = "";
//    html += "<li><span class='ReplyOfThisReply" + rid + "'>" + replyStr + "</span></li>";


//    //$(".btnShowReplys").parent().parent().find(".rorContent").append(html);
//    $(".rorContent" + rid).append(html);
//}