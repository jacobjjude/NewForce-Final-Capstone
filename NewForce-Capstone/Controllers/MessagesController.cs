using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using NewForce_Capstone.Models;
using NewForce_Capstone.Repositories;

namespace NewForce_Capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly IMessagesRepository _messagesRepository;
        public MessagesController(IMessagesRepository messagesRepository)
        {
            _messagesRepository = messagesRepository;
        }   
        [HttpGet("GetById/{id}")]
        public IActionResult GetAllById(int id)
        {
            return Ok(_messagesRepository.GetAllById(id));
        }
        [HttpGet("GetSingleById/{id}")]
        public IActionResult GetSingleById(int id)
        {
            return Ok(_messagesRepository.GetById(id));
        }
        [HttpPost]
        public IActionResult Post(Messages message)
        {
            _messagesRepository.AddMessage(message);
            return CreatedAtAction("Get", new { id = message.Id }, message);
        }
    }
}
