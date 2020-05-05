import { Pipe, PipeTransform } from '@angular/core';

/**
 * Main purpose of this class, is to take the input from the user
 * and make it uppercase.
 */
@Pipe({
    name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

    /**
     * Transform the string from user
     *
     * @param value  Input string
     *
     */
    transform(value: string) {
        if ( !value) {
            return '';
        }
        return value.toUpperCase();
    }
}