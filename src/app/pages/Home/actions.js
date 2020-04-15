export const UPDATE_FORM_VALUES = 'UPDATE_SECTION_DISPLAY_FORM_VALUES'
export const UPDATE_FORM_ERRORS = 'UPDATE_SECTION_DISPLAY_FORM_ERRORS'
export const IS_MOBILE = 'IS_MOBILE';

export const dispatchDeviceType = (isMobile) => {
    return {
        type: IS_MOBILE,
        payload: isMobile
    }
}

export const updateFormValues = (formValues) => {
    return {
        type: UPDATE_FORM_VALUES,
        payload: formValues
    }
}

export const updateFormErrors = (formErrors) => {
    return {
        type: UPDATE_FORM_ERRORS,
        payload: formErrors
    }
}