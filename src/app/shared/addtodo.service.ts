import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AddTodo } from './addtodo.model';

@Injectable({
  providedIn: 'root'
})
export class AddTodoService {
  formData: AddTodo;

  constructor(private firestore: AngularFirestore) { }

  getTodo() {
    return this.firestore.collection('assignment-todo').snapshotChanges();
  }
}

