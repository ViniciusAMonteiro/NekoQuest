# NekoQuest 4.5.0 — tarefas, rotinas e diário

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


## Correção mobile — 4.3.3
As seis seções financeiras agora ficam em duas linhas de três botões, evitando o alargamento da página. Cartões, colunas e valores longos respeitam a largura disponível. Não houve mudança no formato dos dados, cálculos ou recursos. O service worker foi versionado para distribuir o layout corrigido. Após substituir os arquivos na mesma hospedagem, reabra o aplicativo e toque em Atualizar caso solicitado. Não apague os dados do site. Testes de lógica e estrutura passaram; o ambiente não possui navegador instalado para validação visual real.


## Refinamento — 4.3.4
- Atalhos separados para receita e despesa no resumo financeiro.
- Painel de despesas vencidas e dos próximos sete dias, incluindo meses anteriores. Não depende do mês selecionado e informa isso na tela.
- Filtros de vencidos e efetivados, contagem dos resultados e opção de limpar busca/filtros.
- Pesquisa por descrição ou categoria sem exigir acentos.
- Atalhos de relatório: hoje, últimos 30 dias e todo o histórico. Preservam os demais filtros.
- Retorno ao mês atual; textos e botões financeiros mais legíveis; foco visível ao usar teclado; respeito à preferência do dispositivo por movimento reduzido.
O armazenamento, os dados financeiros e as outras funcionalidades mantêm o mesmo formato. Testes de regressão e casos novos passaram. Não houve inspeção visual em navegador real nesta execução. Faça backup antes de substituir os seis arquivos na mesma hospedagem; reabra e use Atualizar quando oferecido, sem limpar dados do site.


## Respirar — 4.4.0
Nova seção em Mais → Respirar, também com atalho no início. Mantém as cinco abas inferiores e os recursos anteriores.

- Progresso: ponto de partida, média anterior de cigarros, preço e quantidade por maço, motivo pessoal e plano para gatilhos.
- Contadores: tempo desde o último cigarro registrado (ou início), cigarros evitados estimados e economia bruta estimada. Desconta cigarros registrados após o início; não calcula custos de tratamentos, não altera Finanças e não concede moedas ou XP.
- Diário: vontades (intensidade, gatilho, estratégia, se ajudou), cigarros, vape, reposição de nicotina e reflexões. Permite registros passados, edição, exclusão e filtros. Mostra os 100 registros mais recentes; o backup contém todos.
- Botão Estou com vontade agora: pausa opcional de três minutos com estratégias simples; o tempo usa relógio real e não requer rede. A pausa não garante o desaparecimento da vontade.
- Marcos de 1 a 365 dias baseados na sequência atual de cigarros; registrar um cigarro recalcula a sequência sem apagar o diário. Vape e reposição são registros separados e não significam abstinência de nicotina.
- Registro de produtos por quantidade e unidade informadas. Não prescreve doses, equivalências, desmame ou troca de medicamentos; não recomenda vape como tratamento.
- Dados locais dentro do backup geral existente. A opção de apagar Respirar remove apenas o perfil e diário desta seção. Dados não são criptografados; compartilhe backups com cuidado.

Orientações de apoio consultadas: INCA, Como parar de fumar (https://www.gov.br/inca/pt-br/assuntos/causas-e-prevencao-do-cancer/tabagismo/como-parar-de-fumar) e Ministério da Saúde, Sou Paciente — Tabagismo (https://linhasdecuidado.saude.gov.br/portal/tabagismo/sou-paciente/). O aplicativo não é afiliado ao Kwit e não afirma validação pela OMS, eficácia clínica própria ou aumento de chance de sucesso. Tratamento e ajustes de reposição devem ser discutidos com profissional de saúde. Consulte a UBS sobre tratamento pelo SUS.

Verificação: regressões anteriores e testes novos de migração, backup, estimativas, cigarros registrados, separação de reposição, data futura, formulários e navegação passaram. Nenhuma validação visual em navegador real foi possível nesta execução. Faça backup e substitua os seis arquivos na mesma hospedagem, mantendo os dados do site.


## Hidratação — 4.5.0
Acesse no início ou em Mais → Hidratação. Inclui gatinho em recipiente que se preenche visualmente, meta manual, atalhos de 150/250/500 mL com desfazer, volume personalizado, data/hora passada, notas, edição e exclusão. Histórico de sete dias, navegação por data e sequência de dias com registros. Meta e desenho acompanham apenas água. Outras bebidas (chá, café, leite, suco e outra) são registradas em volume separado, sem coeficientes ou alegação de hidratação exata.

Nenhuma meta é pré-ativada ou calculada por peso, clima ou idade. Alterar a meta vale desde o dia atual; metas anteriores permanecem na série histórica. Limites de formulário são técnicos, não recomendações de consumo. Não há prêmio por excesso de água, integração com Apple Health/Samsung Health, relógios ou sincronização na nuvem.

Lembretes diários configurados pelo usuário usam a agenda existente, sem duplicar horários da própria seção. Podem ser pausados/excluídos em Hidratação e gerenciados na agenda geral. Dependem de app aberto e permissão de notificações; avisos de hidratação atrasados em mais de 15 minutos são ignorados. Exportação .ics somente dos horários ativos desta seção permite importação no calendário do celular; não existe sincronização e reimportar pode duplicar eventos. Escolha horários em que está acordado.

Todos os registros entram no backup geral. Respirar e demais seções foram preservados. Testes passaram para volumes, separação das bebidas, metas por data, histórico, sequência, backup, entradas inválidas, lembretes duplicados e navegação. Não houve inspeção visual em navegador real nesta execução.
