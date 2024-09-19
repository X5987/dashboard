import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemModule } from '../../../../design-system/src/lib/design-system.module';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, AppRoutingModule, DesignSystemModule],
  exports: [],
})
export class AppModule {}
