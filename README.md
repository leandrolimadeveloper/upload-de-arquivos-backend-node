<h1 align="center">Upload de Arquivos</h1>
<p align="center">
    <a href="#sobre">Sobre |</a>
    <a href="#tecnologias">Tecnologias |</a>
    <a href="#instalação">Instalação de dependências e uso</a>
</p>

## Sobre
Backend da aplicação de upload de arquivos de imagem, que permite fazer upload de imagens de até 2MB, sendo as informações das imagens armazenadas no banco de dados MongoDB,  e a imagem, propriamente dita, no servidor AWS, da Amazon.

![0](https://user-images.githubusercontent.com/76854209/189429847-dbc1c146-0c59-49b6-b14a-a8f3738d5962.jpg)
![1](https://user-images.githubusercontent.com/76854209/189429851-61c54467-d893-49f2-8a0a-b2d4f9a68b32.jpg)
![2](https://user-images.githubusercontent.com/76854209/189429853-d64fb2f6-a986-4525-abc3-cf79b82cc407.jpg)
![3](https://user-images.githubusercontent.com/76854209/189429854-81b27679-822a-41e5-bc17-44165f74ef44.jpg)
![5](https://user-images.githubusercontent.com/76854209/189429856-f2197ee9-f3f3-4e42-89f0-64d09ccd731f.jpg)
![6](https://user-images.githubusercontent.com/76854209/189429859-14daa34d-97c0-48da-9d2a-77dcf602ed61.jpg)
![7](https://user-images.githubusercontent.com/76854209/189429860-57d28e44-bda8-4c06-aa1d-62595b1bb1f2.jpg)

A construção da aplicação seguiu boas práticas de programação como a utilização de variáveis ambiente, a opção de utilizar o armazenamento local de imagens durante ambiente de desenvolvimento, para depois alterar para servidor remoto, em ambiente de produção. Também foi feita medida de segurança para que a conexão com o banco de dados inicie antes que o servidor da aplicação.

## Tecnologias
<ul>
    <li><a href="https://nodejs.org/" alt="Node.js">Node.js</a></li>
    <li><a href="https://www.mongodb.com/" alt="MongoDB">MongoDB</a></li>
    <li><a href="https://aws.amazon.com/" alt="Amazon AWS">Amazon AWS</a></li>
</ul>

## Instalação e uso 
> Este guia assume que você já tenha o Node.js instalado, um banco de dados MongoDB (em https://cloud.mongodb.com/, ou localmente), com os seus dados de conexão com o banco, e uma conta na AWS, com bucket criado e demais informações e configurações.

Criar arquivo .env com as variáveis ambiente. Seguir modelo disponível no arquivo .env.example.

```bash
$ git clone https://github.com/leandrolimadeveloper/upload-de-arquivos-backend-node

$ cd upload-de-arquivos-backend-node

```

### Instalação de dependências
```bash
$ npm i
```

Para executar o servidor, execute:
```
$ npm run dev
```

## Uso

Para testar os endpoints deve-se utilizar um programa como o Insomnia ou Postman.</br>
https://insomnia.rest/download</br>
https://www.postman.com/

**Deploy**:<br>
https://upload-backend-app.herokuapp.com/posts
