# Annye
Isso é uma cópia pública do bot que gerencia o servidor Anime's Night
> ~~Alguns comandos não estão no repositório porque são privados ou porque não podem ser colocados em vários servidores~~

## Selfhosting
Caso você fazer esse procedimento em um computador local, instale o [GIT](https://git-scm.com/downloads) e o [NodeJS](https://nodejs.org/en/download) em sua máquina;
1. Execute o comando `git clone` para clonar o repositório.
```bash
git clone https://github.com/SnumpusGx/AnnyeBot.git && cd AnnyeBot
```
2. Instale as dependências para que a aplicação funcione corretamente
```bash
npm install
```
## Configurando Arquivos
Alguns arquivos precisam ser preenchidos para que o bot reconheça as informações.

- Em `config.json`
```js
  {
  "token": "", // insira o token do bot
  "devId": ["",""] //insira os IDs dos desenvolvedores do bot
  }
```


- Em `slashDeploy.js (linha 20)`
```js
const clientId = "" // insira o ID de sua aplicação
```

- Em `assets/handlers/logs.js (Linha 3)`
```js
const log_hook = new Discord.WebhookClient({ url: '' }) // Coloque a url do webhook para enviar os logs de Console
```

## Informações Adicionais
- Anime's Night

<p>
 <a href='https://discord.gg/animes-night-tm-7k-715911059302645802'>
     <img src="https://img.shields.io/discord/715911059302645802?color=5865f2&label=Anime's%20Night&logo=discord&logoColor=fff&style=for-the-badge" />
 </a>
 </p>
 
 - Stargazers
<p>
  <a href="https://github.com/SnumpusGx/AnnyeBot/stargazers">
    <img src="https://reporoster.com/stars/dark/SnumpusGx/AnnyeBot">
  </a>
</p>

- Forkers
<p>
  <a href="https://github.com/SnumpusGx/AnnyeBot/forkers">
    <img src="https://reporoster.com/forks/dark/SnumpusGx/AnnyeBot">
  </a>
</p>
