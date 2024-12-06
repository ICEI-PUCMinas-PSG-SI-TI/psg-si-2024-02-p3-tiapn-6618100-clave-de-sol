using Microsoft.AspNetCore.Mvc;

namespace EscolaMusica.Controllers
{
    [ApiController]
    [Route("api/turma")]
    public class DimTurmaController : BaseController<DimTurma, EscolaDbContext>
    {
        public DimTurmaController(EscolaDbContext context) : base(context) { }
    }
}