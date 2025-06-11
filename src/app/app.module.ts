import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CommunicationComponent } from './communication/communication.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { CapitalDirective } from './capital.directive';
import { InrPipe } from './inr.pipe';
import { TokenInterceptor } from './token.interceptor';
import { AboutModule } from './about/about.module';
import { HooksComponent } from './hooks/hooks.component';
import { ChartsComponent } from './charts/charts.component';
import { StoreModule } from '@ngrx/store';
import { UsersComponent } from './admin/users/users.component';
import { StaffComponent } from './admin/staff/staff.component';
// import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { MatCardModule } from "@angular/material/card";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from "@angular/material/icon";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from "@angular/material/input";
import { LoadingComponent } from './loading/loading.component';
import { CartComponent } from './cart/cart.component';
import { MatBadgeModule } from "@angular/material/badge";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ErrorComponent,
    DataBindingComponent,
    DirectivesComponent,
    EmployeeComponent,
    VehiclesComponent,
    CreateVehicleComponent,
    CreateUserComponent,
    VehicleDetailsComponent,
    CommunicationComponent,
    ChildComponent,
    ParentComponent,
    Sibling1Component,
    Sibling2Component,
    CapitalDirective,
    InrPipe,
    HooksComponent,
    ChartsComponent,
    StaffComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ContactComponent,
    LoadingComponent,
    CartComponent
    // UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutModule,
    StoreModule.forRoot({}, {}),
    UsersComponent,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatBadgeModule
],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
