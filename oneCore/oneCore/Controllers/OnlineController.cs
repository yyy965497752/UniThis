using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DocumentFormat.OpenXml.Spreadsheet;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.TagHelpers.Cache;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualBasic;
using oneCore.Port;

namespace oneCore.Controllers
{
    [Route("to")]
    [Produces("application/json")]
    [EnableCors("first")]
    [ApiController]
    public class OnlineController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;
        private readonly AsyncTool _tool;
        private readonly IMapper _mapper;
        #region 构造函数


        public OnlineController(IConfiguration configuration,AsyncTool tool,IMapper mapper)
        {
            _configuration = configuration;
            _connectionString = "Data Source=.;Initial Catalog=Pcr;Integrated Security=True";
            _tool = tool ?? throw new ArgumentException(nameof(tool));
            _mapper = mapper ?? throw new ArgumentException(nameof(mapper));

        }


        #endregion

        #region get 获取 汽车信息


        /// <summary>
        /// 获取已启用的 汽车信息
        /// </summary>
        /// <returns></returns>
        [HttpGet(template: "getcar")]
        public ActionResult<IEnumerable<infoTool>> GetListOfAuthors()
        {
            var authors = new List<infoTool>();

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                string sql = "select * from CarInfo c join CarType t on c.cid=t.CarTypeID join CarBrand b on c.bid=b.CarBrandID";
                SqlCommand command = new SqlCommand(sql, connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    authors.Add(HelperOper.ADONetToClass<infoTool>(reader));
                }
            }

            return Ok(authors);
        }

        #endregion

        #region get  获取挂靠
        /// <summary>
        /// 获取已启用的 汽车挂靠信息
        /// </summary>
        /// <returns></returns>
        [HttpGet(template: "getsova")]
        public ActionResult<IEnumerable<va>> GetListOfva()
        {
            var authors = new List<va>();

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                string sql = "select * from Va v join CarType t on v.cid = t.CarTypeID join CarBrand b on v.bid = b.CarBrandID  where v.Vstate = 1";
                SqlCommand command = new SqlCommand(sql, connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    authors.Add(HelperOper.ADONetToClass<va>(reader));
                }
            }

            return Ok(authors);
        }
        #endregion

        #region post 查询挂靠

        /// <summary>
        /// 查询车辆挂靠信息
        /// </summary>
        /// <param name="carname"></param>
        /// <param name="carP"></param>
        /// <param name="carTyep"></param>
        /// <returns></returns>
        [HttpPost(template: "selectva")]
        public ActionResult<IEnumerable<va>> SelectCarOper(string carname, int carP, int carTyep)
        {
            var authors = new List<va>();

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                string sql = $"select * from Va v join CarType t on v.cid = t.CarTypeID join CarBrand b on v.bid = b.CarBrandID  where v.Vstate = 1 and v.CarName like '%{carname}%' or t.CarTypeID={carP} or b.CarBrandID={carTyep}";
                SqlCommand command = new SqlCommand(sql, connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    authors.Add(HelperOper.ADONetToClass<va>(reader));
                }
            }

            return Ok(authors);
        }


        #endregion

        #region post 查询


        /// <summary>
        /// 查询车辆信息
        /// </summary>
        /// <param name="carname"></param>
        /// <param name="carP"></param>
        /// <param name="carTyep"></param>
        /// <returns></returns>
        [HttpPost(template: "selectcar")]
        public ActionResult<IEnumerable<infoTool>> SelectvaOper(string carname, int carP, int carTyep)
        {
            var authors = new List<infoTool>();

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                string sql = $"select * from CarInfo c join CarType t on c.cid=t.CarTypeID join CarBrand b on c.bid=b.CarBrandID where c.CarName like '%{carname}%' or t.CarTypeID={carP} or b.CarBrandID={carTyep}";
                SqlCommand command = new SqlCommand(sql, connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    authors.Add(HelperOper.ADONetToClass<infoTool>(reader));
                }
            }

            return Ok(authors);
        }
        #endregion

        #region get 品牌


        /// <summary>
        /// 车  品牌
        /// </summary>
        /// <returns></returns>
        [HttpGet(template: ("brandsee"))]
        public ActionResult<IEnumerable<Grand>> ToBrand()
        {
            var authors = new List<Grand>();

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                string sql = "select * from CarBrand";
                SqlCommand command = new SqlCommand(sql, connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    authors.Add(HelperOper.ADONetToClass<Grand>(reader));
                }
            }

            return Ok(authors);
        }

        #endregion

        #region 获取类别


        /// <summary>
        /// 车 类别
        /// </summary>
        /// <returns></returns>
        [HttpGet(template: ("typesee"))]
        public ActionResult<IEnumerable<TypeSee>> ToType()
        {
            var authors = new List<TypeSee>();

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                string sql = "select * from cartype";
                SqlCommand command = new SqlCommand(sql, connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    authors.Add(HelperOper.ADONetToClass<TypeSee>(reader));
                }
            }

            return Ok(authors);
        }
        #endregion

        #region 客户端的使用


        #endregion



        [HttpGet(template: ("grand"))]
        public async Task<ActionResult<IEnumerable<Grand>>> ToGrand()
        {
            var authors = new List<Grand>();

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                string sql = "select * from CarBrand";
                SqlCommand command = new SqlCommand(sql, connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    authors.Add(HelperOper.ADONetToClass<Grand>(reader));
                    
                }
            }
            await _tool.GetGrand();

            return Ok(authors);
        }






    }


    public interface AsyncTool
    {
        
        Task<IEnumerable<Grand>> GetGrand();
        Task<IEnumerable<Grand>> GetGrand(IEnumerable<Guid> grand);
    
    }


    public class HelperOper
    {
        #region 反射 帮助类


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
        #endregion

    }
}