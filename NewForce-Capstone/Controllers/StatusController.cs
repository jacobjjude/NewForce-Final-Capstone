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
        public StatusController (IStatusRepo statusRepo)
        {
            _statusRepo = statusRepo;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_statusRepo.GetAll());
        }
    }
}
