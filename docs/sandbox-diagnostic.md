# Diagnóstico do sandbox — 2026-11-05

Falha reproduzida antes da execução de comandos de consulta, inclusive Get-Location:

windows elevated sandbox cannot reopen writable descendants under read-only carveouts directly; refusing to run unsandboxed

O mesmo acesso ao projeto e os comandos npm check/build funcionam quando a execução passa pelo fluxo de aprovação. Não é erro de Astro, React, Node ou das imagens.

O perfil da sessão declara .codex como somente leitura e também uma pasta .codex/visualizations/... como gravável. Essa sobreposição é consistente com a mensagem de descendentes graváveis dentro de exceções protegidas; não foi possível confirmar qual regra interna específica dispara a falha sem diagnóstico do executor.

Não foram alterados ACLs, modo de sandbox, autenticação ou políticas. Correção definitiva pertence à configuração/executor do Codex: revisar raízes efetivas da sessão, preferir abrir diretamente a pasta do projeto e reportar a mensagem se persistir. Não desabilitar sandbox como solução.

Documentação oficial consultada: https://learn.chatgpt.com/docs/windows/windows-sandbox (Check sandbox read access e Troubleshooting). Ela orienta verificar perfil ativo/restrições e permissões Windows; não documenta correção específica para esta mensagem.
