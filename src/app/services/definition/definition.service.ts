import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Definition } from "./definition.type";

@Injectable({ providedIn: "root" })
export class DefinitionsService {
  constructor(
    private httpClient: HttpClient,
    @Inject("dictionaryUrl") private dictionaryUrl: string
  ) {}

  getDefinition(searchTerm: string): Observable<any> {
    return this.httpClient
      .get<Definition[]>(`${this.dictionaryUrl}/${searchTerm}`)
      .pipe(
        map((response) => {
          return response.map((obj) => {
            return {
              word: obj.word,
              phonetic:
                obj.phonetic || obj.phonetics.find((el) => el.text).text,
              phonetics: obj.phonetics[0].audio,
              meanings: obj.meanings,
              license: obj.license,
              sourceUrls: obj.sourceUrls,
            };
          });
        })
      );
  }
}
