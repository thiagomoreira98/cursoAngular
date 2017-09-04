import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.training';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/output/nature-q-c-400-200-5.jpg'

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
