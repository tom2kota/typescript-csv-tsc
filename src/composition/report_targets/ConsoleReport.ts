/**
 * Takes the report generated during analysis & send it to that target
 */

import { OutputTarget } from "../Summary";

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
