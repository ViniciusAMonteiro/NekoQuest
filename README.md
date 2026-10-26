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

- **Luna:** `gato-dormindo.png`
- **Mochi:** `gato-feliz.png`
- **Mikan:** `gato-animado.png`
- **Nori:** `gato-determinado.png`
- **Yuki:** `gato-normal.png`
- **Sora:** `gato-estudando.png`

A seleção de um companheiro afeta a visualização do card na área **Meus companheiros**, a imagem do banner de **Início**, o card de acesso em **Áreas** e o atalho em **Perfil**. A seleção fica salva na mesma estrutura de dados local.

## Atualização segura

1. Por precaução, exporte um backup JSON em Perfil antes de grandes alterações.
2. Publique os arquivos atualizados no mesmo repositório e caminho do GitHub Pages.
3. **Não limpe os dados do navegador.** A chave `localStorage` `nekoquest_v4` e o esquema de armazenamento existente foram preservados.
4. Reabra o PWA para receber o cache `v5.9.2`; se aparecer o aviso de nova versão, toque em **Atualizar**.

Os PNGs utilizados pelos companheiros integram o cache offline após a instalação online bem-sucedida.
