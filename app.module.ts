import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HttpClientModule } from "@angular/common/http";
import { DefinitionErrorModule } from "src/app/definition-error/definition-error.module";
import { AppComponent } from "./src/app/app.component";
import { DefinitionModule } from "./src/app/definition/definition.module";
import { HeaderModule } from "./src/app/header/header.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HeaderModule,
    HttpClientModule,
    ReactiveFormsModule,
    DefinitionModule,
    DefinitionErrorModule,
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
