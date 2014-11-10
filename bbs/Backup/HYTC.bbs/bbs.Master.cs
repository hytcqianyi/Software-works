using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace HYTC.bbs
{
    public partial class bbs : System.Web.UI.MasterPage
    {
        public string a;
        protected void Page_Load(object sender, EventArgs e)
        {
            a = System.DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
            //Session["userid"] = 1;
            //Session["userMingzi"] = "22";
            //检测访问当前页的用户是否登录
            //if (Session["userid"] == null || Session["userid"] == "")
            //{
            //    string html = "";
            //    html += "<a id='mSignin' herf='#'>注册</a>";
            //    html += "<a id='mLogin' herf='#'>登录</a>";
            //    this.mUserArea.InnerHtml = html;
            //}
            //else 
            //{
            //    string html = "";
            //    html += "<a id='mLogout' herf='#'>注销</a>";
            //    html += "<a id='muserA' herf='showuser.aspx?userid=" + Session["userid"].ToString() + "'>" + Session["userMingzi"].ToString() + "</a>";
            //    this.mUserArea.InnerHtml = html;
            //}
        }
    }
}
