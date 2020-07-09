using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TinderRPG.Dominio.Entidades;
using TinderRPG.Infra.Base;

namespace TinderRPG.Infra
{
    public class ClasseRepositorio : RepositorioBase<Classe>
    {
        public IEnumerable<Classe> ListarAtivos()
        {
            return Contexto
                .Classe
                .Where(c => c.Ativo);
        }
    }
}
