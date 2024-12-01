using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("dim_pagamento")]
public class DimPagamento
{
    [Key] 
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int codigo_pagamento { get; set; }

    [Required] public string tipo { get; set; }

    public string? nome_cartao { get; set; }

    public string? numero_cartao { get; set; }

    public string? validade { get; set; }

    public string? codigo_seguranca { get; set; }

    public string? status { get; set; }
}