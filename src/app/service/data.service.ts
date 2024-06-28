import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { 




  }


getAllPosts()  :Observable<Post[]>{
  return this.http.get<Post[]>(this.apiUrl);
}

}
