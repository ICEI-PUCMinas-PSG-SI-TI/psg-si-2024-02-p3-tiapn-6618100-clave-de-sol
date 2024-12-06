using Microsoft.AspNetCore.Mvc;

namespace EscolaMusica.Controllers
{
    [ApiController]
    [Route("api/pagamento")]
    public class DimPagamentoController : BaseController<DimPagamento, EscolaDbContext>
    {
        public DimPagamentoController(EscolaDbContext context) : base(context) { }
    }
}