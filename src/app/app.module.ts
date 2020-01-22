import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './todo/addtodo/addtodo.component';
import { DisplayTodoComponent } from './todo/displaytodo/displaytodo.component';
import { AddTodoService } from './shared/addtodo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoComponent,
    DisplayTodoComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AddTodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
