using System.Collections.Generic;
using NewForce_Capstone.Models;

namespace NewForce_Capstone.Repositories
{
    public interface IUserRepository
    {
        public List<User> GetAll();
        public User GetById(int id);
        public User GetByEmail(string email);
    }
}
