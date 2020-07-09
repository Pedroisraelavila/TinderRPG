using System;
using System.Collections.Generic;
using System.Text;
using TinderRPG.Dominio.Entidades.Base;

namespace TinderRPG.Dominio.Entidades
{
    public class Raca : EntidadeBase
    {
        public int idRaca { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
    }
}
