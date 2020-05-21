using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace oneCore.Port
{
    public class thisAll
    {
        #region 管理员部分  表名:Admins
        public int Uid { get; set; }
        public string Name { get; set; }
        public string Pwd { get; set; }
        public string Email { get; set; }
        #endregion

        #region 展示所有车所需表  表名:AllCars
        public int AllCarsID { get; set; }
        public int CarInfoid { get; set; }
        public int Vaid { get; set; }
        #endregion

        #region 故障原因表  表名:Breakdown
        public int BreakdownID { get; set; }
        public string Reson { get; set; }
        public string Phone { get; set; }
        public int OrdersID { get; set; }
        #endregion

        #region 汽车品牌表  表名:CarBrand
        public int CarBrandID { get; set; }
        public string Brand { get; set; }
        #endregion

        #region 汽车信息表 表名:CarInfo
        public int carInfoID { get; set; }
        public string Image { get; set; }
        public int bid { get; set; }
        public string CarName { get; set; }
        public int Years { get; set; }
        public int cid { get; set; }
        public string CC { get; set; }
        public string AMT { get; set; }
        public decimal Price { get; set; }
        public string Address { get; set; }
        public int Count { get; set; }
        #endregion

        #region 汽车类型表 表名:CarType
        public int CarTypeID { get; set; }
        public string Type { get; set; }
        #endregion

        #region 预定表（订单表） 表名:Orders
        //public int OrdersID { get; set; }
        public string Oid { get; set; }
        public int uid { get; set; }
        //public int CarInfoid { get; set; }
        public string Useing { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public bool Driver { get; set; }
        // public decimal Price { get; set; }
        public int ZT { get; set; }
        public int Hitch { get; set; }
        //public string CarName { get; set; }
        #endregion

        #region 帮助中心表  表名:Trouble
        public int TroubleID { get; set; }
        public string Condition { get; set; }
        public string Standard { get; set; }
        public string ContactUs { get; set; }
        #endregion

        #region 实名认证表 表名:UserInfo
        public int UserInfoID { get; set; }
        //public int uid { get; set; }
        public string UName { get; set; }
        public string IDcard { get; set; }
        #endregion

        #region userTable(用户表) 表名Users
        // public int Uid { get; set; }
        //public string Name { get; set; }
        // public string Pwd { get; set; }
        // public string Email { get; set; }
        #endregion

        #region （用户）车辆挂靠表 表名Va
        public int VID { get; set; }
        //public string Image { get; set; }
        //public int bid { get; set; }
        //public string CarName { get; set; }
        //public int Years { get; set; }
        //public int cid { get; set; }
        //public string CC { get; set; }
        //public string AMT { get; set; }
        //public decimal Price { get; set; }
        public bool Vstate { get; set; }
        // public int uid { get; set; }
        #endregion

    }
}
