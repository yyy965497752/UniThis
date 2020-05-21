using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;
using Catel.MVVM.Views;
using Catel.Windows.Controls;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Sakura.AspNetCore;
using SoWereMVC.Models;

namespace SoWereMVC.Controllers
{
    public class TryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult CarBase()
        {
            return View();
        }
        public IActionResult TryTool()
        {
            return View();
        }
        public IActionResult TryToolB()
        {
            return View();
        }
        public IActionResult DropDownListThis()
        {
            return View();
        
        }

        [HttpGet]
        public IActionResult BaseTool(int pageSize, int? page = 1)
        {

            string url = "http://localhost:36476/wx/ben";
            HttpClient client = new HttpClient();
            //content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/json");
            HttpResponseMessage message = client.GetAsync(url).Result;
            string result = message.Content.ReadAsStringAsync().Result;
            List<CarBaseSens> list = JsonConvert.DeserializeObject<List<CarBaseSens>>(result);
            pageSize = 3;
            int pageNumber = page ?? 1;
            return View(list.ToPagedList(pageSize, pageNumber));

        }

        public IActionResult SelectBase()
        {
            return View();

        }
        [HttpPost]
        public IActionResult SelectBase(string ToName,string Topin,int? page,int pageSize)
        {
            string url = "http://localhost:36476/wx/cong";
            HttpClient client = new HttpClient();
            CarBaseSens tocar = new CarBaseSens();
            string Tostr = JsonConvert.SerializeObject(tocar);
            HttpContent content = new StringContent(Tostr);
            content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/json");
            HttpResponseMessage message = client.PostAsync(url,content).Result;
            string result = message.Content.ReadAsStringAsync().Result;
            List<CarBaseSens> list = JsonConvert.DeserializeObject<List<CarBaseSens>>(result);
            pageSize = 3;
            int pageNumber = page ?? 1;
            return View(list.ToPagedList(pageSize, pageNumber));
        }


    }
}