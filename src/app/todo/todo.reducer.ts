import { Acciones, AGREGAR_TODO } from "./todo.actions";
import { Todo } from "./model/todo.model";

const estadoInicial: Todo[] = [];

export function todoReducer(state = estadoInicial, action: Acciones): Todo[] {
  switch (action.type) {
    case AGREGAR_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];

    default:
      return state;
  }
}
