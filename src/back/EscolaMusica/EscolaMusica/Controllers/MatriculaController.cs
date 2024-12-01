using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EscolaMusica.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EscolaMusica.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MatriculaController : ControllerBase
    {
        private readonly EscolaDbContext _context;

        public MatriculaController(EscolaDbContext context)
        {
            _context = context;
        }

        // GET: api/Matricula
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FatoMatriculaDTO>>> GetMatriculas()
        {
            return await _context.FatoMatriculas
                .ToListAsync();
        }

        // GET: api/Matricula/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FatoMatriculaDTO>> GetMatricula(int id)
        {
            var matricula = await _context.FatoMatriculas
                .FirstOrDefaultAsync(m => m.codigo_matricula == id);

            if (matricula == null)
            {
                return NotFound();
            }

            return matricula;
        }

        // PUT: api/Matricula/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMatricula(int id, FatoMatriculaDTO matricula)
        {
            if (id != matricula.codigo_matricula)
            {
                return BadRequest();
            }

            _context.Entry(matricula).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MatriculaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Matricula
        [HttpPost]
        public async Task<IActionResult> CreateFatoMatricula([FromBody] FatoMatriculaDTO dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // Criação do objeto FatoMatricula com base no DTO
            var fatoMatricula = new FatoMatriculaDTO
            {
                codigo_aluno = dto.codigo_aluno,
                codigo_turma = dto.codigo_turma,
                codigo_administrador = dto.codigo_administrador,
                data_inicio = dto.data_inicio,
                status = dto.status
            };

            _context.FatoMatriculas.Add(fatoMatricula);
            await _context.SaveChangesAsync();

            // Retornar a resposta com o código da matrícula criado
            return CreatedAtAction(nameof(GetMatricula), new { id = fatoMatricula.codigo_matricula }, fatoMatricula);
        }



        // DELETE: api/Matricula/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMatricula(int id)
        {
            var matricula = await _context.FatoMatriculas.FindAsync(id);
            if (matricula == null)
            {
                return NotFound();
            }

            _context.FatoMatriculas.Remove(matricula);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MatriculaExists(int id)
        {
            return _context.FatoMatriculas.Any(e => e.codigo_matricula == id);
        }
    }
}
