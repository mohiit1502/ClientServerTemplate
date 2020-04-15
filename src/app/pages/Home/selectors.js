import {createSelector} from 'reselect'
import {createGetSelector} from 'reselect-immutable-helpers'

const getData = ({data}) => data

export const getHome = createSelector(
    getData,
    (dataState) => {
        return dataState.pages.home
    }
)

export const isMobile = createGetSelector(getHome, 'isMobile')
export const getFormErrors = createGetSelector(getHome, 'formErrors')
export const getFormValues = createGetSelector(getHome, 'formValues')