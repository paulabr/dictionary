import { Component, Input, OnInit } from "@angular/core";
import { Definition } from "../services/definition/definition.type";

@Component({
  selector: "app-definition",
  templateUrl: "./definition.component.html",
  styleUrls: ["./definition.component.scss"],
})
export class DefinitionComponent implements OnInit {
  @Input() definition: Definition;
  constructor() {}

  ngOnInit(): void {}
}
