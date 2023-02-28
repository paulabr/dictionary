import { Component, Input } from "@angular/core";
import { DictionaryError } from "../services/definition/definition.type";

@Component({
  selector: "app-definition-error",
  templateUrl: "./definition-error.component.html",
})
export class DefinitionErrorComponent {
  @Input() error: DictionaryError;
}
