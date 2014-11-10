using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace HYTC.bbs
{
    public partial class Showblog : System.Web.UI.Page
    {
        public string blogID;
        protected void Page_Load(object sender, EventArgs e)
        {
            blogID = Request.QueryString["bid"];
            string sbkID = Request.QueryString["bid"];
            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["connection"].ConnectionString))
            {
                using (SqlDataAdapter sda = new SqlDataAdapter("select * from blogInfo,userInfo where blogAuthor=userID and blogID=" + sbkID, conn))
                {
                    conn.Open();
                    using (DataTable dt = new DataTable())
                    {
                        sda.Fill(dt);
                        this.Blogs.DataSource = dt;
                        this.Blogs.DataBind();
                    }
                }
            }
        }
    }
}