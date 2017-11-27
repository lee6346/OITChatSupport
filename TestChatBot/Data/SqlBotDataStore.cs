using Dapper;
using Dapper.Contrib.Extensions;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Dialogs.Internals;
using Microsoft.Bot.Connector;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace TestChatBot.Data
{
    public class SqlBotDataStore: IBotDataStore<BotData>
    {
        ISqlConnectionFactory _sqlConnectionFactory;

        public SqlBotDataStore(ISqlConnectionFactory sqlConnectionFactory)
        {

            _sqlConnectionFactory = sqlConnectionFactory;
        }

        public async Task<BotData> LoadAsync(IAddress key, BotStoreType botStoreType, CancellationToken cancellationToken)
        {
            using (var connection = _sqlConnectionFactory.MakeConnection())
            {
                try
                {
                    SqlBotDataEntity entity = await SqlBotDataEntity.GetSqlBotDataEntity(key, botStoreType, connection);
                    if (entity == null)
                        return new BotData(eTag: String.Empty, data: null);
                    return new BotData(entity.ETag, entity.GetData());
                }
                catch (Exception ex)
                {
                    throw new HttpException((int)HttpStatusCode.InternalServerError, ex.Message);
                }
            }
        }

        public async Task SaveAsync(IAddress key, BotStoreType botStoreType, BotData botData, CancellationToken cancellationToken)
        {
            SqlBotDataEntity entity = new SqlBotDataEntity(botStoreType, key.BotId, key.ChannelId, key.ConversationId, key.UserId, botData.Data)
            {
                ETag = botData.ETag,
                ServiceUrl = key.ServiceUrl
            };

            using (var connection = _sqlConnectionFactory.MakeConnection())
            {
                try
                {
                    if (String.IsNullOrEmpty(entity.ETag))
                    {
                        await connection.InsertAsync(entity);
                    }
                    else if(entity.ETag == "*")
                    {
                        var foundData = await SqlBotDataEntity.GetSqlBotDataEntity(key, botStoreType, connection);
                        if (botData.Data != null)
                        {
                            if (foundData == null)
                                await connection.InsertAsync(entity);
                            else
                            {
                                foundData.Data = entity.Data;
                                foundData.ServiceUrl = entity.ServiceUrl;
                            }
                        }
                        else
                        {
                            if (foundData != null)
                                await connection.DeleteAsync(entity);
                        }
                    }
                    else
                    {
                        var foundData = await SqlBotDataEntity.GetSqlBotDataEntity(key, botStoreType, connection);
                        if(botData.Data != null)
                        {
                            if (foundData.Data == null)
                                await connection.InsertAsync(entity);
                            else
                            {
                                foundData.Data = entity.Data;
                                foundData.ServiceUrl = entity.ServiceUrl;
                                foundData.ETag = entity.ETag;
                            }
                        }
                        else
                        {
                            if (foundData != null)
                                await connection.DeleteAsync(entity);
                        }
                    }
                    
                }
                catch(SqlException err)
                {
                    throw new HttpException((int)HttpStatusCode.InternalServerError, err.Message);
                }
            }
        }

        public async Task<bool> FlushAsync(IAddress key, CancellationToken cancellationToken)
        {
            return await Task.FromResult(true);
        }
    }
}