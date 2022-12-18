using System.Collections.Generic;

namespace NewForce_Capstone.Models
{
    public class Bulletins
    {
        public int Id { get; set; }
        public int userProfileid { get; set; }
        public string subject { get; set; }
        public string content { get; set; }
        public User user { get; set; }
        public List<BulletinComments> Comments { get; set; }
    }
}
