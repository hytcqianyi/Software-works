<%@ Page Title="" Language="C#" MasterPageFile="~/bbs.Master" AutoEventWireup="true" CodeBehind="Showblog.aspx.cs" Inherits="HYTC.bbs.Showblog" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="App_Themes/default/Showblog.css" rel="stylesheet" type="text/css" />
    <script src="jquery/showBlog.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    
<asp:Repeater runat="server" ID="Blogs" >
 <ItemTemplate>
    <div id="all">
        <div id="blogArea">
            <div class="authorA">
                <div class="seeMaster"></div>
                <a target="_blank" href="http://www.baidu.com" class="Authorpic"><img src="<%# Eval("userHeadImage") %>" /></a>
                <a class="procs"></a>
                <a  href=""class="authorTxt"><%#Eval("userName")%></a>
                <a class="levelA" href="">
                    <span class="leveldes"></span>
                    <div class="levelPic"></div>
                </a>
            </div>
            <div class="blogRight">
                <div id="blogDetail"><%#Eval("blogContent") %></div>
                <div id="authorSign"></div>
            </div>
        </div>
        <div id="replyArea">
        </div>
    </div>
  </ItemTemplate>       
</asp:Repeater>
        <i id="hideTmp"><%=blogID %></i>
        <div id="opeArea">
             <input type="text" id="txtReply" value=""/>
             <div id="btnReply" showFlag="hide">回复</div>
        </div>
</asp:Content>
