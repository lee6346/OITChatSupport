using System.Threading.Tasks;

namespace OITChatSupport.Web.Services
{
    public interface IEmailService
    {
        Task Send();

        Task GroupSend();

    }
}