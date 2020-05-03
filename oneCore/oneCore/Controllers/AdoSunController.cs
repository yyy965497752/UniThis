using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using DocumentFormat.OpenXml.Drawing;
using HelpCalss.DoyouModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using oneCore.Clsscar;
using Newtonsoft.Json;

namespace oneCore.Controllers
{
    [Route("wx")]
    [ApiController]
    public class AdoSunController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public AdoSunController(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = "Data Source=.;Initial Catalog=Pcr;Integrated Security=True";

        }





        [HttpGet, Route("ben")]
        public ActionResult<IEnumerable<CarDetails>> GetListOfAuthors()
        {
            var authors = new List<CarDetails>();

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                SqlCommand command = new SqlCommand("select * from Carinfo", connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    authors.Add(ConnHelper.ADONetToClass<CarDetails>(reader));
                }
            }

            return Ok(authors);
        }


    }
}