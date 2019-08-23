# Microservice Listener
- Responsável por receber as posições dos itens de rastreamento
- Análisa e _interpreta o protocolo_ transformando o txt em um objeto posição
- Persiste o objeto no banco de dados _Postgres_
- Repassa o objeto via _Kafka_ para o Microservice de Análise de Notificações

### Dependências
- Node
- Kafka
- Postgres

### Util
- Ao instalar rodar o comando _yarn install_ ou _npm install_ para instalar as bibliotecas do node

