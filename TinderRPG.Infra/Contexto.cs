using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TinderRPG.Dominio.Entidades;
using TinderRPG.Infra.Configuracoes;

namespace TinderRPG.Infra
{
    public class Contexto : DbContext
    {
        public DbSet<Classe> Classe { get; set; }
        //public DbSet<Match> Match { get; set; }
        //public DbSet<Mensagem> Mensagem { get; set; }
        public DbSet<Personagem> Personagem { get; set; }
        //public DbSet<Raca> Raca { get; set; }
        //public DbSet<Reacao> Reacao { get; set; }
        //public DbSet<Subclasse> Subclasse { get; set; }
        //public DbSet<Usuario> Usuario { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=201.62.57.93;database=dbLAB2_2020;user id=visualstudio;password=visualstudio;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ClasseConfiguracao());
            //modelBuilder.ApplyConfiguration(new MatchConfiguracao());
            modelBuilder.ApplyConfiguration(new PersonagemConfiguracao());
            //modelBuilder.ApplyConfiguration(new RacaConfiguracao());
            //modelBuilder.ApplyConfiguration(new SubclasseConfiguracao());
        }
    }
}
