<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="HYTC.bbs._Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title></title>
    <link href="App_Themes/default/theme.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
    <div id="sectionAll">
        <asp:DataList runat="server" ID="sectiondl" RepeatColumns="2" RepeatDirection="Horizontal" RepeatLayout="Table">
            <ItemTemplate>
            <div class="sectionA">
                <a class="logoA" href="http://www.baidu.com">
                    <img src="<%# Eval("sectionPic") %>" />
                </a>
                <ul class="rightA">
                    <li>
                        <a class="titleA" href="http://www.baidu.com"><%# Eval("sectionTitle") %></a>
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
    </form>
</body>
</html>
