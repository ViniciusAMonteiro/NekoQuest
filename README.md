# NekoQuest 5.2.0

PWA em pt-BR, mobile-first, sem build, servidor de aplicação ou dependências externas. Os seis arquivos desta pasta estão prontos para GitHub Pages:

- `index.html`: interface, SVGs, estilos, regras dos módulos e persistência.
- `service-worker.js`: cache offline 5.2.0, atualização e clique em notificações.
- `manifest.json`: instalação e declarações separadas de ícones `any` e `maskable`.
- `cat-192.png` e `cat-512.png`: novo gato vetorial rasterizado, fundo opaco e margem segura para recorte maskable.
- `README.md`: mudanças, atualização, funcionamento e verificação.

## Atualizar da 5.1 com segurança

1. **Antes de atualizar, abra a 5.1 e exporte um backup completo em Perfil.** Guarde o JSON fora do navegador.
2. Se houver uma sessão de foco em andamento, pause-a. Um treino da 5.2 pode ser retomado depois de fechar o aplicativo.
3. Extraia o ZIP e substitua os seis arquivos na mesma pasta do mesmo repositório. Preserve o domínio e o endereço usados pelo app instalado.
4. Faça commit e aguarde o deploy do GitHub Pages. Abra o aplicativo com internet e, se aparecer o aviso de atualização, toque em **Atualizar**. Pode ser necessário fechar e abrir o app instalado para o navegador verificar o service worker.
5. Confira suas tarefas, moedas, gato escolhido e demais registros. Não é necessário importar o backup durante uma atualização normal.
6. Se precisar restaurar ou mudar de domínio/navegador, use **Perfil → Restaurar backup JSON**. A importação valida todo o arquivo antes de pedir confirmação para substituir o estado atual. Exporte o estado atual antes de confirmar uma restauração.

**Não limpe os dados do navegador para atualizar.** O app mantém a chave `nekoquest_v4` e a versão interna de dados `4`. Não usa `localStorage.clear()` nem remove a chave existente. O número 5.2.0 identifica o aplicativo, não uma migração destrutiva do formato salvo. Campos anteriores continuam no backup; o módulo de treino é acrescentado somente quando está ausente. Se os dados locais não puderem ser validados, o conteúdo original fica preservado e o salvamento automático é bloqueado até uma restauração válida.

Os dados ficam no dispositivo e no navegador usados. Não há conta, sincronização automática ou conexão com bancos. O backup completo contém todas as áreas, inclusive dados financeiros e sessões de treino em andamento.

## O que foi removido e consolidado

- Uma única implementação final de `home()`, `render()` e da montagem da barra inferior; sem cadeias de sobrescritas.
- Eliminados `sectionNavigation`, `.section-nav`, o cenário pixelado `scene-home`, artes antigas e regras de CSS acumuladas. Funções auxiliares sem uso também foram retiradas.
- Um sistema de tokens: uma cor de destaque, um raio de borda para superfícies e quatro tamanhos de texto. Tema claro/escuro e personalização de cor preservados. A cor escolhida é ajustada apenas na apresentação para manter contraste; o valor salvo continua o mesmo.
- Perfil acessível na barra inferior; removido do cabeçalho.
- Um único menu geral de áreas secundárias, no ícone **⋯** do cabeçalho. Removidos os lançadores “Explorar”, “Todas as áreas” e a grade duplicada do Perfil.
- Calendário integrado a **Tarefas → Lista · Agenda · Recorrentes**, com visões de dia, semana e mês, além dos lembretes. Sem aba inferior ou botão de calendário na Início.
- Um botão **+** flutuante em Início e Tarefas abre o editor completo. Removidos os outros botões de criação de tarefa nessas telas. Modelos, listas, subtarefas, recorrência e edição continuam disponíveis.
- Início mostra progresso do dia, próxima tarefa e quatro cartões: Foco, Hidratação, Treino e Recompensas.

## O que mudou no visual

- Barra inferior: **Início · Tarefas · Treino · Foco · Perfil**.
- Layout para smartphones de 360–430 px, com espaçamento, ícones de traço fino, botões de pelo menos 44 px e contraste AA para textos e a cor de destaque nos dois temas.
- Animações discretas. `prefers-reduced-motion` e a opção pessoal de animações desativam movimento, preservando os avisos de conclusão.
- Gatos em SVG geométrico, com cores por variáveis CSS. Os IDs **luna, mochi, mikan, nori, yuki e sora** foram preservados, mantendo a seleção salva.
- Expressões normal, feliz, dormindo e comemorando em Início, Foco, Hidratação, estados vazios e conquistas de tarefas/treinos. O Clube dos gatos mantém a escolha de ambiente, agora com geometria vetorial simples.
- Novos ícones de instalação de 192 e 512 px. Os mesmos PNGs têm composição segura para uso normal e maskable, declarados em entradas separadas no manifesto.

## Treino

### Exercícios e rotinas

Em **Treino → Exercícios**, crie ou edite nome, grupo muscular e tipo: força, cardio ou peso corporal. Busque pelo nome/grupo ou filtre por tipo e grupo muscular.

Em **Rotinas**, há modelos editáveis A/B/C e criação de novas rotinas. Cada exercício define séries, repetições, carga em kg e descanso em segundos. É possível adicionar, remover e reordenar exercícios. Os modelos são pontos de partida para você editar.

Use carga zero quando não houver carga externa. Para cardio, as repetições podem representar intervalos; o app não estima calorias, distância ou carga corporal.

### Sessão ativa

- Iniciar cria uma sessão independente, com uma cópia dos exercícios e das prescrições da rotina.
- A carga e as repetições da última sessão concluída são sugeridas por série, quando disponíveis; o valor anterior aparece abaixo do campo.
- Edite kg e repetições e marque cada série como concluída. Edições válidas são salvas automaticamente.
- Concluir uma série inicia o descanso configurado. O cronômetro usa um horário de término, de modo que navegar ou recarregar não reinicia a contagem.
- Fechar e abrir o app preserva a sessão. Toque em Treino para continuar.
- Finalizar exige pelo menos uma série concluída. Se faltarem séries, há confirmação; as não realizadas ficam identificadas no histórico e não entram nos cálculos.
- Um treino finalizado rende **30 XP e 20 moedas**, uma única vez, com comemoração do gato. Descartar uma sessão não gera recompensas.

### Histórico e evolução

- Filtros por data e exercício, com consulta às séries de cada sessão.
- Volume semanal, de segunda a domingo: soma de **kg × repetições** das séries concluídas. Séries sem carga externa não acrescentam kg ao volume.
- Recorde por exercício: maior carga concluída; em empate, maior número de repetições.
- Gráfico das últimas dez sessões do filtro: volume por sessão ou maior carga do exercício escolhido. Uma tabela acessível mostra os mesmos valores.
- Alterar a biblioteca ou a rotina não reescreve o histórico já salvo.

### Dados para manutenção

O módulo segue o contrato `init` / `validate` / `migrate` dos módulos existentes:

```js
state.workouts = {
  exercises: [], // {id, name, group, type}
  routines: [],  // {id, name, exercises: [{exercise, sets, reps, kg, rest}]}
  sessions: []   // cópias de exercícios/séries, horários, descanso e recompensa
};
```

Uma sessão com `finishedAt: null` está ativa. `restUntil` guarda o término do descanso; `rewarded` controla a recompensa. Sessões finalizadas mantêm as séries realizadas e não realizadas. O backup geral já exporta o estado inteiro e a importação passa pelo validador de Treino. Backups da 5.1 sem `workouts` são aceitos e inicializam esse módulo sem exigir ação de migração.

## Recursos preservados

Tarefas e subtarefas, prioridades, listas, modelos, tarefas recorrentes, metas e registros de rotina, lembretes e exportação de calendário, foco/Pomodoro, recompensas editáveis, finanças e relatórios, hidratação, receitas/cardápio/compras/preparo, diário, Respirar, progresso, histórico, perfil, cor personalizada, sons e notificações locais.

## Publicar e usar offline

No GitHub, envie os seis arquivos para a pasta publicada. Em **Settings → Pages**, selecione a branch e a pasta corretas. Não é necessário instalar pacotes ou compilar. Para testar no computador, use um servidor HTTP local, por exemplo:

```bash
python3 -m http.server 8000
```

Abra `http://localhost:8000`. Para instalação no celular e service worker, use o endereço HTTPS do GitHub Pages. Abrir `index.html` pelo gerenciador de arquivos não habilita todos os recursos de PWA.

Após a primeira abertura online e a instalação do service worker, a interface, os ícones e os módulos funcionam offline. A nova versão troca somente os caches do próprio NekoQuest no mesmo escopo; não apaga os dados do usuário nem caches de outros aplicativos.

Sons dependem da opção do Perfil e de uma interação com a página. Notificações exigem permissão e suporte do navegador. Lembretes, fim do foco e fim do descanso são verificados enquanto o app está aberto; o aplicativo fechado não garante alertas em segundo plano. Lembretes gerais e de hidratação podem ser exportados para o calendário do celular.

## Verificação desta entrega

Testes automatizados em Chromium headless com uma base de teste **criada pela própria 5.1**, preenchida com tarefas, rotina, listas, notas, finanças, foco, água e alimentação. A comparação antes/depois preservou todos os campos existentes, incluindo gato escolhido e um campo adicional de compatibilidade. O ZIP original não contém o armazenamento pessoal do navegador do usuário.

Passaram:

- Abrir a 5.2 com dados válidos da 5.1; criar e concluir tarefa; abrir Agenda e Recorrentes.
- Registrar água; iniciar, pausar e reiniciar foco.
- Criar/editar exercício; criar rotina; editar kg e repetições; marcar séries; executar descanso; recarregar e retomar; finalizar e conferir recompensa única.
- Conferir valor anterior, volume, recorde e gráfico.
- Exportar e importar o backup completo com igualdade do estado; validar sessão ativa no JSON; rejeitar backup com série inválida sem substituir os dados.
- Carregar as 15 áreas em 360, 390 e 430 px, nos dois temas: sem rolagem horizontal e com botões de pelo menos 44 px.
- Conferir contraste AA de texto e destaque nos dois temas, incluindo as cores predefinidas e cores extremas; respeitar movimento reduzido.
- Atualizar da 5.1 para a 5.2 no mesmo endereço/escopo, substituir o cache antigo e preservar dados e cache alheio.
- Recarregar offline e navegar, inclusive retomar uma sessão de treino após a atualização.
- Nenhum erro de JavaScript ou de console nos fluxos testados.

A verificação foi feita em navegador automatizado, sem teste em aparelho Android/iOS físico. Após publicar, faça também este teste no celular: exporte o backup, abra a versão atualizada, registre uma ação, feche e reabra, ative modo avião e confira a abertura offline. Permissão de notificação e instalação variam conforme o navegador e o sistema.
