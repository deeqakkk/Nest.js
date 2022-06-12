import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model.ts/task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-tasks.dto';
@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }
    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }
   
    createTask(CreateTaskDto: CreateTaskDto): Task {
        // here we extracted the specific properties from the CreateTaskDto
        const { title, description } = CreateTaskDto;
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        };
        this.tasks.push(task);
        return task;
    }
   
  deleteById(id: string): Task {
    const task = this.getTaskById(id);
    this.tasks = this.tasks.filter(task => task.id !== id);

   return task;
}
}