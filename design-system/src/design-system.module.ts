import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './components/header.component';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    CdkMenu,
    CdkMenuItem,
    MatCard,
    MatCardContent,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    NgOptimizedImage,
  ],
  exports: [MatButtonModule, MatInputModule, HeaderComponent],
})
export class DesignSystemModule {}
