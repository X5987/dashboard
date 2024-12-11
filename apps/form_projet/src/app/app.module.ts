import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { DesignSystemModule } from '@design-system';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, DesignSystemModule, AppRoutingModule],
  exports: [],
})
export class AppModule {}
