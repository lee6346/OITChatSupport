using Dapper;
using Dapper.Contrib.Extensions;
using Microsoft.Bot.Connector;
using PrintSpotBot.Data.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace PrintSpotBot.Data.Repositories
{
    public class ActivityRepository: IActivityRepository
    {

        private readonly ISqlConnectionFactory _sqlConnectionFactory;

        public ActivityRepository(ISqlConnectionFactory sqlConnectionFactory)
        {
            _sqlConnectionFactory = sqlConnectionFactory;
        }

        public async Task StoreMessage(Activity activity)
        {
            using(var connection = _sqlConnectionFactory.MakeConnection())
            {

                if (await connection.InsertAsync(activity) <= 0)
                    throw new DbTransactionException("Error inserting to database"); 
            }
        }

      
    }
}