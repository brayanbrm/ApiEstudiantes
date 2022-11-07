//importaciones
import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';

import {Router} from '@angular/router';
import {ListaestudiantesI} from '../../modelos/listaestudiantes.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

estudiantes:ListaestudiantesI[];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllStudents(11254).subscribe(data =>{
    this.estudiantes=data;
    console.log(this.estudiantes);
    })
  }
}
