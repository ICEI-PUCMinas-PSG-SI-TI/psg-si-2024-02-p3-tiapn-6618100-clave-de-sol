using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("fato_emprestimo")]
public class FatoEmprestimo
{
    [Key] 
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int codigo_emprestimo { get; set; }
    public int codigo_instrumento { get; set; }
    public int codigo_aluno { get; set; }
    public int codigo_tempo_emprestimo { get; set; }
    public int? codigo_tempo_devolucao { get; set; }
    public int codigo_administrador { get; set; }

    public string status { get; set; }


    [ForeignKey("codigo_instrumento")] public DimInstrumento instrumento { get; set; }

    [ForeignKey("codigo_aluno")] public DimAluno aluno { get; set; }

    [ForeignKey("codigo_tempo_emprestimo")]
    public DimTempo tempoEmprestimo { get; set; }

    [ForeignKey("codigo_tempo_devolucao")] public DimTempo tempoDevolucao { get; set; }

    [ForeignKey("codigo_administrador")] public DimAdministrador administrador { get; set; }
}