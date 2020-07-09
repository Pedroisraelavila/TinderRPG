
using System;
using System.Collections.Generic;
using System.Text;
using TinderRPG.Dominio.Entidades.Base;

namespace TinderRPG.Dominio.Entidades
{
    public class Reacao : EntidadeBase
    {
        public int idReacao { get; set; }
        public string Nome { get; set; }
        public DateTime DataReacao { get; set; }
    }
}
