import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-no-found-component',
	imports: [
		MatButton,
		RouterLink
	],
  templateUrl: './no-found-component.html',
  styleUrl: './no-found-component.scss'
})
export class NoFoundComponent {

}
