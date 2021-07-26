import { Component, OnInit } from '@angular/core';
import { palestres } from '../palestre-mock';

@Component({
  selector: 'app-palestre',
  templateUrl: './palestre.component.html',
  styleUrls: ['./palestre.component.css'],
})
export class PalestreComponent implements OnInit {
  palestre = palestres;

  constructor() {}

  ngOnInit(): void {}
}
