<%@ Page Title="" Language="C#" MasterPageFile="~/bbs.Master" AutoEventWireup="true"
    CodeBehind="Showsection.aspx.cs" Inherits="HYTC.bbs.Showsection" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="App_Themes/default/theme.css" rel="stylesheet" type="text/css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="ssectionH">
        <h2>
            <a href="Showsection.aspx?ssId=<%=ssID %>">
                <%=ssectionTitle %></a></h2>
    </div>
    <%if (Convert.ToInt32(ssID) == 1)
      { %>
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
    <%}
      else
      { %>
    <div class="ssectionC">
        <asp:DataList runat="server" ID="sectiondl2" RepeatColumns="2" RepeatDirection="Horizontal"
            RepeatLayout="Table">
            <ItemTemplate>
                <div class="sectionA">
                    <a class="logoA" href="BlogList.aspx?sid=<%# Eval("sectionID") %>">
                        <img src="<%# Eval("sectionPic") %>" />
                    </a>
                    <ul class="rightA">
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
    <%} %>
</asp:Content>
