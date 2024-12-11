import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { DesignSystemModule } from '@design-system';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppRoutingModule, DesignSystemModule, AppComponent],
  exports: [],
})
export class AppModule {}
