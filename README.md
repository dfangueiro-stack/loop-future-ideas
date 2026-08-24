# Loop Future Ideas

Protótipo de uma plataforma interna de inovação para recolha de ideias, gestão de hackathons e acompanhamento de acessos.

## Abrir

Abrir `index.html` no browser ou publicar a pasta diretamente no GitHub Pages.

## Acesso demo

- Email: `admin@loopfuture.com`
- Password: `LoopFuture2026!`

## Inclui

- Login local com email e password temporária
- Submissão rápida de ideias
- Exploração, pesquisa e filtros
- Votos de apoio
- Hackathons com participantes e convite
- Gestão de acessos com convite copiável
- Gestão de estados
- Comentários de avaliação
- Exportação JSON
- Mensagem preparada para Teams

## Publicar no GitHub Pages

1. Criar um repositório vazio no GitHub.
2. Ligar este projeto ao repositório:

```powershell
git remote add origin https://github.com/UTILIZADOR/NOME-DO-REPOSITORIO.git
git branch -M main
git add .
git commit -m "Publicar plataforma Loop Future"
git push -u origin main
```

3. No GitHub, abrir `Settings` > `Pages`.
4. Em `Build and deployment`, escolher `Deploy from a branch`.
5. Selecionar `main` e a pasta `/root`.
6. Guardar e aguardar o link do GitHub Pages.

Nota: este protótipo usa `localStorage` e `sessionStorage`. Para produção, recomenda-se Microsoft Entra ID, base de dados e notificações reais via Microsoft Graph/Teams.

## Próximos passos

- Autenticação Microsoft Entra ID
- Base de dados PostgreSQL ou Azure SQL
- Notificações reais no Microsoft Teams
- Backoffice com permissões por perfil
- Dashboard mensal de inovação
