import { Acciones, AGREGAR_TODO } from "./todo.actions";
import { Todo } from "./model/todo.model";

const todo1 = new Todo("Vencer a Thonos");
const todo2 = new Todo("Salvar el mundo");

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: Acciones): Todo[] {
  switch (action.type) {
    case AGREGAR_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];

    default:
      return state;
  }
}
