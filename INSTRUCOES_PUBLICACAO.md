# NekoQuest 5.7 — Kit de imagens integrado

Alterações de código preparadas em: https://github.com/ViniciusAMonteiro/NekoQuest/pull/3

## Como finalizar no GitHub
1. Abra a branch `nekoquest-5-7-assets` no GitHub (não `main`).
2. Use `Add file` > `Upload files` e envie todos os PNG deste pacote para a raiz do repositório.
3. Confirme o upload nessa branch.
4. Volte ao Pull Request nº 3, clique em `Ready for review` e faça `Merge pull request`.
5. Depois da publicação pelo GitHub Pages, feche e reabra o PWA.

O `index.html`, `manifest.json` e `service-worker.js` já foram alterados nessa branch. Ainda faltam os PNG serem enviados ao GitHub, portanto NÃO faça merge antes do upload.

O aplicativo continua usando `localStorage` `nekoquest_v4`; não limpe os dados do navegador. Exporte o backup no Perfil antes da publicação.
