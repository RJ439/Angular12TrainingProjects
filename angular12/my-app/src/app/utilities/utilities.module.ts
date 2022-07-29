import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NameTransformerPipe } from "./nameTransformer.pipe";
import { GenericArraySorter } from "./genericArraySorter.pipe";

@NgModule({
    declarations: [NameTransformerPipe, GenericArraySorter],
    exports: [NameTransformerPipe, GenericArraySorter]
})

export class UtilitiesModule {}