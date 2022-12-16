using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using NewForce_Capstone.Models;
using NewForce_Capstone.Utils;


namespace NewForce_Capstone.Repositories
{
    public interface IFriendRepository
    {
        public List<Top8Friends> GetTop8(int id);
    }
}
