import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  showPopup = false;
  private destroy$ = new Subject<void>();

  constructor(private router: Router,) {}

  ngOnInit(): void {
    //через 10 секунд
    timer(10000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.showPopup = true;
      });
  }

  closePopup(): void {
    this.showPopup = false;
  }

  goToCatalog(): void {
    this.router.navigate(['/catalog']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
