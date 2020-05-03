using HelpCalss.DoyouModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace oneCore.NeedUsing
{
    public class NeedUsing
    {

        public interface ICarRepository
        {
            Task<List<CarDetails>> GetCarsAsync();
            Task<CarDetails> GetCarAsync();
        
        }
    }
}
