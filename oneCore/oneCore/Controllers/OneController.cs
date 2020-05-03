using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using DocumentFormat.OpenXml.ExtendedProperties;
using DocumentFormat.OpenXml.Wordprocessing;
using HelpCalss.DoyouModel;
using HelpCalss.YouareFree;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.Operations;
using Newtonsoft.Json;
using PagedList;

namespace oneCore.Controllers
{

    [ApiController]
    public class OneController : ControllerBase
    {
     

       



    }

    public interface ICompanyRepository 
    {
        Task<PagedList<Company>> GetCompaniesAsync();
        Task<Company> GetCompanyAsync(Guid companyId);
        Task<IEnumerable<Company>> GetCompaniesAsync(IEnumerable<Guid> companyIds);
        void AddCompany(Company company);
        void UpdateCompany(Company company);
        void DeleteCompany(Company company);
        Task<bool> CompanyExistsAsync(Guid companyId);

        //Task<IEnumerable<CarDetails>> GetEmployeesAsync(Guid companyId, EmployeeDtoParameters parameters);
        Task<CarDetails> GetEmployeeAsync(Guid companyId, Guid employeeId);
        void AddEmployee(Guid companyId, CarDetails employee);
        void UpdateEmployee(CarDetails employee);
        void DeleteEmployee(CarDetails employee);

        Task<bool> SaveAsync();
    }



}