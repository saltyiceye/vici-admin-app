import { Create, NumberInput } from "@/components/admin";
import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const TenantRateCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="tenant_id" reference="tenant">
                  <AutocompleteInput />
              </ReferenceInput>
            <ReferenceInput source="mcc_mnc_id" reference="mcc_mnc">
                  <AutocompleteInput />
              </ReferenceInput>
            <NumberInput source="price" />
            <NumberInput source="direction" />
            <TextInput source="description" />
            <ReferenceInput source="creator_id" reference="user">
                  <AutocompleteInput />
              </ReferenceInput>
        </SimpleForm>
    </Create>
);