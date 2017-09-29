using Web.Models.Common;


namespace Web.Models
{
    public class Admin : Faculty
    {

        public Admin(string utsaId, bool connected)
        {
            UtsaId = utsaId;
            Connected = connected;
        }
        public bool Connected { get; set; }

        public override string ToString()
        {
            return string.Format("Admin: {0}, Connection status: {1}", UtsaId, Connected);
        }
    }
}