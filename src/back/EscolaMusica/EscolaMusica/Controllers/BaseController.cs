using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EscolaMusica.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public abstract class BaseController<TEntity, TContext> : ControllerBase
        where TEntity : class
        where TContext : DbContext
    {
        private readonly TContext _context;

        protected BaseController(TContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TEntity>>> GetAll()
        {
            return await _context.Set<TEntity>().ToListAsync();
        }

        // GET: api/[controller]/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<TEntity>> GetById(int id)
        {
            var entity = await _context.Set<TEntity>().FindAsync(id);
            if (entity == null) return NotFound();
            return entity;
        }

        [HttpPost]
        public async Task<ActionResult<TEntity>> Create(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = GetEntityKey(entity) }, entity);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, TEntity entity)
        {
            if (!EntityExists(id)) return BadRequest();

            _context.Entry(entity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EntityExists(id)) return NotFound();
                throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var entity = await _context.Set<TEntity>().FindAsync(id);
            if (entity == null) return NotFound();

            _context.Set<TEntity>().Remove(entity);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EntityExists(int id)
        {
            return _context.Set<TEntity>().Find(id) != null;
        }

        // Helper method to get the entity's primary key
        private int GetEntityKey(TEntity entity)
        {
            var keyName = _context.Model.FindEntityType(typeof(TEntity))
                ?.FindPrimaryKey()
                ?.Properties
                .Select(x => x.Name)
                .SingleOrDefault();

            var keyValue = typeof(TEntity).GetProperty(keyName)?.GetValue(entity);
            return (int)(keyValue ?? 0);
        }
    }
}
