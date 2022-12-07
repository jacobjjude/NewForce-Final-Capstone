using Microsoft.Identity.Client;

namespace NewForce_Capstone.Models
{
    public class Messages
    {
        public int Id { get; set; }
        public int userId { get; set; }
        public int friendId { get; set; }
        public string Subject { get; set; }
        public string content { get; set; }
    }
}
