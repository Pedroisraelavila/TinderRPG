using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TinderRPG.Dominio.Entidades;

namespace TinderRPG.Infra.Configuracoes
{
    public class SubclasseConfiguracao : IEntityTypeConfiguration<Subclasse>
    {
        public void Configure(EntityTypeBuilder<Subclasse> builder)
        {
            builder.ToTable("Subclasse", "PauloH_Paizao");
            builder.HasKey("idSubclasse");
            builder.Property(f => f.idSubclasse).HasColumnName("idSubclasse");
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
