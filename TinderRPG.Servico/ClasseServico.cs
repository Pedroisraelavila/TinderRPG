﻿
using TinderRPG.Comum.NotificationPattern;
using System;
using System.Collections.Generic;
using System.Net.Mail;
using System.Text;
using TinderRPG.Dominio.Entidades;
using TinderRPG.Infra;

namespace TinderRPG.Servico
{
    public class ClasseServico
    {
        private readonly ClasseRepositorio _classeRepositorio;

        public ClasseServico()
        {
            _classeRepositorio = new ClasseRepositorio();
        }

        public NotificationResult Salvar(Classe ent)
        {
            var notificationResult = new NotificationResult();

            try
            {
                ent.Ativo = true;

                if (notificationResult.IsValid)
                {
                    notificationResult.Add("Cadastrado com sucesso");
                    if (ent.idClasse == 0)
                        _classeRepositorio.Adicionar(ent);
                    else
                        _classeRepositorio.Atualizar(ent);
                }

                notificationResult.Result = ent;

                return notificationResult;
            }
            catch (Exception ex)
            {
                return notificationResult.Add(new NotificationError(ex.Message));
            }
        }

        public IEnumerable<Classe> ListarAtivos()
        {
            return _classeRepositorio.ListarAtivos();
        }

        public string Excluir(Classe entidade)
        {
            return "";
        }

        public IEnumerable<Classe> ListarTodos()
        {
            return _classeRepositorio.ListarTodos();
        }
    }
}