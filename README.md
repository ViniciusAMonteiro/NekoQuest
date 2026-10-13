# NekoQuest 4.1 — Seu dia, no seu ritmo

Aplicativo pensado para smartphones, com seis companheiros em pixel art e um gatinho dormindo no Pomodoro. Interface em português, sem dependências externas.

## Atualizar no GitHub Pages

1. No app antigo, entre no perfil e exporte um backup.
2. Extraia este ZIP.
3. Envie todos os arquivos extraídos e a pasta `assets` para a raiz do mesmo repositório. Substitua os arquivos antigos; não envie apenas o ZIP.
4. Aguarde sua publicação concluir. Abra o mesmo endereço HTTPS e atualize a página. Feche e reabra o app se necessário.
5. Não limpe os dados do navegador: isso apaga o progresso local.

O `index.html` depende de `style.css`, `core.js`, `app.js` e da pasta `assets`. Mantenha os arquivos juntos. Para testar localmente no computador, execute `python3 -m http.server 8000` nesta pasta e abra `http://localhost:8000`.

## Refinamentos da versão 4.1

- Tela inicial com resumo do dia, progresso, tempo de foco, atalhos e agenda da semana.
- Gatos com acessórios próprios: estrela, café, plantinha, lenço, livro e chapéu. Refúgios de noite, fim de tarde e chuva.
- Detalhes da missão com notas e subtarefas, horário opcional, duplicação e ação “Deixar para amanhã”.
- Missões agrupadas em atrasadas, hoje, próximas e concluídas; filtro da semana e prioridade corrigida.
- Tela Meu progresso com atividade semanal, foco e conquistas.
- Finanças com busca, filtros, despesas por categoria, valores ocultáveis e confirmação de pagamento/recebimento.
- Contraste de texto ajustado às cores escolhidas, formulários agrupados corretamente e opção de reduzir animações.
- Correção de contagem de missões reabertas e da recorrência mensal de datas como dia 31.
- Aviso de atualização quando uma nova versão já estiver carregada.

Continuam disponíveis: hábitos, calendário, Pomodoro, recompensas, orçamento mensal, metas, CSV e backup completo.

## Como os valores funcionam

Moedas de missão são virtuais, sem vínculo com as finanças. Concluir uma missão concede XP e moedas. Reabrir reverte esses valores; se você já gastou as moedas, o saldo virtual pode ficar negativo. Excluir uma missão concluída preserva as conquistas já registradas.

Todos os valores financeiros são armazenados em centavos inteiros. Você pode digitar `125,90` ou `1.250,90`.

Na confirmação rápida de pagamento/recebimento, o lançamento conserva a data cadastrada. A janela permite editar essa data antes de confirmar.

O saldo acumulado usa o saldo inicial mais as receitas efetivadas, menos as despesas efetivadas, até o fim do mês escolhido. Contas pendentes aparecem separadamente. O saldo inicial é o valor disponível antes do primeiro lançamento cadastrado.

O orçamento considera todas as despesas do mês, pagas e pendentes. Metas de economia são um acompanhamento separado: atualizar o valor guardado não cria lançamentos nem altera o saldo.

## Dados e migração

A atualização mantém a chave `nekoquest_v4` e migra as novas preferências automaticamente. A versão também reconhece os dados `nekoquest_v3` e o formato original `neko_tasks_v1` na mesma origem/navegador. Ela salva o novo progresso em `nekoquest_v4` e preserva os registros antigos. Você também pode restaurar o JSON da versão anterior pelo perfil. Se sua versão usa outro formato, ela pode não migrar automaticamente.

Exporte um backup periodicamente. Ele inclui os seus dados financeiros: guarde-o com cuidado. Não há conexão bancária, conta online ou sincronização entre aparelhos.

## Instalação e offline

No endereço HTTPS publicado, use “Instalar app” no navegador Android. No iPhone, use Compartilhar → Adicionar à Tela de Início. Os arquivos para instalação e funcionamento offline estão incluídos; o navegador precisa carregar o app online uma vez.

O Pomodoro recupera o tempo ao voltar ao aplicativo. Ele não garante um alarme quando o navegador estiver suspenso ou fechado. Apenas uma sessão é registrada ao retornar, sem criar sessões sucessivas automaticamente.

## Verificação desta versão

Sintaxe JavaScript e 70 verificações automatizadas de lógica passaram, incluindo os novos fluxos, valores ocultos, recorrências mensais, contagem sem duplicatas, finanças, migração e geração das telas. Os rótulos e agrupamentos dos seis formulários foram conferidos. Os SVGs e ícones foram inspecionados. Não foi possível executar um navegador gráfico neste ambiente; confira o layout e a instalação no aparelho depois da publicação.
