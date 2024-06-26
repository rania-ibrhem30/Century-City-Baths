import { Component } from '@angular/core';
import { SidePanelComponent } from '../../../shared/side-panel/side-panel.component';
import { ServicesComponent } from '../../../shared/services/services.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patio-door',
  standalone: true,
  templateUrl: './patio-door.component.html',
  styleUrl: './patio-door.component.scss',
  imports: [SidePanelComponent, ServicesComponent, RouterLink],
})
export class PatioDoorComponent {}
