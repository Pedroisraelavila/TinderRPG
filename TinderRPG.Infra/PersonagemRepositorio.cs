using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TinderRPG.Dominio.Entidades;
using TinderRPG.Infra.Base;

namespace TinderRPG.Infra
{
    public class PersonagemRepositorio : RepositorioBase<Personagem>
    {
        public IEnumerable<Personagem> ListarAtivos()
        {
            return Contexto
                .Personagem
                .Where(f => f.Ativo);
        }
    }
}
