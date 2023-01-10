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

        public List<Friends> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT f.Id, f.userProfileIdSender, f.userProfileIdReceive
                    FROM Friends f";

                    var reader = cmd.ExecuteReader();
                    var friends = new List<Friends>();
                    while (reader.Read())
                    {
                        friends.Add(new Friends()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            userProfileIdReceive = DbUtils.GetInt(reader, "userProfileIdReceive"),
                            userProfileIdSender = DbUtils.GetInt(reader, "userProfileIdSender")
                        });
                    }
                    reader.Close();
                    return friends;
                }
            }
        }

        public void Add(Friends friend)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO Friends (userProfileIdSender, userProfileIdReceive)
                    OUTPUT INSERTED.ID
                    VALUES (@userProfileIdSender, @userProfileIdReceive)";
                    DbUtils.AddParameter(cmd, "@userProfileIdSender", friend.userProfileIdSender);
                    DbUtils.AddParameter(cmd, "@userProfileIdReceive", friend.userProfileIdReceive);

                    friend.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    DELETE FROM Friends
                    WHERE Id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
