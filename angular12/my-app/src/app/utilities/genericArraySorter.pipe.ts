import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"genericArraySorter",
    pure: true
})

export class GenericArraySorter implements PipeTransform{
     
    transform(lstObject: any[], sortProp: string, isAsc: string) {
        if(lstObject) {
        if(isAsc=="yes") {
            lstObject.sort((a,b)=> {
                return a[sortProp] > b[sortProp] ?-1 : 1;
            })
        }
        else{
            lstObject.sort((a,b)=> {
                return a[sortProp] < b[sortProp] ?-1 : 1;
            })
        }
    }
    return lstObject;
    }
}