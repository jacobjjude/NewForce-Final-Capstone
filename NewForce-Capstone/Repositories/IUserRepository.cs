using System.Collections.Generic;
using NewForce_Capstone.Models;

namespace NewForce_Capstone.Repositories
{
    public interface IUserRepository
    {
        public List<User> GetAll();
    }
}
