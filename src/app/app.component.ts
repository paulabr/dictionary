import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs";

import { DefinitionsService } from "./services/definition/definition.service";
import {
  Definition,
  DictionaryError,
} from "./services/definition/definition.type";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  searchTerm = new FormControl("", Validators.required);
  definition: Definition;
  error: any;
  constructor(private definitionsService: DefinitionsService) {}

  ngOnInit(): void {
    this.searchTerm.valueChanges
      .pipe((debounceTime(300), distinctUntilChanged()))
      .subscribe((val) => {
        if (!val) {
          this.definition = val;
          this.error = val;
        }
      });
  }

  search(searchTerm: string) {
    if (!searchTerm) {
      this.searchTerm.setErrors({ noTerm: true });
    }
    if (searchTerm) {
      this.definitionsService.getDefinition(searchTerm).subscribe({
        next: (val: Definition) => (this.definition = val[0]),
        error: (err: DictionaryError) => (this.error = err),
      });
    }
  }
}
