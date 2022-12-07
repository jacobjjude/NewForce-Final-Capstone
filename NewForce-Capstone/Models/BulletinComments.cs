using Microsoft.Identity.Client;

namespace NewForce_Capstone.Models
{
    public class BulletinComments
    {
        public int Id { get; set; }
        public int postId { get; set; }
        public int userProfileId { get; set; }
        public string content { get; set; }
    }
}
