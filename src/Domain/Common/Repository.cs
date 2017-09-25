using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Common
{
    public abstract class Repository<T> where T : AggregateRoot
    {
        public T GetById(long id)
        {
            //shoud have ORM (ef, etc) to return the entity
            /*
             * using (ISession session = SessionFactory.OpenSession())
            {
                return session.Get<T>(id);
            }
            */
            return null;
        }

        public void Save(T aggregateRoot)
        {
            /*
             * using (ISession session = SessionFactory.OpenSession())
            using (ITransaction transaction = session.BeginTransaction())
            {
                session.SaveOrUpdate(aggregateRoot);
                transaction.Commit();
            }
            */
        }
    }
}
