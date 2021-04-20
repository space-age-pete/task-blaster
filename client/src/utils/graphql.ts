import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query getem {
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
