import { Component } from '@angular/core';

@Component({
  selector: 'app-tea-cards',
  templateUrl: './tea-cards.component.html',
  styleUrls: ['./tea-cards.component.css']
})
export class TeaCardsComponent {
  teas = [
    { image: 'assets/images/tea1.png', title: 'Детокс чай лайм', description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления' },
    { image: 'assets/images/tea2.png', title: 'Ягодный чай', description: 'Нотки ягод позволят вам расслабиться и насладиться великолепием этого чая' },
    { image: 'assets/images/tea3.png', title: 'Цветочный чай', description: 'Душистые цветы создают невероятный аромат и наполняют вас энергией' },
    { image: 'assets/images/tea4.png', title: 'Очищающий чай', description: 'Бесподобный чай для получения утреннего заряда бодрости' },
    { image: 'assets/images/tea5.png', title: 'Кислый чай', description: 'Кислый чай для настоящих ценителей кислинки во время чаепития' },
    { image: 'assets/images/tea6.png', title: 'Лимонная мята', description: 'Смесь лимона с мятой сделает ваш день самым лучшим' }
  ];
}
