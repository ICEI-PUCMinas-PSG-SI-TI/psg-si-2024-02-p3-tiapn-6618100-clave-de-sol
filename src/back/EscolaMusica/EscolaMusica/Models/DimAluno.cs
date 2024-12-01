using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("dim_aluno")]
public class DimAluno
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int codigo_aluno { get; set; }
    public string nome { get; set; }
    public string matricula { get; set; }
    public string rua { get; set; }
    public string bairro { get; set; }
    public string numero { get; set; }
    public string cep { get; set; }
    public string telefone { get; set; }
    public string email { get; set; }
}
