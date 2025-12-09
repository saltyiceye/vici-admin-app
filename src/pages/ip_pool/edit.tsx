import { Edit, NumberInput, ReferenceInput, AutocompleteInput } from "@/components/admin";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const IpPoolEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="customer_id" reference="customer">
                <AutocompleteInput />
            </ReferenceInput>
            <TextInput source="ip_address" />
            <NumberInput source="type" />
            <TextInput source="reason" />
        </SimpleForm>
    </Edit>
);