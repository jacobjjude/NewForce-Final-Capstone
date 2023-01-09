using NewForce_Capstone.Models;
using System.Collections.Generic;

namespace NewForce_Capstone.Repositories
{
    public interface IStatusRepo
    {
        public List<Status> GetAll();
        public void Add(Status status);
        public void EditStatus(Status status);
        public Status GetById(int id);
    }
}
