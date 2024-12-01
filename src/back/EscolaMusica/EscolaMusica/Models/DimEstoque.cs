using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("dim_estoque")]
public class DimEstoque
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int codigo_estoque { get; set; }
    public int codigo_instrumento { get; set; }


    public DimInstrumento instrumento { get; set; }
}