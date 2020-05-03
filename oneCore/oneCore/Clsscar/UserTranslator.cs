using HelpCalss.DoyouModel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace oneCore.Clsscar
{
    public static class UserTranslator
    {
        //public static CarDetails TranslateAsUser(this SqlDataReader reader, bool isList = false)
        //{
        //    if (!isList)
        //    {
        //        if (!reader.HasRows)
        //            return null;
        //        reader.Read();
        //    }
        //    var item = new carModel();
           
            //if (reader.IsColumnExists("Id"))
            //    carModel.CarInfoID = SqlHelper.GetNullableInt32(reader, "CarInfoID");

            //if (reader.IsColumnExists("Name"))
            //    carModel.Image = SqlHelper.GetNullableString(reader, "Name");

            //if (reader.IsColumnExists("EmailId"))
            //    carModel.bid = SqlHelper.GetNullableString(reader, "EmailId");

            //if (reader.IsColumnExists("Address"))
            //    carModel.CarName = SqlHelper.GetNullableString(reader, "Address");

            //if (reader.IsColumnExists("Mobile"))
            //    carModel.Years = SqlHelper.GetNullableString(reader, "Mobile");

            //if (reader.IsColumnExists("IsActive"))
            //    carModel.IsActive = SqlHelper.GetBoolean(reader, "IsActive");

            //return carModel;
        //}

        //public static List<CarDetails> TranslateAsUsersList(this SqlDataReader reader)
        //{
        //    var list = new List<CarDetails>();
        //    while (reader.Read())
        //    {
        //        list.Add(TranslateAsUser(reader, true));
        //    }
        //    return list;
        //}
    }
}
