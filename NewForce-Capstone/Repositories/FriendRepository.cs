using Microsoft.Extensions.Configuration;
using System;
using System.Linq;
using System.Collections.Generic;
using NewForce_Capstone.Models;
using NewForce_Capstone.Utils;

namespace NewForce_Capstone.Repositories
{
    public class FriendRepository : BaseRepository, IFriendRepository
    {
        public FriendRepository(IConfiguration config) : base(config) { }
        public List<Top8Friends> GetTop8(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT t.Id, t.FriendId, t.RankingId, t.userId, u.Id AS joinedId, u.firstName, u.lastName, u.photoUrl
                    FROM Top8Friends t
                    LEFT JOIN [User] u ON t.FriendId = u.Id
                    WHERE t.userId = @currentUser
                    ORDER BY t.RankingId";
                    DbUtils.AddParameter(cmd, "@currentUser", id);

                    var reader = cmd.ExecuteReader();
                    var friends = new List<Top8Friends>();
                    
                    while (reader.Read())
                    {
                        friends.Add(new Top8Friends()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FriendId = DbUtils.GetInt(reader, "FriendId"),
                            RankingId = DbUtils.GetInt(reader, "RankingId"),
                            userId = DbUtils.GetInt(reader, "userId"),
                            user = new User()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                firstName = DbUtils.GetString(reader, "firstName"),
                                lastName = DbUtils.GetString(reader, "lastName"),
                                photoUrl = DbUtils.GetString(reader, "photoUrl")
                            },
                        });
                    }

                    reader.Close();
                    return friends;
                }
            }
        }
    }
}
