import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs";
import { DefinitionsService } from "./services/definition/definition.service";
import { Definition } from "./services/definition/definition.type";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  searchTerm = new FormControl("");
  definition: Definition;
  constructor(private definitionsService: DefinitionsService) {}

  ngOnInit(): void {
    this.searchTerm.valueChanges
      .pipe((debounceTime(300), distinctUntilChanged()))
      .subscribe((val) => {
        if (!val) {
          this.definition = val;
        }
      });
  }

  search(searchTerm: string) {
    if (searchTerm) {
      this.definitionsService.getDefinition(searchTerm).subscribe((val) => {
        this.definition = val[0];
      });
    }
  }
}
