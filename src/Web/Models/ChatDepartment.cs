using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models.Common;

namespace Web.Models
{
    public class ChatDepartment: Entity
    {
        public string Name { get; set; }
        public string BotHandle { get; set; }
    }
}
