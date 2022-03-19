import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'student',
    loadChildren: () => import('./components/student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'analyst',
    loadChildren: () => import('./components/data-analyst/data-analyst.module').then(m => m.DataAnalystModule)
  },
  {
    path: 'teacher',
    loadChildren: () => import('./components/teacher/teacher.module').then(m => m.TeacherModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./components/accountant/accountant.module').then(m => m.AccountantModule)
  },
  {
    path: 'super',
    loadChildren: () => import('./components/super-user/super-user.module').then(m => m.SuperUserModule)
  },
  {
    path: '',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule),
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
