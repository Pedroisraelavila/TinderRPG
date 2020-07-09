using System;
using System.Collections.Generic;
using System.Text;
using TinderRPG.Dominio.Entidades.Base;

namespace TinderRPG.Dominio.Entidades
{
    public class Mensagem : EntidadeBase
    {
        public int idMensagem { get; set; }
        public string Descricao { get; set; }
        public DateTime DataEnvio { get; set; }
        public int idRemetente { get; set; }
        public bool Lida { get; set; }
        public int idReacao { get; set; }
        public int idMatch { get; set; }
        public int idUsuario { get; set; }
    }
}
