import TaskRepository from '../repositories/taskRepository';
import { ITask } from '../interfaces';
import { ObjectID } from 'typeorm';

<<<<<<< HEAD
// Criacao da classe Task que consome as funcoes de API do repository
class TaskService {

  // Execucao da funcao de Criacao de uma nova tarefa
=======
class TaskService {

    //
>>>>>>> 43aede0ed32f0f65cb87ed1fdb2cc9a3e833686a
  public async createTask(task: ITask) {
    const created = await TaskRepository.createTask(task);
    return created;
  }

<<<<<<< HEAD
  // Execucao da funcao que pesquisa de todas as tarefas criadas
=======
>>>>>>> 43aede0ed32f0f65cb87ed1fdb2cc9a3e833686a
  public async findAllTasks() {
    const all = await TaskRepository.findAllTasks();
    const newTaskList = this.formatDate(all!);
    return newTaskList;
  }

<<<<<<< HEAD
  // Execucao da funcao de Pesquisa de todas as tarefas criadas que estejam pendentes
=======
>>>>>>> 43aede0ed32f0f65cb87ed1fdb2cc9a3e833686a
  public async findPendingTasks() {
    const tasksList = await TaskRepository.findPendingTasks();
    const newTaskList = this.formatDate(tasksList!);

    return newTaskList
  }

<<<<<<< HEAD
  // Execucao de funcao que retorna as proximas tarefas com base na prioridade delas
=======
>>>>>>> 43aede0ed32f0f65cb87ed1fdb2cc9a3e833686a
  public async next() {
    const tasks = await TaskRepository.findPendingTasks()
    const baixas = tasks!.filter((task) => task.prioridade === 'baixa' ? true : false);
    const medias = tasks!.filter((task) => task.prioridade === 'media' ? true : false);
    const altas = tasks!.filter((task) => task.prioridade === 'alta' ? true : false);

    const tasksBaixa = await this.formatDate(baixas);
    const tasksMedia = await this.formatDate(medias);
    const tasksAlta = await this.formatDate(altas);

    return {
<<<<<<< HEAD
      alta: tasksAlta.length === 0 ? 'Nao existem tarefas de alta prioridade' : tasksAlta[0],
      media: tasksMedia.length === 0 ? 'Nao existem tarefas de media prioridade' : tasksMedia[0],
      baixa: tasksBaixa.length === 0 ? 'Nao existem tarefas de baixa prioridade' : tasksBaixa[0]
    };
  }

  // Utiliza a funcao que completa uma tarefa da lista utilizando o ID
=======
      alta: tasksAlta.length === 0 ? 'There are no tasks' : tasksAlta[0],
      media: tasksMedia.length === 0 ? 'There are no tasks' : tasksMedia[0],
      baixa: tasksBaixa.length === 0 ? 'There are no tasks' : tasksBaixa[0]
    };
  }

>>>>>>> 43aede0ed32f0f65cb87ed1fdb2cc9a3e833686a
  public async completeTask(id: ObjectID) {
    const result = await TaskRepository.completeTask(id);
    return result;
  }

<<<<<<< HEAD
  // Utiliza a funcao que deleta uma tarefa da lista com base no ID inserido
=======
>>>>>>> 43aede0ed32f0f65cb87ed1fdb2cc9a3e833686a
  public async deleteTask(id: ObjectID) {
    const result = await TaskRepository.deleteTask(id);
    return result;
  }

<<<<<<< HEAD
  // 
=======
>>>>>>> 43aede0ed32f0f65cb87ed1fdb2cc9a3e833686a
  private async formatDate(list: ITask[]) {
    const newTaskList = list.map((task: ITask) => {
      const newCreated = this.convertCreated(task.criadoEm!)
      if (newCreated === 1) {
        task.criadoEm = `${newCreated} hora`
      } else {
        task.criadoEm = `${newCreated} horas`
      }
      return task
    });
    return newTaskList;
  }

<<<<<<< HEAD
  // Cria uma funcao que converte a data da que a tarefa foi criada para ha quanto tempo ela foi criada
=======
>>>>>>> 43aede0ed32f0f65cb87ed1fdb2cc9a3e833686a
  private convertCreated(date: Date | string) {
    const taskDate: any = date
    const newDate: any = new Date();
    const elapsedTime = Math.abs(taskDate - newDate);

    const horas = Math.floor(elapsedTime / 3600000);

    return horas;
  }
}

export default new TaskService()