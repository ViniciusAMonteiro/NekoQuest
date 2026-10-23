# NekoQuest 5.1.0 — Clean + Bento + Playful Minimalism

## Instalar esta versão
1. **Antes de atualizar, entre em Perfil no aplicativo antigo e exporte um backup JSON.** O aplicativo salva dados no armazenamento local do navegador.
2. Faça upload dos **seis arquivos** da pasta para a raiz do mesmo endereço GitHub Pages que já hospeda o app (`index.html`, `manifest.json`, `service-worker.js`, `cat-192.png`, `cat-512.png`, `README.md`), substituindo os existentes.
3. Reabra o NekoQuest e use o comando **Atualizar** caso o aplicativo mostre o aviso. Se a versão antiga persistir, feche e reabra a página; **não exclua os dados do site**.

## Design e navegação
- Visual mobile-first, interface Clean UI + cards Bento, espaçamento, contraste e microanimações discretas.
- Cinco abas principais: **Início, Tarefas, Calendário, Foco e Perfil**.
- Página inicial nova: progresso diário, próxima tarefa, atalhos e cartões dinâmicos de foco, hidratação, recompensas, finanças e alimentação.
- Calendário separado em aba inferior e integrado às tarefas existentes; botão de nova tarefa e acesso a lembretes.
- **Missões → Tarefas** em todos os textos visíveis da interface e no manifesto, sem renomear estruturas internas que poderiam afetar backups.
- Menu **Explorar** no topo e atalhos no Perfil mantêm as áreas Finanças, Hidratação, Alimentação, Respirar, Diário, Recompensas, Histórico, Gatinhos e Progresso.
- Mantidos temas claro/escuro, cores personalizadas, sons, notificações, sprites pixel art e dados locais.
- Ícones de instalação incluídos no pacote e gerados a partir do gatinho embutido no aplicativo.

## Continuidade e limitações
- Mantém a chave `nekoquest_v4` e o esquema de dados anterior; não requer migração de dados para o novo layout.
- Continua um PWA local, sem sincronização entre dispositivos. Notificações dependem das limitações do navegador; no segundo plano, exporte os lembretes para o calendário do celular se precisar de alarmes confiáveis.
- Esta versão muda sobretudo a apresentação e os caminhos de navegação; recursos internos permanecem com o comportamento original.
