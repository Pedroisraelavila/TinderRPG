using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TinderRPG.Dominio.Entidades;

namespace TinderRPG.Infra.Configuracoes
{
    public class ClasseConfiguracao : IEntityTypeConfiguration<Classe>
    {
        public void Configure(EntityTypeBuilder<Classe> builder)
        {
            builder.ToTable("Classe", "PauloH_Paizao");
            builder.HasKey("idClasse");
            builder.Property(f => f.idClasse).HasColumnName("idClasse");
            builder.Property(f => f.Nome).HasColumnName("Nome")
                .IsRequired()
                .HasMaxLength(50);
            builder.Property(f => f.Descricao).HasColumnName("Descricao")
                .IsRequired()
                .HasMaxLength(500);
            builder.Property(f => f.Ativo).HasColumnName("Ativo")
                .IsRequired();
        }
    }
}
