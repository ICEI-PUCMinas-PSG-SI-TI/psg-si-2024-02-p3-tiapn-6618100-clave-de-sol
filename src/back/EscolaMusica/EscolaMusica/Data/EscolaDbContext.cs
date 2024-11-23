﻿using Microsoft.EntityFrameworkCore;

namespace EscolaMusica.Data
{
    public class EscolaDbContext : DbContext
    {
        public EscolaDbContext(DbContextOptions<EscolaDbContext> options) : base(options)
        {
        }

        public DbSet<DimInstrumento> DimInstrumentos { get; set; }
        public DbSet<DimAluno> DimAlunos { get; set; }
        public DbSet<DimTempo> DimTempos { get; set; }
        public DbSet<DimAdministrador> DimAdministradores { get; set; }
        public DbSet<DimProfessor> DimProfessores { get; set; }
        public DbSet<DimTurma> DimTurmas { get; set; }
        public DbSet<DimEstoque> DimEstoques { get; set; }
        public DbSet<DimPagamento> DimPagamentos { get; set; } // Adicionado

        public DbSet<FatoEmprestimo> FatoEmprestimos { get; set; }
        public DbSet<FatoAgendamentoAula> FatoAgendamentosAula { get; set; }
        public DbSet<FatoMatricula> FatoMatriculas { get; set; }
        public DbSet<FatoEstoqueMovimentacao> FatoEstoquesMovimentacao { get; set; }

        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // FatoEmprestimo
            modelBuilder.Entity<FatoEmprestimo>()
                .HasOne(f => f.instrumento)
                .WithMany()
                .HasForeignKey(f => f.codigo_instrumento);

            modelBuilder.Entity<FatoEmprestimo>()
                .HasOne(f => f.aluno)
                .WithMany()
                .HasForeignKey(f => f.codigo_aluno);

            modelBuilder.Entity<FatoEmprestimo>()
                .HasOne(f => f.tempoEmprestimo)
                .WithMany()
                .HasForeignKey(f => f.codigo_tempo_emprestimo);

            modelBuilder.Entity<FatoEmprestimo>()
                .HasOne(f => f.tempoDevolucao)
                .WithMany()
                .HasForeignKey(f => f.codigo_tempo_devolucao)
                .IsRequired(false); // Permitir valores nulos

            modelBuilder.Entity<FatoEmprestimo>()
                .HasOne(f => f.administrador)
                .WithMany()
                .HasForeignKey(f => f.codigo_administrador);


            // FatoAgendamentoAula
            modelBuilder.Entity<FatoAgendamentoAula>()
                .HasOne(f => f.turma)
                .WithMany()
                .HasForeignKey(f => f.codigo_turma);

            modelBuilder.Entity<FatoAgendamentoAula>()
                .HasOne(f => f.professor)
                .WithMany()
                .HasForeignKey(f => f.codigo_professor);

            modelBuilder.Entity<FatoAgendamentoAula>()
                .HasOne(f => f.horario)
                .WithMany()
                .HasForeignKey(f => f.codigo_horario);

            modelBuilder.Entity<FatoAgendamentoAula>()
                .HasOne(f => f.administrador)
                .WithMany()
                .HasForeignKey(f => f.codigo_administrador);

            
            // Relacionamento DimEstoque -> DimInstrumento
            modelBuilder.Entity<DimEstoque>()
                .HasOne(e => e.instrumento)
                .WithMany()
                .HasForeignKey(e => e.codigo_instrumento);

            // FatoMatricula Relationships
            modelBuilder.Entity<FatoMatricula>()
                .HasOne(f => f.aluno)
                .WithMany()
                .HasForeignKey(f => f.codigo_aluno)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<FatoMatricula>()
                .HasOne(f => f.turma)
                .WithMany()
                .HasForeignKey(f => f.codigo_turma)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<FatoMatricula>()
                .HasOne(f => f.pagamento)
                .WithMany()
                .HasForeignKey(f => f.codigo_pagamento)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<FatoMatricula>()
                .HasOne(f => f.administrador)
                .WithMany()
                .HasForeignKey(f => f.codigo_administrador)
                .OnDelete(DeleteBehavior.Restrict);

            // FatoEstoqueMovimentacao
            modelBuilder.Entity<FatoEstoqueMovimentacao>()
                .HasOne(f => f.estoque)
                .WithMany()
                .HasForeignKey(f => f.codigo_estoque);

            modelBuilder.Entity<FatoEstoqueMovimentacao>()
                .HasOne(f => f.tempo)
                .WithMany()
                .HasForeignKey(f => f.codigo_tempo);

            modelBuilder.Entity<FatoEstoqueMovimentacao>()
                .HasOne(f => f.administrador)
                .WithMany()
                .HasForeignKey(f => f.codigo_administrador);

        }
    }
}
