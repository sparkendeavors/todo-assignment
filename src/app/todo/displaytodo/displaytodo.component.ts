import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { AddTodoService } from 'src/app/shared/addtodo.service';
import { AddTodo } from 'src/app/shared/addtodo.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-displaytodo',
  templateUrl: './displaytodo.component.html',
  styleUrls: ['./displaytodo.component.css']
})
export class DisplayTodoComponent implements OnInit {

  list: AddTodo[];
  constructor(private service: AddTodoService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getTodo().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as AddTodo;
      })
    });
  }

  onEdit(todos: AddTodo) {
    this.service.formData = Object.assign({}, todos);
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('assignment-todo/' + id).delete();
      this.toastr.warning('Deleted successfully','Todo Registry');
    }
  }

}
