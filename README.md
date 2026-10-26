# NekoQuest 5.9.1

Aplicativo de rotina **PWA mobile-first**, em pt-BR, com ilustrações de gatinhos em pixel art.

## Navegação e categorias

A barra inferior contém **Início, Áreas e Perfil**. Os cards de Início e Áreas levam diretamente a Tarefas, Treinos, Refeições, Finanças, Parar de Fumar, Hidratação, Foco e Pomodoro, Diário, Progresso, Histórico e Meus companheiros.

### Artes originais das categorias

O app usa os seguintes PNGs na raiz do projeto, tanto nos cards quanto no destaque visual de cada categoria:

- `art-tasks.png` — Tarefas
- `art-workouts.png` — Treinos
- `art-food.png` — Refeições
- `art-finance.png` — Finanças
- `art-breathe.png` — Parar de Fumar
- `art-hydration.png` — Hidratação
- `art-focus.png` — Foco e Pomodoro
- `art-journal.png` — Diário

O card Progresso usa `assets/progresso.svg`. Histórico e Meus companheiros mantêm seus assets SVG. As artes PNG já incluem o título da categoria, por isso o layout não imprime o mesmo nome por cima ou abaixo da imagem.

## Atualização segura

1. Antes de atualizar, exporte um backup JSON em Perfil.
2. Faça a publicação no mesmo repositório e caminho do GitHub Pages.
3. **Não limpe os dados do navegador.** O aplicativo continua utilizando a chave `localStorage` `nekoquest_v4` e seu esquema de dados existente.
4. Reabra o PWA para receber o `service-worker.js` v5.9.1; caso necessário, use a opção de atualização do próprio aplicativo.

Todos os PNGs das categorias e os SVGs correspondentes ficam em cache após a instalação online bem-sucedida, para uso offline.
