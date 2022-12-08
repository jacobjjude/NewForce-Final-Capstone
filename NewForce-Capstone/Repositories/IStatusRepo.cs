using NewForce_Capstone.Models;
using System.Collections.Generic;

namespace NewForce_Capstone.Repositories
{
    public interface IStatusRepo
    {
        public List<Status> GetAll();
    }
}
