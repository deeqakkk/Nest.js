import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { Task } from './task.model.ts/task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(
       @Body()  CreateTaskDto: CreateTaskDto): Task { 
       return this.tasksService.createTask(CreateTaskDto);
    }

    @Delete('/:id')
    deleteById(@Param('id') id: string): Task {
        return this.tasksService.deleteById(id);
    }
}
