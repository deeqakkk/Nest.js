import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model.ts/task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
        const { status, search } = filterDto;
        let tasks = this.getAllTasks();

        if (status) {
            tasks = tasks.filter((task) => task.status === status);
        }
        if (search) {
            tasks = tasks.filter(
                (task) =>
                    task.title.includes(search) || task.description.includes(search),
            );
        }
        return tasks;
    }

    getTaskById(id: string): Task {
        const found = this.tasks.find((task) => task.id === id);
        if (!found) {
            throw new NotFoundException('Task with ID "${id}" not found');
        }
        return found;
    }

    createTask(CreateTaskDto: CreateTaskDto): Task {
        // here we extracted the specific properties from the CreateTaskDto
        const { title, description } = CreateTaskDto;
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };
        this.tasks.push(task);
        return task;
    }

    deleteById(id: string): Task {
        const task = this.getTaskById(id);

        this.tasks = this.tasks.filter((task) => task.id !== id);

        return task;
    }

    updateTaskStatus(id: string, status: TaskStatus): Task {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }
}
