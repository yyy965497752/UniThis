#pragma checksum "D:\A_Githup\ycx\one\MvcTool\MvcTool\Views\ToolCase\ThisOne.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "26653ba4070a499300dc61df17d26a029e96cdf6"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_ToolCase_ThisOne), @"mvc.1.0.view", @"/Views/ToolCase/ThisOne.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\A_Githup\ycx\one\MvcTool\MvcTool\Views\_ViewImports.cshtml"
using MvcTool;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\A_Githup\ycx\one\MvcTool\MvcTool\Views\_ViewImports.cshtml"
using MvcTool.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"26653ba4070a499300dc61df17d26a029e96cdf6", @"/Views/ToolCase/ThisOne.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"dead8cdf74587c0db893f7d2e27acee2e4d56221", @"/Views/_ViewImports.cshtml")]
    public class Views_ToolCase_ThisOne : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"  <!-- Page content -->
<div class=""container-fluid p-y-md"">
    <!-- Flot Charts (initialized in js/pages/base_comp_charts.js), for more examples please check http://www.flotcharts.org/flot/examples -->
    <h2 class=""section-title"">Flot Charts</h2>

    <div class=""row"">
        <!-- Lines Chart -->
        <div class=""col-md-12"">
            <div class=""card"">
                <div class=""card-header"">
                    <h4>Lines</h4>
                    <ul class=""card-actions"">
                        <li>
                            <button type=""button"" data-toggle=""card-action"" data-action=""refresh_toggle"" data-action-mode=""demo""><i class=""ion-refresh""></i></button>
                        </li>
                    </ul>
                </div>
                <div class=""card-block"">
                    <!-- Lines Chart Container -->
                    <div class=""js-flot-lines"" style=""height: 330px;""></div>
                </div>
            </div>
        </div>
        <!--");
            WriteLiteral(@" End Lines Chart // .col-md-12 -->
        <!-- Stacked Chart -->
        <div class=""col-md-12"">
            <div class=""card"">
                <div class=""card-header"">
                    <h4>Stacked</h4>
                    <ul class=""card-actions"">
                        <li>
                            <button type=""button"" data-toggle=""card-action"" data-action=""refresh_toggle"" data-action-mode=""demo""><i class=""ion-refresh""></i></button>
                        </li>
                    </ul>
                </div>
                <div class=""card-block"">
                    <!-- Stacked Chart Container -->
                    <div class=""js-flot-stacked"" style=""height: 330px;""></div>
                </div>
            </div>
        </div>
        <!-- End Stacked Chart // .col-md-12 -->
        <!-- Live Chart -->
        <div class=""col-md-12"">
            <div class=""card"">
                <div class=""card-header"">
                    <h4>Live</h4>
                    <ul cl");
            WriteLiteral(@"ass=""card-actions"">
                        <li>
                            <span class=""js-flot-live-info text-info""></span>
                        </li>
                    </ul>
                </div>
                <div class=""card-block"">
                    <!-- Live Chart Container -->
                    <div class=""js-flot-live"" style=""height: 360px;""></div>
                </div>
            </div>
        </div>
        <!-- End Live Chart // .col-md-12 -->
        <!-- Bars Chart -->
        <div class=""col-md-6"">
            <div class=""card"">
                <div class=""card-header"">
                    <h4>Bars</h4>
                    <ul class=""card-actions"">
                        <li>
                            <button type=""button"" data-toggle=""card-action"" data-action=""refresh_toggle"" data-action-mode=""demo""><i class=""ion-refresh""></i></button>
                        </li>
                    </ul>
                </div>
                <div class=""card-block");
            WriteLiteral(@""">
                    <!-- Bars Chart Container -->
                    <div class=""js-flot-bars"" style=""height: 330px;""></div>
                </div>
            </div>
        </div>
        <!-- End Bars Chart // .col-md-6 -->
        <!-- Pie Chart -->
        <div class=""col-md-6"">
            <div class=""card"">
                <div class=""card-header"">
                    <h4>Pie</h4>
                    <ul class=""card-actions"">
                        <li>
                            <button type=""button"" data-toggle=""card-action"" data-action=""refresh_toggle"" data-action-mode=""demo""><i class=""ion-refresh""></i></button>
                        </li>
                    </ul>
                </div>
                <div class=""card-block"">
                    <!-- Pie Chart Container -->
                    <div class=""js-flot-pie"" style=""height: 330px;""></div>
                </div>
            </div>
        </div>
        <!-- End Pie Chart // .col-md-6 -->
    </div>
    <!");
            WriteLiteral("-- .row -->\r\n</div>\r\n<!-- .container-fluid -->\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591