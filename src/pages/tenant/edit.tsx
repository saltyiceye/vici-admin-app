import { NumberInput } from "@/components/admin";
import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { Edit } from "@/components/admin/edit";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const TenantEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="name" />
            <ReferenceInput source="parent_id" reference="user">
                  <AutocompleteInput />
              </ReferenceInput>
            <ReferenceInput source="role_id" reference="role">
                  <AutocompleteInput />
              </ReferenceInput>
            <NumberInput source="balance" />
            <NumberInput source="overdraft_limit" />
            <TextInput source="email" />
            <TextInput source="billing_rule" />
            <TextInput source="description" />
            <ReferenceInput source="sales_id" reference="user">
                  <AutocompleteInput />
              </ReferenceInput>
        </SimpleForm>
    </Edit>
);