using AutoMapper.Configuration;
using DocumentFormat.OpenXml.Drawing;
using Microsoft.AspNetCore.Routing;
using Microsoft.VisualBasic.CompilerServices;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Security.Cryptography.Xml;
using System.Threading.Tasks;

namespace oneCore.Clsscar
{
    public class ConnHelper
    {
        #region 反射方法（理解）

       
        public static T ADONetToClass<T>(SqlDataReader reader) where T : new()
        {
            var entity = new T();
            var type = typeof(T);
            var properties = type.GetProperties();
            foreach (var property in properties)
            {
                if (property.Name=="ID")
                {
                    property.SetValue(entity, Guid.Parse(reader[property.Name].ToString()));
                }
                else
                {
                    property.SetValue(entity, Convert.ChangeType(reader[property.Name], property.PropertyType));
                }               

            }
            return entity;

        }
        #endregion
        public static bool AuthenticateUser(string username, string password, string _connectionString)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString)) 
            {
                SqlCommand com = new SqlCommand("sql语句",connection);
                com.Parameters.AddWithValue("@username", username);
                com.Parameters.AddWithValue("@password", password);
                connection.Open();
                SqlDataReader reader = com.ExecuteReader();
                if (reader.HasRows)
                {
                    return true;

                }

            }

            return false;
        }


    }
}
