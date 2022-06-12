import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { filter } from 'rxjs';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task, TaskStatus } from './task.model.ts/task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get()
    getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {
       if(Object.keys(filterDto).length){
        return this.tasksService.getTasksWithFilters(filterDto)
       }
       else 
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(
        @Body() CreateTaskDto: CreateTaskDto): Task {
        return this.tasksService.createTask(CreateTaskDto);
    }

    @Delete('/:id')
    deleteById(@Param('id') id: string): Task {
        return this.tasksService.deleteById(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status') status: TaskStatus,): Task {
        return this.tasksService.updateTaskStatus(id, status);
    }
}
