import simpleRestProvider from 'ra-data-simple-rest';

import {
    type CreateParams,
    type DataProvider,
    fetchUtils,
    UpdateParams
} from "ra-core";

import { apiUri, USER_STORAGE_KEY } from "./authProvider";

export const httpClient = (url: string, options: fetchUtils.Options = {}) => {

    const customHeaders = (options.headers ||
        new Headers({
            Accept: 'application/json',
        })) as Headers;

    customHeaders.set('Authorization', 'Bearer ' + localStorage.getItem(USER_STORAGE_KEY));
    options.headers = customHeaders;
    return fetchUtils.fetchJson(url, options).then((data) => {
        if (data.status == 401) {
            localStorage.removeItem(USER_STORAGE_KEY);
        }
        return data;
    });
}

type SendSmsParams = {
    customer_id: string;
    type: string;
    numbers: string;
    sender_id: string;
    content: string;
    attachments: {
        rawFile: File;
        src?: string;
        title?: string;
    };
};

const createSendSmsFormData = (
    params: CreateParams<SendSmsParams>
) => {
    const formData = new FormData();
    params.data.attachments?.rawFile && formData.append("file", params.data.attachments.rawFile);
    return formData;
};

const baseDataProvider = simpleRestProvider(`${apiUri}`, httpClient);

export const dataProvider: DataProvider = {
    ...baseDataProvider,
    create: (resource, params) => {
        // if (resource === "file-upload") {
        //     const formData = createSendSmsFormData(params);
        //     console.log(formData)
        //     return httpClient(`${apiUri}/${resource}`, {
        //             method: "POST",
        //             body: formData,
        //         })
        //         .then(({ json }) => ({ data: json }));
        // }
        return baseDataProvider.create(resource, params);
    },
    update: (originalResource: string, originalParams: UpdateParams) => {

        const { data, previousData } = originalParams;

        const changedDataOnly = Object.keys(data).reduce((acc, key) => {
            if (data[key] !== previousData[key]) {
                acc[key] = data[key];
            }
            return acc;
        }, {} as UpdateParams['data']);

        // return dataProvider[method](originalResource, { ...originalParams, data: changedDataOnly });
        return baseDataProvider.update(originalResource, { ...originalParams, data: changedDataOnly });

    },
    get: (url: string) => {
        return httpClient(`${apiUri}/${url}`).then((json) => ({
            data: json,
        }))            
    }   
};