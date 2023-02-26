import { Component, Input, OnInit } from "@angular/core";
import { DefinitionError } from "../services/definition/definition-error.type";

@Component({
  selector: "app-definition-error",
  templateUrl: "./definition-error.component.html",
  styleUrls: ["./definition-error.component.scss"],
})
export class DefinitionErrorComponent implements OnInit {
  @Input() error: DefinitionError;
  constructor() {}

  ngOnInit(): void {}
}
