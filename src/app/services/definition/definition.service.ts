import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Definition } from "./definition.type";

@Injectable({ providedIn: "root" })
export class DefinitionsService {
  constructor(
    private httpClient: HttpClient,
    @Inject("dictionaryUrl") private dictionaryUrl: string
  ) {}

  getDefinition(searchTerm: string): Observable<Definition[]> {
    return this.httpClient.get<Definition[]>(
      `${this.dictionaryUrl}/${searchTerm}`
    );
  }
}
