using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewTool.Models
{
    public class Goods
    {

		public int Id { get; set; }
		/// <summary>
		/// 名称
		/// </summary>
		public string GoodsName { get; set; }
		/// <summary>
		/// 分类   二级联动
		/// </summary>
		public string GoodssType { get; set; }
		/// <summary>
		/// 单价
		/// </summary>
		public double GoodsPrice { get; set; }
		/// <summary>
		/// 销售量 
		/// </summary>
		public int GoodsSalesvolume { get; set; }
		/// <summary>
		/// 状态上架下架
		/// </summary>
		public bool GoodsOnStatus { get; set; }
		/// <summary>
		/// 审核状态    1审核通过    2审核未通过    3待审核
		/// </summary>
		public int GoodsAuditStatus { get; set; }
		/// <summary>
		/// 库存
		/// </summary>
		public int GoodsStock { get; set; }
		/// <summary>
		/// 数量
		/// </summary>
		public int GoodsSum { get; set; }
		/// <summary>
		/// 类型    1普通商品   2帮TA付商品   3普通/帮TA付商品
		/// </summary>
		public int GoodsKind { get; set; }
		/// <summary>
		/// 标题
		/// </summary>
		public string GoodsTitle { get; set; }
		/// <summary>
		/// 图片
		/// </summary>
		public string GoodsIIImg { get; set; }
		/// <summary>
		/// 商品规格  需要规格/不需要规格
		/// </summary>
		public bool GoodsSize { get; set; }
		/// <summary>
		/// 赠送积分
		/// </summary>
		public double GoodsJifen { get; set; }
		/// <summary>
		/// 商品简介
		/// </summary>
		public string GoodsIntroductory { get; set; }
		/// <summary>
		/// 商品物流
		/// </summary>
		public int GoodsSend { get; set; }
		/// <summary>
		/// 商品售后
		/// </summary>
		public bool GoodsSale { get; set; }
		/// <summary>
		/// 库存计数    买家拍下减库存
		/// </summary>
		public int GoodsBuyStock { get; set; }
		/// <summary>
		/// 上架时间    1立即上架   2定时上架   3放入库存
		/// </summary>
		public int GodsOnTimes { get; set; }

		/*
		Id                  int  primary key identity,
			GoodsName           varchar(500),     --名称
			GoodssType          varchar(500),     --分类   二级联动
			GoodsPrice          money,            --单价
			GoodsSalesvolume    int,              --销售量
			GoodsOnStatus       bit,              --状态上架下架
			GoodsAuditStatus    int,              --审核状态    1审核通过    2审核未通过    3待审核
			GoodsStock          int,              --库存

			GoodsSum			int,			  --数量
			--GoodssType        varchar(500),     --分类   二级联动
			GoodsKind           int,              --类型    1普通商品   2帮TA付商品   3普通/帮TA付商品
			--GoodsName         varchar(500),     --名称
			GoodsTitle          varchar(500),     --标题
			GoodsIIImg          varchar(max),     --图片
			GoodsSize           bit,              --商品规格  需要规格/不需要规格
			--GoodsPrice        money,            --原价
			GoodsJifen          int,              --赠送积分
			GoodsIntroductory   varchar(500),     --商品简介
			GoodsSend           int,              --商品物流
			GoodsSale           bit,              --商品售后
			GoodsBuyStock       bit,              --库存计数    买家拍下减库存
			GodsOnTimes         int,              --上架时间    1立即上架   2定时上架   3放入库存
		*/
	}
}
