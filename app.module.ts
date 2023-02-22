import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./src/app/app.component";
import { HeaderModule } from "./src/app/header/header.module";
import { HttpClientModule } from "@angular/common/http";
import { DefinitionModule } from "./src/app/definition/definition.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HeaderModule,
    HttpClientModule,
    ReactiveFormsModule,
    DefinitionModule,
  ],
  providers: [
    {
      provide: "dictionaryUrl",
      useValue: "https://api.dictionaryapi.dev/api/v2/entries/en",
    },
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
