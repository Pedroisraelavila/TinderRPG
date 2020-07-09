using TinderRPG.Comum.NotificationPattern;
using System;
using System.Collections.Generic;
using System.Text;
using TinderRPG.Dominio.Entidades;
using TinderRPG.Infra;
using TinderRPG.Servico.Base;

namespace TinderRPG.Servico
{

    public class PersonagemServico
    {
        private readonly PersonagemRepositorio _personagemRepositorio;

        public PersonagemServico()
        {
            _personagemRepositorio = new PersonagemRepositorio();
        }

        public NotificationResult Salvar(Personagem ent)
        {
            var notificationResult = new NotificationResult();

            try
            {
                ent.Ativo = true;

                if (notificationResult.IsValid)
                {
                    notificationResult.Add("Cadastrado com sucesso");
                    if (ent.idPersonagem == 0)
                        _personagemRepositorio.Adicionar(ent);
                    else
                        _personagemRepositorio.Atualizar(ent);
                }

                notificationResult.Result = ent;

                return notificationResult;
            }
            catch (Exception ex)
            {
                return notificationResult.Add(new NotificationError(ex.Message));
            }
        }

        public IEnumerable<Personagem> ListarAtivos()
        {
            return _personagemRepositorio.ListarAtivos();
        }

        public string Excluir(Personagem entidade)
        {
            return "";
        }

        public IEnumerable<Personagem> ListarTodos()
        {
            return _personagemRepositorio.ListarTodos();
        }
    }
}
