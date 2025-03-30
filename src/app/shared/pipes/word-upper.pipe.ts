import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "wordUpper",
})
export class WordUpperPipe implements PipeTransform {
  transform(value: string, wordParts: string[]): string {
    return value.replace(
      new RegExp(`([а-я]*(${wordParts.join("|")})[а-я]*)`, "gi"),
      (match: string) => match.toUpperCase()
    );
  }
}
