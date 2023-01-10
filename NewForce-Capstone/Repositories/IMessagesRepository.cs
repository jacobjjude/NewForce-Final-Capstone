using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using NewForce_Capstone.Models;
using NewForce_Capstone.Utils;


namespace NewForce_Capstone.Repositories
{
    public interface IMessagesRepository
    {
        public List<Messages> GetAllById(int id);
        public Messages GetById(int id);
        public void AddMessage(Messages message);
    }
}
