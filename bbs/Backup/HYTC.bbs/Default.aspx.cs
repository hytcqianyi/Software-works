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
    public partial class _Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string constr = ConfigurationManager.ConnectionStrings["connection"].ConnectionString;
            using (SqlConnection conn = new SqlConnection(constr))
            {
                using (SqlDataAdapter da = new SqlDataAdapter("select * from section", conn))
                {
                    using (DataTable dt = new DataTable())
                    {
                        da.Fill(dt);
                        this.sectiondl.DataSource = dt;
                        this.sectiondl.DataBind();
                    }
                }
            }
        }
    }
}
