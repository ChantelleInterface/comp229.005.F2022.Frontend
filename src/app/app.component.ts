import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showComplete: boolean = false;

  private list = new TodoList('Chantelle', [
    new TodoItem('Study Web App Dev'),
    new TodoItem('Read'),
    new TodoItem('Extracurricular Activities'),
  ]);

  get username(): string {
    return this.list.user;
  }

  get getItems(): TodoItem[] {
    return this.list.items.filter(
      (item) => this.showComplete || !item.complete
    );
  }

  get itemCount(): number {
    return this.getItems.length;
  }

  addNewItem(newItem: string) {
    if (newItem != '') {
      this.list.addItem(newItem);
    }
  }
}
