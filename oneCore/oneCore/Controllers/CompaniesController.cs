using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DocumentFormat.OpenXml.Wordprocessing;
using HelpCalss.DoyouModel;
using HelpCalss.YouareFree;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static oneCore.NeedUsing.NeedUsing;

namespace oneCore.Controllers
{
    [Route("ycx")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
     
        [HttpGet(template:"getcars")]
        public  List<CarDetails> GetCars()
        {
            
            List<CarDetails> list= CanYouSee.ModelList("carinfo");
            return list.ToList();

        
        }
        [HttpGet(template: "gettwo")]
        public ActionResult GetCarTwo()
        {
            List<CarDetails> list = CanYouSee.ModelList("carinfo");
            return Ok(list);
        }
        [HttpGet(template: "getjson")]
        public JsonResult GetJson()
        {
            List<CarDetails> list = CanYouSee.ModelList("carinfo");
            return new JsonResult(list);
        }

      


    }
}