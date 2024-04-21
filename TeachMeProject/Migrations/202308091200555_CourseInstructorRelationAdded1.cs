namespace TeachMeProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CourseInstructorRelationAdded1 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Instructors", "CourseId", "dbo.Courses");
            DropIndex("dbo.Instructors", new[] { "CourseId" });
            AddColumn("dbo.Courses", "InstructorId", c => c.Int(nullable: true));
            CreateIndex("dbo.Courses", "InstructorId");
            AddForeignKey("dbo.Courses", "InstructorId", "dbo.Instructors", "Id", cascadeDelete: true);
            DropColumn("dbo.Instructors", "CourseId");
            Sql("UPDATE Courses SET InstructorId = 1 WHERE Id=1");
            Sql("UPDATE Courses SET InstructorId = 2 WHERE Id=7");
            Sql("UPDATE Courses SET InstructorId = 3 WHERE Id=3");
            Sql("UPDATE Courses SET InstructorId = 4 WHERE Id=9");
            Sql("UPDATE Courses SET InstructorId = 5 WHERE Id=2");
            Sql("UPDATE Courses SET InstructorId = 6 WHERE Id=10");
            Sql("UPDATE Courses SET InstructorId = 7 WHERE Id=5");
            Sql("UPDATE Courses SET InstructorId = 8 WHERE Id=4");
            Sql("UPDATE Courses SET InstructorId = 9 WHERE Id=8");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Instructors", "CourseId", c => c.Int(nullable: true));
            DropForeignKey("dbo.Courses", "InstructorId", "dbo.Instructors");
            DropIndex("dbo.Courses", new[] { "InstructorId" });
            DropColumn("dbo.Courses", "InstructorId");
            CreateIndex("dbo.Instructors", "CourseId");
            AddForeignKey("dbo.Instructors", "CourseId", "dbo.Courses", "Id", cascadeDelete: true);
        }
    }
}
