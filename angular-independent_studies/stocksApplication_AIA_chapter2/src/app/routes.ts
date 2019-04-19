import {RouterModule, Routes} from "@angular/router";
import {ManageComponent} from "./components/manage/manage.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  }
];
export const AppRoutes = RouterModule.forRoot(routes);
