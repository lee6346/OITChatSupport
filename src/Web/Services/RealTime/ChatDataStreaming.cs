using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reactive.Linq;
using System.Threading.Tasks;
using System.Threading.Tasks.Channels;

namespace Web.Services.RealTime
{
    public class ChatDataStreaming: Hub<IChatClient>
    {
        public IObservable<int> ObservableCounter(int count, int delay)
        {
            return Observable.Interval(TimeSpan.FromMilliseconds(delay))
                .Select((_, index) => index)
                .Take(count);
        }

        public ReadableChannel<int> ChannelCounter(int count, int delay)
        {
            var channel = Channel.CreateUnbounded<int>();

            Task.Run(async () => {
                for (var i = 0; i < count; i++)
                {
                    await channel.Out.WriteAsync(i);
                    await Task.Delay(delay);
                }
                channel.Out.TryComplete();

            });
            return channel.In;
        }
    }
}
