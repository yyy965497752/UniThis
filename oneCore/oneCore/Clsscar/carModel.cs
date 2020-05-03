using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace oneCore.Clsscar
{
    [DataContract]
    public  class carModel
    {
        
       
            [DataMember(Name = "CarInfoID")]
            public static int CarInfoID { get; set; }
            [DataMember(Name = "Image")]
            public static string Image { get; set; }
            [DataMember(Name = "bid")]
            public static int bid { get; set; }
            [DataMember(Name = "CarName")]
            public static string CarName { get; set; }
            [DataMember(Name = "Years")]
            public static int Years { get; set; }
            [DataMember(Name = "cid")]
            public static int cid { get; set; }
            [DataMember(Name = "CC")]
            public static string CC { get; set; }
            [DataMember(Name = "AMT")]
            public static string AMT { get; set; }
            [DataMember(Name = "Price")]
            public static decimal Price { get; set; }
            [DataMember(Name = "Address")]
            public static string Address { get; set; }
            [DataMember(Name = "Count")]
            public static int Count { get; set; }

        
    }
}
