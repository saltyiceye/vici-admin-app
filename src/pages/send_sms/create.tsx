import { BooleanInput, Create, NumberInput, SelectInput, SimpleForm } from "@/components/admin";
import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { ReferenceInput } from "@/components/admin/reference-input";
import { TextInput } from "@/components/admin/text-input";
import { SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { Form, RaRecord, useDataProvider, useRedirect, useNotify } from "ra-core";
import { SimpleWebSocketDemo } from "@/components/websocket/SimpleWebSocketDemo";

export type SalesFormData = {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    administrator: boolean;
    disabled: boolean;
};

export const SendSmsCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    const dataProvider = useDataProvider();

    const { mutate } = useMutation({
        mutationKey: ['signup'],
        mutationFn: async (data: SalesFormData) => {
            return dataProvider.create<RaRecord>('send_sms', { data });
        },
        onSuccess: () => {
            notify('SMS sent successfully');
            redirect('/send_sms');
        },
        onError: () => {
            notify('An error occurred. Please try again.');
        },
    });

    const onSubmit: SubmitHandler<SalesFormData> = async data => {
        mutate(data);
    };

    return (
        <>
        <SimpleForm onSubmit={onSubmit as SubmitHandler<any>}>
            <SelectInput source="sms_type" optionText="name" optionValue="_id" parse={value => Number(value)}
                choices={[
                    { _id: 0, name: 'SMS' },
                    { _id: 1, name: 'MMS' }
                ]}
                className="status-field"
            />
            <SelectInput source="number_type" optionText="name" optionValue="_id" parse={value => Number(value)}
                choices={[
                    { _id: 0, name: 'Text' },
                    { _id: 1, name: 'File' }
                ]}
                className="status-field"
            />
            <BooleanInput source="is_dynamic" />
            <ReferenceInput source="customer_id" reference="customer">
                <AutocompleteInput />
            </ReferenceInput>
            <TextInput source="to" />
            <TextInput source="message" />
            <NumberInput source="file_name" />
            <NumberInput source="number_cell_idx" />
            <TextInput source="from" />
        </SimpleForm>
        </>
        
    );
};