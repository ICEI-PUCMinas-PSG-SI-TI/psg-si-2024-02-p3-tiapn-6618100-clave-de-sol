using EscolaMusica.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EscolaMusica.Controllers;

[ApiController]
[Route("api/curso")]
public class DimCursoController : ControllerBase
{
    private readonly EscolaDbContext _context;

    public DimCursoController(EscolaDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<DimCurso>>> GetCursos()
    {
        return await _context.Cursos.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<DimCurso>> GetCurso(int id)
    {
        var curso = await _context.Cursos.FindAsync(id);
        if (curso == null) return NotFound();
        return curso;
    }

    [HttpPost]
    public async Task<ActionResult<DimCurso>> PostCurso(DimCurso curso)
    {
        _context.Cursos.Add(curso);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetCurso), new { id = curso.codigo_curso }, curso);
    }
}