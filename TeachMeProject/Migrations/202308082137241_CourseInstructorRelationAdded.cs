namespace TeachMeProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CourseInstructorRelationAdded : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Instructors", "CourseId", c => c.Int(nullable: false));
            CreateIndex("dbo.Instructors", "CourseId");
            AddForeignKey("dbo.Instructors", "CourseId", "dbo.Courses", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Instructors", "CourseId", "dbo.Courses");
            DropIndex("dbo.Instructors", new[] { "CourseId" });
            DropColumn("dbo.Instructors", "CourseId");
        }
    }
}
