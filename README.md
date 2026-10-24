# NekoQuest 5.3.0

PWA mobile-first em pt-BR. Barra inferior: Início, Áreas, Perfil. Início exibe seis resumos; Áreas oferece seis ícones pixel art interativos. Recompensas não aparece mais na navegação. Ferramentas secundárias disponíveis na seção Áreas.

## Atualização segura

1. Antes de atualizar, exporte um backup JSON em Perfil.
2. Substitua os arquivos no mesmo repositório e caminho do GitHub Pages.
3. **Não limpe os dados do navegador.** O aplicativo continua usando `localStorage` com a chave `nekoquest_v4` e o mesmo esquema de dados. Registros antigos de recompensas são preservados internamente para não destruir históricos e backups.
4. Atualize/reabra o PWA para carregar o novo service worker.

Inclua todos os arquivos `.webp` no mesmo diretório de `index.html`. Acesso offline após carregamento e cache inicial com sucesso.
