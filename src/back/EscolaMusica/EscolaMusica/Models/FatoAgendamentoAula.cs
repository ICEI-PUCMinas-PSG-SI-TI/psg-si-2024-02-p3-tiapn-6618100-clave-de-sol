using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("fato_agendamentoaula")]
public class FatoAgendamentoAula
{
    [Key] 
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int codigo_agendamento { get; set; }

    public int codigo_turma { get; set; }
    public int codigo_professor { get; set; }
    public int codigo_horario { get; set; }
    public int codigo_administrador { get; set; }


    [ForeignKey("codigo_turma")] public DimTurma turma { get; set; }

    [ForeignKey("codigo_professor")] public DimProfessor professor { get; set; }

    [ForeignKey("codigo_horario")] public DimHorario horario { get; set; }

    [ForeignKey("codigo_administrador")] public DimAdministrador administrador { get; set; }
}