-- Populando dim_instrumento
INSERT INTO dim_instrumento (nome, tipo, categoria, condicao)
VALUES ('Violão', 'Corda', 'Acústico', 'Novo'),
       ('Piano', 'Tecla', 'Clássico', 'Usado'),
       ('Flauta', 'Sopro', 'Madeira', 'Novo'),
       ('Bateria', 'Percussão', 'Eletrônico', 'Novo'),
       ('Guitarra', 'Corda', 'Elétrico', 'Usado');

-- Populando dim_aluno
INSERT INTO dim_aluno (nome, matricula, rua, bairro, numero, cep, telefone, email)
VALUES ('João Silva', 'MAT001', 'Rua A', 'Bairro X', '123', '12345-678', '1234567890', 'joao@gmail.com'),
       ('Maria Oliveira', 'MAT002', 'Rua B', 'Bairro Y', '456', '23456-789', '2345678901', 'maria@gmail.com'),
       ('Carlos Lima', 'MAT003', 'Rua C', 'Bairro Z', '789', '34567-890', '3456789012', 'carlos@gmail.com');

-- Populando dim_administrador
INSERT INTO dim_administrador (nome, contato, tipo)
VALUES ('Ana Souza', 'ana@gmail.com', 'Recursos'),
       ('Paulo Santos', 'paulo@gmail.com', 'Financeiro'),
       ('Bruno Martins', 'bruno@gmail.com', 'Geral');

-- Populando dim_professor
INSERT INTO dim_professor (nome, contato, habilidades)
VALUES ('Lucas Mendes', 'lucas@gmail.com', 'Violão, Guitarra'),
       ('Fernanda Costa', 'fernanda@gmail.com', 'Piano, Flauta'),
       ('Roberto Almeida', 'roberto@gmail.com', 'Bateria, Percussão');

-- Populando dim_curso
INSERT INTO dim_curso (nome, descricao)
VALUES ('Curso de Violão', 'Aprenda a tocar violão do básico ao avançado.'),
       ('Curso de Piano', 'Curso para iniciantes e intermediários em piano.'),
       ('Curso de Bateria', 'Desenvolvimento de técnicas de bateria para todos os níveis.');

-- Populando dim_turma
INSERT INTO dim_turma (codigo_curso, nome, sala, nivel, duracao, numero_vagas, codigo_professor)
VALUES (1, 'Turma Violão Básico', 101, 'Básico', '01:30:00', 20, 1),
       (2, 'Turma Piano Intermediário', 102, 'Intermediário', '02:00:00', 15, 2),
       (3, 'Turma Bateria Avançado', 103, 'Avançado', '01:45:00', 10, 3);

-- Populando dim_pagamento
INSERT INTO dim_pagamento (tipo, nome_cartao, numero_cartao, validade, codigo_seguranca, status)
VALUES ('Cartão de Crédito', 'João Silva', '1111222233334444', '12/25', '123', 'Aprovado'),
       ('Pix', NULL, NULL, NULL, NULL, 'Pendente'),
       ('Boleto', NULL, NULL, NULL, NULL, 'Pago');

-- Populando fato_matricula
INSERT INTO fato_matricula (codigo_aluno, codigo_turma, codigo_pagamento, codigo_administrador, data_inicio, status)
VALUES (1, 1, 1, 1, '2024-01-01', 'Ativa'),
       (2, 2, 2, 1, '2024-01-15', 'Pendente'),
       (3, 3, 3, 2, '2024-02-01', 'Concluída');

-- Populando fato_estoque
INSERT INTO fato_estoque (codigo_administrador, codigo_instrumento, quantidade)
VALUES (1, 1, 10),
       (1, 2, 5),
       (2, 3, 15),
       (2, 4, 7),
       (1, 5, 3);
