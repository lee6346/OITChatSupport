using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        [RegularExpression(@"^[a-zA-Z][0-9]$", ErrorMessage = "Not in ABC123 format")]
        public string UtsaId { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
