import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeaService } from '../../../services/tea.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teaService: TeaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teaService.getTeaById(id).subscribe(data => {
      this.product = data;
      this.loading = false;
    });
  }

  buyProduct() {
    this.router.navigate(['/order'], { queryParams: { product: this.product.title } });
  }
}

