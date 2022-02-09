import TaskRepository from '../repositories/taskRepository';
import { ITask } from '../interfaces';
import { ObjectID } from 'typeorm';

class TaskService {

    //
  public async createTask(task: ITask) {
    const created = await TaskRepository.createTask(task);
    return created;
  }

  public async findAllTasks() {
    const all = await TaskRepository.findAllTasks();
    const newTaskList = this.formatDate(all!);
    return newTaskList;
  }

  public async findPendingTasks() {
    const tasksList = await TaskRepository.findPendingTasks();
    const newTaskList = this.formatDate(tasksList!);

    return newTaskList
  }

  public async next() {
    const tasks = await TaskRepository.findPendingTasks()
    const baixas = tasks!.filter((task) => task.prioridade === 'baixa' ? true : false);
    const medias = tasks!.filter((task) => task.prioridade === 'media' ? true : false);
    const altas = tasks!.filter((task) => task.prioridade === 'alta' ? true : false);

    const tasksBaixa = await this.formatDate(baixas);
    const tasksMedia = await this.formatDate(medias);
    const tasksAlta = await this.formatDate(altas);

    return {
      alta: tasksAlta.length === 0 ? 'There are no tasks' : tasksAlta[0],
      media: tasksMedia.length === 0 ? 'There are no tasks' : tasksMedia[0],
      baixa: tasksBaixa.length === 0 ? 'There are no tasks' : tasksBaixa[0]
    };
  }

  public async completeTask(id: ObjectID) {
    const result = await TaskRepository.completeTask(id);
    return result;
  }

  public async deleteTask(id: ObjectID) {
    const result = await TaskRepository.deleteTask(id);
    return result;
  }

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

  private convertCreated(date: Date | string) {
    const taskDate: any = date
    const newDate: any = new Date();
    const elapsedTime = Math.abs(taskDate - newDate);

    const horas = Math.floor(elapsedTime / 3600000);

    return horas;
  }
}

export default new TaskService()