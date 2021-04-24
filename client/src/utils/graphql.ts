import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query {
    getTasks {
      id
      taskName
      completed
      category {
        categoryName
      }
    }
  }
`;

export const GET_TASK = gql`
  query getTask($id: Int!) {
    getTask(id: $id) {
      id
      taskName
      completed
      category {
        id
        categoryName
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation createTask($newTask: TaskInput!) {
    createTask(newTaskData: $newTask) {
      id
      taskName
      completed
      notes
      category_id
    }
  }
`;

export const TOGGLE_COMPLETION = gql`
  mutation toggleCompletion($id: Int!) {
    toggleCompletion(id: $id)
  }
`;

export const GET_CATEGORIES = gql`
  query getCategories {
    getCategories {
      id
      categoryName
      tasks {
        taskName
      }
    }
  }
`;

export interface Task {
  id: number;
  taskName: string;
  completed: boolean;
  category: {
    categoryName: string;
  };
}

export interface TaskData {
  getTasks: Task[];
}

export interface Category {
  id: number;
  categoryName: string;
  tasks: [Task];
}

export interface CategoryData {
  getCategories: Category[];
}
