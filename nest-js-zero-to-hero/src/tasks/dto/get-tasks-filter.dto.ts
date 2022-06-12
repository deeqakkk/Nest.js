import { TaskStatus } from "../task.model.ts/task.model";

export class GetTasksFilterDto{
    status: TaskStatus;
    search: string;
}