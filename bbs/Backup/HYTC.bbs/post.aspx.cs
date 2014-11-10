using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace HYTC.bbs
{
    public partial class post : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
            //string Connstr = ConfigurationManager.ConnectionStrings["connection"].ConnectionString;
            //using (SqlConnection conn = new SqlConnection(Connstr))
            //{
            //    string sql;
            //    sql = "insert into blogInfo (blogAuthor,blogPubTime,blogType,blogContent,blogLikeCount,bloghateCount,blogCollectCount,blogShareCount,blogState,blogShowCount,blogParentID) values('" + userID + "',GETDATE(),'1','" + content + "',0,0,0,0,1,0,0')";
            //    using (SqlCommand cmd = new SqlCommand(sql, conn))
            //    {
            //        conn.Open();
            //        cmd.ExecuteNonQuery();
            //    }
            //}
        }
    }
}