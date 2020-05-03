using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

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

    }
}