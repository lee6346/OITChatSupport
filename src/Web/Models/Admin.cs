using Web.Models.Common;


namespace Web.Models
{
    public class Admin : Faculty
    {
        
        public bool Connected { get; set; }

        public override string ToString()
        {
            return string.Format("Admin: {0}", Name);
        }
    }
}