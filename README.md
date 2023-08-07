# ClientList

# Instruções para executar a aplicação localmente

Bem-vindo a sua Agenda de Contatos! Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

## Requisitos

Certifique-se de ter os seguintes itens instalados em seu sistema:

1. [Node.js](https://nodejs.org) 
2. npm (Node Package Manager) - Normalmente, é instalado junto com o Node.js.

## Configuração

1. Clone este repositório para sua máquina local.
2. Navegue para a pasta 'api' e crie um arquivo chamado `.env` com as seguintes informações:

DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>?schema=public"
SECRET_KEY="sua_chave_secreta_aqui"


Substitua `<user>`, `<password>`, `<host>`, `<port>` e `<database>` pelos valores específicos da sua configuração do banco de dados PostgreSQL. E defina `"sua_chave_secreta_aqui"` como uma sequência aleatória e complexa para a chave secreta.

3. Abra o terminal/prompt de comando e navegue para a pasta 'api'.

4. Execute o seguinte comando para instalar as dependências da API:
npm install


5. Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento da API:
npm run start:dev


6. Navegue para a pasta 'front' no terminal/prompt de comando.

7. Execute o seguinte comando para instalar as dependências do front-end:
npm install


8. Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento do front-end:
npm run dev

###Para acessar a documentação da aplicação.

Após instalar todas as depedencias da pasta api, abre o navegador e acesse: http:localhost:3000/api


