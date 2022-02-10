import { getRepository, ObjectID, Timestamp } from "typeorm";
import { Task } from '../db/entities/task';
import { ITask } from '../interfaces';

// Criando a classe TaskRepository que guarda as funcoes do banco, como uma API
class TaskRepository {
    //Criando a funcao de criacao de tarefas
    public async createTask(task: ITask) {
    
    // Construcao de uma nova tarefa com os dados requeridos
    const newTask = new Task();
    newTask.description = task.description;
    newTask.status = "pendente";
    newTask.priority = task.priority;
    newTask.isDeleted = false;
    
    // Criando um bloco trycatch para executar a funcao de criacao de tarefas
    try {
    const result: ITask = await getRepository(Task).save(newTask);
      return { message: 'A tarefa foi criada!', task: result.description};
    } catch (error) {
      return { message: 'Houve um erro durante a criacao da tarefa!', error: error.message, code: error.code };
    }
  }

  // Criando uma função que procura todas as tarefas que não foram deletadas
  public async findAllTasks() {
    try{
        const tasksList = await getRepository(Task).find({ isDeleted:false });
        return tasksList;
    }   catch(error){
        console.log({ message: "Houve um erro durante a busca das tarefas!", error: error.message, code: error.code });
    }
  }

  // Criando uma função que procura todas as tarefas pendentes
    public async findPendingTasks() {
      try {
        const tasksList = await getRepository(Task).find({ status: 'pendente', isDeleted: false });
        return tasksList;
      } catch (error) {
        console.log({ message: 'Houve um erro durante a busca das tarefas pendentes!', error: error.message, code: error.code });
      }
    }
    
    // Criando uma função que completa uma tarefa utilizando o id do objeto
    public async completeTask(id: ObjectID) {
  
      try {
        const result = await getRepository(Task).update(id, { status: 'finalizada' });
        if (result.affected === 1) {
          return { message: 'Tarefa completada!'}
        } else {
          return { message: 'Tarefa não encontrada!'}
        }
      } catch (error) {
        console.log({ message: 'Houve um erro durante a finalização desta tarefa!', error: error.message, code: error.code });
      }
  
    }
    
    // Criando a função que completa uma tarefa utilizando o id do objeto
    public async deleteTask(id: ObjectID) {
  
      try {
        const result = await getRepository(Task).update(id, { isDeleted: true });
  
        if (result.affected === 1) {
          return { message: 'Tarefa deletada!'}
        } else {
          return { message: 'Tarefa não encontrada!'}
        }
      } catch (error) {
        console.log({ message: 'Ocorreu um erro durante a remoção dessa taraefa!', error: error.message, code: error.code });
      }
    }
  
  }
  
  export default new TaskRepository();
