import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './shared/auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [AuthRoutingModule, CommonModule],
  providers: [AuthService],
  bootstrap: [],
})
export class AuthModule {}
