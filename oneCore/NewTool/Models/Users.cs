using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewTool.Models
{
    public class Users
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Mobile { get; set; }
        public string Usite { get; set; }

        /*
            Id int primary key identity,
            Name  varchar(20),--用户姓名
            Mobile varchar(20),--手机号
            Usite	varchar(50)  --当前地址
        */
    }
}
