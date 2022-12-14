using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using NewForce_Capstone.Models;
using NewForce_Capstone.Utils;

namespace NewForce_Capstone.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IConfiguration config) : base(config) { }

        public List<User> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT u.Id, u.firstName, u.lastName, u.photoUrl, u.email
                    FROM [User] u";

                    var reader = cmd.ExecuteReader();
                    var users = new List<User>();
                    while (reader.Read())
                    {
                        users.Add(new User()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            firstName = DbUtils.GetString(reader, "firstName"),
                            lastName = DbUtils.GetString(reader, "lastName"),
                            photoUrl = DbUtils.GetString(reader, "photoUrl"),
                            email = DbUtils.GetString(reader, "email")
                        });
                    }

                    reader.Close();
                    return users;
                }
            }
        }

        public User GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT u.Id, u.firstName, u.lastName, u.photoUrl, u.email
                    FROM [User] u
                    WHERE u.Id = @id";

                    DbUtils.AddParameter(cmd, "@id", id);
                    var reader = cmd.ExecuteReader();

                    User singleUser = null;
                    if (reader.Read())
                    {
                        singleUser = new User()
                        {
                            Id = id,
                            firstName = DbUtils.GetString(reader, "firstName"),
                            lastName = DbUtils.GetString(reader, "lastName"),
                            photoUrl = DbUtils.GetString(reader, "photoUrl"),
                            email = DbUtils.GetString(reader, "photoUrl")
                        };
                    }
                    reader.Close();
                    return singleUser;
                }
            }
        }
        public User GetByEmail(string email)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT Id, firstName, lastName, photoUrl, email
                    FROM [User]
                    WHERE email = @email";
                    cmd.Parameters.AddWithValue("@email", email);

                    var reader = cmd.ExecuteReader();

                    User user = null;
                    if (reader.Read())
                    {
                        user = new User()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            firstName = DbUtils.GetString(reader, "firstName"),
                            lastName = DbUtils.GetString(reader, "lastName"),
                            photoUrl = DbUtils.GetString(reader, "photoUrl"),
                            email = DbUtils.GetString(reader, "email")
                        };
                    }

                    reader.Close();
                    return user;
                }
            }
        }
    }
}
