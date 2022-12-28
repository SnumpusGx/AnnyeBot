# Annye
Isso é uma cópia pública do bot que gerencia o servidor Anime's Night
> ~~Alguns comandos não estão no repositório porque são privados ou porque não podem ser colocados em vários servidores~~

## Selfhosting
Caso você fazer esse procedimento em um computador local, instale o [GIT](https://git-scm.com/downloads) e o [NodeJS](https://nodejs.org/en/download) em sua máquina;
1. Execute o comando `git clone` para clonar o repositório.
```bash
git clone https://github.com/SnumpusGx/Annye-Public.git && cd Annye-Public
```
2. Instale as dependências para que a aplicação funcione corretamente
```bash
npm install
```
## Configurando Arquivos
Alguns arquivos precisam ser preenchidos para que o bot reconheça as informações.

```diff
- config.json.example
+ config.json
```
```js
  {
  "token": "", // insira o token do bot
  "devId": ["",""] //insira os IDs dos desenvolvedores do bot
  }
```

```diff
# slashDeploy.js (linha 20)
```
```js
const clientId = "" // insira o ID de sua aplicação
```
```diff
- assets/handlers/logs.js.example
+ assets/handlers/logs.js
# (Linha 3)
```
```js
const log_hook = new Discord.WebhookClient({ url: '' }) //Coloque a url do webhook para enviar os logs de Console
```
## Informações Adicionais
- Anime's Night

<p>
 <a href='https://discord.gg/qTHnPytZpw'>
     <img src="https://img.shields.io/discord/715911059302645802?color=5865f2&label=Anime's%20Night&logo=discord&logoColor=fff&style=for-the-badge" />
 </a>
 </p>
 
 - Stargazers
<p>
  <a href="https://github.com/SnumpusGx/Annye-Public/stargazers">
    <img src="https://reporoster.com/stars/dark/SnumpusGx/Annye-Public">
  </a>
</p>
- Forkers
<p>
  <a href="https://github.com/SnumpusGx/Annye-Public/forkers">
    <img src="https://reporoster.com/forks/dark/SnumpusGx/Annye-Public">
  </a>
</p>
