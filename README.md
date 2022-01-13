## Índice


* [Desafio](#desafio)
* [Requisitos](#requisitos)
* [Techs](#techs)
* [Como começar](#como-começar)


# Desafio
Seu desafio é criar uma interface de linha de comando que lhe permita manter uma lista de tarefas com atividades pendentes e finalizadas!

# Requisitos:
Os seguintes requisitos deverão ser implementados em uma interface de linha de comando. Esse CLI deverá ser controlado por meio de comandos (incluindo subcomandos e argumentos), menu de opções ou outros métodos criativos.
1. **[opcional]** Se você decidir usar comandos tenha em mente que eles deverão ser uma ação explícita, enquanto argumentos usam um traço (`-a` ou `--argumento`) e são responsáveis por modificar o comportamento de um comando. Examplo:

```bash
task <subcommand> # Aceita add, complete, delete, list e next como subcomandos

task add <description> [-p <priority>] # Adiciona uma tarefa pendente. Pode definir a prioridade da tarefa como baixa, normal ou alta com a opção -p (or --priority)

task complete <id> # Marca uma tarefa como concluída
task delete <id> # Deleta uma tarefa
task list [-a] # Mostra as tarefas pendentes. A opção -a (or --all) mostra todas as tarefas (pendentes e concluídas)
task next # Mostra a próxima tarefa de cada prioridade
```
2. **[adicionar tarefa]** : Deverá ser possível cadastrar uma nova tarefa.

    Uma tarefa terá obrigatoriamente um id único, uma descrição, uma data de criação, o status (mostra se uma tarefa está pendente ou finalizada) e uma prioridade (pode ser alta, normal ou baixa). Exemplo:
    
    ```js
    { id: 1, descricao: 'Comprar 6 ovos', criado: 2021-04-01T20:54:19.410Z, status: 'pendente', prioridade: 'alta' };
    ```
3. **[marcar tarefa como finalizada]** : Deverá ser possível alterar o status de uma tarefa para finalizada.
4. **[deletar tarefa]** : Deverá ser possível deletar uma tarefa informando o id correspondente a ela.
5. **[listar tarefas]** : Deverá ser possível listar as tarefas que possuem um status diferente de finalizada.
    
    Ao invés de mostrar a data de criação de cada tarefa, a propriedade deverá ser substituída por uma nova propriedade que mostra há quanto tempo a tarefa foi criada (1 mês). Exemplo:

    ```js
    [{ id: 1, descricao: 'Comprar 6 ovos', criado: 22 horas, status: 'pendente', prioridade: 'alta' }]
    ```
6. **[listar todas tarefas]** : Deverá ser possível listar todas tarefas, inclusive as que possuem o status finalizada.
    
    Ao invés de mostrar a data de criação de cada tarefa, a propriedade deverá ser substituída por uma nova propriedade que mostra há quanto tempo a tarefa foi criada (1 mês).
7. **[listar próximas tarefas]** : Deverá ser possível listar uma tarefa de cada prioridade, ou seja, uma tarefa de prioridade alta, uma tarefa de prioridade normal e uma tarefa de prioridade baixa, caso existam. A tarefa listada de cada prioridade será a mais antiga do seu grupo.

    Ao invés de mostrar a data de criação de cada tarefa, a propriedade deverá ser substituída por uma nova propriedade que mostra há quanto tempo a tarefa foi criada (1 mês).
8. **[arquivo local ou bancos de dados]** : Deverá haver persistência dos dados para que eles não sejam perdidos após o fechamento da interface de linha de comando.

# Techs: 
- Typescript
- Nodejs

## JavaScript

[Commander.js](https://github.com/tj/commander.js/) : ferramentas para criar uma interface de linha de comando que permite o uso de comandos, argumentos e flags.

[Inquirer.js](https://github.com/SBoudrias/Inquirer.js/) : permite criar interfaces de linha de comando mais interativas. Lhe permitem fazer perguntas, mostrar checklists e esconder o input de senhas.

[Chalk](https://github.com/chalk/chalk) : permite a estilização de interfaces de linha de comando.

[TTY Table](https://github.com/tecfu/tty-table) : facilita a criação e exibição de tabelas em interfaces de linha de comando.

Outras opções: Vorpal.js, Caporal.js, Yargs.js, Glue Gun, Seeli.js, Figlet.js, Oclif, Meow, Color.js, CLI Table 3, Progressbar, Clui.js, Enquirer.

# Como começar:
1 - Use esse template (clicando em *Use this template*) ou faça um fork deste repositório com o código inicial<br>
2 - Leia as instruções no README.md<br>
3 - Comece a codar! Sinta-se livre para utilizar o fluxo de trabalho que ache mais confortável<br>


