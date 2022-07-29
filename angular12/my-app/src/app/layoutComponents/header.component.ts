import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    template: `
        <table width="100">
            <tr valign="top">
            <td width="100px"> <img height="80px" width="80px"
            src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-elephant-logo-design-icon-vector-png-image_1928181.jpg">

            </td>
            <td align="center"><h1>Customers & Orders App</h1></td>
            </tr>
        </table>
    `
})
export class HeaderComponent {}