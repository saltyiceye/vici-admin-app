import { Create } from "@/components/admin";
import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const Black_listCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="phone_number" />
            <ReferenceInput source="customer_id" reference="customer">
                  <AutocompleteInput />
              </ReferenceInput>
        </SimpleForm>
    </Create>
);