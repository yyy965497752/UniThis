﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace oneCore.Clsscar
{
    public class Message<T>
    {
        [DataMember(Name ="IsSuccess")]
        public bool IsSuccess { get; set; }
        [DataMember(Name = "ReturnMessage")]
        public string ReturnMessage { get; set; }
        [DataMember(Name = "Data")]
        public T data { get; set; }

    }
}
