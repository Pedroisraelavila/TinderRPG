using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TinderRPG.Comum.NotificationPattern;
using Microsoft.AspNetCore.Mvc;
using TinderRPG.Dominio.Entidades;
using TinderRPG.Servico;

namespace TinderRPG.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClasseController : ControllerBase
    {
        private readonly ClasseServico _classeServico;
        public ClasseController()
        {
            _classeServico = new ClasseServico();
        }

        [HttpGet("Ativos")]
        public IEnumerable<Classe> Ativos()
        {
            return _classeServico.ListarAtivos();
        }

        [HttpPost("Salvar")]
        public NotificationResult Salvar(Classe entidade)
        {
            return _classeServico.Salvar(entidade);
        }

        [HttpDelete("Excluir")]
        public string Excluir(Classe entidade)
        {
            return _classeServico.Excluir(entidade);
        }

        [HttpGet("{id}")]
        public Classe BuscarPorId(int id)
        {
            return _classeServico.BuscarPorId(id);
        }
    }
}