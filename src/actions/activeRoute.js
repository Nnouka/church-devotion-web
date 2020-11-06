export const SET_ACTIVE_ROUTE = 'SET_ACTIVE_ROUTE';
export const POP_ACTIVE_ROUTE = 'POP_ACTIVE_ROUTE';

export function setActiveRoute(route) {
    return {
        type: SET_ACTIVE_ROUTE,
        route
    }
}

export function popRoute() {
    return {
        type: POP_ACTIVE_ROUTE
    }
}