# NekoQuest 4.3 — tarefas, rotinas e diário

Substitua os seis arquivos do aplicativo no mesmo local do seu site: index.html, service-worker.js, manifest.json, cat-192.png, cat-512.png e README.md. Mantenha a mesma origem/endereço para preservar o armazenamento do navegador. Faça um backup em Perfil antes de atualizar. Reabra e use Atualizar caso apareça o aviso.

## O que mudou
- Início mantém apenas o próximo passo. Missões centraliza Lista, Agenda e Recorrentes.
- Listas personalizadas, renomeação e filtro. Excluir uma lista mantém suas tarefas.
- Rotinas com metas numéricas diárias, semanais (segunda a domingo), mensais ou anuais; registros com data e nota; sequências atuais e recordes. Alterar a meta recalcula as estatísticas. Atividades antigas podem ser registradas, mas datas futuras não.
- Os registros medem progresso e NÃO concedem XP. Concluir uma missão concede XP e moedas e cria a próxima ocorrência. As duas ações são explícitas para evitar XP duplicado. Registros históricos de conclusão anteriores seguem preservados, separados das novas medições de quantidade.
- Cronômetro para metas cuja unidade começa com “min” (ex.: minutos). Inicie, pause e registre a duração; confira o valor antes de salvar. Pomodoro continua na seção Foco.
- Diário em Mais: notas por rotina, filtros, favoritos, negrito e itálico com prévia. As notas não executam HTML.
- Agenda por dia, semana ou mês; lembretes únicos, diários, semanais e mensais; exportação .ics com alarmes. Datas e horários seguem o dispositivo. Um lembrete mensal no dia 31 não ocorre em meses sem esse dia.
- Novos começos: contagem de dias desde que deixou um hábito, com opção de reiniciar.
- Finanças, gatos em pixel art, personalização, modelos de tarefas e recompensas foram preservados. As imagens continuam embutidas no HTML.

## Limites desta versão web
Dados ficam neste navegador; não há conta, sincronização entre dispositivos ou Health Connect. Não limpe os dados do site sem exportar um backup. O JSON de backup inclui o organizador.

Notificações locais dependem da permissão do navegador e funcionam com o aplicativo aberto. Ao voltar ao aplicativo, ele pode exibir lembretes pendentes do dia. Para alertas em segundo plano, exporte o arquivo .ics, importe no calendário do celular e confira se os alarmes estão habilitados. Exportações repetidas podem duplicar eventos; mudanças e exclusões no NekoQuest não alteram eventos já importados. A exportação contém os lembretes ativos, não as tarefas.

## Verificação
Verificados automaticamente: inicialização, rotas e formulários, migração do estado anterior, backup do organizador, metas parciais, sequências, datas de recorrência, escape das notas, calendário .ics, XP e centavos das finanças. Sem validação visual em navegador real nesta execução; conferir no celular após atualizar, especialmente notificações e importação do calendário.
