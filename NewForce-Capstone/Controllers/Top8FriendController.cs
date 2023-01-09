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


    }
}
