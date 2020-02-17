# bootcamp-gostack-modulo02
Iniciando back-end do GoBarber

# Nodemon & Sucrase

O Node ainda não suporta todas as funções\sintaxe do JavaScript

Mas para que isso seja possível existem algumas ferramentas que resolvem esse problema, como por exemplo,
Babel, Babel Node, mas nesse curso será utilizado o Sucrase

Comando para instalar o Sucrase
<yarn add sucrase -D>

Comando para instalar o Nodemon
<yarn add nodemon -D>

Comando para instalar os dois de uma só vez
<yarn add sucrase nodemon -D>

# Conceitos do Docker

Criação de ambientes isolados (containers)
Imagina que você precisa instalar o PostgreSql na sua máquina.
Da maneira tradicional a instalação desse banco de dados altera arquivos e configurações da máquina instalada e fazer update de versão ou até mesmo
desinstalar pode afetar outras ferramantas presentes na máquina em questão.

Através do Docker isso não acontece mais, pois ele cria um container na máquina e o PostgreSql é instalado lá e apesar de você
poder se comunicar com ele, ele continua totalmente isolado da máquina

A comunicação com o Docker é feita a partir de portas, por exemplo, Postgresql :5432, Mysql :3306, MongDB :27017 e etc.

# Principais Conceitos

- Imagem: É um serviço disponível do Docker, por exemplo, Postgresql, MySql e etc. São ferramentas.
- Container: É a instancia de uma imagem
- Docker Registry (Docker Hub): É o local aonde estão todas as imagens do Docker e aonde podemos cadastrar as nossas próprias imagens
- Docker File: É a receita para criar a própria imagem, define como a nossa aplicação funcnionará em um ambiente totalmente do zero
    Exemplo:
        # Partindo de uma imagem existente
        <FROM node:10>

        # Definimos a pasta aonde trabalharemos
        <WORKDIR /usr/app>

        # Copiamos os arquivos
        <COPY . ./>

        # Instalamos as dependencias
        <RUN yarn>

        # Liberamos a porta que queremos utilizar
        <EXPOSE 3333>

        # Executamos a nossa aplicação
        <CMD yarn start>

Instalar o docker: https://docs.docker.com/docker-for-windows/install/

Depois de quase meio dia tentando instalar o Docker no Windows 10 Home, eu descobri que para que ele funcione é preciso ir na Bios
do computador e desasbilitar\habilitar a opção de virtualização do notebook...

docker run --name <nome_db> -e POSTGRES_PASSWORD=<senha> -p <port_pc>:<port_docker> -d postgres
docker run --name database -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres

Para configurar o client do postgree utilizar o host como 192.168.99.100

// exibe containers rodando
docker ps -a

// parar um determinado container
docker stop <nome_container>

// iniciar um container
docker start <nome_container>

// visualizar log
docker logs <nome_container>

Da forma como foi configurado o container, ele pode ser utilizado por diversas aplicações, porém existem formas de
deixá-lo exclusivo para uma determinada aplicação.

Isso será abordado em breve

# Sequelize & MVC

Sequelize é uma ORM para NodeJs e bancos de dados realcionais

ORM (Object-relational mapping): É uma forma abstrair um banco de dados
- Tabelas viram models

Manipulação de dados
É feita através de códigos JavaScripts

Migrations
- Controle de versão para base de dados
- É uma forma de manter a base de dados atualizada entre todos o desenvolvedores
- Migration funciona através de arquivos que contém instruções para criação, alteração ou remoção de tabelas e colunas
- As migrations ocorrem por data
- Cada migration deve manipular apenas uma tabela

Seeds
- Populam a base de dados para desenvolvimento
- Populam a base de dados para testes
- São executaveis apenas por códigos
- Jamais serão utilizados em produção
- Caso seja necessário utilizar os dados na produção, a migration é que ficará responsável por isso

Arquitetura MVC

Basicamente é a estruturação de pastas e arquivos na nossa aplicação afim de separar as responsabilidades de cada tipo de arquivo

Model: 
- Armazena a abstração do banco de dados, utilizado para manipular os dados contidos nas tabelas do banco e 
  não possuem responsabilidades sobre a regra de negócio da nossa aplicação

Controller:  
- É o ponto de entrada das requisições da nossa aplicação, uma rota geralmente está associada diretamente com um método no controller.
  Podemos incluir a grande parte das regras de negócio da aplicação nos controllers (conforme a aplicação cresce, 
  podemos isolar as regras através de pathers)

View:
- É o retorno ao cliente, em aplicações que não utilizamos o modelo de API\REST isso pode ser um HTML, mas no caso desse curso a view é
  apenas o JSON que será retornado para o front-end e depois manipulado pelo ReactJS ou React Native.

A face de um controller
- São classes
- Sempre retornam um JSON
- Não chamam outro controller \ método

Quando criamos um novo controller 
- Quando possuímos uma nova entidade
- Nem sempre uma entidade será um model, mas um model normalmente sempre terá um controller
- Apenas 5 métodos

# ESLint, Prettier & EditorConfig

Neste módulo ocorreu a padrozinação do projeto

ESLint
- Ele verifica se o código esta seguindo padrões

Instala o ESLint
<yarn add eslint -D>

Iniciar o ESLint
<yarn eslint --init>
To check syntax, find problems, and enforce code style
JavaScript modules (import/export)

Instala o Prettier
<yarn add prettier eslint-config-prettier eslint-plugin-prettier -D>

Corrigir todos os arquivos de uma só vez
<yarn eslint --fix src --ext .js>

# 05 Configurando Sequelize

Estrutura de pastas e arquivos
<mkdir ./src/config>
<touch ./src/config/database.js>

<mkdir ./src/database>
<mkdir ./src/database/migrations>

<mkdir ./src/app>
<mkdir ./src/app/controllers>
<mkdir ./src/app/models>

<yarn add sequelize>
<yarn add sequelize-cli - D> // não funcionou como dependecia de desenvolvimento
<yarn add sequelize-cli>

<touch .sequelizerc>

<yarn add pg pg-hstore>

# Migration de usuário

<yarn sequelize migration:create --name=Create-Users>

<yarn sequelize db:migrate>

<yarn sequelize db:migrate:undo> // Desfaz a última migrate
<yarn sequelize db:migrate:undo:all> // Desfaz todas a migrations

# Model de usuário

# Criando loader de models

# Gerando hash da senha

<yarn add bcryptjs>

# Conceitos de JWT

JWT: Json Web Token

POST http://api.com/sessions

{
    "email": "j.romeiro@live.com",
    "password": "123456"
}

Retorno do Token JWT

<Headrs (tipo de token, algoritmo)>.<Payload (dados adicionais do usuário)>.<Assinatura>
$08$u8lt5sT/.1N2Kcg4AqawOefP.iYwv6DRx3t5MTRST08l8Q0EKHuRu

# Autenticação JWT

<yarn add jsonwebtoken>

Obter um hash: https://www.md5online.org/
82982ee82d418e861d314886fbb3e49a

# Validando dados de entrada

Instalando o yup, uma biblioteca de validação
<yarn add yup>

# Configurando Multer
Nesta aula, será ensinado a maneira pela qual devemos enviar arquivos físicos para o servidor sem alterar a estruta JSON.

É importante lembrar que o JSON não suporta arquivos físicos, como por exemplo, fotos, documentos pdf e etc.

Instalar o mutler, biblioteca responsável por fazer o upload de arquivo
<yarn add multer>

Criar uma pasta na raiz do projeto chamada tmp e dentro dela uma pasta chamada updaloads
<mkdir ./tmp>
<mkdir ./tmp/uploads>

Criar um arquivo chamado multer.js na qual ficará armazenada toda a parte de configuração de updload de arquivos
<touch ./src/config/multer.js>

# Avatar do usuário
Criar o controller FileController
<touch ./src/app/controllers/FileController.js>

Após configura o controller, criar uma tabela para armazenar o link do arquivo importado

Criar uma tabela no banco através de uma migrate
<yarn sequelize migration:create --name=Create-Files>

Depois de configurar o Migrate, execute-o para criar a tabela no banco
<yarn sequelize db:migrate>

Criar o model da tabela file
<touch ./src/app/models/File.js>

Referenciar o model File no arquivo src/app/database/index.js da mesma forma que modelo User foi referenciado

Importar o Model File no FileController

Adicionar um novo campos na tabela de usuarios para referencia a tabela File
<yarn sequelize migration:create --name=add-avatar-field-to-users>

Executar a migrate
<yarn sequelize db:migrate>

# Listagem de prestadores de serviço

<touch ./src/app/controllers/ProviderController.js>
