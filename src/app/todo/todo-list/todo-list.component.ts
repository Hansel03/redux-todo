import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducer";
import { Todo } from "../model/todo.model";
import { filtrosValidos } from "src/app/filter/filter.actions";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styles: []
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];
  public filtro: filtrosValidos;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filtro = state.filtro;
    });
  }
}
