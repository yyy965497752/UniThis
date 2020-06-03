using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualBasic;
using Newtonsoft.Json;
using NewTool.Models;

namespace NewTool.Controllers
{
    [Route("async")]
    [Produces("application/json")]
    [EnableCors("to")]
    [ApiController]
    public class NewAsyncController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;
        UserInfo uInfo;
        private readonly interSee _intersee;
        public int dataFree { get; set; }

        public NewAsyncController(IConfiguration configuration,interSee interSee)
        {
            _configuration = configuration;
            _connectionString = "Data Source=.;Initial Catalog=orDB;Integrated Security=True";
            uInfo = new UserInfo();
            _intersee = interSee;

        }
        
     


        [HttpGet("user")]
        public ActionResult<IEnumerable<UserInfo>> ten()
        {

            var Rather = new List<UserInfo>();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                SqlCommand command = new SqlCommand($"select * from UserInfo", connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Rather.Add(HelpToo.ADONetToClass<UserInfo>(reader));
                }

            }

            return Ok(Rather);

        }
        [HttpGet("toos")]
        public async Task<ActionResult<IEnumerable<UserInfo>>> tens()
        {

            var Rather = new List<UserInfo>();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                SqlCommand command = new SqlCommand($"select * from UserInfo where sex='男' ", connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Rather.Add(HelpToo.ADONetToClass<UserInfo>(reader));
                }

            }
            

            return Ok(Rather);

        }

    }

    public interface interSee
    {
        Task<IEnumerable<UserInfo>> asyncTool();
    
    }

    public class HelpToo
    {
        public static T ADONetToClass<T>(SqlDataReader reader) where T : new()
        {
            var entity = new T();
            var type = typeof(T);
            var properties = type.GetProperties();
            foreach (var property in properties)
            {
                if (property.Name == "ID")
                {
                    property.SetValue(entity, Guid.Parse(reader[property.Name].ToString()));
                }
                else
                {
                    property.SetValue(entity, Convert.ChangeType(reader[property.Name], property.PropertyType));
                }

            }
            return entity;

        }
    }

    public class helpY
    {
        private readonly string _connectionString;
       
        public helpY()
        {
            _connectionString = "Data Source=.;Initial Catalog=orDB;Integrated Security=True";
        
        }
        public  List<T> GetList<T>(string sql)
        {
            using (SqlConnection conn=new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlDataAdapter adapter = new SqlDataAdapter(sql,conn);
                DataTable dt = new DataTable();
                adapter.Fill(dt);
                adapter.Dispose();
                conn.Close();
                return JsonConvert.DeserializeObject<List<T>>(JsonConvert.SerializeObject(dt));

            }
        
        }
    
    }
        
}