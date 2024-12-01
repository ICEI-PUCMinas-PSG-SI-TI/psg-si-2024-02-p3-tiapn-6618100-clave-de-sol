using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("dim_professor")]
public class DimProfessor
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int codigo_professor { get; set; }
    public string nome { get; set; }
    public string contato { get; set; }
    public string habilidades { get; set; }
}