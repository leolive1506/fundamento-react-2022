# Render Patterns
## SSR (Server side render)
- Servidor tem back + front
    - Devolve todo html / css / js pronto

## SPA (Single page application)
- Backend faz responsável pela logica e nao construção da tela
    - Retorna os dados
    - As informações são retornadas em JSON
    - Aplicação com **frontend** responsável por obter os dados em JSON 
        - Converte esses dados para HTML / CSS / JS

# Bundlers & Compilers
- Browsers nem sempre suportam versão mais atualizada do JS
    - Criada ferramentas para converter código em js moderno para versões específicas que rodam em ambientes específicas

## Compilers
- São Compiladores de código
    - Convertem de um formato para outro
        - Nâo suporta algumas funcionalidades, convertido para um versão que tenha suporte
    - Ex: Babel

## Bundlers
- Separar o código em diferentes arquivos não era algo nativo nos browsers
    - Era pego todos arquivos e comprido em um único arquivo JS
    - Para solução era utliziado Bundlers como webpack
        - ### Webpack X Vite
            - Vite não é necessário bundlers
            - Utiliza por demanda de arquivo com nativo ES modules
            - Já faz compiler automático, não sendo necessário o babel para executar, tem seu próprio compilador interno

- Hoje já há suporte de ES modules

# Estrutura inicial
- DOM (Document Object Model)
    - Representação do html através do js
    - Utilizado reactDOM para react funcionar ambiente web

- main.jsx
    - Importa dom e seleciona elemento raiz onde deverá renderizar nosso app

# Componente
- Parte qeu pode ser repetida, reutilizavel e mais fácil a manutenção
- No react, component é uma função que retorna HTML

# Propriedades
- Informações passada para componente

# CSS Module
- Vite tem suporte por padrão
- Diferente de import padrão como e ja estaria funcionando
```js
import './styles.css'
```
- Importar
```js
import styles from './styles.css'
```

# Dicas geral
- Font mais detalhadas
```css
-webkit-font-smoothing: antialiased;
```
# Default exports vs named exports
- Default exports pode redefinir o nome do componente na hora de importar

