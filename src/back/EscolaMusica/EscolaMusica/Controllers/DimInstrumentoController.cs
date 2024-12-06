using Microsoft.AspNetCore.Mvc;

namespace EscolaMusica.Controllers
{
    [ApiController]
    [Route("api/instrumento")]
    public class DimInstrumentoController : BaseController<DimInstrumento, EscolaDbContext>
    {
        public DimInstrumentoController(EscolaDbContext context) : base(context) { }
    }
}
