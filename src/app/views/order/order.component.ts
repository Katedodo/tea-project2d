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
  submitted = false;
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
      name: ['', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-яЁё]+$')]],
      last_name: ['', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-яЁё]+$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9+]{1,15}$')]],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      product: [{ value: product, disabled: true }],
      address: ['', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-яЁё0-9\\s\\-\\/]+$')]],
      comment: ['']
    });
  }

  submitOrder(): void {
    this.submitted = true;

    this.orderForm.markAllAsTouched();

    if (this.orderForm.invalid) {
      return;
    }

    const order: OrderType = {
      ...this.orderForm.getRawValue()
    };

    this.teaService.createOrder(order).subscribe({
      next: (res: { success: number }) => {
        if (res.success === 1) {
          this.successMessage = 'Спасибо за заказ!';
        } else {
          this.errorMessage = 'Произошла ошибка. Попробуйте еще раз.';
        }
      },
      error: () => {
        this.errorMessage = 'Произошла ошибка. Попробуйте еще раз.';
      }
    });
  }

  get f() {
    return this.orderForm.controls;
  }

  allowPhoneOnly(event: KeyboardEvent): void {
    const allowedChars = /[0-9+]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!allowedChars.test(inputChar)) {
      event.preventDefault();
    }
  }
}
