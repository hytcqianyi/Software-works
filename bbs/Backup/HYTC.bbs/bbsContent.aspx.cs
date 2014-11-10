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
    public partial class bbsContent : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string constr = ConfigurationManager.ConnectionStrings["connection"].ConnectionString;
            using (SqlConnection conn = new SqlConnection(constr))
            {
                using (SqlDataAdapter sda = new SqlDataAdapter("select * from section where ssectionID=1", conn))
                {
                    conn.Open();
                    using (DataTable dt = new DataTable())
                    {
                        sda.Fill(dt);
                        sectiondl1.DataSource = dt;
                        sectiondl1.DataBind();
                    }
                    conn.Close();
                }
                using (SqlDataAdapter sda = new SqlDataAdapter("select * from section where ssectionID=2", conn))
                {
                    conn.Open();
                    using (DataTable dt = new DataTable())
                    {
                        sda.Fill(dt);
                        sectiondl2.DataSource = dt;
                        sectiondl2.DataBind();
                    }
                    conn.Close();
                }
                using (SqlDataAdapter sda = new SqlDataAdapter("select * from section where ssectionID=3", conn))
                {
                    conn.Open();
                    using (DataTable dt = new DataTable())
                    {
                        sda.Fill(dt);
                        sectiondl3.DataSource = dt;
                        sectiondl3.DataBind();
                    }
                    conn.Close();
                }
                using (SqlDataAdapter sda = new SqlDataAdapter("select * from section where ssectionID=4", conn))
                {
                    conn.Open();
                    using (DataTable dt = new DataTable())
                    {
                        sda.Fill(dt);
                        sectiondl4.DataSource = dt;
                        sectiondl4.DataBind();
                    }
                    conn.Close();
                }
            }
        }
    }
}
