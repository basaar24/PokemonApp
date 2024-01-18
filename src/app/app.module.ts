import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonCardComponent } from './pokemons/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonHeightPipe } from './_pipes/pokemon-height.pipe';
import { PokemonWeightPipe } from './_pipes/pokemon-weight.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PokemonCardComponent,
        PokemonListComponent,
        PokemonDetailComponent,
        NavComponent,
        HomeComponent,
        NotFoundComponent,
        ServerErrorComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        PokemonHeightPipe,
        PokemonWeightPipe
    ]
})
export class AppModule { }
