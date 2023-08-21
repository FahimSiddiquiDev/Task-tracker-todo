
export interface Task {
    id: number;
    done: boolean;
    deadline: string;
    createdAt: number;
    lastModifiedAt: number;
    userId: number;
}

export type UpdateTaskInput = {
    done: boolean;
    id: number;
    userId: number;
};

export type DeleteTaskInput = {
    id: number;
    userId: number;
};

export type CreateTaskInput = {
    title: string;
    deadline: string;
    userId: number;
};
