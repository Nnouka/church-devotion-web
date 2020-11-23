import {SET_COUNTRIES, SET_COUNTRIES_FROM_STORAGE} from "../actions/countries";

export default function countries(state = null, action) {
    switch (action.type) {
        case SET_COUNTRIES :
            const {countries} = action;
            if(Array.isArray(countries)) {
                let them = {};
                for (let country of countries) {
                    them = {
                        ...them,
                        [country.id] : {
                            ...country
                        }
                    }
                }
                return them;
            }
            return countries;
        case SET_COUNTRIES_FROM_STORAGE :
            return action.countries;
        default :
            return state;
    }
}