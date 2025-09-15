import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {TeaType} from "../types/tea.type";
import {OrderType, OrderResponseType} from "../types/order.type";


@Injectable({
  providedIn: 'root'
})
export class TeaService {
  private apiUrl = 'https://testologia.ru/tea';
  private orderUrl = 'https://testologia.ru/order-tea';

  constructor(private http: HttpClient) {}

  getTeas(): Observable<TeaType[]> {
    return this.http.get<TeaType[]>(this.apiUrl);
  }

  getTeaById(id: number): Observable<TeaType | undefined> {
    return this.http.get<TeaType[]>(this.apiUrl).pipe(
      map((teas: TeaType[]) => teas.find((t: TeaType) => t.id === id))
    );
  }

  createOrder(order: OrderType): Observable<OrderResponseType> {
    return this.http.post<OrderResponseType>(this.orderUrl, order);
  }
}
