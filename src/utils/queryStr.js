
export default {
    parse,
    decode
}

export function parse(queryStr) {
    if (queryStr.length === 0) return queryStr;
    // remove starting ? if any
    if (queryStr.startsWith('?')) {
        queryStr = queryStr.substring(1);
    }
    // split by & separator
    try{
        let queryArr = queryStr.split('&');
        let queryObj = {};
        for (let query of queryArr) {
            const arr = query.split('=');
            queryObj[arr[0]] = arr[1];
        }
        return queryObj;
    }catch (e) {
        console.log(e);
    }
}

export function decode(str) {
    try{
        return atob(str);
    }catch (e) {
        return undefined;
    }
}