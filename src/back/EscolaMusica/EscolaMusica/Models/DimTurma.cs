using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using EscolaMusica.Models;

[Table("dim_turma")]
public class DimTurma
{
    [Key] 
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int codigo_turma { get; set; }
    public int codigo_curso { get; set; }
    public string nome { get; set; }
    public int sala { get; set; }
    public string nivel { get; set; }
    public TimeSpan duracao { get; set; }
    public int numero_vagas { get; set; }
}
