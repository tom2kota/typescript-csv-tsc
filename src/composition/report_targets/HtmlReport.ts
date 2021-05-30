/**
 * Generated html report (report.html) will be at root directory of a project
 */

import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
        <div>
        <h1>Analysis output</h1>
        <p>${report}</p>
        </div>
        `;

    fs.writeFileSync("report.html", html);
  }
}
