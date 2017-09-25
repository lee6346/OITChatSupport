using System.Threading.Tasks;

namespace OITChatSupport.Web.Services
{
    public interface IEmailSender
    {
        Task SendMessageAsync(string email, string subject, string message);

        Task GroupSend();

    }
}