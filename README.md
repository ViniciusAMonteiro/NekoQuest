# NekoQuest 4.2 — Uma coisa de cada vez

## O que mudou

### Início

O início mostra o gatinho, o progresso do dia e apenas a próxima missão sugerida. O botão Começar foco inicia o Pomodoro nessa missão. A lista completa e o calendário ficam na aba Missões.

A sugestão prioriza tarefas pendentes de hoje ou atrasadas, considerando prioridade, data e horário. Nos detalhes de uma tarefa, use Escolher como próximo passo para escolher manualmente.

### Missões

Há três visualizações dos mesmos registros:

- Lista: tarefas, busca, filtros, prioridades e edição.
- Calendário: missões organizadas por data.
- Recorrentes: missões diárias, semanais e mensais, com registros de constância.

A seção separada Hábitos foi removida. Os hábitos já cadastrados viram missões diárias, com os dias marcados anteriormente preservados. Eles passam a dar XP e moedas nas novas conclusões; os registros antigos não geram recompensas retroativas. Se um hábito já foi marcado hoje, sua próxima missão será amanhã.

Concluir uma missão recorrente cria a próxima data futura. Dias perdidos não se transformam em uma pilha de ocorrências atrasadas. Ocorrências futuras não podem ser concluídas antes da data. Uma missão pontual pode ser feita antecipadamente.

### Funcionalidades novas

- Captura rápida: anote título, data e categoria e ajuste os detalhes depois.
- Modelos editáveis de estudo, leitura, atividade física e revisão financeira. Nenhuma tarefa é criada até você salvar.
- Próximo passo escolhido manualmente.
- Pomodoro vinculado à missão, com tarefa e duração registradas no início da sessão.
- Ao terminar o foco, você pode concluir a missão; ela não é concluída automaticamente.
- Aviso de foco em andamento/pausado nas outras telas.
- Contas vencidas ou com vencimento nos próximos sete dias, dentro do mês financeiro selecionado.
- Cópia do orçamento do mês anterior, com confirmação antes de substituir limites existentes.

## Como atualizar

1. Exporte um backup no perfil.
2. Extraia este ZIP.
3. Envie os seis arquivos extraídos para a raiz do mesmo repositório GitHub, substituindo os anteriores.
4. Aguarde o GitHub Pages publicar. Abra o app e use Atualizar se aparecer o aviso de nova versão. Feche e reabra se necessário.

Não limpe os dados do site: tarefas, finanças e preferências continuam na chave local nekoquest_v4. A migração dos hábitos é feita uma única vez e também funciona ao restaurar backups anteriores.

O index.html contém os gatos, cenários, estilos e código. A interface não depende da pasta assets. Os arquivos adicionais mantêm a instalação e o funcionamento offline.

## Dados e funcionamento

Os dados ficam neste navegador, sem sincronização automática ou integração bancária. O backup JSON inclui tarefas e finanças. O timer recupera o tempo ao voltar ao app, mas não garante alarmes com o navegador fechado ou suspenso.

Moedas de missão são virtuais. Reabrir uma missão reverte XP e moedas, podendo deixar o saldo virtual negativo se as moedas já foram gastas. Excluir uma missão concluída preserva suas conquistas registradas.

Nas finanças, o saldo acumulado considera apenas lançamentos efetivados até o mês selecionado. Contas pendentes ficam separadas. Orçamentos consideram despesas pagas e pendentes. Metas de economia não alteram o saldo. Valores são armazenados em centavos inteiros.

A confirmação de pagamento usa a data do lançamento. É possível editá-la antes de confirmar.

## Verificação

Passaram 90 verificações de lógica e geração de telas, incluindo: migração de hábitos sem duplicação, preservação do histórico, conclusão de recorrências, seleção da próxima missão, navegação unificada, foco vinculado à tarefa, finanças e imagens incorporadas. Sintaxe dos scripts e integridade do ZIP também foram verificadas. A interface ainda precisa de conferência visual em um navegador real após a publicação.
