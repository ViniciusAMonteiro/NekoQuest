# NekoQuest 4.3.2 — tarefas, rotinas e diário

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


## Integração financeira incremental — 4.3.1
O formulário financeiro sugere descrições do histórico local e oferece atalhos que reutilizam somente descrição e categoria. Valor, data, pagamento e recorrência continuam sob confirmação do usuário. O campo de valor mantém o teclado decimal do celular e também aceita teclado físico. Nenhuma conta, serviço remoto, dependência externa ou novo banco foi acrescentado. O formato dos dados e o backup geral permanecem compatíveis com a versão 4.3.

Cartões, anexos, biometria e criptografia do armazenamento não foram incluídos nesta atualização: exigem uma etapa própria de implementação e migração. O modo oculto existente é uma proteção visual, não criptografia.


## Relatórios e calendário — 4.3.2
Finanças tem duas novas visualizações: Relatórios e Calendário. Os relatórios cruzam intervalo de datas, tipo, categoria, situação e pesquisa textual. A comparação usa o período imediatamente anterior com igual quantidade de dias, com os mesmos filtros. Resultado efetivado é receita recebida menos despesa paga; não representa saldo acumulado.

Exportações: CSV compatível com Excel (não XLSX nativo); HTML independente, sem scripts; PDF pela opção Imprimir do navegador ao abrir o HTML. As exportações são legíveis e incluem valores completos mediante confirmação. Calendário .ics exporta somente pendências filtradas, às 9h no horário local, com alerta. Eventos exportados não são sincronizados: alterações no aplicativo não atualizam o calendário; reimportar pode duplicar eventos.

Calendário financeiro mostra datas já cadastradas, sem gerar previsões automaticamente. O esquema e os backups existentes foram preservados. Esta versão não implementa transferências entre contas, cartões, pagamento parcial de faturas, investimentos, perfis, tags, subcategorias, multicategorias, anexos, importação OFX/CSV ou proteção por senha/biometria. Estes itens permanecem planejados, não são recursos ativos. Testes de lógica e renderização simulada passaram; não foi realizada inspeção visual em navegador real nesta execução.
