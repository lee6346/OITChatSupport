using Web.Dtos;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Web.Services.Errors;

namespace Web.Services
{
    public class DirectLineService : IDirectLineService
    {
        public DirectLineService() { }

        /// <summary>
        /// Makes Api call to Direct Line Api to receive a new token and conversation id
        /// </summary>
        /// <returns></returns>
        public async Task<DirectLineTokenDto> RequestDirectLineTokenAsync()
        {
            using (var client = new HttpClient() { BaseAddress = new Uri("https://directline.botframework.com") })
            {
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "gD8hMWEV0fM.cwA.x-U.EQEmjSeulWq60J-PHoJyD9sDeUIzOGNs5xIkKCxRxYs");
                HttpResponseMessage res = client.PostAsync("v3/directline/tokens/generate", null).Result;
                if (!res.IsSuccessStatusCode)
                {
                    //use serilog to store error in db
                    throw new DirectLineException(res.StatusCode, "Failed to receive a token from the direct line API");
                    
                }
                else
                {
                    var msg = await res.Content.ReadAsStringAsync();
                    return JsonConvert.DeserializeObject<DirectLineTokenDto>(msg);
                }
            }
        }

        /// <summary>
        /// Makes Api call to Direct Line Api to receive a new token and web socket stream url
        /// </summary>
        /// <param name="conversationId"></param>
        /// <returns></returns>
        public async Task<DirectLineConnectionDto> RequestDirectLineSocketAsync(string conversationId)
        {

            using (var client = new HttpClient() { BaseAddress = new Uri("https://directline.botframework.com") })
            {
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "gD8hMWEV0fM.cwA.x-U.EQEmjSeulWq60J-PHoJyD9sDeUIzOGNs5xIkKCxRxYs");
                HttpResponseMessage res = await client.GetAsync("v3/directline/conversations/" + conversationId);
                if (!res.IsSuccessStatusCode)
                {
                    //use serilog to store error in db
                    throw new DirectLineException(res.StatusCode, "Failed to receive a token and socket url from direct line API");
                }
                else
                {
                    var msg = await res.Content.ReadAsStringAsync();
                    return JsonConvert.DeserializeObject<DirectLineConnectionDto>(msg);
                }
            }

        }
    }
}