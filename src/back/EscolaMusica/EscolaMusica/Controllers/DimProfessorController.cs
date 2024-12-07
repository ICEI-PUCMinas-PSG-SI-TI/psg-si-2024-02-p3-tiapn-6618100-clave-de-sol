using Microsoft.AspNetCore.Mvc;

namespace EscolaMusica.Controllers
{
    [ApiController]
    [Route("api/professor")]
    public class DimProfessorController : BaseController<DimProfessor, EscolaDbContext>
    {
        public DimProfessorController(EscolaDbContext context) : base(context) { }
    }
}