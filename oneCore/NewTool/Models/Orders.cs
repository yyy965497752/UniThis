using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewTool.Models
{
    public class Orders
    {
		/// <summary>
		/// 订单主键
		/// </summary>
		public int OrdersId { get; set; }
		/// <summary>
		/// 订单编号
		/// </summary>
		public int numberId { get; set; }

		/// <summary>
		/// 商品外键
		/// </summary>
		public int GoodsId { get; set; }
		/// <summary>
		/// 商品外键(Id)
		/// </summary>
		public int consigneeId { get; set; }
		/// <summary>
		/// 用户外键(ConsigneeId)
		/// </summary>
		public int UsersId { get; set; }
		/// <summary>
		/// 1：待发货  2：已发货 3：已完成 4：已关闭
		/// </summary>
		public int States { get; set; }
		/// <summary>
		/// 创建时间
		/// </summary>
		public string StartTime { get; set; }
		/// <summary>
		/// 付款时间
		/// </summary>
		public string EndTime { get; set; }
		/// <summary>
		/// 支付方式  1：支付宝  2：银行卡
		/// </summary>
		public int Payment { get; set; }
		/// <summary>
		/// 物流公司 1：圆通 2：百世 3：申通 4：韵达 5：顺丰
		/// </summary>
		public int logistics { get; set; }

		/*
		OrdersId	int primary key identity,	-- 订单主键
			numberId	int ,						--订单编号
			GoodsId		int foreign key references Goods(Id), -- 商品外键
			consigneeId	int foreign key references Consignee(ConsigneeId), -- 商品外键
			UsersId	int foreign key references Users(Id), -- 用户外键
			States		int check(States>0 and States<5) default(1),--1：待发货  2：已发货 3：已完成 4：已关闭
			StartTime		varchar(max),   --创建时间
			EndTime			varchar(max),   --付款时间
			Payment			int check(Payment>0 and Payment<2) default(1),	--支付方式  1：支付宝  2：银行卡
			logistics		int	check(logistics>0 and logistics<5) default(1),--物流公司 1：圆通 2：百世 3：申通 4：韵达 5：顺丰
		*/
	}
}
