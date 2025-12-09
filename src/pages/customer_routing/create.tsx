import { Create } from "@/components/admin";
import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const CustomerRoutingCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="routing_id" reference="routing">
                  <AutocompleteInput />
              </ReferenceInput>
            <ReferenceInput source="customer_id" reference="customer">
                  <AutocompleteInput />
              </ReferenceInput>
            <TextInput source="id" />
        </SimpleForm>
    </Create>
);