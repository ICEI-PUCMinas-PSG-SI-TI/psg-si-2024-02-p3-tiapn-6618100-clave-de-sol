# **Guia de Instalação para Infraestrutura com Terraform**

## **Pré-requisitos**

1. **Instalar o Terraform**
    - Acesse o site oficial do Terraform ([Terraform Install](https://developer.hashicorp.com/terraform/install)).
    - Siga as instruções fornecidas para instalar o Terraform de acordo com seu S.O.
    - Verifique a instalação executando o comando:
      ```bash
      terraform --version
      ```

2. **Ter acesso ao AWS CLI**
    - Instale o AWS CLI ([Guia de Instalação do AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)).
    - Configure o AWS CLI com suas credenciais:
      ```bash
      aws configure
      ```

3. **Criar Usuário IAM e Configurar o AWS CLI**

---

## **Como Criar um Usuário IAM e Configurar o AWS CLI**

### **1. Criar um Usuário IAM no AWS**
1. Acesse o [console do IAM na AWS](https://console.aws.amazon.com/iam/).
2. Clique em **Usuários** no menu lateral e depois em **Adicionar Usuário**.
3. **Configurações do usuário**:
    - Nome do usuário: escolha um nome descritivo, como `terraform-user`.
    - Tipo de acesso: Selecione **Acesso programático** (criará uma chave de acesso e chave secreta para o AWS CLI).

4. **Definir permissões**:
    - Escolha **Anexar políticas diretamente**.
    - Selecione a política **AdministratorAccess** (ou uma política personalizada que tenha permissões para criar os recursos necessários).

5. **Concluir**:
    - Clique em **Próximo** até finalizar a criação do usuário.
    - Após a criação, anote a **Access Key ID** e a **Secret Access Key**. Esses dados serão usados para configurar o AWS CLI.

---

### **2. Configurar o AWS CLI com as Credenciais do Usuário IAM**

1. No terminal, execute o comando:
   ```bash
   aws configure
   ```

2. Insira as informações solicitadas:
    - **AWS Access Key ID**: Insira a Access Key ID do usuário IAM.
    - **AWS Secret Access Key**: Insira a Secret Access Key do usuário IAM.
    - **Default region name**: Insira a região padrão para os recursos, como `us-east-1` ou `sa-east-1`.
    - **Default output format**: Deixe como `json` (pressione Enter para aceitar o padrão).

3. Verifique se a configuração foi bem-sucedida:
   ```bash
   aws sts get-caller-identity
   ```
   Esse comando retornará informações sobre a conta configurada, como o ARN do usuário.

---

## **Passo a Passo**

### **1. Preparar os Arquivos**

Certifique-se de que você possui os seguintes arquivos na mesma pasta:
- `main.tf`
- `provider.tf`
- `variables.tf`
- `terraform.tfvars`
- `dynamo.tf`
- `iam.tf`

### **2. Configurar o Ambiente CI/CD**

1. **Acesse o diretório do projeto**
   Abra o terminal ou prompt de comando e navegue até o diretório onde os arquivos estão localizados:
   ```bash
   cd init
   ```

2. **Instale os plugins necessários**
   Execute o comando para inicializar o Terraform e baixar os plugins necessários:
   ```bash
   terraform init
   ```

### **3. Ajustando as Variáveis no Arquivo `terraform.tfvars`**

Antes de executar o Terraform, configure os valores específicos do projeto no arquivo `terraform.tfvars`. Aqui está um exemplo:

```hcl
TagProject = "MeuProjeto"
TagEnv     = "dev"
aws_region = "us-east-1"
github_acc = "SeuUsuarioOuOrganizacao/SeuRepositorio"
updated_by = "SeuNome"
```

- **`TagProject`**: Nome do projeto.
- **`TagEnv`**: Nome do ambiente (por exemplo, `dev`, `prod`, `staging`).
- **`aws_region`**: Região AWS (padrão: `us-east-1`).
- **`github_acc`**: Caminho do usuário ou organização no GitHub e nome do repositório.
- **`updated_by`**: Nome do criador ou responsável pelo repositório.


Antes de aplicar as mudanças, é recomendável visualizar o plano de execução para garantir que os recursos serão criados corretamente.

Execute o comando:
```bash
terraform plan
```
O Terraform exibirá uma lista dos recursos que serão criados, alterados ou destruídos.

---

### **4. Aplicar a Infraestrutura**

Se o plano estiver correto, aplique as mudanças para criar os recursos:
```bash
terraform apply
```

- Digite `yes` quando solicitado para confirmar a execução.

---

## **Monitorar e Validar a Instalação**

- Após a execução bem-sucedida, o Terraform exibirá as saídas definidas (se houver).
- Para validar os recursos criados:
    - Acesse o console AWS.
    - Verifique os serviços relevantes, como DynamoDB, IAM ou qualquer outro recurso especificado.
