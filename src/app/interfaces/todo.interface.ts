export interface Todo {
  id: number;
  description: string;
  status: TodoStatus;
  createdAt: string | Date;
}

export type TodoStatus = 'empty' | 'in-progress' | 'completed';
