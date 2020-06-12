<h1 align="center">
Simulador de Processos
</h1>

#### Nomes: Renan Marcos Andreolla, Heitor Santos, Fernando Lise, Wesley Santos e Lucas Paludo.
#### Professor: Marcos A. Lucas.
#### Curso: Ciência da Computação.
#### Disciplina: Sistemas Operacionais.
#### Instituição: URI Erechim-RS
---
<h3 align="center">
    <a href="https://simulatorprocess.herokuapp.com/"> Acessar demonstração
    </a>
</h3>

### Índice
- [Sobre](#-sobre)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Biaxar o Projeto](#-como-baixar-o-projeto)
---

### Sobre
 O projeto **Simulador de Processos** é um trabalho para a disciplina de sistemas operacionais da instituição URI Erechim, do curso de Ciência da Computação 2020. Esse trabalho abrange os conhecimentos e informações aprendidas na disciplina de *Sistemas Operacionais* e trata-se de uma implementação didática de uma técnica e/ou tecnologia, em forma de sistema original, para que possa servir como base de estudo para futuros estudantes de sistemas operacionais. 

 O trabalho apresenta um simulador de processos computacionais, onde é possível simular a execução de um programa, duplicar essa execução e finalizá-la, além de algumas explicações didáticas sobre os conteúdos que se relacionam a execução de um processo.

 A interface inicial apresenta algumas imagens para a recepção do usuário e uma navegação superior onde a interface geral se encontra na aba *HOME*, sendo possível ir para as demais páginas do site.

 A página do simulador se encontra na aba *SIMULADOR*, onde apresenta uma interface que permite o usuário simular a inicialização de um programa, consequentemente iniciando um processo.

 A página onde se encontram as explicações e conteúdos para compreender melhor o simulador se encontram na aba *SOBRE*, onde existem conceitos que facilitam o entendimento do usuário.

---

 #### Tecnologias Utilizadas
 O trabalho foi desenvolvido utilizando as seguintes tecnologias

 - [HTML5](https://html.com/)
 - [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
 - [JavaScript](https://www.javascript.com/)
 - [jQuery](https://jquery.com/)
 - [Bootstrap](https://getbootstrap.com/)
 - [NodeJS](https://nodejs.org/en/download/)

 ---

 #### Como baixar o projeto
Para poder executar o projeto em máquina local são necessários alguns passos
- Fazer o download do [NodeJS](https://nodejs.org/en/download/)
- Baixar um editor de códigos para poder fazer modificações: recomendado [Visual Studio Code](https://code.visualstudio.com/download)

Após, dentro da pasta do proejto, ao lado superior direito, o botão **clone or download** possui um link que será necessário para fazer o clone do projeto. Esse link estará defninido nas linhas abaixo para o download.

Abrir o prompt de comando e seguir os seguintes passos:

 ```bash
 # Clonar o repositório
 $ git clone https://github.com/renanandreola/SimulatorProcess

# Entrar no diretório
 $ cd SimulatorProcess

# Instalar as dependências
 $ npm install
 ```
 Após isso, será necessário fazer o download de algumas bibliotecas que são fundamentais para rodar o proejto.
 
 Ainda dentro do promp de comando na pasta do projeto e após os comandos mencionados anteriormente executar:

```bash
# Instalar as bibliotecas e pacotes do proejto
$ npm install --save npm

$ npm install --save express

$ npm install --save body-parser

$ npm install --save jquery

$ npm install --save mongoose

$ npm install --save nodemon

$ npm install --save nunjucks

$ npm install --save restify

$ npm install --save useful-nunjucks-filters
```
Após executar os comandos mencionados acima, para fazer a inicialização do projeto para rodar na máquina local basta executar o comando: 
```bash
$ npm run dev
```
Após inicializar o projeto, basta acessar a url: 
- http://localhost:3000/

Para parar a execução do projeto, dentro do promp de comando, apertar as teclas **CTRL + C**, e a após apertar a tecla **S**, para finalizar a execução.

---
Fontes bibliográficas: 
- https://www.gsigma.ufsc.br/~popov/aulas/so1/cap9so.html
- http://www.ic.uff.br/~boeres/slidesSOI/SOSI-aula5-memoriavirtual-completo.pdf
- http://roberto.cfw.ufsm.br/images/uploads/sistemas_operacionais.pdf
- http://proedu.rnp.br/bitstream/handle/123456789/711/Sistemas_Operacionais_web.pdf?sequence=3&isAllowed=y
- https://canaltech.com.br/hardware/o-que-e-cpu/
- https://www.techtudo.com.br/noticias/noticia/2015/04/o-que-e-cpu-entenda-qual-e-o-significado-da-sigla-e-sua-importancia.html
- https://tecnoblog.net/303335/o-que-e-cpu/
- https://blog.runrun.it/gerenciador-de-tarefas-para-que-serve-um/
- https://stackoverflow.com/questions/1984186/what-is-private-bytes-virtual-bytes-working-set
- https://superuser.com/questions/618686/private-bytes-vs-working-set-in-process-explorer
- https://www.tecmundo.com.br/memoria/3197-o-que-sao-processos-de-um-sistema-operacional-e-por-que-e-importante-saber.htm
- http://ctd.ifsp.edu.br/~marcio.andrey/images/Introducao-Processo.pdf
- https://www.gsigma.ufsc.br/~popov/aulas/so1/cap9so.html
- http://rossano.pro.br/fatec/cursos/soi/memoria_virtual_fatec.pdf


Desenvolvido por Renan Marcos Andreolla, Heitor Santos, Fernando Lise, Wesley Santos e Lucas Paludo
  