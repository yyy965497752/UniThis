using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using NewTool.Models;

namespace NewTool.Controllers
{
    
    [Route("ycxgo")] 
    [Produces("application/json")]
    [EnableCors("to")]
    [ApiController]
    public class ToolKissController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;
        UserInfo uInfo;
        public int dataFree { get; set; }

        public ToolKissController(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = "Data Source=.;Initial Catalog=orDB;Integrated Security=True";
            uInfo = new UserInfo();

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
                    Rather.Add(HelpTool.ADONetToClass<UserInfo>(reader));
                }

            }
           
            return Ok(Rather);

        }

        [HttpGet("aiz")]
        public ActionResult<IEnumerable<UserInfo>> userhouse()
        {

            var Rather = new List<UserInfo>();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                SqlCommand command = new SqlCommand($"select * from UserInfo where sex='男'", connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Rather.Add(HelpTool.ADONetToClass<UserInfo>(reader));
                }

            }
            dataFree = Rather.Count();
            return Ok(dataFree);

        }

        #region 商品相关

        [HttpGet("shopOne")]
        public ActionResult<IEnumerable<UserInfo>> shopOne()
        {

            var Rather = new List<UserInfo>();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                SqlCommand command = new SqlCommand($"select * from UserInfo where sex='女'", connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Rather.Add(HelpTool.ADONetToClass<UserInfo>(reader));
                }

            }

            return Ok(Rather);

        }


        [HttpGet("shopTow")]
        public ActionResult<IEnumerable<UserInfo>> shopTow()
        {

            var Rather = new List<UserInfo>();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                SqlCommand command = new SqlCommand($"select * from Goods a join GoodsType b on a.Id=b.TypeParentid where b.TypeName='男装'", connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Rather.Add(HelpTool.ADONetToClass<UserInfo>(reader));
                }

            }

            return Ok(Rather);

        }

        [HttpGet("shopThree")]
        public ActionResult<IEnumerable<UserInfo>> shopThree()
        {

            var Rather = new List<UserInfo>();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                SqlCommand command = new SqlCommand($"select * from Goods a join GoodsType b on a.Id=b.TypeParentid where b.TypeName='女装'", connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Rather.Add(HelpTool.ADONetToClass<UserInfo>(reader));
                }

            }

            return Ok(Rather);

        }


        [HttpGet("shopfore")]
        public ActionResult<IEnumerable<UserInfo>> shopfore()
        {

            var Rather = new List<UserInfo>();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                SqlCommand command = new SqlCommand($"select * from Goods a join GoodsType b on a.Id=b.TypeParentid where b.TypeName='童装'", connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Rather.Add(HelpTool.ADONetToClass<UserInfo>(reader));
                }

            }

            return Ok(Rather);

        }


        #endregion


        #region 人物


        [HttpGet("userone")]
        public ActionResult<IEnumerable<UserInfo>> userone()
        {

            var Rather = new List<UserInfo>();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                SqlCommand command = new SqlCommand($"select * from Orders", connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Rather.Add(HelpTool.ADONetToClass<UserInfo>(reader));
                }

            }

            return Ok(Rather);

        }
        [HttpGet("usertwo")]
        public ActionResult<IEnumerable<UserInfo>> usertwo()
        {

            var Rather = new List<UserInfo>();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                SqlCommand command = new SqlCommand($"select * from Man", connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Rather.Add(HelpTool.ADONetToClass<UserInfo>(reader));
                }

            }

            return Ok(Rather);

        }
        [HttpGet("userthree")]
        public ActionResult<IEnumerable<UserInfo>> userthree()
        {

            var Rather = new List<UserInfo>();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                SqlCommand command = new SqlCommand($"select * from depart", connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Rather.Add(HelpTool.ADONetToClass<UserInfo>(reader));
                }

            }

            return Ok(Rather);

        }
        #endregion





    }

    public class HelpTool
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
}