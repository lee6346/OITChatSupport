using Domain.Model.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Common
{
    public interface IRepository<T> where T : Entity
    {
        T GetById(long id);
        //List<T> List();
        //List<T> List(ISpecification<T> spec);
        void Add(T entity);
        void Update(T entity);
        void Remove(T entity);
        Task SaveChangesAsync();

    }
}
