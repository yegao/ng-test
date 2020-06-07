import { BrowserModule } from '@angular/platform-browser';

// import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      HomeModule
      // RouterModule.forRoot([
      //    {path:"", component: WorkspaceComponent},
      //    {path:"task/:id", component: TaskComponent}
      // ])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
