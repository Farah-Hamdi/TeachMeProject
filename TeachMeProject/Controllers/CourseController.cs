using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TeachMeProject.Models;
using System.Data.Entity;

namespace TeachMeProject.Controllers
{
    public class CourseController : Controller
    {
        private ApplicationDbContext _context;
        public CourseController()
        {
            _context = new ApplicationDbContext();
        }

        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
        }

        // GET: Course
        public ActionResult Index()
        {
            var courses = _context.Courses.Include(i=>i.Instructor).ToList();
            return View(courses);
        }
    }
}