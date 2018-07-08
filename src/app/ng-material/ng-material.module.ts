import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatMenuModule, MatExpansionModule, MatStepperModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatStepperModule
  ],
  declarations: [],
  exports: [
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatStepperModule
  ]
})
export class NgMaterialModule { }
