import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modules',
  imports: [],
  templateUrl: './modules.html',
  styleUrl: './modules.css'
})
export class Modules implements OnInit {

  data: any = {
    file: false,
    path: '',
    os: '',
    cpu: 0,
    memory: 0,
    hash: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/api/info')
      .subscribe(result => {
        this.data = result;
      });
  }
}