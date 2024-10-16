# language: pt
Funcionalidade: Criar um novo quiz

  Contexto:
    Dado que estou no portal
    E acesso o item "quizzes" na navbar
    E clicar no botão de criar na tela de listagem de quizzes

  Cenário: Testa validação do formulário
    Quando entra e sai do campo "name"
    Então O campo "name" deve estar com uma mensagem de erro

  Cenário: Criar um quiz através da página de quizzes
    Quando preencher o campo "name" com "Meu Quiz"
    E preencher o campo "description" com "Descrição do quiz"
    E preencher a pergunta "0" com "Pergunta 1"
    E preencher a resposta "0" da pergunta "0" com "Resposta 1"
    E preencher a resposta "1" da pergunta "0" com "Resposta 2"
    E preencher a resposta "2" da pergunta "0" com "Resposta 3"
    E preencher a resposta "3" da pergunta "0" com "Resposta 4"
    # E preencher o campo "Resposta correta" com "Resposta Correta"
    # Quando clicar no botão de "Adicionar mais uma pergunta" se necessário
    # E preencher novamente os campos
    # Então clico no botão de submit do formulário
    # E o quiz deve ser criado com sucesso
