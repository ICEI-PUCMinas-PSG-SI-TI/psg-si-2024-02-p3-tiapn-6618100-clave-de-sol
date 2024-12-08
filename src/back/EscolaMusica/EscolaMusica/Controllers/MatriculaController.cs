using EscolaMusica.Models;
using Microsoft.AspNetCore.Mvc;

namespace EscolaMusica.Controllers;

[ApiController]
[Route("api/matricula")]
public class MatriculaController : ControllerBase
{
    private readonly EscolaDbContext _context;

    public MatriculaController(EscolaDbContext context)
    {
        _context = context;
    }

    [HttpPost("cadastrar")]
    public async Task<IActionResult> CadastrarMatricula(MatriculaDTO matriculaDto)
    {
        using var transaction = await _context.Database.BeginTransactionAsync();

        try
        {

            _context.Alunos.Add(matriculaDto.Aluno);
            await _context.SaveChangesAsync();

            _context.Pagamentos.Add(matriculaDto.Pagamento);
            await _context.SaveChangesAsync();

            var turma = await _context.Turmas.FindAsync(matriculaDto.CodigoTurma);
            if (turma == null) return BadRequest(new { Message = "Turma não encontrada." });

            var curso = await _context.Cursos.FindAsync(turma.codigo_turma);
            if (curso == null) return BadRequest(new { Message = "Curso não encontrado." });

            var fatoMatricula = new FatoMatricula
            {
                codigo_aluno = matriculaDto.Aluno.codigo_aluno,
                codigo_turma = turma.codigo_turma,
                codigo_pagamento = matriculaDto.Pagamento.codigo_pagamento,
                codigo_administrador = matriculaDto.CodigoAdministrador,
                data_inicio = matriculaDto.DataInicio.ToUniversalTime(),
                status = matriculaDto.Status
            };

            _context.Matriculas.Add(fatoMatricula);
            await _context.SaveChangesAsync();

            await transaction.CommitAsync();

            return Ok(new
            {
                Message = "Matrícula cadastrada com sucesso.",
                Matricula = fatoMatricula,
                Curso = curso.nome,
                Turma = turma.nome
            });
        }
        catch (Exception ex)
        {
            await transaction.RollbackAsync();
            return BadRequest(new { Message = "Erro ao cadastrar matrícula.", Error = ex.Message });
        }
    }
}