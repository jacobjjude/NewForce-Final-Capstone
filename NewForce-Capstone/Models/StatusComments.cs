namespace NewForce_Capstone.Models
{
    public class StatusComments
    {
        public int Id { get; set; }
        public int statusId { get; set; }
        public int userProfileId { get; set; }
        public string content { get; set; }
    }
}
