using Domain.Model.Abstract;


namespace Domain.Model
{
    public class Admin : Faculty
    {

        public Admin(string id, bool connected)
        {
            Id = id;
            Connected = connected;
        }
        public bool Connected { get; set; }

        public override string ToString()
        {
            return string.Format("Admin: {0}, Connection status: {1}", Id, Connected);
        }
    }
}