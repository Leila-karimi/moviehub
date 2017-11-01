using Movies.Api.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Movies.Api.Controllers
{
    public class MoviesController : ApiController
    {
        protected readonly MovieService _service;

        public MoviesController()
        {
            _service = new MovieService();
        }
        [Route("api/charactersmovies")]
        [HttpGet]
        public IHttpActionResult Get()
        {
            try
            {
                var allMovies = _service.GetMovies();

                var charactersMovies = (from movie in allMovies
                                        from character in movie.Roles
                                        orderby movie.Name
                                        group character by character.Actor into gp


                                        select new
                                        {
                                            ActorName = gp.Key,
                                            Characters = gp.Select(x => x.Name).ToList()
                                        }).ToList();
                return Ok(charactersMovies);

            }
            catch (Exception ex)
            {
                return InternalServerError();
            }
        }

    }
}
