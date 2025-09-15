import { Component, OnInit } from '@angular/core';
import { TeaService } from '../../../services/tea.service';
import {TeaType} from "../../../types/tea.type";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  teas: TeaType[] = [];
  loading = true;

  constructor(private teaService: TeaService) {}

  ngOnInit(): void {
    this.teaService.getTeas().subscribe(data => {
      this.teas = data;
      this.loading = false;
    });
  }
}

