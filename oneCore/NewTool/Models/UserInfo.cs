using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewTool.Models
{
    public class UserInfo
    {
		public int Id { get; set; }
		/// <summary>
		/// 账号
		/// </summary>
		public string Uname { get; set; }
		/// <summary>
		/// 真实姓名
		/// </summary>
		public string RealName { get; set; }
		/// <summary>
		/// 密码
		/// </summary>
		public string Pass { get; set; }
		/// <summary>
		/// 电子邮件
		/// </summary>
		public string Email { get; set; }
		/// <summary>
		/// 手机号
		/// </summary>
		public string Phone { get; set; }
		/// <summary>
		/// 钱包外键
		/// </summary>
		public int WalletId { get; set; }
		

		/*
		    Id int primary key identity,
			Uname  varchar(500),     --账号
			RealName   varchar(500),   --真实姓名
			Pass    varchar(5000),    --密码
			Email    varchar(5000),    --电子邮件
			Phone    varchar(5000),    --手机号
			WalletId   int,          --钱包外键
		*/
	}
}
