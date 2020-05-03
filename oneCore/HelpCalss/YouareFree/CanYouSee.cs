using HelpCalss.DoyouModel;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace HelpCalss.YouareFree
{
    public class CanYouSee
    {
        static string strconn = "Data Source=追着;Initial Catalog=Pcr;Integrated Security=True";
        public static List<T> GetList<T>(string sql)
        {
            using (SqlConnection conn = new SqlConnection(strconn))
            {
                conn.Open();
                SqlDataAdapter adapter = new SqlDataAdapter(sql, conn);
                DataTable dt = new DataTable();
                adapter.Fill(dt);
                adapter.Dispose();
                conn.Close();
                return JsonConvert.DeserializeObject<List<T>>(JsonConvert.SerializeObject(dt));
            }
        }
        public static List<CarDetails> ModelList(string TBName)
        {
            string ConterStr = $"select * from carinfo";
            List<CarDetails> list = GetList<CarDetails>(ConterStr);
            return list.ToList();

        }

        

    }
}
