import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { BooleanInput } from "@/components/admin/boolean-input";
import { Edit } from "@/components/admin/edit";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const Black_listEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="phone_number" />
            <ReferenceInput source="customer_id" reference="customer">
                  <AutocompleteInput />
              </ReferenceInput>
        </SimpleForm>
    </Edit>
);