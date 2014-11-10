<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="HYTC.bbs.Login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="App_Themes/default/login.css" rel="stylesheet" type="text/css" />
    <script src="jquery/jquery.js" type="text/javascript"></script>
    <script src="jquery/login.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <div id="btnTest">测试</div>
        <%--<div id="all"></div>
        <div id="alla"></div>--%>
        <input type="text" id="txtuserId"/>
        <input type="text" id="txtuserPwd"/>
    </div>
    </form>
</body>
</html>
