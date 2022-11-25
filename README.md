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

# Iteração react
- Utilizado map para percorrer e mostrar items na tela
- forEach
    - Percorre um array porém não tem nenhum retorno


# Programação imperativa vs Programação declarativa
## Programação imperativa
- O que deve ser feito passo-a-passo
### Ex receita de bolo
- Ligar forno
- Abrir porta forno
## Programação declarativa
- Quais as condições para eu ter o resultado final

### Ex receita de bolo
- Forno precisa estar ligado
- Forno precisa estar aberto

# Key no react
## 3 momentos em que um componente é renderizado no react
1. Quando o estado altera
2. Quando a propriedade do componente altera
3. Quando um componente pai renderiza novamente

- Ao adicionar a key
    - Ele identifica os componente que ja tem
    - Compara o que ja tava na tela e o que não tava

## Porque não pode usar o indice do array
```js
// primerio estado com os index (0, 1, 2, 3)
const posts = [1, 2, 3, 4];

// por algum motivo altera a ordem no array
const posts = [1, 4, 3, 2];
// mesmo alterando ordem no array, os index permanecem os mesmo
```
- Ao comparar os index sendo o mesmo e o conteudo diferente renderiza tudo novamente pensando ter mudado algo no array
    - Enquanto se fosse um id, mudava apenas os itens que haviam mudado

# Imutabilidade
- Não altera o valor de uma variavel na memória
    - Cria um novo valor, um novo espaço na memória
    - Para react criar novo valor é mais rápido do que alterar o que mudou no ja existente

# Closures no React
- Mesmo chamando setLike duas vezes, o resultado final é 1
```js
function Comment() {
    const [like, setLike] = useState(0);
    function addLike() {
        setLike(like + 1)
        console.log(like)
        setLike(like + 1)
    }
}
```
- React cria um novo contexto com uma nova versão do componente onde **like** vale 1
    - Porém no contexto anterior, like continua sendo zero
        - Pois setLike esta executando no mesmo contexto da chamada anterior
- Forma de resolver esse problema
    - Armazenar em uma veriavel o valor
    - Ou Pegar o valor mais recente disponivel no setLike
        - Sempre atualizar uma informação que depende do valor anterior, sempre bom utilizar esse padrão de função
```js
function Comment() {
    const [like, setLike] = useState(0);
    function addLike() {
        setLike(state => state + 1)
        setLike(state => state + 1)
    }
}
```

# Dicas geral
## onCLick
- Espera uma função e não execução de uma
    - Ao tenta passar execução entre em loop, Pois
        - Assim que montar o componente é executado a função 
        - que mudar um estado
        - Por padrão, ao mudar um estado, react remonta todo componente
        - Gerando um ciclo infinito
```js
// passando função
<button onClick={handleLikeComment}></button>
<button onClick={setLinkeComment(likeComment + 1)}></button>
```
- Font mais detalhadas
```css
-webkit-font-smoothing: antialiased;
```
# Default exports vs named exports
- Default exports pode redefinir o nome do componente na hora de importar
