import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { PokemonHeightPipe } from '../_pipes/pokemon-height.pipe';
import { PokemonWeightPipe } from '../_pipes/pokemon-weight.pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    PokemonHeightPipe,
    PokemonWeightPipe,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      progressBar: true
    }),
  ],
  exports: [
    BsDropdownModule,
    PokemonHeightPipe,
    PokemonWeightPipe,
    ToastrModule,
  ]
})
export class SharedModule { }
