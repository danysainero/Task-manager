import { Task } from './task';
import { User } from './user';

export interface Card {
    id?: string;
    cardTitle?: string;
    cardTasks?: Task[];
    cardUser: User;
}