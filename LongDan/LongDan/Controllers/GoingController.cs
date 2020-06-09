using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using NuGet.Frameworks;

namespace LongDan.Controllers
{
    public class GoingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        #region cookies  SetCookies(string key, string value, int Minutes = 30) GetCookiesValue(string key)


        /// <summary>
        /// 设置cookies
        /// </summary>
        /// <param name="key"></param>
        /// <param name="value"></param>
        /// <param name="Minutes"></param>
        protected void SetCookies(string key, string value, int Minutes = 30)
        {
            HttpContext.Response.Cookies.Append(key, value, new CookieOptions { Expires = DateTime.Now.AddMinutes(Minutes) });


        }

        /// <summary>
        /// 获取cookies
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        protected string GetCookiesValue(string key)
        {
            HttpContext.Request.Cookies.TryGetValue(key, out string value);
            if (string.IsNullOrEmpty(value))
            {
                value = string.Empty;

            }
            return value;

        }

        #endregion




        public IActionResult one(string on,string so,int three)
        {
           
            SetCookies(on, so, three);
            string tool = GetCookiesValue(on);
            ViewBag.tool = tool;
            return View();

        }
        delegate IActionResult OneTwo(string on, string two, int three);
      
        public IActionResult two(string on, string so, int three)
        {

            OneTwo o = one;
            o("1","123456",30);
            
            return View();
        }

    }
}