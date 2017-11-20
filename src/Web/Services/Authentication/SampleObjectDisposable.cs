using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.Authentication
{
    // the dispoable should always be on a base class, abstract, etc (nto a sealed)
    // and if you have reason to believe its derived form may need to access unmaanged resources
    public class SampleObjectDisposable: IDisposable
    {
        //the purpose of a boolean field is to use to track whether or not teh unmanaged reousrces of this instance
        // have already been disposed, and is used to deterined if throwing ObjectDisposedException
        private bool disposed = false;

        //can have multiple overloaded Dispose() methods
        //this is the base Dispose() that will invoke the other dispose overloads that may be overriden by derived classes
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
                return;

            if (disposing)
            {
                //free all managed objects that implement IDisposable only
                //_session.Dispose();
            }
            // here release any unmanaged objects, then set the object references to null
            //_channelFactory.Abort();
            //_session = null;
            //_channelFactory = null
            disposed = true;
        }
        // here is the destructor that the compiler puts in the finalizer method 
        ~SampleObjectDisposable()
        {
            Dispose(false);
        }
    }

    // a deribved class
    public class DerivedObjectDisposable: SampleObjectDisposable
    {
        private bool disposed = false;
        protected override void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    //free other managed objects that implement IDisposable
                }
                //release any unmanaged objects, set those object references to null
                //...
                disposed = true;
            }
            base.Dispose(disposing);
        }
    }
}
