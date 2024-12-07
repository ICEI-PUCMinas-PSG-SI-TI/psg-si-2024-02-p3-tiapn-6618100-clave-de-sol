-- Populando dim_curso
INSERT INTO dim_curso (nome, descricao)
VALUES
    ('Violão', 'Curso básico de violão para iniciantes'),
    ('Bateria', 'Curso avançado de bateria com ênfase em ritmos brasileiros'),
    ('Piano', 'Curso de piano clássico e técnicas avançadas'),
    ('Flauta', 'Curso intermediário de flauta transversal'),
    ('Guitarra', 'Curso de guitarra elétrica e harmonia aplicada');

-- Populando dim_turma
INSERT INTO dim_turma (nome, sala, nivel, duracao, numero_vagas, codigo_curso)
VALUES
    ('Turma Violão 1', 101, 'Iniciante', '01:30:00', 20, 1),
    ('Turma Bateria Avançada', 102, 'Avançado', '02:00:00', 10, 2),
    ('Turma Piano Clássico', 103, 'Intermediário', '01:45:00', 15, 3),
    ('Turma Flauta Transversal', 104, 'Intermediário', '02:00:00', 12, 4),
    ('Turma Guitarra Harmonia', 105, 'Avançado', '01:30:00', 8, 5);

-- Populando dim_aluno
INSERT INTO dim_aluno (nome, matricula, rua, bairro, numero, cep, telefone, email)
VALUES
    ('João Silva', 'MAT001', 'Rua Principal', 'Centro', '100', '12345-678', '(11) 91234-5678', 'joao@gmail.com'),
    ('Maria Souza', 'MAT002', 'Rua Secundária', 'Jardim', '200', '98765-432', '(11) 99876-5432', 'maria@gmail.com'),
    ('Carlos Santos', 'MAT003', 'Avenida Paulista', 'Centro', '300', '34567-890', '(11) 93456-7890', 'carlos@gmail.com'),
    ('Ana Clara', 'MAT004', 'Rua das Flores', 'Bela Vista', '400', '65432-109', '(11) 94567-8901', 'ana@gmail.com'),
    ('Pedro Henrique', 'MAT005', 'Rua das Palmeiras', 'Jardins', '500', '32109-876', '(11) 95678-9012', 'pedro@gmail.com');

-- Populando dim_administrador
INSERT INTO dim_administrador (nome, contato, tipo)
VALUES
    ('Marcos Oliveira', 'marcos.admin@gmail.com', 'Financeiro'),
    ('Fernanda Almeida', 'fernanda.admin@gmail.com', 'Acadêmico'),
    ('Roberto Lima', 'roberto.admin@gmail.com', 'Logística');

-- Populando dim_pagamento
INSERT INTO dim_pagamento (tipo, nome_cartao, numero_cartao, validade, codigo_seguranca, status)
VALUES
    ('Cartão de Crédito', 'João Silva', '1234567890123456', '12/25', '123', 'Pago'),
    ('Cartão de Débito', 'Maria Souza', '2345678901234567', '01/26', '234', 'Pendente'),
    ('Boleto', NULL, NULL, NULL, NULL, 'Pago'),
    ('Pix', NULL, NULL, NULL, NULL, 'Pendente'),
    ('Cartão de Crédito', 'Pedro Henrique', '3456789012345678', '03/24', '456', 'Pago');

-- Populando fato_matricula
INSERT INTO fato_matricula (codigo_aluno, codigo_turma, codigo_pagamento, codigo_administrador, data_inicio, status)
VALUES
    (1, 1, 1, 1, '2024-01-15', 'Ativo'),
    (2, 2, 2, 2, '2024-02-20', 'Ativo'),
    (3, 3, 3, 1, '2024-03-10', 'Concluído'),
    (4, 4, 4, 2, '2024-04-05', 'Ativo'),
    (5, 5, 5, 3, '2024-05-01', 'Pendente');

-- Populando fato_estoque
INSERT INTO fato_estoque (codigo_administrador, codigo_instrumento, tipo_movimentacao, quantidade)
VALUES
    (1, 1, 'Entrada', 10),
    (2, 2, 'Entrada', 5),
    (3, 3, 'Saída', 2),
    (1, 4, 'Entrada', 7),
    (2, 5, 'Saída', 1);

-- Populando dim_instrumento
INSERT INTO dim_instrumento (nome, tipo, categoria, condicao)
VALUES
    ('Violino', 'Cordas', 'Clássico', 'Novo'),
    ('Piano', 'Teclas', 'Clássico', 'Usado'),
    ('Guitarra Elétrica', 'Cordas', 'Popular', 'Novo'),
    ('Flauta', 'Sopro', 'Clássico', 'Novo'),
    ('Bateria', 'Percussão', 'Popular', 'Usado');
