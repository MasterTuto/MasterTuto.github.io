import { Component, OnInit } from '@angular/core';
import { concat, concatMap, delay, from, ignoreElements, interval, map, of, repeat, take, tap } from 'rxjs';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {
  profession: string = "";

  requestsExample = `import math\n\nn = int(input(“Type a number: ”))\nsqrt_n = math.sqrt(n)\nprint( f”sqrt of {n} = {sqrt_n}” )`;
  todoList = `<p>Todo:</p>\n<ul>\n    <li>Laundry</li>\n    <li>Shopping</li>\n    <li>Fixes</li>\n</ul>`;
  product = `let n = 1;\nfor (let i=0; i < 10; i++) {   n *= i;\n}\nconsole.log(\`n: \${n}\`);`

  constructor() { }

  ngOnInit(): void {
    const words = ["FRONT-END", "AUTOMATION", "FULLSTACK"];

    const type = ({ word, speed, backward = false }: {word: string, speed: number, backward?: boolean}) =>
      interval(speed).pipe(
        map(x => backward
          ? word.substring(0, word.length - x - 1)
          : word.substring(0, x + 1)),
        take(word.length)
      );

    const typeEfect = (word: string) =>
        concat(
          type({ word, speed: 100 }),
          of('').pipe(delay(1500), ignoreElements()),
          type({ word, speed: 30, backward: true }),
          of('').pipe(delay(300), ignoreElements())
        );

    from(words)
      .pipe(
        concatMap(typeEfect),
        repeat()
      ).subscribe(word => {
        this.profession = word;
      })
  }

  get yearsOfExperience() {
    return new Date().getFullYear() - 2019;
  }
}
