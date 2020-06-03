using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MvcTool.Controllers
{
    public class ToolCaseController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ToolCase()
        {
            return View();
        
        }

        public IActionResult ToolTry()
        {
            return View();
        }
        public IActionResult This()
        {
            return View();
        }
        #region  图表设计
        public IActionResult ThisOne()
        {
            return View();
        }

        public IActionResult ThisTwo()
        {
            return View();
        }


        #endregion  

        public IActionResult ToTable()
        {
            return View();
        }

        public IActionResult actionTu()
        {
            return View();
        }
    }
}