import { getRepository, ObjectID, Timestamp } from "typeorm";
import { Task } from '../db/entities/task';
import { ITask } from '../interfaces';

// Criando a classe TaskRepository que guarda as funcoes do banco
class TaskRepository {
    //Criando a funcao de criacao de tarefas
    public async createTask(task: ITask) {
    
    // Construcao de uma nova tarefa com os dados requeridos
    const newTask = new Task();
    newTask.descricao = task.descricao;
    newTask.status = 'pendente';
    newTask.prioridade = task.prioridade;
    newTask.isDeleted = false;
    
    // Criando um bloco trycatch para executar a funcao de criacao de tarefas
    try {
    
    const result: ITask = await getRepository(Task).save(newTask);
      return { message: 'A tarefa foi criada!', task: result.descricao};
    } catch (error) {
      return { message: 'Houve um erro durante a criacao da tarefa!', error: error.message, code: error.code };
    }
  }

  public async findAllTasks() {
    try{
        const tasksList = await getRepository(Task).find({ isDeleted:false });
        return tasksList;
    }   catch(error){
        console.log({ message: "A busca falhou", error: error.message, code: error.code });
    }

  }

}