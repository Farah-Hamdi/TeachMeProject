namespace TeachMeProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InstructorModelAdded : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Instructors",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        JobTitle = c.String(),
                        ImagePath = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Instructors");
        }
    }
}
