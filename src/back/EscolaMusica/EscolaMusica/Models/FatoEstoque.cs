using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("fato_estoque")]
public class FatoEstoque
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int codigo_estoque { get; set; }
    public int codigo_administrador { get; set; } 
    public int codigo_instrumento { get; set; } 
    public string tipo_movimentacao { get; set; } = string.Empty;
    public int quantidade { get; set; } 
}