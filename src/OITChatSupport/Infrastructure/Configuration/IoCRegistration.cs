using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OITChatSupport.Infrastructure.Configuration
{
    public class IoCRegistration
    {
        public static void Register(IServiceCollection services)
        {

        }
    }
}
/*Application
 *  Commands/Command Handlers : application service
 *  Validators for commands
 *  Mappers (automap)
 *  Facade services as needed
 *  https://lostechies.com/jimmybogard/2010/03/10/strengthening-your-domain-encapsulated-collections/
 *  https://cuttingedge.it/blogs/steven/pivot/entry.php?id=91
 *  https://github.com/JeremySkinner/FluentValidation/wiki/i.-ASP.NET-Core-integration
 *  https://github.com/JeremySkinner/FluentValidation/tree/master/src
 *  https://github.com/JeremySkinner/FluentValidation/wiki/i.-ASP.NET-Core-integration
 *  http://docs.automapper.org/en/stable/Understanding-your-mapping.html
 *  https://stackoverflow.com/questions/46304548/automapper-in-asp-net-core-2-0
 *  https://dotnetthoughts.net/using-automapper-in-aspnet-core-project/
 *  https://lostechies.com/jimmybogard/2016/07/20/integrating-automapper-with-asp-net-core-di/
 * Domain
 *  Events/Event Handlers (Event Store)
 *  valiadtors/specifications
 *  Entity, Value object, aggregates, IRepostories
 *  https://lostechies.com/gabrielschenker/2015/05/25/ddd-the-aggregate/
 *  https://github.com/EduardoPires/EquinoxProject/tree/master/src/Equinox.Infra.Data/Context
 *  https://github.com/jbogard/ContosoUniversityCore/tree/master/src/ContosoUniversityCore/Features
 *  https://github.com/cesarcastrocuba/nlayerappv3
 *  http://enterprisecraftsmanship.com/2014/12/27/dont-use-ids-domain-entities/
 * Infra:
 *  Configuration: options builders, service injectors
 *  Data: Repository implementations, tables, connection factories, etc
 *  Errors: Custom errors and handlers
 *  RealTime: Hubs (hubs wrap arround the socket/gatewatys and should be applicatino layer, Web sockets, etc
 *  Rest: Gateways
 * https://github.com/HandersonMarinho/dapper-generic-repository/blob/master/src/Project.Repositories/DapperRepository.cs
 * https://github.com/stannynuytkens/DapperUnit/blob/master/Dapper.Core/DapperUnit.cs
 * https://github.com/mehrdadbahrainy/DapRepo/blob/master/src/DapRepo.DataAccess/GenericRepository.cs
 * http://blog.sapiensworks.com/post/2016/07/14/DDD-Aggregate-Decoded-3
 * 
 * LuisGateway
 * https://www.luis.ai/help#api-docs
 * https://github.com/Microsoft/Cognitive-LUIS-Windows/blob/master/ClientLibrary/LuisClient.cs
 * 
 * WebChat API
 * Email Channel API
 * Twillio API
 * Stripe: uiversal api for payment/security
 * Stanford CoreNLP for .NET
 * https://github.com/janaks09/NetCoreSaaS
 * Event sourcing
 * https://github.com/NEventStore/NEventStore/tree/master/src
 * https://www.akadia.com/services/dotnet_read_write_blob.html
 * https://cqrs.wordpress.com/documents/building-event-storage/
 * https://www.codeproject.com/Articles/714742/CQRS-on-Windows-Azure-Event-sourcing
 */
