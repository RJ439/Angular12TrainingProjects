import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AboutComponent } from "./about.component";
import { HighlightDirective } from "../shared/highlight.directive";

describe('About Component, (highlightDirective)', () => {
    let fixture:ComponentFixture<AboutComponent>
    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations:[AboutComponent, HighlightDirective],
            schemas:[CUSTOM_ELEMENTS_SCHEMA]
        }).createComponent(AboutComponent);
        fixture.detectChanges();
    });
    //Test if the bgColor of the h2 element is skyblue
    //Now the component as loaded and we can  walk up/down ----- its DOM
    it('should have skyblue <h2>', () => {
        const h2 = fixture.nativeElement.querySelector('h2');
        const bgColor = h2.style.backgroundColor;
        //assert
        expect(bgColor).toBe('skyblue');
    })
})