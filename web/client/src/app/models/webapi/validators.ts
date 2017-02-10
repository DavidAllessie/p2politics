/**
 * This file is generated by the SwaggerTSGenerator.
 * Do not edit.
*/
/* tslint:disable */
// add

import { FormControl } from '@angular/forms';

export const maxValueValidator = (required: number) => {
    return (control: FormControl) => {
        if (control.value !== undefined) {
            var actual = Number(control.value);
            if (isNaN(actual) || actual > required) {
                return {
                    maxValue: {
                        valid: false,
                        required: required,
                        actual: actual
                    }
                };
            }
        }
        return null;
    };
};

export const minValueValidator = (required: number) => {
    return (control: FormControl) => {
        if (control.value !== undefined) {
            var actual = Number(control.value);
            if (isNaN(actual) || actual < required) {
                return {
                    minValue: {
                        valid: false,
                        required: required,
                        actual: actual
                    }
                };
            }
        }
        return null;
    };
};
