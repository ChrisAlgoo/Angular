import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Post } from './post';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dennis';
  date = new Date();
  name = 'Chris';

  posts: Post[] = [];

  ngOnInit() {
    //todo list
    this.list = [];
    this.todoValue = "";


    //api posts
    this.data_service.getAllPosts().subscribe(

      {
        next: (posts) => {
          this.posts = posts;
          console.log(posts);
        },
        error: (error) => {
          console.log(error);
        }
      }

    );

  }

  addItem() {
    if (this.todoValue !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      }
      this.list.push(newItem);
    }

    this.todoValue = "";

  }


  deleteItem(id: number) {
    this.list = this.list.filter(item => item.id !== id);
  }

  constructor(private data_service: DataService) {
    this.todoValue = "",
      this.list = []
  }

  todoValue: string;
  list: Todo[];



}
