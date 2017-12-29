﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestChatBot.Dialogs.Locator
{
    public class UtsaPrinter
    {
        public bool MainCampus { get; set; } = true;
        public bool ColorPrinter { get; set; } = false;
        public string Building { get; set; }
        public byte Floor { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }
    }
}