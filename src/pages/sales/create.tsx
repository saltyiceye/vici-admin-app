import { Create, NumberInput } from "@/components/admin";
import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const SalesCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="name" />
            <TextInput source="password" />
            <ReferenceInput source="role_id" reference="role">
                  <AutocompleteInput />
              </ReferenceInput>
            <NumberInput source="balance" />
            <NumberInput source="overdraft_limit" />
            <TextInput source="email" />
            <NumberInput source="billing_rule" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);