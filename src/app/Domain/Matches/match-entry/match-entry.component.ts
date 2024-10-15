import { Component, Input } from '@angular/core';
import { MatchPreview } from '../../strack';

@Component({
  selector: 'app-match-entry',
  templateUrl: './match-entry.component.html',
  styleUrl: './match-entry.component.css'
})
export class MatchEntryComponent {

  @Input({required: true}) m!: MatchPreview;


}
