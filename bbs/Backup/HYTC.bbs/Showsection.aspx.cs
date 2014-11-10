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
    public partial class Showsection : System.Web.UI.Page
    {
        public string ssectionTitle;
        public string ssID;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.QueryString["ssId"] == null || Request.QueryString["ssId"] == "")
            {
                Response.Redirect("error.aspx?error=2");
            }
            ssID = Request.QueryString["ssId"];

            string constr = ConfigurationManager.ConnectionStrings["connection"].ConnectionString;
            using (SqlConnection conn = new SqlConnection(constr))
            {
                using (SqlDataAdapter sda = new SqlDataAdapter("select * from section,ssection where section.ssectionID=ssection.ssectionID and section.ssectionID=" + ssID, conn))
                {
                    conn.Open();
                    using (DataTable dt = new DataTable())
                    {
                        sda.Fill(dt);
                        sectiondl1.DataSource = dt;
                        sectiondl1.DataBind();
                        sectiondl2.DataSource = dt;
                        sectiondl2.DataBind();
                        ssectionTitle = dt.Rows[0]["ssectionTitle"].ToString();

                    }
                    conn.Close();
                }
            }
        }
    }
}