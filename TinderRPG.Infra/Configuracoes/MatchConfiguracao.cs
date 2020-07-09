using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using TinderRPG.Dominio.Entidades;

namespace TinderRPG.Infra.Configuracoes
{
    public class MatchConfiguracao : IEntityTypeConfiguration<Match>
    {
        public void Configure(EntityTypeBuilder<Match> builder)
        {
            builder.ToTable("Match", "PauloH_Paizao");
            builder.HasKey("idMatch");
            builder.Property(f => f.idMatch).HasColumnName("idMatch");
            builder.Property(f => f.idUsuario).HasColumnName("idUsuario")
                .IsRequired();
            builder.Property(f => f.idAmigo).HasColumnName("idAmigo")
                .IsRequired();
            builder.Property(f => f.DataAmizade).HasColumnName("DataAmizade")
                .IsRequired();
            builder.Property(f => f.AmigoAdicionado).HasColumnName("AmigoAdicionado")
                .IsRequired();
            builder.Property(f => f.idReacao).HasColumnName("idReacao")
                .IsRequired();
            builder.Property(f => f.Ativo).HasColumnName("Ativo")
                .IsRequired();
        }
    }
}
