using System;
using System.Collections.Generic;
using System.Text;
using TinderRPG.Dominio.Entidades.Base;

namespace TinderRPG.Dominio.Entidades
{
    public class Classe : EntidadeBase
    {
        public int idClasse { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
    }
}
