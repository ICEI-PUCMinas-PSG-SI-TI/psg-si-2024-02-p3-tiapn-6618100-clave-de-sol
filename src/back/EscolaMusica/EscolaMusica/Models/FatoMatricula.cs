using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


[Table("fato_matricula")]
public class FatoMatriculaDTO
{
    [Key]
    public int codigo_matricula { get; set; }
    public int codigo_aluno { get; set; }
    public int codigo_turma { get; set; }
    public int codigo_administrador { get; set; }
    public DateTime data_inicio { get; set; }
    public string status { get; set; }
}
