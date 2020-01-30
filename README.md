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