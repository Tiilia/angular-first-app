import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frenchMonth'
})
export class FrenchMonthPipe implements PipeTransform {

  transform(value: unknown): string {
    value = Number(value);
    let monthName = "Inconnu";
    switch (value) {
      case 1:
        monthName = "Janvier"
        break;
      case 2:
        monthName = "Février"
        break;
      case 3:
        monthName = "Mars"
        break;
      case 4:
        monthName = "Avril"
        break;
      case 5:
        monthName = "Mai"
        break;
      case 6:
        monthName = "Juin"
        break;
      case 7:
        monthName = "Juillet"
        break;
      case 8:
        monthName = "Août"
        break;
      case 9:
        monthName = "Septembre"
        break;
      case 10:
        monthName = "Octobre"
        break;
      case 11:
        monthName = "Novembre"
        break;
      case 12:
        monthName = "Décembre"
        break;
    }
    return monthName;
  }

}
