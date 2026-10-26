# NekoQuest 5.9.2

Aplicativo de rotina **PWA mobile-first**, em pt-BR, com ilustrações pixel art de gatinhos.

## Navegação e categorias

A barra inferior exibe **Início, Áreas e Perfil**. Os cards levam diretamente a Tarefas, Treinos, Refeições, Finanças, Hidratação, Foco e Pomodoro, Diário, Progresso, Histórico e Meus companheiros.

A área antiga **Parar de Fumar** foi retirada das telas e da navegação. As informações históricas do usuário permanecem armazenadas no esquema antigo para que dados e backups não sejam apagados automaticamente.

## Ilustrações das categorias

Os cards e destaques das áreas utilizam as ilustrações fornecidas no kit PNG original:

- `art-tasks.png` — Tarefas
- `art-workouts.png` — Treinos
- `art-food.png` — Refeições
- `art-finance.png` — Finanças
- `art-hydration.png` — Hidratação
- `art-focus.png` — Foco e Pomodoro
- `art-journal.png` — Diário

Progresso utiliza `assets/progresso.svg`; Histórico mantém seu SVG.

## Meus companheiros

Cada um dos seis personagens recebeu uma arte PNG distinta proveniente do kit do usuário:

- **Luna:** `assets/companheiros/luna.png` (derivado de `gato-dormindo.png`)
- **Mochi:** `assets/companheiros/mochi.png` (derivado de `gato-feliz.png`)
- **Mikan:** `assets/companheiros/mikan.png` (derivado de `gato-animado.png`)
- **Nori:** `assets/companheiros/nori.png` (derivado de `gato-determinado.png`)
- **Yuki:** `assets/companheiros/yuki.png` (derivado de `gato-normal.png`)
- **Sora:** `assets/companheiros/sora.png` (derivado de `gato-estudando.png`)

A seleção de um companheiro afeta a visualização do card na área **Meus companheiros**, a imagem do banner de **Início**, o card de acesso em **Áreas** e o atalho em **Perfil**. A seleção fica salva na mesma estrutura de dados local.

## Atualização segura

1. Por precaução, exporte um backup JSON em Perfil antes de grandes alterações.
2. Publique os arquivos atualizados no mesmo repositório e caminho do GitHub Pages.
3. **Não limpe os dados do navegador.** A chave `localStorage` `nekoquest_v4` e o esquema de armazenamento existente foram preservados.
4. Reabra o PWA para receber o cache `v5.9.2`; se aparecer o aviso de nova versão, toque em **Atualizar**.

Os PNGs utilizados pelos companheiros integram o cache offline após a instalação online bem-sucedida.


## NekoQuest 6.4 — refinamento visual da arte conceitual

- Home: cenário de pixel art sem texto incorporado à imagem e companheiro selecionado sobreposto dinamicamente.
- Áreas: cards em tons pastéis, ícones uniformes e navegação em três abas.
- Tarefas: seletor de dias, filtros e lista compacta com tags; criação e conclusão funcionando.
- Progresso: métricas geradas a partir de registros, sem percentuais fictícios.
- Meus Gatos: galeria única com seis gatos e seleção refletida na Home.
- Mantida a chave de armazenamento `nekoquest_v4` para não apagar a versão salva.
- Observação: esta versão foi construída sobre a interface simplificada 6.3; recursos presentes no antigo projeto original e ausentes na 6.3 não foram restaurados nesta etapa.

### Publicação

Extraia os arquivos da pasta `NekoQuest-main` e copie seu conteúdo para a raiz do repositório publicado no GitHub Pages. Na primeira atualização, feche/reabra o PWA para que o novo service worker atualize o cache.
