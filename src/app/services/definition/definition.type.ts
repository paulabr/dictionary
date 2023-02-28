export interface License {
  name: string;
  url: string;
}

export interface Phonetic {
  text: string;
  audio: string;
  sourceUrl: string;
  license: License;
}

export interface Explanation {
  definition: string;
  synonyms: any[];
  antonyms: any[];
  example: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Explanation[];
  synonyms: string[];
  antonyms: string[];
}
export interface Definition {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

export interface DictionaryError {
  title: string;
  message: string;
  resolution: string;
}
