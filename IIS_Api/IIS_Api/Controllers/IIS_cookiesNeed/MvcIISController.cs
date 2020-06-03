using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IIS_Api.Controllers.IIS_cookiesNeed
{
    public class MvcIISController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        #region 控制器，服务器
        private readonly IHttpContextAccessor __httpContextAccessor;
        private ISession _session => __httpContextAccessor.HttpContext.Session;

        protected void SetCookies(string key, string value, int Minutes = 30)
        {
            HttpContext.Response.Cookies.Append(key, value, new CookieOptions { Expires = DateTime.Now.AddMinutes(Minutes) });

        }

        protected void DeleteCookies(string key)
        {
            HttpContext.Response.Cookies.Delete(key);

        }

        protected string GetCookiesValue(string key)
        {
            HttpContext.Request.Cookies.TryGetValue(key, out string value);
            if (string.IsNullOrEmpty(value))
            {
                value = string.Empty;

            }
            return value;

        }

        public void SetSession(string sesionStr, string Code)
        {
            _session.SetString(sesionStr, Code);
        }
        public string GetSessoin(string sesionStr)
        {
            string code = _session.GetString(sesionStr);
            return code;
        }

        #endregion



    }
}