using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using NewForce_Capstone.Models;
using NewForce_Capstone.Utils;

namespace NewForce_Capstone.Repositories
{
    public class StatusRepo : BaseRepository, IStatusRepo
    {
        public StatusRepo(IConfiguration config) : base(config) { }
        public List<Status> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT s.Id, s.userProfileId, s.content, u.firstName, u.lastName
                    FROM Status s
                    LEFT JOIN [User] u ON u.Id = s.userProfileId";

                    var reader = cmd.ExecuteReader();
                    var statuses = new List<Status>();
                    while (reader.Read())
                    {
                        statuses.Add(new Status()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            userProfileId = DbUtils.GetInt(reader, "userProfileId"),
                            content = DbUtils.GetString(reader, "content"),
                            firstName = DbUtils.GetString(reader, "firstName"),
                            lastName = DbUtils.GetString(reader, "lastName")
                        });
                    }

                    reader.Close();
                    return statuses;
                }
            }
        }

        public void Add(Status status)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO Status (userProfileId, content)
                    OUTPUT INSERTED.ID
                    VALUES (@userProfileId, @content)";

                    DbUtils.AddParameter(cmd, "@userProfileId", status.userProfileId);
                    DbUtils.AddParameter(cmd, "@content", status.content);

                    status.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}
