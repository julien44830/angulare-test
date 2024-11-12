import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { provideApollo } from 'apollo-angular';
import { InMemoryCache, HttpLink, ApolloClientOptions } from '@apollo/client/core';

const uri = 'http://localhost:4000/graphql'; // URL de ton serveur GraphQL

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createApollo(): ApolloClientOptions<any> {
  return {
    link: new HttpLink({ uri }),
    cache: new InMemoryCache(),
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhotoCardComponent],
  providers: [
    provideApollo(createApollo) // Utilisation de la fonction de création pour Apollo
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Correction : 'styleUrls' au lieu de 'styleUrl'
})
export class AppComponent {
  title = 'galerie-photos';
}
