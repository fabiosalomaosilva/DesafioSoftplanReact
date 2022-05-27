# Desafio Softplan - Frontend React

Desafio Softplan para criação de aplicação react.js em javascript para realizar a integração com a API Graph Countries.

#Considerações

App criado com o create-react-app como base, biblioteca react-router 6 para roteamento e navegação e implementação do Redux com gerenciador do estado da aplicação.

Como não há dados suficientes na biblioteca GraphQL utilizada em substituição à API Graph Countries, não se pode tentar substituir o redux pelo Local state management do Apollo Client.

API Graph Countries está indisponível. Por isso foi utilizada a API https://countries.trevorblades.com em GraphQL, a https://restcountries.com em REST e a  https://forward-reverse-geocoding.p.rapidapi.com/v1/search em RES.

Foi criado uma página disponibilizando lista de cards com as principais informações dos países, além de página de detalhes com mais informações.

A página de detalhes possui Mapa do país e ponto fixo indicando a latitude e longitude oficial. Além disso, foi disponibilizado a distância dos 5 países mais próximos, considerando os pontos de latitude e longitude oficiais, disponibilizados ppelas APIs, além da marcação dos pontos no mapa.

Foi implantado chat em tempo real com as pessoas que estão na aplicação. A conversas são individuais. Não foi implementado Chat em grupo.

# Endereços dos serviços publicados

- Projeto publicado em Azure Web App com o seguinte endereço (acessível por clientes Rest):
 
https://desafiosoftplanapinetcore.azurewebsites.net
 
 
- O cliente Frontend (com o chat em funcionamento) está disponível em:
 
http://desafiosoftplan.salomaovogth.com.br

- API possui endpoint via HTTP GET que retorna os links de repositórios:

https://desafiosoftplanapinetcore.azurewebsites.net/api/v1/RepositoriosGit


Para utilização em outras implantações, as variáveis de ambiente deverão ser preenchidas após a criação de arquivo .env na raiz do projeto.

- Criar arquivo .env na raiz do projeto:
  
      $touch .env
     
- Preencher com as seguintes variáveis de ambiente

      REACT_APP_GOOGLE_CLIENT_ID=
      REACT_APP_RAPIDD_API_KEY=
      REACT_APP_RAPIDD_API_USERNAME=tester@teste.com
      REACT_APP_RAPIDD_API_PASSWORD=teste123
