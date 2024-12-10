using EscolaMusica.Models;
using Microsoft.AspNetCore.Mvc;

namespace EscolaMusica.Controllers;

[ApiController]
[Route("api/turma")]
public class TurmaController : ControllerBase
{
    private readonly EscolaDbContext _context;

    public TurmaController(EscolaDbContext context)
    {
        _context = context;
    }

    [HttpPost("cadastrar")]
    public async Task<IActionResult> CadastrarTurma([FromBody] DimTurma turma)
    {
        try
        {
            var curso = await _context.Cursos.FindAsync(turma.codigo_curso);
            if (curso == null)
                return BadRequest(new { Message = "Curso associado à turma não encontrado." });

            var prof = await _context.Professores.FindAsync(turma.codigo_professor);
            if (prof == null)
                return BadRequest(new { Message = "Professor não encontrado." });
            
            _context.Turmas.Add(turma);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                Message = "Turma cadastrada com sucesso.",
                Turma = turma
            });
        }
        catch (Exception ex)
        {
            return BadRequest(new { Message = "Erro ao cadastrar turma.", Error = ex.Message });
        }
    }
}