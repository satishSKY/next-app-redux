import { getBaseUrl } from 'shared/utils/utils';

export const METHODS = {
    GET: 'GET', //DEFAULT
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
    HEAD: 'HEAD'
};

const handleResponse = async (response) => {
    if (response.ok || response.status === 201) {
        return response.json();
    }
    // convert non-2xx HTTP responses into errors:
    const { error } = await response?.json();
    const responseError = { hasError: true, message: 'Something went wrong!', ...error };
    return Promise.reject(responseError);
};

export const fetchData = ({ url, method = METHODS.GET, headers = {}, body }) => {
    const baseUrl = getBaseUrl();
    try {
        return fetch(`${baseUrl}${url}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(body)
        })
            .then(handleResponse)
            .then((data) => {
                return Promise.resolve({ ...data?.response });
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    } catch (err) {
        const error = { err, hasError: true, message: 'Something went wrong!' };
        return Promise.reject(error);
    }
};

const httpRequest = async (args) => {
    return await fetchData({ ...args })
        .then((response) => [response, null])
        .catch((error) => [null, error]);
};
export default httpRequest;
