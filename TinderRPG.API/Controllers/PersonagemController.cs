using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aula09.Comum.NotificationPattern;
using Microsoft.AspNetCore.Mvc;
using TinderRPG.Dominio.Entidades;
using TinderRPG.Servico;

namespace TinderRPG.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonagemController : ControllerBase
    {
        private readonly PersonagemServico _personagemServico;
        public PersonagemController(PersonagemServico personagemServico)
        {
            _personagemServico = personagemServico;
        }

        [HttpGet("Ativos")]
        public IEnumerable<Personagem> Ativos()
        {
            return _personagemServico.ListarAtivos();
        }

        [HttpPost("Salvar")]
        public NotificationResult Salvar(Personagem ent)
        {
            return _personagemServico.Salvar(ent);
        }

        [HttpDelete("Excluir")]
        public string Excluir(Personagem ent)
        {
            return _personagemServico.Excluir(ent);
        }
    }
}