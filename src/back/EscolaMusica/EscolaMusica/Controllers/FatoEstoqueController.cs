using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EscolaMusica.Controllers
{
    [ApiController]
    [Route("api/estoque")]
    public class FatoEstoqueController : ControllerBase
    {
        private readonly EscolaDbContext _context;

        public FatoEstoqueController(EscolaDbContext context)
        {
            _context = context;
        }

        // GET: api/estoque
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FatoEstoque>>> GetEstoques()
        {
            return await _context.Estoques.ToListAsync();
        }

        // POST: api/estoque
        [HttpPost]
        public async Task<ActionResult<FatoEstoque>> PostEstoque(FatoEstoque estoque)
        {
            _context.Estoques.Add(estoque);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEstoques), new { id = estoque.codigo_estoque }, estoque);
        }
    }
}