using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("dim_tempo")]
public class DimTempo
{
    [Key] 
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int codigo_tempo { get; set; }
    public DateTime data { get; set; }
    public int ano { get; set; }
    public int mes { get; set; }
    public int dia { get; set; }
    public string dia_semana { get; set; }
}