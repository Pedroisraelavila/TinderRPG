using System;
using System.Collections.Generic;
using System.Text;
using TinderRPG.Dominio.Entidades.Base;

namespace TinderRPG.Dominio.Entidades
{
    public class Usuario : EntidadeBase
    {
        public int idUsuario { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public DateTime DataNasc { get; set; }
    }
}
