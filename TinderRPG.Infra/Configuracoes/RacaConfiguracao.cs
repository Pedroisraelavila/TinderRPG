using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TinderRPG.Dominio.Entidades;

namespace TinderRPG.Infra.Configuracoes
{
    public class RacaConfiguracao : IEntityTypeConfiguration<Raca>
    {
        public void Configure(EntityTypeBuilder<Raca> builder)
        {
            builder.ToTable("Raca", "PauloH_Paizao");
            builder.HasKey("idRaca");
            builder.Property(f => f.idRaca).HasColumnName("idRaca");
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
