using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewTool.Models
{
    public class Consignee
    {
		/// <summary>
		/// 收货表主键
		/// </summary>
		public int ConsigneeId { get; set; }
		/// <summary>
		/// 收货人姓名
		/// </summary>
		public string ConName { get; set; }
		/// <summary>
		/// 手机号
		/// </summary>
		public string ConMobile { get; set; }
		/// <summary>
		/// 收货地址
		/// </summary>
		public string Consite { get; set; }
		/// <summary>
		/// 邮编号
		/// </summary>
		public string postcode { get; set; }
		/*
		ConsigneeId	 int primary key identity,	-- 收货表主键
			ConName		varchar(20),	--收货人姓名
			ConMobile	varchar(20),	--手机号
			Consite		varchar(50),	--收货地址
			postcode	varchar(10)		--邮编号
		*/
	}
}
