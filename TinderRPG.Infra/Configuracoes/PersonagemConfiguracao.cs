
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TinderRPG.Dominio.Entidades;

namespace TinderRPG.Infra.Configuracoes
{
    public class PersonagemConfiguracao : IEntityTypeConfiguration<Personagem>
    {
        public void Configure(EntityTypeBuilder<Personagem> builder)
        {
            builder.ToTable("Personagem", "PauloH_Paizao");
            builder.HasKey("idPersonagem");
            builder.Property(f => f.idPersonagem).HasColumnName("idPersonagem");
            builder.Property(f => f.Nome).HasColumnName("Nome")
                .IsRequired()
                .HasMaxLength(100);
            builder.Property(f => f.Descricao).HasColumnName("Descricao")
                .IsRequired()
                .HasMaxLength(300);
            builder.Property(f => f.Nivel).HasColumnName("Nivel")
                .IsRequired();
            //builder.Property(f => f.idUsuario).HasColumnName("idUsuario")
            //    .IsRequired();
            builder.Property(f => f.idRaca).HasColumnName("idRaca")
                .IsRequired();
            builder.Property(f => f.idClasse).HasColumnName("idClasse")
                .IsRequired();
            builder.Property(f => f.idSubclasse).HasColumnName("idSubclasse")
                .IsRequired();
            builder.Property(f => f.Ativo).HasColumnName("Ativo")
                .IsRequired();
        }
    }
}
