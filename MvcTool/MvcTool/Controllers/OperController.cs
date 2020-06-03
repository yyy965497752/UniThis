using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace MvcTool.Controllers
{
    public class OperController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Ato()
        {


            return View();
        }

        public IActionResult B(int b_i)
        {
            Type t = typeof(Test);
            var tool = t.GetMethod(nameof(Test.fouEa));
           
            var method = t.GetMethod(nameof(Test.fouEa), new[] { typeof(string) });
            ViewBag.method = method;
            ModelOper op = toolBase;
            b_i = 789;
            int see=op(b_i);
            ViewBag.op = see;

            return View();
        }
        delegate int ModelOper(int i);
        ModelOper op = toolBase;
        public static int toolBase(int too)
        {
            too+=2;
            return too;
        
        }

    }

    public class Test
    {
        public string fouEa(string i)
        {
            i = "it's join with";
            return i ;
        
        }
        public int soTun(int tool)
        {
            tool = 123;
            return tool;
        
        }
    
    }
}