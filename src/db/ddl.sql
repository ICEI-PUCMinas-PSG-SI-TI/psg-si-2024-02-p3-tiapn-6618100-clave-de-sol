create table dim_instrumento
(
    codigo_instrumento serial
        primary key,
    nome               varchar(100) not null,
    tipo               varchar(50)  not null,
    categoria          varchar(50),
    condicao           varchar(50)
);

alter table dim_instrumento
    owner to puc_aws;

create table dim_aluno
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

alter table dim_aluno
    owner to puc_aws;

create table dim_administrador
(
    codigo_administrador serial
        primary key,
    nome                 varchar(100) not null,
    contato              varchar(100),
    tipo                 varchar(50)  not null
);

alter table dim_administrador
    owner to puc_aws;

create table dim_professor
(
    codigo_professor serial
        primary key,
    nome             varchar(100) not null,
    contato          varchar(100),
    habilidades      varchar(255)
);

alter table dim_professor
    owner to puc_aws;

create table dim_curso
(
    codigo_curso serial
        primary key,
    nome         varchar(100) not null,
    descricao    text
);

alter table dim_curso
    owner to puc_aws;

create table dim_turma
(
    codigo_turma     serial
        primary key,
    codigo_curso     integer,
    nome             varchar(100) not null,
    sala             integer      not null,
    nivel            varchar(50),
    duracao          time         not null,
    numero_vagas     integer,
    codigo_professor integer
);

alter table dim_turma
    owner to puc_aws;

create table dim_pagamento
(
    codigo_pagamento serial
        primary key,
    tipo             varchar(50) not null,
    nome_cartao      varchar(100),
    numero_cartao    varchar(20),
    validade         varchar(50),
    codigo_seguranca varchar(50),
    status           varchar(50)
);

alter table dim_pagamento
    owner to puc_aws;

create table fato_matricula
(
    codigo_matricula     serial
        primary key,
    codigo_aluno         integer     not null
        references dim_aluno,
    codigo_turma         integer     not null
        references dim_turma,
    codigo_pagamento     integer     not null
        references dim_pagamento,
    codigo_administrador integer     not null
        references dim_administrador,
    data_inicio          date        not null,
    status               varchar(50) not null
);

alter table fato_matricula
    owner to puc_aws;

create table fato_estoque
(
    codigo_estoque       serial
        primary key,
    codigo_administrador integer not null
        references dim_administrador,
    codigo_instrumento   integer not null
        references dim_instrumento,
    quantidade           integer not null
);

alter table fato_estoque
    owner to puc_aws;

