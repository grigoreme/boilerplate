import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// External Modules
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

// Local Modules
import { AppRoutingModule } from './app-routing.module';

// Others
import { Console } from '@fusionworks/advanced-logger';

// Services
import { BasicService } from './services/basic.service';

// Guards
import { BasicGuardCanActivate } from './guards/basic.guard';

// Interceptors
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { AuthInterceptor } from './interceptors/authorization.interceptor';

// Components
import { AppComponent } from './components/layout/app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
  ],
  providers: [
    BasicService,
    BasicGuardCanActivate,
    CacheInterceptor,
    AuthInterceptor,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console = new Console(environment.consoleSettings);
  }
}
