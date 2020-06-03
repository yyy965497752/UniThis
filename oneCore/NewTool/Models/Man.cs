using Microsoft.Extensions.Configuration.EnvironmentVariables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewTool.Models
{
    /// <summary>
    /// 管理类（管理表）
    /// </summary>
    public class Man
    {
        public int Mid { get; set; }
        public string Mname { get; set; }
        public string Modile { get; set; }
        public int Did { get; set; }
        public bool Mstate { get; set; }
        public string Mnotes { get; set; }

        /*
        Mid    int identity,
        Mname  varchar(20),--姓名
        Modile varchar(50),--手机号
        Did    int ,--分组
        Mstate  bit,--状态
        Mnotes  varchar(max),--备注
        */
    }
}
