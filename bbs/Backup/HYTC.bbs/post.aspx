<%@ Page Title="" Language="C#" MasterPageFile="~/bbs.Master" AutoEventWireup="true"
    CodeBehind="post.aspx.cs" Inherits="HYTC.bbs.post" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="jquery/jquery.js" type="text/javascript"></script>
    <script src="ueditor1_3_6-utf8-net/ueditor.config.js" type="text/javascript"></script>
    <script src="ueditor1_3_6-utf8-net/ueditor.all.js" type="text/javascript"></script>
    <script src="ueditor1_3_6-utf8-net/lang/zh-cn/zh-cn.js" type="text/javascript"></script>
    <script src="jquery/myueditor.js" type="text/javascript"></script>
    <link href="App_Themes/default/post.css" rel="stylesheet" type="text/css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="box">
        <div id="myUe" style="width: 959px; height:300px;">
        </div>
        <%--<input type="text" id="nh" value=""/>
        <div id="npost">
            发帖</div>--%>
        <div id="nopeArea">
             <div id="npost" showFlag="hide">发帖</div>
        </div>
    </div>
</asp:Content>
