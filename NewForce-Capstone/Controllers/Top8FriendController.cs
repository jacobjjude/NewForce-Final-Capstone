using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using NewForce_Capstone.Models;
using NewForce_Capstone.Repositories;

namespace NewForce_Capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Top8FriendController : Controller
    {
        private readonly IFriendRepository _friendRepo;
        public Top8FriendController(IFriendRepository friendRepo)
        {
            _friendRepo = friendRepo;
        }
        [HttpGet]
        public IActionResult GetTop8(int id)
        {
            return Ok(_friendRepo.GetTop8(id));
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            return Ok(_friendRepo.GetAll());
        }
        [HttpPost("newFriend")]
        public IActionResult Post(Friends friend)
        {
            _friendRepo.Add(friend);
            return CreatedAtAction("Get", new { id = friend.Id }, friend);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _friendRepo.Delete(id);
            return NoContent();
        }
    }
}
