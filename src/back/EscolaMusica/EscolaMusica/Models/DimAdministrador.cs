using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EscolaMusica.Models;

[Table("dim_administrador")]
public class DimAdministrador
{
    [Key] 
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int codigo_administrador { get; set; }
    public string nome { get; set; }
    public string contato { get; set; }
    public string tipo { get; set; }
}