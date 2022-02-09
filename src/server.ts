import 'reflect-metadata';
import TaskService from './services/taskServices';
<<<<<<< HEAD
import { Command } from 'commander'
=======
import { Command } from 'commander';
>>>>>>> 43aede0ed32f0f65cb87ed1fdb2cc9a3e833686a
import { connection } from './db/connect';

// Importa o validador de prioridade da classe fieldValidator
import validate from './middlewares/fieldValidator';

// Executa o import do connect pra conectar ao banco
import './db/connect';
import { argv } from 'process';

// Insere um comando à partir dos inserts do usuário
const command = new Command()
const program = command.version('0.0.1')

// Menu de opções do programa
<<<<<<< HEAD
program
.option('-a, --all', 'mostra todas as tarefas')
.option('-p, --priority <priority>', 'define a prioridade da tarefa').parse(argv);

const options = program.opts();

// Primeiro comando para adicionar
program.command('add <description>').description('Crie uma nova tarefa')
.command('-p, --priority <priority>', 'define a prioridade da tarefa').action(async (descricao: string) => {
  // Verifica a função de prioridade
  if (options.priority) {
    const prioridade = options.priority;
    const isValid = validate(prioridade);
    console.log(prioridade);
=======
program.option('-a, --all', 'show all tasks').option('-p, --priority <priority>', 'set task proprity').parse(argv);

const options = program.opts();

// Console log de teste
program.command('log <arg>').description('loga algo').action(() => {
  console.log('algo');
});

// Primeiro comando para adicionar
program.command('add <description>').description('Crie uma nova tarefa').action(async (descricao: string) => {
    // Verifica a função de prioridade
  if (options.prioridade) {
    const prioridade = options.prioridade;
    const isValid = validate(prioridade);
>>>>>>> 43aede0ed32f0f65cb87ed1fdb2cc9a3e833686a

    // Verifica o nível de prioridade e se o usuário inseriu o valor de prioridade
    if (isValid) {
      const newTask = await TaskService.createTask({descricao, prioridade})
<<<<<<< HEAD
      console.log(isValid);
      console.log(newTask);
    } else {
      console.log('A propriedade deve ser baixa ou media ou alta!')
=======
      console.log(newTask);
    } else {
      console.log('A propriedae deve ser baixa ou media ou alta!')
>>>>>>> 43aede0ed32f0f65cb87ed1fdb2cc9a3e833686a
    }
  } else {
    console.log('Está faltando o valor de prioridade da tarefa, use a opção -p para passar a prioridade');
  }
})

// Comando para listar todas as tarefas prindentes
program.command('list').description('Mostra todas as tarefas pendentes').action(async () => {
    // Verifica a funcao de listagem
  if (options.all) {
    const tasksList = await TaskService.findAllTasks();
    console.log('all', tasksList);
  } else {
    const tasksList = await TaskService.findPendingTasks()
    console.log(tasksList);
  }
});

// Comando para mostrar a próxima tarefa de cada prioridade
program.command('next').description('Mostra a próxima tarefa de cada prioridade').action(async () => {
  const nextTasks = await TaskService.next();
  console.log(nextTasks);
});

// Comando para alterar o status de uma tarefa com base no id entregue
program.command('complete <id>').description('Muda o status da tarefa para completo').action(async (id) => {
  const result = await TaskService.completeTask(id);
  console.log(result);
})

// Comnado para deletar uma tarefa com base no id entregue
program.command('delete <id>').description('Delete uma tarefa').action(async (id) => {
  const result = await TaskService.deleteTask(id);
  console.log(result)
});

program.command('test').description('Teste novas funções').action(async (teste: string) => {
  console.log('teste')
});

// De acordo com a documentação, essa função executa antes do banco de dados iniciar e por isso deve ter um tempo setado
setTimeout(async () => {
  program.parse(process.argv);
}, 1000*1)


setTimeout(async () => {
  connection.then((connect) => connect.close());
}, 1000*1)