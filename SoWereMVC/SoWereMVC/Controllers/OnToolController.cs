using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Sakura.AspNetCore;
using SoWereMVC.Models;

namespace SoWereMVC.Controllers
{
    public class OnToolController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetCars(int pageSize, int? page = 1)
        {
            string url = "http://localhost:36476/to/getcar";
            HttpClient client = new HttpClient();
            //content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/json");
            HttpResponseMessage message = client.GetAsync(url).Result;
            string result = message.Content.ReadAsStringAsync().Result;
            List<AllCarThis> list = JsonConvert.DeserializeObject<List<AllCarThis>>(result);
            pageSize = 5;
            int pageNumber = page ?? 1;
            return View(list.ToPagedList(pageSize, pageNumber));
        }
        public IActionResult Sova(int pageSize, int? page = 1)
        {
            string url = "http://localhost:36476/to/getsova";
            HttpClient client = new HttpClient();
            //content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/json");
            HttpResponseMessage message = client.GetAsync(url).Result;
            string result = message.Content.ReadAsStringAsync().Result;
            List<AllCarThis> list = JsonConvert.DeserializeObject<List<AllCarThis>>(result);
            pageSize = 5;
            int pageNumber = page ?? 1;
            return View(list.ToPagedList(pageSize, pageNumber));
        }

        public IActionResult GetVa(int pageSize, int? page = 1)
        {
            string url = "http://localhost:36476/to/getsova";
            HttpClient client = new HttpClient();
            //content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/json");
            HttpResponseMessage message = client.GetAsync(url).Result;
            string result = message.Content.ReadAsStringAsync().Result;
            List<AllCarThis> list = JsonConvert.DeserializeObject<List<AllCarThis>>(result);
            pageSize = 5;
            int pageNumber = page ?? 1;
            return View(list.ToPagedList(pageSize, pageNumber));
        }




        public IActionResult SelectCars(string carN, string carPi, string carT, int pageSize, int? page = 1)
        {
            int pin = Convert.ToInt32(carPi);
            int types = Convert.ToInt32(carT);
            string url = $"http://localhost:36476/to/selectcar?carname={carN}&carP={pin}&carTyep={types}";
            HttpClient client = new HttpClient();
            AllCarThis allCar = new AllCarThis();
            string str = JsonConvert.SerializeObject(allCar);
            HttpContent content = new StringContent(str);
            content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/json");
            HttpResponseMessage message = client.PostAsync(url, content).Result;
            string result = message.Content.ReadAsStringAsync().Result;
            List<AllCarThis> list = JsonConvert.DeserializeObject<List<AllCarThis>>(result);
            pageSize = 5;
            int pageNumber = page ?? 1;
            return View(list.ToPagedList(pageSize, pageNumber));

        }
        public IActionResult SelectVa(string carN, string carPi, string carT, int pageSize, int? page = 1)
        {
            int pin = Convert.ToInt32(carPi);
            int types = Convert.ToInt32(carT);
            string url = $"http://localhost:36476/to/selectva?carname={carN}&carP={pin}&carTyep={types}";
            HttpClient client = new HttpClient();
            AllCarThis allCar = new AllCarThis();
            string str = JsonConvert.SerializeObject(allCar);
            HttpContent content = new StringContent(str);
            content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/json");
            HttpResponseMessage message = client.PostAsync(url, content).Result;
            string result = message.Content.ReadAsStringAsync().Result;
            List<AllCarThis> list = JsonConvert.DeserializeObject<List<AllCarThis>>(result);
            pageSize = 5;
            int pageNumber = page ?? 1;
            return View(list.ToPagedList(pageSize, pageNumber));

        }
    }
}