# NekoQuest 4.1.1 — Correção das imagens

Os gatos, os três cenários, os estilos e o código estão incorporados no próprio index.html. A interface não precisa mais buscar arquivos na pasta assets. O HTML também pode ser aberto sozinho para visualizar e usar o planner.

## Atualizar o site

1. Extraia este ZIP.
2. Envie todos os seis arquivos extraídos para a raiz do mesmo repositório, substituindo os arquivos de mesmo nome. Não envie somente o ZIP.
3. Aguarde a publicação do GitHub Pages.
4. Abra seu site e, se aparecer a faixa “Uma atualização está pronta”, toque em Atualizar. Caso ainda veja a versão antiga, feche e reabra o aplicativo. No computador, Ctrl+Shift+R força a atualização da página.

Não é necessário limpar o armazenamento do site. As tarefas e finanças continuam na mesma chave local. Exporte um backup pelo perfil antes de alterar dados do navegador.

## Arquivos

- index.html: aplicativo completo, com imagens incorporadas.
- service-worker.js: atualização de cache e funcionamento offline.
- manifest.json: informações de instalação.
- cat-192.png e cat-512.png: ícones do app instalado.
- README.md: estas instruções.

Para instalar como aplicativo, mantenha os arquivos juntos em um endereço HTTPS. O navegador precisa abrir o site online uma vez para preparar o modo offline.

Todos os recursos da versão 4.1 foram preservados: tarefas, subtarefas, hábitos, calendário, Pomodoro, recompensas, finanças, metas, perfil e backup. Os dados ficam salvos no navegador, sem sincronização entre dispositivos.

## Verificação

Passaram os 70 testes de regressão de lógica e as verificações específicas dos sete gatos incorporados, três cenários, ausência de solicitações a assets, instalação do cache sem arquivos opcionais e recuperação do HTML offline. O site publicado não foi inspecionado, pois o endereço não foi fornecido.
