import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeaService } from 'src/app/services/tea.service';
import { OrderType } from 'src/app/types/order.type';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private teaService: TeaService
  ) {}

  ngOnInit(): void {
    const product = this.route.snapshot.queryParamMap.get('product') || '';

    this.orderForm = this.fb.group({
      product: [
        { value: product,
          disabled: true },
        Validators.required],

      name: ['',
        [Validators.required, Validators.pattern('^[A-Za-zА-Яа-яЁё]+$')]],
      last_name: ['',
        [Validators.required, Validators.pattern('^[A-Za-zА-Яа-яЁё]+$')]],
      phone: ['',
        [Validators.required, Validators.pattern('^[+]?[0-9]{11,15}$')]],
      country: ['', Validators.required],
      zip: ['',
        [Validators.required, Validators.pattern('^[0-9]{4,10}$')]],
      address: ['',
        [Validators.required, Validators.pattern('^[A-Za-zА-Яа-яЁё0-9\\s\\-\\/]+$')]],
      comment: ['']
    });
  }

  submitOrder(): void {
    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }

    const order: OrderType = {
      ...this.orderForm.getRawValue()
    };

    this.teaService.createOrder(order).subscribe({
      next: (res: { success: number }) => {
        if (res.success === 1) {
          this.successMessage = 'Спасибо за заказ!';
          this.errorMessage = '';
          this.orderForm.reset();
        } else {
          this.errorMessage = 'Произошла ошибка. Попробуйте еще раз.';
        }
      },
      error: () => {
        this.errorMessage = 'Произошла ошибка. Попробуйте еще раз.';
      }
    });
  }

  allowPhoneOnly(event: KeyboardEvent): void {
    const allowedChars = /[0-9+]/;
    if (!allowedChars.test(event.key)) {
      event.preventDefault();
    }
  }
}
