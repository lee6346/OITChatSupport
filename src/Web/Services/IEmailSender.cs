using System.Threading.Tasks;

namespace Web.Services
{
    public interface IEmailSender
    {
        Task SendMessageAsync(string email, string subject, string message);

        Task GroupSend();

    }
}