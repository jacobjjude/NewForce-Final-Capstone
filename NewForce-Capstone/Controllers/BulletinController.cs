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
        public IActionResult Post(Bulletins bulletin)
        {
            _bulletinRepo.Add(bulletin);
            return CreatedAtAction("Get", new { id = bulletin.Id }, bulletin);
        }
        [HttpGet("GetByIdWithComments/{id}")]
        public IActionResult GetByIdWithComments(int id)
        {
            var bulletin = _bulletinRepo.GetByIdWithComments(id);
            if (bulletin == null)
            {
                return NotFound();
            }
            return Ok(bulletin);
        }

        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            var bulletin = _bulletinRepo.GetById(id);
            if (bulletin == null)
            {
                return NotFound();
            }
            return Ok(bulletin);
        }
        [HttpPut("{id}")]
        public IActionResult Put(Bulletins bulletin)
        {
            _bulletinRepo.EditBulletin(bulletin);
            return NoContent();
        }
    }
}
