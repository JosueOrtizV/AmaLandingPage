import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'header';
  isMenuOpen: boolean = false;

  constructor() {
  }
  
  closeToggler(): void {
    this.isMenuOpen = false;
  }
}
