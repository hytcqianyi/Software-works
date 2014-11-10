using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;

namespace HYTC.bbs
{
    public partial class BlogList : System.Web.UI.Page
    {
        public DataTable dtl;
        public DataTable dtr;
        protected void Page_Load(object sender, EventArgs e)
        {
            //DataRow dr = dtl.NewRow();
            //dr[0] = "1";
            //dr[1] = "2";
            //dr[2] = "3";
            //dtl.Rows.Add(dr);
            if (Request.QueryString["sid"] == null || Request.QueryString["sid"] == "")
            {
                Response.Redirect("error.aspx?error=2");
            }
            string bkID = Request.QueryString["sid"];

            string constr = ConfigurationManager.ConnectionStrings["connection"].ConnectionString;
            using (SqlConnection conn = new SqlConnection(constr))
            {
                using (SqlDataAdapter sda = new SqlDataAdapter("select * from blogInfo where sectionID=" + bkID + "and blogRec=1", conn))
                {
                    conn.Open();
                    using (dtl = new DataTable())
                    {
                        sda.Fill(dtl);
                        //this.bloglist.DataSource = dtl;
                        //this.bloglist.DataBind();
                    }
                }
            }


            
            using (SqlConnection conn = new SqlConnection(constr))
            {
                using (SqlDataAdapter sda = new SqlDataAdapter("select * from blogInfo where sectionID=" + bkID + "and blogElite=1", conn))
                {
                    conn.Open();
                    using (dtr = new DataTable())
                    {
                        sda.Fill(dtr);
                        //this.bloglist.DataSource = dtl;
                        //this.bloglist.DataBind();
                    }
                }
            }


            //string constr = ConfigurationManager.ConnectionStrings["connection"].ConnectionString;
            using (SqlConnection conn = new SqlConnection(constr))
            {
                using (SqlDataAdapter sda = new SqlDataAdapter("select * from VblogInfo where sectionID=" + bkID + "and blogParentID=0", conn))
                {
                    conn.Open();
                    using (DataTable dt = new DataTable())
                    {
                        sda.Fill(dt);
                        this.blogDetail1.DataSource = dt;
                        this.blogDetail1.DataBind();

                    }
                }
            }
        }
    }
}