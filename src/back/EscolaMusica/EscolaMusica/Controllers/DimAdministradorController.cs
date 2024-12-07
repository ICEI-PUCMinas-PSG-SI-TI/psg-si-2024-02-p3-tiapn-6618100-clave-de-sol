using EscolaMusica.Models;
using Microsoft.AspNetCore.Mvc;

namespace EscolaMusica.Controllers
{
    [ApiController]
    [Route("api/administrador")]
    public class DimAdministradorController : BaseController<DimAdministrador, EscolaDbContext>
    {
        public DimAdministradorController(EscolaDbContext context) : base(context) { }
    }
}
