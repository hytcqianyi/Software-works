<%@ Page Title="" Language="C#" MasterPageFile="~/bbs.Master" AutoEventWireup="true"
    CodeBehind="BlogList.aspx.cs" Inherits="HYTC.bbs.BlogList" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="App_Themes/default/bolglist.css" rel="stylesheet" type="text/css" />
    <script src="jquery/showBlog.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="topbox">
        <div class="tpb1">
            <h2>
                游戏讨论区<br />
                <span>Experience serving</span>
            </h2>
        </div>
        <div class="tpb2">
            <h2>
                推荐主题</h2>
            <div class="bloglistl">
                <ul>
                    <li><a href="ShowBlog.aspx?bid=<%= dtl.Rows[0]["blogID"] %>">
                        <%=dtl.Rows[0]["blogTile"].ToString()%></a></li>
                    <li><a href="ShowBlog.aspx?bid=<%= dtl.Rows[1]["blogID"] %>">
                        <%=dtl.Rows[1]["blogTile"].ToString()%></a></li>
                    <li><a href="ShowBlog.aspx?bid=<%= dtl.Rows[2]["blogID"] %>">
                        <%=dtl.Rows[2]["blogTile"].ToString()%></a></li>
                </ul>
            </div>
            <div class="bloglistr">
                <ul>
                    <li><a href="ShowBlog.aspx?bid=<%= dtl.Rows[3]["blogID"] %>">
                        <%=dtl.Rows[3]["blogTile"].ToString()%></a></li>
                    <li><a href="ShowBlog.aspx?bid=<%= dtl.Rows[4]["blogID"] %>">
                        <%=dtl.Rows[4]["blogTile"].ToString()%></a></li>
                    <li><a href="ShowBlog.aspx?bid=<%= dtl.Rows[5]["blogID"] %>">
                        <%=dtl.Rows[5]["blogTile"].ToString()%></a></li>
                </ul>
            </div>
        </div>
        <div class="tpb3">
            <h2>
                版面精华</h2>
            <div class="bloglistl">
                <ul id="cs">
                    <li><a href="ShowBlog.aspx?bid=<%= dtr.Rows[0]["blogID"] %>">
                        <%=dtr.Rows[0]["blogTile"].ToString()%></a></li>
                    <li><a href="ShowBlog.aspx?bid=<%= dtr.Rows[1]["blogID"] %>">
                        <%=dtr.Rows[1]["blogTile"].ToString()%></a></li>
                    <li><a href="ShowBlog.aspx?bid=<%= dtr.Rows[2]["blogID"] %>">
                        <%=dtr.Rows[2]["blogTile"].ToString()%></a></li>
                </ul>
            </div>
            <div class="bloglistr">
                <ul id="Ul1">
                   <%-- <li><a href="ShowBlog.aspx?bid=<%= dtr.Rows[3]["blogID"] %>">
                        <%=dtr.Rows[3]["blogTile"].ToString()%></a></li>--%>
                    <%--<li><a href="ShowBlog.aspx?bid=<%= dtr.Rows[1]["blogID"] %>">
                        <%=dtr.Rows[1]["blogTile"].ToString()%></a></li>
                    <li><a href="ShowBlog.aspx?bid=<%= dtr.Rows[2]["blogID"] %>">
                        <%=dtr.Rows[2]["blogTile"].ToString()%></a></li>--%>
                </ul>
            </div>
        </div>
    </div>

    

    <%--<div runat="server" id="blogDetail"></div>--%>
    <div id="bllist">
        <div id="th">
            <div class="tbody">
                <div class="tf">
                    筛选 <a href="#">全部主题</a> <span>|</span> <a href="#">推荐</a> <span>|</span> <a href="#">
                        精华</a>
                </div>
                <div class="by">作者</div>
                <div class="num">日期</div>
                <%--<div class="by">最后发表</div>--%>
            </div>
        </div>
        <asp:Repeater runat="server" ID="blogDetail1">
            <HeaderTemplate>
                <ul id="bolgUL">
            </HeaderTemplate>
            <ItemTemplate>
                <li class="blogLi"><a class="newA" href="ShowBlog.aspx?bid=<%# Eval("blogID") %>">
                    <img src="Images/pin_1.gif" />
                </a>
                    <div class="blog2A">
                        <a class="blogTA" href="ShowBlog.aspx?bid=<%# Eval("blogID") %>">
                            <%# Eval("blogTile") %></a>
                    </div>
                    <div class="blog3A">
                        <a class="authorA" href="Showuser.aspx?uid=<%# Eval("blogAuthor") %>">
                            <%# Eval("userName") %></a> <span class="pubTimeSpan">
                                <%# string.Format("{0:d}", Eval("blogPubTime")) %></span>
                    </div>
                    <div class="blog4A">
                    </div>
                    <div class="blog5A">
                    </div>
                </li>
            </ItemTemplate>
            <FooterTemplate>
                </ul></FooterTemplate>
        </asp:Repeater>
    </div>

    <div id="Postlist"><a id="post" href="post.aspx"><img src="Images/pn_post.png" /></a></div>
</asp:Content>
