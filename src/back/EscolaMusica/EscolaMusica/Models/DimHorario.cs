using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("dim_horario")]
public class DimHorario
{
    [Key] 
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int codigo_horario { get; set; }

    [Required] [StringLength(20)] public string dia_semana { get; set; }

    [Required] public TimeSpan horario { get; set; }
}