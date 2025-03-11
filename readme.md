<b><h1> Projeto de Automação de Testes com Cypress</h1></b>



<h2>Automação: Inserção de Nova Conta</h2>

<h3>📌 Login Automatizado: Utilizei um comando customizado para realizar o login na aplicação, garantindo que o teste comece a partir de um estado autenticado.

<h3>📌 Navegação e Interação: O teste navega até o menu de configurações, acessa a página de contas e insere os dados de uma nova conta.

<h3>📌 Validação de Fluxo: O teste clica no botão de salvar, finalizando o processo de criação da conta.</h3>

<hr>
<h2>Automação de Testes de API com Cypress: Criação de Contas</h2>

<h3>📍 Autenticação via Token JWT: Utilizei um comando customizado (cy.getToken) para obter um token de autenticação JWT, necessário para autenticar as requisições à API.</h3>

<h3>📍 Requisição POST: Fiz uma requisição POST para o endpoint de criação de contas, enviando o nome da nova conta no corpo da requisição.</h3>

<h3>📍 Validação da Resposta: Verifiquei se o status da resposta foi 201 (Created) e se o corpo da resposta continha um id e o nome da conta criada.</h3>

<hr>
<h2> Comandos Customizados no Cypress: Automação de Login e Autenticação</h2>

<h3> 🎯 Comando login  </h3>
<h3>Este comando automatiza o processo de login na aplicação através da interface gráfica:</h3>

<p>Visita a URL da aplicação.

Preenche os campos de email e senha com as credenciais fornecidas.

Clica no botão de login.

Valida a mensagem de boas-vindas (Bem vindo) para garantir que o login foi bem-sucedido.</p>

<h3> 🎯 Comando getToken </h3>
<h3>  Este comando obtém um token de autenticação JWT através de uma requisição à API: </h3>
<p>Faz uma requisição POST para o endpoint de autenticação.

Envia as credenciais (email e senha) no corpo da requisição.

Extrai o token da resposta e valida se ele não está vazio.

Retorna o token para ser utilizado em outras requisições autenticadas.</p>