import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.css'
})
export class PhotoCardComponent {
  @Input() name!: string; // Reçoit le nom du personnage depuis le parent
  @Input() image!: string; // Reçoit l'URL de l'image du personnage
  @Input() status!: string; // Reçoit le statut du personnage
  @Input() dimension!: string; // Reçoit la dimension depuis le parent
}
