using System;
using System.Collections.Generic;
using System.Text;
using TinderRPG.Dominio.Entidades.Base;

namespace TinderRPG.Dominio.Entidades
{
    public class Personagem : EntidadeBase
    {
        public int idPersonagem { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public int Nivel { get; set; }
        //public int idUsuario { get; set; }
        public int idRaca { get; set; }
        public int idSubclasse { get; set; }
        public int idClasse { get; set; }
    }
}
