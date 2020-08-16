import { User } from './user';

export interface Task {
    id?: string;
    taskTitle?: string;
    taskUser: User;
}