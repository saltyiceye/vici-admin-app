import { BooleanInput } from "@/components/admin/boolean-input";
import { Create } from "@/components/admin";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";
import {AutocompleteInput, ReferenceArrayInput,AutocompleteArrayInput,SimpleFormIterator, TextField, NumberInput, ReferenceInput} from "@/components/admin";

export const TenantCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="username" />
                        <TextInput source="name" />
                        <ReferenceInput source="parent_id" reference="user">
                              <AutocompleteInput />
                          </ReferenceInput>
                        <ReferenceInput source="role_id" reference="role">
                              <AutocompleteInput />
                          </ReferenceInput>
                        <TextInput source="balance" />
                        <TextInput source="overdraft_limit" />
                        <TextInput source="email" />
                        <TextInput source="billing_rule" />
                        <TextInput source="description" />
                        <ReferenceInput source="sales_id" reference="user">
                              <AutocompleteInput />
                          </ReferenceInput>
            
        </SimpleForm>
    </Create>
);