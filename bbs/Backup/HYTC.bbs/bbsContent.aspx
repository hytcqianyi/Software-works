<%@ Page Title="" Language="C#" MasterPageFile="~/bbs.Master" AutoEventWireup="true"
    CodeBehind="bbsContent.aspx.cs" Inherits="HYTC.bbs.bbsContent" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="App_Themes/default/theme.css" rel="stylesheet" type="text/css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="ssection">
        <div class="ssectionH">
            <h2>
                <a href="Showsection.aspx?ssId=1">公告区</a></h2>
        </div>
        <div class="ssectionC">
            <asp:DataList runat="server" ID="sectiondl1" RepeatColumns="2" RepeatDirection="Horizontal"
                RepeatLayout="Table">
                <ItemTemplate>
                    <div class="sectionAg">
                        <a class="logoAg" href="BlogList.aspx?sid=<%# Eval("sectionID") %>">
                            <img src="<%# Eval("sectionPic") %>" />
                        </a>
                        <ul class="rightAg">
                            <li><a class="titleAg" href="BlogList.aspx?sid=<%# Eval("sectionID") %>">
                                <%# Eval("sectionTitle") %></a> </li>
                            <li><span>主题：<%# Eval("themeCount") %>
                                帖数：<%# Eval("postCount") %></span> </li>
                            <li><span>
                                <%# Eval("sectionDes") %></span> </li>
                        </ul>
                    </div>
                </ItemTemplate>
            </asp:DataList>
        </div>
        <div class="ssectionH">
            <h2>
                <a href="Showsection.aspx?ssId=2">交流区</a></h2>
        </div>
        <div class="ssectionC">
            <asp:DataList runat="server" ID="sectiondl2" RepeatColumns="2" RepeatDirection="Horizontal"
                RepeatLayout="Table">
                <ItemTemplate>
                    <div class="sectionA">
                        <a class="logoA" href="BlogList.aspx?sid=<%# Eval("sectionID") %>">
                            <img src="<%# Eval("sectionPic") %>" />
                        </a>
                        <ul class="rightA">
                            <li><a class="titleA" href="BlogList.aspx?sid=<%# Eval("sectionID") %>">
                                <%# Eval("sectionTitle") %></a> </li>
                            <li><span>主题：<%# Eval("themeCount") %>
                                帖数：<%# Eval("postCount") %></span> </li>
                            <li><span>
                                <%# Eval("sectionDes") %></span> </li>
                        </ul>
                    </div>
                </ItemTemplate>
            </asp:DataList>
        </div>
        <div class="ssectionH">
            <h2>
                <a href="Showsection.aspx?ssId=4">服务区</a></h2>
        </div>
        <div class="ssectionC">
            <asp:DataList runat="server" ID="sectiondl4" RepeatColumns="2" RepeatDirection="Horizontal"
                RepeatLayout="Table">
                <ItemTemplate>
                    <div class="sectionA">
                        <a class="logoA" href="BlogList.aspx?sid=<%# Eval("sectionID") %>">
                            <img src="<%# Eval("sectionPic") %>" />
                        </a>
                        <ul class="rightA">
                            <li><a class="titleA" href="BlogList.aspx?sid=<%# Eval("sectionID") %>">
                                <%# Eval("sectionTitle") %></a> </li>
                            <li><span>主题：<%# Eval("themeCount") %>
                                帖数：<%# Eval("postCount") %></span> </li>
                            <li><span>
                                <%# Eval("sectionDes") %></span> </li>
                        </ul>
                    </div>
                </ItemTemplate>
            </asp:DataList>
        </div>
        <div class="ssectionH">
            <h2>
                <a href="Showsection.aspx?ssId=3">行政区</a></h2>
        </div>
        <div class="ssectionC">
            <asp:DataList runat="server" ID="sectiondl3" RepeatColumns="2" RepeatDirection="Horizontal"
                RepeatLayout="Table">
                <ItemTemplate>
                    <div class="sectionA">
                        <a class="logoA" href="BlogList.aspx?sid=<%# Eval("sectionID") %>">
                            <img src="<%# Eval("sectionPic") %>" />
                        </a>
                        <ul class="rightA">
                            <li><a class="titleA" href="BlogList.aspx?sid=<%# Eval("sectionID") %>">
                                <%# Eval("sectionTitle") %></a> </li>
                            <li><span>主题：<%# Eval("themeCount") %>
                                帖数：<%# Eval("postCount") %></span> </li>
                            <li><span>
                                <%# Eval("sectionDes") %></span> </li>
                        </ul>
                    </div>
                </ItemTemplate>
            </asp:DataList>
        </div>
        <div id="ssectionHL">
            <h2>
                <a>在线会员 - 总计 2262 人在线 - 226 会员,2036 位游客- 最高记录是 191800 于 2014-1-27.</a></h2>
        </div>
    </div>
    <%--<div>
        <div id="sectionAll">
                <asp:DataList runat="server" ID="sectiondl1" RepeatColumns="2" RepeatDirection="Horizontal" RepeatLayout="Table">
                    <ItemTemplate>
                    <div class="sectionA">
                        <a class="logoA" href="http://www.baidu.com">
                            <img src="<%# Eval("sectionPic") %>" />
                        </a>
                        <ul class="rightA">
                            <li>
                                <a class="titleA" href="BlogList.aspx?sid=<%# Eval("sectionID") %>"><%# Eval("sectionTitle") %></a>
                            </li>
                            <li>
                                <span>主题：<%# Eval("themeCount") %> 帖数：<%# Eval("postCount") %></span>
                            </li>
                            <li>
                                <span><%# Eval("sectionDes") %></span>
                            </li>
                        </ul>
                    </div>
                    </ItemTemplate>
                </asp:DataList>
        </div>
    </div>--%>
</asp:Content>
