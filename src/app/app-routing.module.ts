import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'student',
    loadChildren: () =>
      import('./features/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'analyst',
    loadChildren: () =>
      import('./features/data-analyst/data-analyst.module').then(
        (m) => m.DataAnalystModule,
      ),
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./features/teacher/teacher.module').then((m) => m.TeacherModule),
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./features/accountant/accountant.module').then(
        (m) => m.AccountantModule,
      ),
  },
  {
    path: 'super',
    loadChildren: () =>
      import('./features/super-user/super-user.module').then(
        (m) => m.SuperUserModule,
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
