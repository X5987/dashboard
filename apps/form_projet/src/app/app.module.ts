import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemModule } from '../../../../design-system/src/lib/design-system.module';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, DesignSystemModule, AppRoutingModule],
  exports: [FormComponent],
})
export class AppModule {}
