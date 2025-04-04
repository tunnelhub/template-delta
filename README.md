# Template - Fluxo de Integração Delta

## NodejS / Typescript

Este repositório é um template básico para automações do tipo "Delta". Use-o como ponto de partida para sua automação.

O fluxo de integração "Delta" extrai dados de uma ou mais fontes, processa todos os itens um a um e salva o resultado
dessa execução como uma imagem delta.  
A execução subsequente considerará apenas as alterações entre a última extração.

Ele foi projetado para máxima flexibilidade com logs individuais por entrada e economiza tempo de processamento usando
imagens delta.

### Configuração padrão:

* Ambiente: nodejs18.x
* Memória: 256mb
* Timeout: 60s

Você pode personalizar essas configurações no arquivo **tunnelhub.yml**.

### Instruções:

* Você pode instalar todas as dependências com `npm install` ou `yarn`.
* Sua lógica principal está no arquivo `src/index.ts`.
* Você pode verificar nosso teste de exemplo na pasta `__tests__`. Nossos testes são escritos usando  
  [Jest](https://www.npmjs.com/package/jest).
* Para rodar seus testes, basta executar `yarn run test`
* Para fazer o deploy da sua automação, compacte todo o projeto em um arquivo zip. Use `yarn run build` para
  transpilar  
  todo o seu código e bibliotecas usando esbuild e salvar na pasta `dist`.
* Consulte nossa [documentação](https://docs.tunnelhub.io) para mais informações.

Para fazer o deploy, execute o comando:

* `yarn run build && th deploy-automation --env ENVNAME --message "Mensagem de deploy"`

Por conveniência, foram criados alguns scripts auxiliares:

* Para ambiente DEV: `yarn run deploy:dev --message "Mensagem de deploy"`
* Para ambiente PRD: `yarn run deploy:prd --message "Mensagem de deploy"`
