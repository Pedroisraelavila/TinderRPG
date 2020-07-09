using System;
using System.Collections.Generic;
using System.Text;
using TinderRPG.Dominio.Entidades.Base;

namespace TinderRPG.Dominio.Entidades
{
    public class Match : EntidadeBase
    {
        public int idMatch { get; set; }
        public int idUsuario { get; set; }
        public int idAmigo { get; set; }
        public int idReacao { get; set; }
        public DateTime DataAmizade { get; set; }
        public bool AmigoAdicionado { get; set; }
    }
}
