import { Card } from './card';

export interface Board {
    id?: string;
    boardTitle?: string;
    boardDescription?: string;
    boardCreatedDate?: string;
    boardUser?: string;
    boardCards: Card[];
}