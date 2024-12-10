namespace EscolaMusica.Models;

public class MatriculaDTO
{
    public DimAluno Aluno { get; set; }
    public int CodigoTurma { get; set; }
    public DimPagamento Pagamento { get; set; }
    public int CodigoAdministrador { get; set; }
    public DateTime DataInicio { get; set; }
    public string Status { get; set; }
}