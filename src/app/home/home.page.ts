import { Component } from "@angular/core";
import {
  DataGetterService,
  AkatsukiList,
} from "../services/data-getter.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  persons: AkatsukiList[];

  showNew = false;
  showEdit = -1;

  constructor(private dataGetter: DataGetterService) {
    this.dataGetter.getAkatsuki().subscribe((data) => {
      this.persons = data;
    });
  }

  add() {
    this.showNew = true;
  }
  addPerson(person) {
    this.dataGetter.addAkatsuki(person);
    this.showNew = false;
  }
  delete(id: number) {
    this.dataGetter.delAkatsuki(id);
  }
}
