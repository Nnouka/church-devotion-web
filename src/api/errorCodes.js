
export const CONNECTION_TIMEOUT = {code: 'CONNECTION_TIMEOUT',
    message: 'network_error'};
export const BAD_CREDENTIALS = {code: 'BAD_CREDENTIALS', message: 'BAD_CREDENTIALS'}
export function handleErrorCode(code) {
    switch (code) {
        case BAD_CREDENTIALS.code :
            return BAD_CREDENTIALS.message;
        default :
            return CONNECTION_TIMEOUT.message;
    }
}