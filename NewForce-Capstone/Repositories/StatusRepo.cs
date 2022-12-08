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
                    SELECT s.Id, s.userProfileId, s.content
                    FROM Status s";

                    var reader = cmd.ExecuteReader();
                    var statuses = new List<Status>();
                    while (reader.Read())
                    {
                        statuses.Add(new Status()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            userProfileId = DbUtils.GetInt(reader, "userProfileId"),
                            content = DbUtils.GetString(reader, "content")
                        });
                    }

                    reader.Close();
                    return statuses;
                }
            }
        }
    }
}
