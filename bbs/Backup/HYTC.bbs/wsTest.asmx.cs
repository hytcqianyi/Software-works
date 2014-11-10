using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace HYTC.bbs
{
    /// <summary>
    /// wsTest 的摘要说明
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // 若要允许使用 ASP.NET AJAX 从脚本中调用此 Web 服务，请取消对下行的注释。
    [System.Web.Script.Services.ScriptService]
    public class wsTest : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            string test = "Hello World";
            return test;
        }

        [WebMethod(EnableSession = true)]
        public void Logout()
        {
            Session["userid"] = "";
        }

        [WebMethod (EnableSession=true)]
        public Userinf checkUser(string userId, string userPwd)
        {
            Userinf user = new Userinf();
            string constr = ConfigurationManager.ConnectionStrings["connection"].ConnectionString;
            using (SqlConnection conn = new SqlConnection(constr))
            {
                string sql="select * from userInfo where userID='"+userId+"' and userPwd='"+userPwd+"'";
                using (SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    conn.Open();  
                    using (SqlDataReader sdr = cmd.ExecuteReader())
                    {
                        if (sdr.Read())
                        {
                            Session["userid"] = sdr["userID"].ToString();
                            Session["userMingzi"] = sdr["userName"].ToString();
                            Session["UserState"] = sdr["userState"].ToString();
                            Session["UserHeadImage"] = sdr["userHeadImage"].ToString();
                            Session["UserLevel"] = sdr["userLevel"].ToString();
                            return user;
                        }
                        else
                        {
                            return null;
                        }
                    }
                }
            }
        }
        [WebMethod(EnableSession = true)]
        public void closeUserSession()
        {
            Session["userid"] = "";


        }
        [WebMethod(EnableSession = true)]
        public Userinf readUserSession()
        {
            if (Session["userid"] == null || Session["userid"].ToString() == "")
            {
                return null;
            }
            Userinf user = new Userinf();
            user.UserID = Session["userid"].ToString();
            user.UserName = Session["userMingzi"].ToString();
            user.UserState = Session["UserState"].ToString();
            user.UserHeadImage = Session["UserHeadImage"].ToString();
            user.UserLevel = Session["UserLevel"].ToString();
            return user;
        }
        [WebMethod(EnableSession = true)]
        public bloginfo insertReply(string blogID, string userID, string content)
        {
            int res;
            string Connstr = ConfigurationManager.ConnectionStrings["connection"].ConnectionString;
            using (SqlConnection conn = new SqlConnection(Connstr))
            {
                string sql;
                sql = "insert into blogInfo (blogAuthor,blogPubTime,blogType,blogContent,blogLikeCount,bloghateCount,blogCollectCount,blogShareCount,blogState,blogShowCount,blogParentID) values('" + userID + "',GETDATE(),'1','" + content + "',0,0,0,0,1,0,'" + blogID + "')";
                using (SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    conn.Open();
                    res=cmd.ExecuteNonQuery();
                }
            }
            if (res == 1)
            {
                using (SqlConnection conn = new SqlConnection(Connstr))
                {
                    string sql = "select * from blogInfo,userInfo where blogID=(select max(blogID)  from blogInfo) and blogAuthor=userID";
                    using (SqlCommand cmd = new SqlCommand(sql, conn))
                    {
                        conn.Open();
                        SqlDataReader sdr = cmd.ExecuteReader();
                        if (sdr.Read())
                        {
                            bloginfo replayInfo = new bloginfo();
                            replayInfo.blogParentID = sdr["blogParentID"].ToString();
                            replayInfo.blogID = sdr["blogID"].ToString();
                            replayInfo.blogAuthor = sdr["blogAuthor"].ToString();
                            replayInfo.blogContent = sdr["blogContent"].ToString();
                            replayInfo.userHeadImage = sdr["userHeadImage"].ToString();
                            replayInfo.userName = sdr["userName"].ToString();
                            return replayInfo;
                        }
                        else
                        {
                            return null;
                        }
                    }
                }
            }
            else
            {
                return null;
            }
        }


        [WebMethod]
        public List<bloginfo> getReplyByBlogID(string blogID)
        {
            List<bloginfo> res = new List<bloginfo>();
            string Connstr = ConfigurationManager.ConnectionStrings["connection"].ConnectionString;
            using (SqlConnection conn = new SqlConnection(Connstr))
            {

                string sql = "select *  from blogInfo,userInfo where blogAuthor=userID and blogParentID=" + blogID;
                using (SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    conn.Open();
                    SqlDataReader sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        bloginfo one = new bloginfo();
                        one.blogID = sdr["blogID"].ToString();
                        one.blogAuthor = sdr["blogAuthor"].ToString();
                        one.blogContent = sdr["blogContent"].ToString();
                        one.userHeadImage = sdr["userHeadImage"].ToString();
                        one.userName = sdr["userName"].ToString();
                        one.blogParentID = sdr["blogParentID"].ToString();
                        res.Add(one);
                    }
                }              
            }
            return res;
        }
    }
}
