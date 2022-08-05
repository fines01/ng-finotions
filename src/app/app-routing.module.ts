import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesDashboardComponent } from './notes-dashboard/notes-dashboard.component';
import { TrashDashboardComponent } from './trash-dashboard/trash-dashboard.component';

const routes: Routes = [
  { path: '', component: NotesDashboardComponent },
  { path:'trash', component: TrashDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
