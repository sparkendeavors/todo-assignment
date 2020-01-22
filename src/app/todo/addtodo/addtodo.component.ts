import { Component, OnInit } from '@angular/core';
import { AddTodoService } from 'src/app/shared/addtodo.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private service: AddTodoService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      mytodo: '',
    };
  }

  onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('assignment-todo').add(data);
    } else {
      this.firestore.doc('assignment-todo/' + form.value.id).update(data);
    }
    this.resetForm(form);
    this.toastr.success('Submitted successfully', 'Added your todo');
  }

}
