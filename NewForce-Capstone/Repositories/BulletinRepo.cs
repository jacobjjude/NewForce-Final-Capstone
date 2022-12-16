using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using NewForce_Capstone.Models;
using NewForce_Capstone.Utils;

namespace NewForce_Capstone.Repositories
{
    public class BulletinRepo: BaseRepository, IBulletinRepo
    {
        public BulletinRepo(IConfiguration config) : base(config) { }
        public List<Bulletins> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT b.Id, b.userProfileId, b.subject, b.content
                    FROM Bulletins b";

                    var reader = cmd.ExecuteReader();
                    var bulletins = new List<Bulletins>();
                    while (reader.Read())
                    {
                        bulletins.Add(new Bulletins()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            userProfileid = DbUtils.GetInt(reader, "userProfileId"),
                            subject = DbUtils.GetString(reader, "content"),
                            content = DbUtils.GetString(reader, "subject")
                        });
                    }

                    reader.Close();
                    return bulletins;
                }
            }
        }

        public void Add(Bulletins Bulletin)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO Bulletins (userProfileId, subject, content)
                    OUTPUT INSERTED.ID
                    VALUES (@userProfileId, @subject, @content)";

                    DbUtils.AddParameter(cmd, "@userProfileId", Bulletin.userProfileid);
                    DbUtils.AddParameter(cmd, "@subject", Bulletin.subject);
                    DbUtils.AddParameter(cmd, "@content", Bulletin.content);

                    Bulletin.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}
