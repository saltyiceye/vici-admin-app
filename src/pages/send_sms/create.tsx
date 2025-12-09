import { BooleanInput, Create, NumberInput, SelectInput } from "@/components/admin";
import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const SendSmsCreate = () => (
        <SimpleForm>
            <SelectInput source="sms_type" optionText="name" optionValue="_id"
                choices={[
                    { _id: 0, name: 'SMS' },
                    { _id: 1, name: 'MMS' }
                ]}
                className="status-field"
            />
            <SelectInput source="number_type" optionText="name" optionValue="_id"
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
);