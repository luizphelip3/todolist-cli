import 'reflect-metadata';
import TaskService from './services/taskServices';
import { Command } from 'commander'
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
program
.option('-a, --all', 'mostra todas as tarefas')
.option('-p, --priority <priority>', 'define a prioridade da tarefa').parse(argv);

const options = program.opts();

// Primeiro comando para adicionar
program.command('add <description>').description('Crie uma nova tarefa').action(async (description: string) => {
  // Verifica a função de prioridade
  if (options.priority) {
    const priority = options.priority;
    const isValid = validate(priority);

    // Verifica o nível de prioridade e se o usuário inseriu o valor de prioridade
    if (isValid) {
      const newTask = await TaskService.createTask({description, priority})
      console.log(isValid);
      console.log(newTask);
    } else {
      console.log('A propriedade deve ser baixa ou media ou alta!')
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