using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewTool.Models
{

    public class GoodsType
    {
        public int Id { get; set; }
        /// <summary>
        /// 父类名称
        /// </summary>
        public string TypeName { get; set; }
        /// <summary>
        /// 父级id
        /// </summary>
        public int TypeParentid { get; set; }


        /*
            Id int primary key identity,
            TypeName  varchar(500),      --分类名称
            TypeParentid  int,           --父级id
        */

    }
}
