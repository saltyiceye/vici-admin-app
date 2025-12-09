import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { Edit } from "@/components/admin/edit";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";
import { NumberInput } from "@/components/admin/number-input";

export const TenantEdit = () => (
    <Edit>
        <SimpleForm className="grid grid-cols-3 gap-4">
            <TextInput source="username" />
            <TextInput source="name" />
            <TextInput source="password" />
            <NumberInput source="balance" />
            <NumberInput source="overdraft_limit" />
            <TextInput source="email" />
            <NumberInput source="billing_rule" />
            <TextInput source="description" />
            <ReferenceInput source="sales_id" reference="sales">
                <AutocompleteInput />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);