using Microsoft.VisualBasic;
using System;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace CoreK
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            asyncExec_2();
        }
        #region 异步
        public static async Task asyncExec_2()
        {

            await Task.Run(() => { Proc(); });
        }

        #endregion

        #region 正常


        public static async Task asyncTool()
        {
            await Task.Run(() => { Proc(); });
        }
        public static void Proc()
        {
            for (int i = 0; i < 1000; i++)
            {
                Console.WriteLine(i);

            }
        
        }
        #endregion

        Task<int> DelayAndCalculatel(int a, int b)
        {
            return Task.Delay(1000).ContinueWith(t => a + b);
        }
    }
}
