import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  fonts = ["sans-serif", "serif", "monospace"];
  selectedFont = this.fonts[0];
  constructor(@Inject(DOCUMENT) private document: Document) {}

  setFont(font: string) {
    this.document.body.classList.remove(`body-${this.selectedFont}`);
    this.selectedFont = font;
    this.document.body.classList.add(`body-${font}`);
  }

  toggleTheme() {
    this.document.body.classList.toggle("dark-theme");
  }

  ngOnInit(): void {}
}
