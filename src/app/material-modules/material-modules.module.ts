import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
const materialModuls =[MatIconModule,MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModuls ],
  exports: [...materialModuls]
})
export class MaterialModulesModule { }
