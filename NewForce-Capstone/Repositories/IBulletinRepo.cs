using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using NewForce_Capstone.Models;
using NewForce_Capstone.Utils;

namespace NewForce_Capstone.Repositories
{
    public interface IBulletinRepo
    {
        public List<Bulletins> GetAll();
        public void Add(Bulletins Bulletin);
        public Bulletins GetByIdWithComments(int id);
        public Bulletins GetById(int id);
        public void EditBulletin(Bulletins bulletin);
    }
}
