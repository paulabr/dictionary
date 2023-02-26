import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  fonts = ["Sans-serif", "Serif", "Monospace"];
  selectedFont = this.fonts[0];
  constructor() {}

  setFont(font: string) {
    this.selectedFont = font;
  }

  ngOnInit(): void {}
}
