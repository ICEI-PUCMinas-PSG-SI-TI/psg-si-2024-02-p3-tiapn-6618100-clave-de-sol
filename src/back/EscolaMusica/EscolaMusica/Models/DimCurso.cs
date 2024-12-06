
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EscolaMusica.Models;

[Table("dim_curso")]
public class DimCurso
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int codigo_curso { get; set; }
    public string nome { get; set; }
    public string? descricao { get; set; }
}
