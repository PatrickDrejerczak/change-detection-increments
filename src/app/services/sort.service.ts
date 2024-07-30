import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SortService {
  sort<T>(array: T[], compareFn: (a: T, b: T) => number): T[] {
    return array.slice().sort(compareFn);
  }
}
