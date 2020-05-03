using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace oneCore.Clsscar
{
    public class DbClientFactory<T>
    {
        private static Lazy<T> _factoryLazy = new Lazy<T>(
            ()=> (T)Activator.CreateInstance(typeof(T)),
            LazyThreadSafetyMode.ExecutionAndPublication);
        public static T InStance
        {
            get 
            {
                return _factoryLazy.Value;
            }
        }

    }
}
