import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {JournalService} from "../../services/journal.service"
@Component({
  selector: "app-single-entry",
  templateUrl: "./single-entry.component.html",
  styleUrls: ["./single-entry.component.css"]
})
export class SingleEntryComponent implements OnInit {
  constructor(
    private jS: JournalService,
    private route: ActivatedRoute
  ) {}
noticia: any;

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.getEntry(p["id"]);
    })
  }

  getEntry(id){
    this.jS.get(id).subscribe(entry => this.noticia = entry);
      }
}
