import { Create } from "@/components/admin";
import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="name" />
            <ReferenceInput source="role_id" reference="role">
                  <AutocompleteInput />
              </ReferenceInput>
        </SimpleForm>
    </Create>
);