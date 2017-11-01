using Movies.Api.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;

namespace Movies.Api.Services
{
    public class MovieService
    {
        public List<Movie> GetMovies()
        {
            var url = ConfigurationManager.AppSettings["ApiUrl"];
            var httpClient = new HttpClient();
            httpClient.DefaultRequestHeaders.Accept.Clear();
            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            var response = httpClient.GetAsync(url).ConfigureAwait(false).GetAwaiter().GetResult();

            if (!response.IsSuccessStatusCode)
            {
                var error = new
                {
                    response.StatusCode,
                    response.ReasonPhrase
                };
                var message = JsonConvert.SerializeObject(error);
                throw new HttpRequestException(message);
            }

            var resultString = response.Content.ReadAsStringAsync().ConfigureAwait(false).GetAwaiter().GetResult();

            var responseItem = JsonConvert.DeserializeObject<Movie[]>(resultString);
            return responseItem.ToList();
        }       

    }
}