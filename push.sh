#!/bin/bash 

# Script shell para facilitar a criação de commits semânticos e gerenciar Pull Requests
# Lista de tipos de commit e seus respectivos emojis
commit_types=(
    "feat:✨ - Nova funcionalidade relacionada a pipelines, ETL ou integração de dados."
    "fix:🐛 - Correção de bugs em pipelines, scripts ou lógica de dados."
    "docs:📚 - Atualização ou adição de documentação de pipelines ou guias."
    "revert:💥 - Reversão de mudanças anteriores, como rollback de deploys."
    "ci:🧱 - Alterações em CI/CD, como atualização de scripts de pipeline ou ferramentas."
    "hotfix:🚑 - Correções urgentes em produção para problemas críticos."
    "deploy-prod:🚀 - Deploy de novas versões em produção."
    "deploy-dev:🛠️ - Deploy de novas versões em desenvolvimento."
    "test:🧪 - Adição ou atualização de testes para validação de dados."
    "build:🏗️ - Alterações na configuração de pipelines de CI/CD."
    "perf:⚡ - Melhorias de desempenho em jobs ou consultas."
    "style:🎨 - Atualização de estilo de código sem mudanças funcionais."
    "refactor:♻️ - Refatoração para melhorar a estrutura sem alterar a funcionalidade."
    "chore:🔧 - Tarefas rotineiras como atualização de dependências ou infraestrutura."
    "raw:🗃️ - Alterações em dados brutos, como esquemas ou fontes."
    "cleanup:🧹 - Limpeza de código ou dados desatualizados."
    "remove:🗑️ - Remoção de funcionalidades ou código obsoleto."
    "security:🔒 - Melhorias de segurança, como permissões de acesso."
    "data-quality:🔍️ - Alterações para melhorar a qualidade dos dados."
    "schema:📝 - Mudanças em esquemas ou modelos de dados."
    "migration:🚚 - Migrações de banco de dados ou pipelines."
    "orchestration:🤖 - Alterações em ferramentas de orquestração de workflows."
    "dependency:📦 - Atualização de dependências como bibliotecas ou pacotes."
    "validation:✔️ - Adição ou ajuste de validações de dados ou esquemas."
    "type:🏷️ - Alterações em anotações de tipos no código."
    "error-handling:🥅 - Melhorias no tratamento de erros ou logging."
)

echo "Selecione o modo de operação:"
echo "1. Commit Básico (Commit e Push)"
echo "2. PR (Branch, Commit, Push e PR)"
echo "3. Merge (Merge PR)"
echo "4. Completo (Branch, Commit, PR, Merge)"

read -p "Escolha uma opção (1, 2, 3 ou 4): " mode

# Procedimento para Commit Básico
if [ "$mode" == "1" ]; then
    echo "Selecionado: Commit Básico"

    echo "--- Selecione o tipo de commit ---"
    echo ""
    for i in "${!commit_types[@]}"; do
      printf "%d. %s\n" $((i+1)) "${commit_types[$i]}"
    done

    read -p "Digite o número correspondente ao tipo de commit: " commit_type

    # Verificação se a entrada é válida
    if [[ "$commit_type" -ge 1 && "$commit_type" -le ${#commit_types[@]} ]]; then
        selected_commit="${commit_types[$((commit_type-1))]}"
        type=$(echo $selected_commit | cut -d ':' -f1)
        emoji=$(echo $selected_commit | cut -d ':' -f2 | cut -d ' ' -f1)
    else
        echo "Tipo de commit inválido"; exit 1
    fi

    read -p "Digite a mensagem do commit: " message

    # Validação da mensagem de commit
    while [[ -z "$message" || ${#message} -lt 10 ]]; do
        echo "A mensagem de commit é muito curta ou está vazia. Por favor, forneça uma mensagem significativa."
        read -p "Digite a mensagem do commit: " message
    done

    commit_message="[$type] $emoji: $message"

    echo ""
    echo "Seu commit será:"
    echo "$commit_message"
    read -p "Deseja confirmar o commit? (s/n): " confirm_commit

    if [ "$confirm_commit" != "s" ]; then
        read -p "Deseja editar a mensagem do commit? (s/n): " edit_message
        if [ "$edit_message" == "s" ]; then
            read -p "Digite a nova mensagem do commit: " message
            commit_message="[$type] $emoji: $message"
            echo "Nova mensagem de commit: $commit_message"
        fi
    fi

    read -p "Deseja usar 'amend' para alterar o último commit? (s/n): " use_amend

    if [ "$use_amend" == "s" ]; then
        git commit --amend -m "$commit_message"
    else
        git commit -a -m "$commit_message"
    fi

    git log -1

    read -p "Deseja realizar um 'git push' agora? (s/n): " push_now

    if [ "$push_now" == "s" ]; then
        git push
    fi

    echo "Processo de commit básico concluído."

# Procedimento para PR (Branch, Commit, Push e PR)
elif [ "$mode" == "2" ]; then
    echo "Selecionado: PR (Branch, Commit, Push e PR)"

    read -p "Deseja criar uma nova branch para a PR antes de comitar? (s/n): " create_branch
    if [ "$create_branch" == "s" ]; then
        read -p "Digite o nome da nova branch: " new_branch
        git checkout -b "$new_branch"
    fi

    echo "Continuando com o processo de commit e PR..."

    # Captura o emoji do último commit
    last_commit_message=$(git log -1 --pretty=%B)
    last_commit_emoji=$(echo "$last_commit_message" | grep -oP "(?<=^\[).*(?=\])" | cut -d ' ' -f2)

    if [ -z "$last_commit_emoji" ]; then
        echo "--- Selecione o tipo de commit ---"
        echo ""
        for i in "${!commit_types[@]}"; do
          printf "%d. %s\n" $((i+1)) "${commit_types[$i]}"
        done

        read -p "Digite o número correspondente ao tipo de commit: " commit_type

        # Verificação se a entrada é válida
        if [[ "$commit_type" -ge 1 && "$commit_type" -le ${#commit_types[@]} ]]; then
            selected_commit="${commit_types[$((commit_type-1))]}"
            type=$(echo $selected_commit | cut -d ':' -f1)
            emoji=$(echo $selected_commit | cut -d ':' -f2 | cut -d ' ' -f1)
        else
            echo "Tipo de commit inválido"; exit 1
        fi

        read -p "Digite a mensagem do commit: " message

        # Validação da mensagem de commit
        while [[ -z "$message" || ${#message} -lt 10 ]]; do
            echo "A mensagem de commit é muito curta ou está vazia. Por favor, forneça uma mensagem significativa."
            read -p "Digite a mensagem do commit: " message
        done

        commit_message="[$type] $emoji: $message"

        echo ""
        echo "Seu commit será:"
        echo "$commit_message"
        read -p "Deseja confirmar o commit? (s/n): " confirm_commit

        if [ "$confirm_commit" != "s" ]; then
            read -p "Deseja editar a mensagem do commit? (s/n): " edit_message
            if [ "$edit_message" == "s" ]; then
                read -p "Digite a nova mensagem do commit: " message
                commit_message="[$type] $emoji: $message"
                echo "Nova mensagem de commit: $commit_message"
            fi
        fi

        read -p "Deseja usar 'amend' para alterar o último commit? (s/n): " use_amend

        if [ "$use_amend" == "s" ]; then
            git commit --amend -m "$commit_message"
        else
            git commit -a -m "$commit_message"
        fi

        git log -1

        read -p "Deseja realizar um 'git push' agora? (s/n): " push_now

        if [ "$push_now" == "s" ]; then
            git push
        fi
    else
        echo "Nenhuma mudança foi feita."
        emoji="$last_commit_emoji"
    fi

    # Criar uma PR automaticamente usando o GitHub CLI
    read -p "Deseja criar uma Pull Request agora? (s/n): " create_pr
    if [ "$create_pr" == "s" ]; then
        read -p "Digite o título da PR: " pr_title
        pr_title="$emoji $pr_title"
        read -p "Digite a descrição da PR: " pr_description
        default_base_branch="main" # ou outra branch padrão do seu projeto
        read -p "Digite a branch base para a PR (default: $default_base_branch): " base_branch

        if git diff --quiet "${base_branch:-$default_base_branch}"; then
            echo "Não há mudanças entre a branch atual e a branch base. PR não pode ser criada."
            exit 1
        fi

        gh pr create --title "$pr_title" --body "$pr_description" --base "${base_branch:-$default_base_branch}" --head "$new_branch"

        # Exibir a URL da PR
        pr_url=$(gh pr view --json url -q .url)
        echo "Pull Request criada com sucesso: $pr_url"
        fi

        echo "Processo de criação de PR concluído."

# Procedimento para Merge de uma PR existente
elif [ "$mode" == "3" ]; then
    echo "Selecionado: Merge PR"

    echo "Listando PRs existentes:"
    gh pr list --state open #--limit 10

    read -p "Digite o número da PR que deseja fazer o merge: " pr_number

    gh pr view "$pr_number"

    read -p "Deseja confirmar o merge da PR #$pr_number? (s/n): " confirm_merge

    if [ "$confirm_merge" == "s" ]; then
        gh pr merge "$pr_number" --auto --delete-branch
        echo "Merge da PR #$pr_number realizado com sucesso e branch deletada."
    else
        echo "Merge cancelado."
    fi

# Procedimento Completo: Branch, Commit, PR, Merge
elif [ "$mode" == "4" ]; then
    echo "Selecionado: Processo Completo"

    # Executa o processo completo, reutilizando os blocos de código do modo PR e Merge.

    # Criação de uma nova branch para PR ANTES de realizar o commit
    read -p "Deseja criar uma nova branch para a Pull Request antes de comitar? (s/n): " create_branch
    if [ "$create_branch" == "s" ]; then
        read -p "Digite o nome da nova branch: " new_branch
        git checkout -b "$new_branch"
    fi

    echo "Continuando com o processo de commit, PR e Merge..."
    echo "--- Selecione o tipo de commit ---"
    echo ""
    for i in "${!commit_types[@]}"; do
      printf "%d. %s\n" $((i+1)) "${commit_types[$i]}"
    done

    read -p "Digite o número correspondente ao tipo de commit: " commit_type

    # Verificação se a entrada é válida
    if [[ "$commit_type" -ge 1 && "$commit_type" -le ${#commit_types[@]} ]]; then
        selected_commit="${commit_types[$((commit_type-1))]}"
        type=$(echo $selected_commit | cut -d ':' -f1)
        emoji=$(echo $selected_commit | cut -d ':' -f2 | cut -d ' ' -f1)
    else
        echo "Tipo de commit inválido"; exit 1
    fi

    read -p "Digite a mensagem do commit: " message

    # Validação da mensagem de commit
    while [[ -z "$message" || ${#message} -lt 10 ]]; do
        echo "A mensagem de commit é muito curta ou está vazia. Por favor, forneça uma mensagem significativa."
        read -p "Digite a mensagem do commit: " message
    done

    commit_message="[$type] $emoji: $message"

    echo ""
    echo "Seu commit será:"
    echo "$commit_message"
    read -p "Deseja confirmar o commit? (s/n): " confirm_commit

    if [ "$confirm_commit" != "s" ]; then
        read -p "Deseja editar a mensagem do commit? (s/n): " edit_message
        if [ "$edit_message" == "s" ]; then
            read -p "Digite a nova mensagem do commit: " message
            commit_message="[$type] $emoji: $message"
            echo "Nova mensagem de commit: $commit_message"
        fi
    fi

    read -p "Deseja usar 'amend' para alterar o último commit? (s/n): " use_amend

    if [ "$use_amend" == "s" ]; then
        git commit --amend -m "$commit_message"
    else
        git commit -a -m "$commit_message"
    fi

    git log -1

    read -p "Deseja realizar um 'git push' agora? (s/n): " push_now

    if [ "$push_now" == "s" ]; then
        git push
    fi

    # Criar uma PR automaticamente usando o GitHub CLI
    read -p "Deseja criar uma Pull Request agora? (s/n): " create_pr
    if [ "$create_pr" == "s" ]; then
        read -p "Digite o título da PR: " pr_title
        read -p "Digite a descrição da PR: " pr_description
        default_base_branch="main" # ou outra branch padrão do seu projeto
        read -p "Digite a branch base para a PR (default: $default_base_branch): " base_branch

        if git diff --quiet "${base_branch:-$default_base_branch}"; then
            echo "Não há mudanças entre a branch atual e a branch base. PR não pode ser criada."
            exit 1
        fi

        gh pr create --title "$pr_title" --body "$pr_description" --base "${base_branch:-$default_base_branch}" --head "$new_branch"

        # Exibir a URL da PR
        pr_url=$(gh pr view --json url -q .url)
        echo "Pull Request criada com sucesso: $pr_url"
    fi

    # Merge automático da PR (opcional)
    read -p "Deseja fazer o merge da PR automaticamente? (s/n): " merge_pr
    if [ "$merge_pr" == "s" ]; then
        gh pr merge --auto --delete-branch
        echo "Pull Request merged and branch deleted successfully"
    fi

    echo "Processo completo concluído."

else
    echo "Opção inválida. Por favor, execute o script novamente e selecione uma opção válida."
    exit 1
fi