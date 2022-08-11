import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NotesDashboardComponent } from './notes-dashboard/notes-dashboard.component';
import { NoteComponent } from './note/note.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { TrashDashboardComponent } from './trash-dashboard/trash-dashboard.component';
import { NoteService } from './note.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    NotesDashboardComponent,
    NoteComponent,
    NoteFormComponent,
    TrashDashboardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
