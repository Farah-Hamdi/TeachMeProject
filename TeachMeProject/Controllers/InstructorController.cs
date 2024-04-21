using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TeachMeProject.Models;
using System.Data.Entity;

namespace TeachMeProject.Controllers
{
    public class InstructorController : Controller
    {

        private ApplicationDbContext _context;
        public InstructorController()
        {
            _context = new ApplicationDbContext();
        }

        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
        }

        // GET: Instructor
        public ActionResult Index()
        {
            var instructors = _context.Instructors.ToList();
            return View(instructors);
        }
    }
}