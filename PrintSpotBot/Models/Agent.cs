using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PrintSpotBot.Models
{
    public class Agent
    {
        public int Id { get; set; }
        public string UtsaId { get; set; }
        public bool Connected { get; set; }
        public string CurrentThreadId { get; set; }
        public byte[] RowVersion { get; set; }
    }
}