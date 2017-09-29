using Web.Common;
using Web.Model.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Web.ValueObjects
{
    public class ChatBot: ValueObject<ChatBot>
    {
        public ChatBot()
        {

        }
        private readonly string _botHandle;
        private readonly UtsaDepartment _utsaDepartment;

        public string BotHandle { get { return _botHandle; } }
        public UtsaDepartment UtsaDepartment { get { return _utsaDepartment; } }

        protected override bool EqualsCore(ChatBot other)
        {
            return _botHandle == other.BotHandle;
        }

        protected override int GetHashCodeCore()
        {
            unchecked
            {
                int hash = (int)2166136261;
                return (hash * 16777619) ^ BotHandle.GetHashCode();
            }
        }
    }
}
