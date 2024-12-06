using EscolaMusica.Models;
using Microsoft.AspNetCore.Mvc;

namespace EscolaMusica.Controllers
{
    [ApiController]
    [Route("api/aluno")]
    public class DimAlunoController : BaseController<DimAluno, EscolaDbContext>
    {
        public DimAlunoController(EscolaDbContext context) : base(context) { }
    }
}
