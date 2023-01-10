using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using NewForce_Capstone.Models;
using NewForce_Capstone.Utils;
using Microsoft.IdentityModel.Tokens;

namespace NewForce_Capstone.Repositories
{
    public class MessagesRepository : BaseRepository, IMessagesRepository
    {
        public MessagesRepository(IConfiguration config) : base(config) { }
        public List<Messages> GetAllById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT m.Id, m.userId, m.friendId, m.Subject, m.content
                    FROM Messages m
                    WHERE m.friendId = @id";
                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();
                    var messages = new List<Messages>();

                    while (reader.Read())
                    {
                        messages.Add(new Messages()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            userId = DbUtils.GetInt(reader, "userId"),
                            friendId = DbUtils.GetInt(reader, "friendId"),
                            Subject = DbUtils.GetString(reader, "Subject"),
                            content = DbUtils.GetString(reader, "content")
                        });
                    }
                    reader.Close();
                    return messages;
                }
            }
        }

        public Messages GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT m.Id, m.userId, m.friendId, m.Subject, m.content
                    FROM Messages m
                    WHERE m.Id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();
                    Messages message = null;

                    while (reader.Read())
                    {
                        if (message == null)
                        {
                            message = new Messages()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                userId = DbUtils.GetInt(reader, "userId"),
                                friendId = DbUtils.GetInt(reader, "friendId"),
                                Subject = DbUtils.GetString(reader, "Subject"),
                                content = DbUtils.GetString(reader, "content")
                            };
                        };
                    }
                    reader.Close();
                    return message;
                }    
            }
        }
        public void AddMessage(Messages message)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                INSERT INTO Messages (Id, userId, friendId, Subject, content)
                                OUTPUT INSERTED.ID
                                VALUES (@id, @userId, @friendId, @Subject, @content)";
                    
                    DbUtils.AddParameter(cmd, "@userId", message.userId);
                    DbUtils.AddParameter(cmd, "@friendId", message.friendId);
                    DbUtils.AddParameter(cmd, "@Subject", message.Subject);
                    DbUtils.AddParameter(cmd, "@content", message.content);

                    message.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

    }
}
