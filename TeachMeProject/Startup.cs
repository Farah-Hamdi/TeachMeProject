using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TeachMeProject.Startup))]
namespace TeachMeProject
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
