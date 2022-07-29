import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: "filter-textbox",
    template: `
    <b>Filter by </b><input type="text" [(ngModel)]='filterCriteria'/>
    `
})

export class FilterTextBoxComponent implements OnInit {
    // backing field to hold state of the search string
    private _filterCriteria: string = "";
    // wrapper property
    get filterCriteria() : string {
        return this._filterCriteria;
    }
    set filterCriteria(value:string) {
        console.log(`Filter criteria is ${value}`)
        this._filterCriteria = value;
        // publish the event with data
        this.filterCriteriaChanged.emit(value);
    }

    // Define the event
    @Output() filterCriteriaChanged : EventEmitter<string> = new EventEmitter<string>();
    ngOnInit(): void {
        
    }
}