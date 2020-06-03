using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.TagHelpers.Cache;
using Microsoft.EntityFrameworkCore;
using NewTool.Models;

namespace NewTool.Controllers
{
    [Route("see")]
    [EnableCors("to")]
    [ApiController]
    public class AsyncToolController : ControllerBase
    {

        private ForumContext _context;
        public AsyncToolController(ForumContext context)
        {
            this._context = context;
        
        }
        [HttpGet,Route("too")]
        public async Task tool([FromBody] UserInfo model)
        {
            var topic = this._context.Topics.Where(f => f.Id == model.Id).FirstOrDefault();
            topic.Pass = model.Pass;
            this._context.Update(topic);
            Console.WriteLine("Updated");
            var affrows = await this._context.SaveChangesAsync();
            Console.WriteLine("affrows:{0}", affrows);

        }


    }
    public class ForumContext : DbContext
    {
        public ForumContext(DbContextOptions<ForumContext> options) : base(options)
        { 
        
        }
        public DbSet<UserInfo> Topics { get; set; }
        public DbSet<Man> man { get; set; }
        public override void Dispose()
        {
            base.Dispose();
            Console.WriteLine("Dispose");
            
        }
    }

}