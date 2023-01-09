using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using NewForce_Capstone.Models;
using NewForce_Capstone.Utils;
using Microsoft.IdentityModel.Tokens;

namespace NewForce_Capstone.Repositories
{
    public class BulletinRepo : BaseRepository, IBulletinRepo
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
                    SELECT b.Id, b.userProfileId, b.subject, b.content, u.Id as userId, u.firstName, u.lastName, u.photoUrl, u.email
                    FROM Bulletins b
                    LEFT JOIN [User] u ON u.Id = b.userProfileId";

                    var reader = cmd.ExecuteReader();
                    var bulletins = new List<Bulletins>();
                    while (reader.Read())
                    {
                        bulletins.Add(new Bulletins()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            userProfileid = DbUtils.GetInt(reader, "userProfileId"),
                            subject = DbUtils.GetString(reader, "content"),
                            content = DbUtils.GetString(reader, "subject"),
                            user = new User()
                            {
                                Id = DbUtils.GetInt(reader, "userId"),
                                firstName = DbUtils.GetString(reader, "firstName"),
                                lastName = DbUtils.GetString(reader, "lastName"),
                                photoUrl = DbUtils.GetString(reader, "photoUrl"),
                                email = DbUtils.GetString(reader, "email")
                            }

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

        public Bulletins GetByIdWithComments(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT b.Id, b.userProfileId, b.subject, b.content, u.Id AS userId, u.firstName, u.lastName, u.photoUrl, u.email, bc.Id AS commentId, bc.postId, bc.userProfileId AS commentUser, bc.content AS commentContent
                    FROM Bulletins b
                    LEFT JOIN BulletinComments bc ON b.Id = bc.postId
                    LEFT JOIN [User] u ON b.userProfileId = u.Id
                    WHERE b.Id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();
                    Bulletins bulletin = null;

                    while (reader.Read())
                    {
                        if (bulletin == null)
                        {
                            bulletin = new Bulletins()
                            {
                                Id = id,
                                userProfileid = DbUtils.GetInt(reader, "userProfileId"),
                                subject = DbUtils.GetString(reader, "subject"),
                                content = DbUtils.GetString(reader, "content"),
                                user = new User()
                                {
                                    Id = DbUtils.GetInt(reader, "userId"),
                                    firstName = DbUtils.GetString(reader, "firstName"),
                                    lastName = DbUtils.GetString(reader, "lastName"),
                                    photoUrl = DbUtils.GetString(reader, "photoUrl"),
                                    email = DbUtils.GetString(reader, "email")
                                },
                                Comments = new List<BulletinComments>()
                            };
                        }
                        if (DbUtils.IsNotDbNull(reader, "commentId"))
                        {
                            bulletin.Comments.Add(new BulletinComments()
                            {
                                Id = DbUtils.GetInt(reader, "commentId"),
                                postId = DbUtils.GetInt(reader, "postId"),
                                userProfileId = DbUtils.GetInt(reader, "commentUser"),
                                content = DbUtils.GetString(reader, "commentContent")
                            });
                        }
                    }

                    reader.Close();
                    return bulletin;
                }
            }
        }

        public Bulletins GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT b.Id, b.userProfileId, b.subject, b.content
                    FROM Bulletins b
                    WHERE b.Id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();
                    Bulletins bulletin = null;

                    while (reader.Read())
                    {
                        if (bulletin == null)
                        {
                            bulletin = new Bulletins()
                            {
                                Id = id,
                                userProfileid = DbUtils.GetInt(reader, "userProfileId"),
                                subject = DbUtils.GetString(reader, "subject"),
                                content = DbUtils.GetString(reader, "content"),
                            };
                        }
                    }
                    reader.Close();
                    return bulletin;
                }
            }
        }

        public void EditBulletin(Bulletins bulletin)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    UPDATE Bulletins
                    SET subject = @subject, 
                        content = @content
                    WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@subject", bulletin.subject);
                    cmd.Parameters.AddWithValue("@content", bulletin.content);
                    cmd.Parameters.AddWithValue("@id", bulletin.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
