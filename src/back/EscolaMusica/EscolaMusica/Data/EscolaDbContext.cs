using EscolaMusica.Models;
using Microsoft.EntityFrameworkCore;

public class EscolaDbContext : DbContext
{
    public EscolaDbContext(DbContextOptions<EscolaDbContext> options) : base(options) { }

    public DbSet<DimAluno> Alunos { get; set; }
    public DbSet<DimTurma> Turmas { get; set; }
    public DbSet<DimPagamento> Pagamentos { get; set; }
    public DbSet<DimAdministrador> Administradores { get; set; }
    public DbSet<FatoMatricula> Matriculas { get; set; }
    public DbSet<FatoEstoque> Estoques { get; set; }
    public DbSet<DimCurso> Cursos { get; set; }
    public DbSet<DimInstrumento> Instrumentos { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<DimAluno>().ToTable("dim_aluno");
        modelBuilder.Entity<DimTurma>().ToTable("dim_turma");
        modelBuilder.Entity<DimPagamento>().ToTable("dim_pagamento");
        modelBuilder.Entity<DimAdministrador>().ToTable("dim_administrador");
        modelBuilder.Entity<FatoMatricula>().ToTable("fato_matricula");
        modelBuilder.Entity<FatoEstoque>().ToTable("fato_estoque");
        modelBuilder.Entity<DimCurso>().ToTable("dim_curso");
        modelBuilder.Entity<DimInstrumento>().ToTable("dim_instrumento");
    }
}