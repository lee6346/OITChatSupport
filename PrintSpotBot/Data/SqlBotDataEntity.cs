using Dapper;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Dialogs.Internals;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Threading.Tasks;

namespace PrintSpotBot.Data
{
    public class SqlBotDataEntity : IAddress
    {
        private static readonly JsonSerializerSettings serializerSettings = new JsonSerializerSettings()
        {
            Formatting = Formatting.None,
            NullValueHandling = NullValueHandling.Ignore
        };

        internal SqlBotDataEntity() { }

        internal SqlBotDataEntity(BotStoreType botStoreType, string botId, string channelId, string conversationId, string userId, object data)
        {
            BotStoreType = botStoreType;
            BotId = botId;
            ChannelId = channelId;
            ConversationId = conversationId;
            UserId = userId;
            Data = Serialize(data);
        }



        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public BotStoreType BotStoreType { get; set; }
        public string BotId { get; set; }
        public string ChannelId { get; set; }
        public string ConversationId { get; set; }
        public string UserId { get; set; }
        public byte[] Data { get; set; }
        public string ETag { get; set; }
        public string ServiceUrl { get; set; }
        [Required, DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTimeOffset Timestamp { get; set; }

        private static byte[] Serialize(object data)
        {
            using (var cmpStream = new MemoryStream())
            using (var stream = new GZipStream(cmpStream, CompressionMode.Compress))
            using (var streamWriter = new StreamWriter(stream))
            {
                var serializedJson = JsonConvert.SerializeObject(data, serializerSettings);
                streamWriter.Write(serializedJson);
                streamWriter.Close();
                stream.Close();
                return cmpStream.ToArray();
            }
        }

        private static object Deserialize(byte[] bytes)
        {
            using (var stream = new MemoryStream(bytes))
            using (var gz = new GZipStream(stream, CompressionMode.Decompress))
            using (var streamReader = new StreamReader(gz))
            {
                return JsonConvert.DeserializeObject(streamReader.ReadToEnd());
            }
        }

        internal ObjectT GetData<ObjectT>()
        {
            return ((JObject)Deserialize(this.Data)).ToObject<ObjectT>();
        }

        internal object GetData()
        {
            return Deserialize(this.Data);
        }

        internal static async Task<SqlBotDataEntity> GetSqlBotDataEntity(IAddress key, BotStoreType botStoreType, IDbConnection connection)
        {
            SqlBotDataEntity entity = null;
            string sqlQuery = "";
            var query = await connection.QueryAsync<SqlBotDataEntity>(sqlQuery);
            switch (botStoreType)
            {
                case BotStoreType.BotConversationData:
                    entity = query.FirstOrDefault(d => d.BotStoreType == botStoreType
                                                    && d.ChannelId == key.ChannelId
                                                    && d.ConversationId == key.ConversationId);
                    break;
                case BotStoreType.BotUserData:
                    entity = query.FirstOrDefault(d => d.BotStoreType == botStoreType
                                                    && d.ChannelId == key.ChannelId
                                                    && d.ConversationId == key.ConversationId);
                    break;
                case BotStoreType.BotPrivateConversationData:
                    entity = query.FirstOrDefault(d => d.BotStoreType == botStoreType
                                                    && d.ChannelId == key.ChannelId
                                                    && d.ConversationId == key.ConversationId);
                    break;
                default:
                    throw new ArgumentException("Unsupported bot store type");

            }
            return entity;
        }
    }
}