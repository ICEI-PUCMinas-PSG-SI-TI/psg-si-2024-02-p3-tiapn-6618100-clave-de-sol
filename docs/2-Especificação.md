# Especificações do Projeto

<span style="color:red">Pré-requisitos: [Documentação de Contexto](1-Contexto.md)

Este documento apresenta a especificação do projeto de solução tecnológica para a escola de música Clave de Sol. Ele aborda a definição de personas, histórias de usuários, requisitos funcionais e não funcionais, além das restrições que limitam o escopo do projeto. 

As ferramentas e técnicas utilizadas incluem análise de stakeholders, histórias de usuários e modelagem de requisitos para garantir uma solução centrada nos usuários.

## Personas

1 - Administrador - Ana Souza

Idade: 40 anos
Descrição: Responsável pela gestão administrativa da escola. Lida diariamente com a organização de pagamentos, matrícula de alunos e controle de inventário de instrumentos.
Desafios: Falta de automação, dificuldade em rastrear instrumentos e resolver conflitos de horários.
Motivação: Deseja um sistema integrado que facilite o gerenciamento das operações administrativas.

2 - Professor - Carlos Mendes

Idade: 35 anos
Descrição: Professor de violão. Organiza suas aulas manualmente e enfrenta dificuldades com reservas de salas e materiais.
Desafios: Horários sobrepostos, dificuldade de comunicação com a administração e falta de controle de instrumentos disponíveis.
Motivação: Precisa de um sistema que otimize o agendamento de aulas e simplifique o controle de materiais.

3 - Aluno - Júlia Pereira

Idade: 16 anos
Descrição: Estudante de teclado. Acompanha suas aulas e pagamentos por anotações manuais.
Desafios: Dificuldade em acompanhar a disponibilidade de aulas e instrumentos.
Motivação: Busca um sistema intuitivo para acompanhar horários e pagamentos com maior facilidade.

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`   |PARA ... `MOTIVO/VALOR`                       |
|--------------------|--------------------------------------|----------------------------------------------|
|Administrador       | Cadastrar alunos e professores       | Gerenciar informações com mais organização   |
|Administrador       | Controlar inventário de instrumentos | Monitorar disponibilidade e estado dos itens |
|Professor           | Agendar aulas diretamente no sistema | Evitar conflitos de horários                 |
|Aluno               | Consultar horários de aulas          | Planejar melhor meus estudos                 |
|Aluno               | Acompanhar pagamentos pelo sistema   | Garantir que meus débitos estão em dia       |

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir o cadastro de alunos e professores | ALTA | 
|RF-002| Automatizar o agendamento de aulas   | ALTA |
|RF-003| Registrar e controlar empréstimos de instrumentos   | MÉDIA |
|RF-004| Permitir o acompanhamento de pagamentos pelos alunos   | ALTA |
|RF-005| Gerar relatórios de inventário e frequência   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições em até 2 segundos | MÉDIA | 
|RNF-003| Garantir segurança dos dados com autenticação via login |  ALTA | 
|RNF-004| Interface deve ser responsiva e amigável |  MÉDIA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
