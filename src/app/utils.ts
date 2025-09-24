import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  getAngularExperience(): string {
    const startDate = new Date(2021, 11);
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    // Adjust if current month is less than start month
    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years}.${months}+`;
  }
}
