using Web.Models.Common;

namespace Web.Models
{
    public class Department: Entity
    {
        public string DepartmentId { get; set; }
        public string BotHandle { get; set; }

        public override string ToString()
        {
            return $"Department: {DepartmentId}\nBotHandle:{BotHandle}\n";
        }
    }
}
