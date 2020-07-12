using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TinderRPG.Infra.Base
{
    public abstract class RepositorioBase<T> where T : class
    {
        protected Contexto Contexto { get; }
        private DbSet<T> Entidade { get; }
        public RepositorioBase()
        {
            Contexto = new Contexto();
            Entidade = Contexto.Set<T>();
        }

        public T ListarUm(params object[] keys)
        {
            return Entidade.Find(keys);
        }
        public List<T> ListarTodos()
        {
            return Contexto
            .Set<T>()
            .ToList();
        }
        public void Adicionar(T ent)
        {
            Entidade.Add(ent);
            Contexto.SaveChanges();
        }
        public void Remover(T ent)
        {
            Entidade.Remove(ent);
            Contexto.SaveChanges();
        }
        public void Atualizar(T ent)
        {
            Entidade.Update(ent);
            Contexto.SaveChanges();
        }
    }
}
