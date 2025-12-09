import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { Edit } from "@/components/admin/edit";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const CustomerRoutingEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="routing_id" reference="routing">
                  <AutocompleteInput />
              </ReferenceInput>
            <ReferenceInput source="customer_id" reference="customer">
                  <AutocompleteInput />
              </ReferenceInput>
            <TextInput source="id" />
        </SimpleForm>
    </Edit>
);