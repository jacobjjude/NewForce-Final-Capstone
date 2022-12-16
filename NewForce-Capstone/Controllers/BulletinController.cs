using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using NewForce_Capstone.Models;
using NewForce_Capstone.Repositories;

namespace NewForce_Capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BulletinController : ControllerBase
    {
        // GET: BulletinController
        private readonly IBulletinRepo _bulletinRepo;
        public BulletinController(IBulletinRepo bulletinRepo)
        {
            _bulletinRepo = bulletinRepo;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_bulletinRepo.GetAll());
        }
        [HttpPost]
        public IActionResult Post (Bulletins bulletin)
        {
            _bulletinRepo.Add(bulletin);
            return CreatedAtAction("Get", new { id = bulletin.Id }, bulletin);
        }
    }
}
