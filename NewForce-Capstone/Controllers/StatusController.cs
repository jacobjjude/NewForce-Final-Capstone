using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using NewForce_Capstone.Models;
using NewForce_Capstone.Repositories;

namespace NewForce_Capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatusController : ControllerBase
    {
        private readonly IStatusRepo _statusRepo;
        public StatusController(IStatusRepo statusRepo)
        {
            _statusRepo = statusRepo;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_statusRepo.GetAll());
        }
        [HttpPost]
        public IActionResult Post(Status status)
        {
            _statusRepo.Add(status);
            return CreatedAtAction("Get", new { id = status.Id }, status);
        }
        [HttpPut("{id}")]
        public IActionResult Edit(Status status)
        {
            _statusRepo.EditStatus(status);
            return NoContent();
        }
        [HttpGet("GetById/{id}")]
        public IActionResult GetStatusById(int id)
        {
            var status = _statusRepo.GetById(id);
            if (status == null)
            {
                return NotFound();
            }
            return Ok(status);
        }
    }
}
