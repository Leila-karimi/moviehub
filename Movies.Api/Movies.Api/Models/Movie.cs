using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Movies.Api.Models
{
    public class Movie
    {
        public string Name { get; set; }
        public List<Character> Roles { get; set; }
    }
}