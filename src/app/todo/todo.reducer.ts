import { Acciones, AGREGAR_TODO, TOGGLE_TODO } from "./todo.actions";
import { Todo } from "./model/todo.model";

const todo1 = new Todo("Vencer a Thonos");
const todo2 = new Todo("Salvar el mundo");

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: Acciones): Todo[] {
  switch (action.type) {
    case AGREGAR_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];

    case TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        } else {
          return todoEdit;
        }
      });

    default:
      return state;
  }
}
