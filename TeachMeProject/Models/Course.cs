using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TeachMeProject.Models
{
    public class Course
    {
        public Course()
        {
            this.users = new List<ApplicationUser>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }

        public float Price { get; set; }
        public int Rating { get; set; }
        public List<ApplicationUser> users { get; set; }
        public Instructor Instructor { get; set; }
        public int InstructorId { get; set; }


    }
}