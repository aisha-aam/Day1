import { Component } from '@angular/core';
import { Modules } from './modules/modules';

@Component({
  selector: 'app-root',
  imports: [Modules],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}