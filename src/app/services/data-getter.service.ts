import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface AkatsukiList {
  name: string;
  rank: string;
  age: number;
}

@Injectable({
  providedIn: "root",
})
export class DataGetterService {
  private akatsuki: AkatsukiList[] = [
    {
      name: "Hidan",
      rank: "A",
      age: 40,
    },
    {
      name: "Tobi",
      rank: "S",
      age: 29,
    },
    {
      name: "Sasori",
      rank: "B",
      age: 30,
    },
  ];

  constructor() {}

  getAkatsuki(): Observable<AkatsukiList[]> {
    return of(this.akatsuki);
  }

  addAkatsuki(person: AkatsukiList) {
    this.akatsuki.push(person);
  }

  delAkatsuki(id) {
    this.akatsuki.splice(id, 1);
  }
}
