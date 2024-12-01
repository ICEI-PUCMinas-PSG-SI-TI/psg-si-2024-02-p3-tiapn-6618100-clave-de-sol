using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("dim_instrumento")]
public class DimInstrumento
{
    [Key] 
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int codigo_instrumento { get; set; }
    public string nome { get; set; }
    public string tipo { get; set; }
    public string categoria { get; set; }
    public string condicao { get; set; }
}