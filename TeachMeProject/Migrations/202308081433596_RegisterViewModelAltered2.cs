namespace TeachMeProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RegisterViewModelAltered2 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.AspNetUsers", "Course_Id", "dbo.Courses");
            DropIndex("dbo.AspNetUsers", new[] { "Course_Id" });
            DropColumn("dbo.AspNetUsers", "Course_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AspNetUsers", "Course_Id", c => c.Int());
            CreateIndex("dbo.AspNetUsers", "Course_Id");
            AddForeignKey("dbo.AspNetUsers", "Course_Id", "dbo.Courses", "Id");
        }
    }
}
