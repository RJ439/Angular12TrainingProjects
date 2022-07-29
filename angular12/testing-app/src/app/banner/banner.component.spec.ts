import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BannerComponent } from "./banner.component";


let component : BannerComponent
let fixture : ComponentFixture<BannerComponent>
let h1 : HTMLElement;

describe( 'Banner Component Tests', () => {
  
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent]
        });
        fixture = TestBed.createComponent(BannerComponent);
        component = fixture.componentInstance;
        h1 = fixture.nativeElement.querySelector("h1");
    });

    it('Title must be empty', () => {
        expect(h1.textContent).toEqual('');
    })
    //Check for the title after detect changes is called
    it('Title must display original title', () => {
        fixture.detectChanges();
        expect(h1.textContent).toEqual(component.title);
    })

    it('Title must change to custom title prop change', () => {
        component.title = "My new title";
        fixture.detectChanges();
        expect(h1.textContent).toEqual("My new title");
    })

})