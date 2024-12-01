create table if not exists public.dim_instrumento
(
    codigo_instrumento serial
        primary key,
    nome               varchar(100) not null,
    tipo               varchar(50)  not null,
    categoria          varchar(50),
    condicao           varchar(50)
);

alter table public.dim_instrumento
    owner to puc_aws;

create table if not exists public.dim_aluno
(
    codigo_aluno serial
        primary key,
    nome         varchar(100) not null,
    matricula    varchar(50)  not null,
    rua          varchar(255) not null,
    bairro       varchar(100) not null,
    numero       varchar(10)  not null,
    cep          varchar(15)  not null,
    telefone     varchar(15),
    email        varchar(100)
);

alter table public.dim_aluno
    owner to puc_aws;

create table if not exists public.dim_tempo
(
    codigo_tempo serial
        primary key,
    data         date        not null,
    ano          integer     not null,
    mes          integer     not null,
    dia          integer     not null,
    dia_semana   varchar(20) not null
);

alter table public.dim_tempo
    owner to puc_aws;

create table if not exists public.dim_administrador
(
    codigo_administrador serial
        primary key,
    nome                 varchar(100) not null,
    contato              varchar(100),
    tipo                 varchar(50)  not null
);

alter table public.dim_administrador
    owner to puc_aws;

create table if not exists public.dim_professor
(
    codigo_professor serial
        primary key,
    nome             varchar(100) not null,
    contato          varchar(100),
    habilidades      varchar(255)
);

alter table public.dim_professor
    owner to puc_aws;

create table if not exists public.dim_turma
(
    codigo_turma serial
        primary key,
    nome         varchar(100) not null,
    sala         integer      not null,
    nivel        varchar(50),
    duracao      time         not null,
    numero_vagas integer
);

alter table public.dim_turma
    owner to puc_aws;

create table if not exists public.dim_estoque
(
    codigo_estoque     serial
        primary key,
    localizacao        varchar(255),
    codigo_instrumento integer not null
        references public.dim_instrumento
);

alter table public.dim_estoque
    owner to puc_aws;

create table if not exists public.dim_pagamento
(
    codigo_pagamento serial
        primary key,
    tipo             varchar(50) not null,
    nome_cartao      varchar(100),
    numero_cartao    varchar(20),
    validade         varchar(7),
    codigo_seguranca varchar(5),
    status           varchar(50)
);

alter table public.dim_pagamento
    owner to puc_aws;

create table if not exists public.dim_horario
(
    codigo_horario serial
        primary key,
    dia_semana     varchar(20) not null,
    horario        time        not null
);

alter table public.dim_horario
    owner to puc_aws;

create table if not exists public.fato_matricula
(
    codigo_matricula     serial
        primary key,
    codigo_aluno         integer     not null
        references public.dim_aluno,
    codigo_turma         integer     not null
        references public.dim_turma,
    codigo_pagamento     integer     not null
        references public.dim_pagamento,
    codigo_administrador integer     not null
        references public.dim_administrador,
    data_inicio          date        not null,
    status               varchar(50) not null
);

alter table public.fato_matricula
    owner to puc_aws;

create table if not exists public.fato_emprestimo
(
    codigo_emprestimo       serial
        primary key,
    codigo_instrumento      integer not null
        references public.dim_instrumento,
    codigo_aluno            integer not null
        references public.dim_aluno,
    codigo_tempo_emprestimo integer not null
        references public.dim_tempo,
    codigo_tempo_devolucao  integer
        references public.dim_tempo,
    codigo_administrador    integer not null
        references public.dim_administrador,
    status                  varchar(50)
);

alter table public.fato_emprestimo
    owner to puc_aws;

create table if not exists public.fato_agendamentoaula
(
    codigo_agendamento   serial
        primary key,
    codigo_turma         integer not null
        references public.dim_turma,
    codigo_professor     integer not null
        references public.dim_professor,
    codigo_horario       integer not null
        references public.dim_horario,
    codigo_administrador integer not null
        references public.dim_administrador
);

alter table public.fato_agendamentoaula
    owner to puc_aws;

create table if not exists public.fato_estoquemovimentacao
(
    codigo_movimentacao  serial
        primary key,
    codigo_estoque       integer     not null
        references public.dim_estoque,
    codigo_tempo         integer     not null
        references public.dim_tempo,
    codigo_administrador integer     not null
        references public.dim_administrador,
    tipo_movimentacao    varchar(50) not null,
    quantidade           integer     not null
);

alter table public.fato_estoquemovimentacao
    owner to puc_aws;



INSERT INTO public.dim_instrumento (nome, tipo, categoria, condicao)
VALUES
    ('Violão', 'Cordas', 'Acústico', 'Novo'),
    ('Flauta', 'Sopro', 'Madeira', 'Usado'),
    ('Bateria', 'Percussão', 'Completa', 'Novo'),
    ('Teclado', 'Teclas', 'Digital', 'Novo'),
    ('Violino', 'Cordas', 'Clássico', 'Usado');


INSERT INTO public.dim_aluno (nome, matricula, rua, bairro, numero, cep, telefone, email)
VALUES
    ('João Silva', '2023001', 'Rua das Flores', 'Centro', '123', '12345-678', '123456789', 'joao@email.com'),
    ('Maria Oliveira', '2023002', 'Av. Paulista', 'Bela Vista', '456', '98765-432', '987654321', 'maria@email.com'),
    ('Pedro Santos', '2023003', 'Rua A', 'Bairro B', '789', '54321-678', '543216789', 'pedro@email.com'),
    ('Ana Souza', '2023004', 'Rua C', 'Bairro D', '101', '12398-765', '123098765', 'ana@email.com');


INSERT INTO public.dim_tempo (data, ano, mes, dia, dia_semana)
VALUES
    ('2024-01-01', 2024, 1, 1, 'Segunda-feira'),
    ('2024-01-02', 2024, 1, 2, 'Terça-feira'),
    ('2024-01-03', 2024, 1, 3, 'Quarta-feira');

INSERT INTO public.dim_administrador (nome, contato, tipo)
VALUES
    ('Carlos Gomes', 'carlos@email.com', 'Geral'),
    ('Fernanda Lima', 'fernanda@email.com', 'Financeiro'),
    ('Roberto Costa', 'roberto@email.com', 'Logística');
INSERT INTO public.dim_professor (nome, contato, habilidades)
VALUES
    ('Paulo Andrade', 'paulo@email.com', 'Violão, Guitarra'),
    ('Clara Martins', 'clara@email.com', 'Piano, Teclado'),
    ('José Almeida', 'jose@email.com', 'Bateria, Percussão');
INSERT INTO public.dim_turma (nome, sala, nivel, duracao, numero_vagas)
VALUES
    ('Violão Iniciante', 101, 'Básico', '01:30:00', 10),
    ('Piano Avançado', 102, 'Avançado', '02:00:00', 5),
    ('Bateria Intermediário', 103, 'Intermediário', '01:45:00', 8);
INSERT INTO public.dim_estoque (localizacao, codigo_instrumento)
VALUES
    ('Sala A', 1),
    ('Sala B', 2),
    ('Depósito', 3),
    ('Sala C', 4);
INSERT INTO public.dim_pagamento (tipo, nome_cartao, numero_cartao, validade, codigo_seguranca, status)
VALUES
    ('Cartão de Crédito', 'João Silva', '1234123412341234', '12/25', '123', 'Aprovado'),
    ('Cartão de Débito', 'Maria Oliveira', '4321432143214321', '11/24', '321', 'Aprovado');
INSERT INTO public.dim_horario (dia_semana, horario)
VALUES
    ('Segunda-feira', '08:00:00'),
    ('Terça-feira', '10:00:00'),
    ('Quarta-feira', '14:00:00');
INSERT INTO public.fato_matricula (codigo_aluno, codigo_turma, codigo_pagamento, codigo_administrador, data_inicio, status)
VALUES
    (1, 1, 1, 1, '2024-01-01', 'Ativo'),
    (2, 2, 2, 2, '2024-01-02', 'Ativo');
INSERT INTO public.fato_emprestimo (codigo_instrumento, codigo_aluno, codigo_tempo_emprestimo, codigo_tempo_devolucao, codigo_administrador, status)
VALUES
    (1, 1, 1, 2, 1, 'Concluído'),
    (2, 2, 2, NULL, 2, 'Em andamento');
INSERT INTO public.fato_agendamentoaula (codigo_turma, codigo_professor, codigo_horario, codigo_administrador)
VALUES
    (1, 1, 1, 1),
    (2, 2, 2, 2);
INSERT INTO public.fato_estoquemovimentacao (codigo_estoque, codigo_tempo, codigo_administrador, tipo_movimentacao, quantidade)
VALUES
    (1, 1, 1, 'Entrada', 5),
    (2, 2, 2, 'Saída', 3);
INSERT INTO public.dim_instrumento (nome, tipo, categoria, condicao)
VALUES
    ('Guitarra', 'Cordas', 'Elétrica', 'Novo'),
    ('Trompete', 'Sopro', 'Metal', 'Usado'),
    ('Cajón', 'Percussão', 'Manual', 'Novo'),
    ('Clarinete', 'Sopro', 'Madeira', 'Usado'),
    ('Contrabaixo', 'Cordas', 'Acústico', 'Novo'),
    ('Pandeiro', 'Percussão', 'Tradicional', 'Usado'),
    ('Saxofone', 'Sopro', 'Metal', 'Novo'),
    ('Harpa', 'Cordas', 'Clássica', 'Novo');
INSERT INTO public.dim_aluno (nome, matricula, rua, bairro, numero, cep, telefone, email)
VALUES
    ('Carlos Fernandes', '2023005', 'Rua das Américas', 'Centro', '12', '11223-445', '1122334455', 'carlos@email.com'),
    ('Beatriz Souza', '2023006', 'Rua B', 'Bairro C', '15', '22334-556', '2233445566', 'beatriz@email.com'),
    ('Lucas Pereira', '2023007', 'Rua C', 'Bairro D', '19', '33445-667', '3344556677', 'lucas@email.com'),
    ('Fernanda Lima', '2023008', 'Rua D', 'Bairro E', '23', '44556-778', '4455667788', 'fernanda@email.com');
INSERT INTO public.dim_tempo (data, ano, mes, dia, dia_semana)
VALUES
    ('2024-01-04', 2024, 1, 4, 'Quinta-feira'),
    ('2024-01-05', 2024, 1, 5, 'Sexta-feira'),
    ('2024-01-06', 2024, 1, 6, 'Sábado'),
    ('2024-01-07', 2024, 1, 7, 'Domingo');
INSERT INTO public.dim_administrador (nome, contato, tipo)
VALUES
    ('Mariana Silva', 'mariana@email.com', 'Recursos Humanos'),
    ('Rafael Santos', 'rafael@email.com', 'Tecnologia'),
    ('Débora Costa', 'debora@email.com', 'Operacional');
INSERT INTO public.dim_professor (nome, contato, habilidades)
VALUES
    ('Rafaela Borges', 'rafaela@email.com', 'Flauta, Clarinete'),
    ('André Faria', 'andre@email.com', 'Contrabaixo, Harpa'),
    ('Juliana Alves', 'juliana@email.com', 'Saxofone, Trompete');
INSERT INTO public.dim_turma (nome, sala, nivel, duracao, numero_vagas)
VALUES
    ('Saxofone Básico', 104, 'Básico', '01:30:00', 10),
    ('Trompete Avançado', 105, 'Avançado', '02:00:00', 5),
    ('Cajón Intermediário', 106, 'Intermediário', '01:45:00', 8);
INSERT INTO public.dim_estoque (localizacao, codigo_instrumento)
VALUES
    ('Depósito A', 6),
    ('Depósito B', 7),
    ('Sala de Música', 8);
INSERT INTO public.dim_pagamento (tipo, nome_cartao, numero_cartao, validade, codigo_seguranca, status)
VALUES
    ('Cartão de Crédito', 'Carlos Fernandes', '5678567856785678', '01/26', '456', 'Aprovado'),
    ('Pix', NULL, NULL, NULL, NULL, 'Concluído'),
    ('Transferência Bancária', NULL, NULL, NULL, NULL, 'Pendente');
INSERT INTO public.dim_horario (dia_semana, horario)
VALUES
    ('Quinta-feira', '16:00:00'),
    ('Sexta-feira', '18:00:00'),
    ('Sábado', '10:00:00');
INSERT INTO public.fato_matricula (codigo_aluno, codigo_turma, codigo_pagamento, codigo_administrador, data_inicio, status)
VALUES
    (3, 3, 2, 3, '2024-01-03', 'Ativo'),
    (4, 4, 3, 2, '2024-01-04', 'Ativo');
INSERT INTO public.fato_emprestimo (codigo_instrumento, codigo_aluno, codigo_tempo_emprestimo, codigo_tempo_devolucao, codigo_administrador, status)
VALUES
    (3, 2, 3, 4, 3, 'Concluído'),
    (4, 3, 4, NULL, 2, 'Em andamento');
INSERT INTO public.fato_agendamentoaula (codigo_turma, codigo_professor, codigo_horario, codigo_administrador)
VALUES
    (3, 3, 3, 3),
    (4, 2, 2, 2);
