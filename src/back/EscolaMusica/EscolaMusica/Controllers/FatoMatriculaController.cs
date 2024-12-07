using Microsoft.AspNetCore.Mvc;

namespace EscolaMusica.Controllers
{
    [ApiController]
    [Route("api/matricula")]
    public class FatoMatriculaController : BaseController<FatoMatricula, EscolaDbContext>
    {
        public FatoMatriculaController(EscolaDbContext context) : base(context) { }
    }
}