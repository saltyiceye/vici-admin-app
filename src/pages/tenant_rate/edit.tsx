import { NumberInput } from "@/components/admin";
import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { BooleanInput } from "@/components/admin/boolean-input";
import { Edit } from "@/components/admin/edit";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const TenantRateEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="tenant_id" reference="tenant">
                  <AutocompleteInput />
              </ReferenceInput>
            <ReferenceInput source="mcc_mnc_id" reference="mcc_mnc">
                  <AutocompleteInput />
              </ReferenceInput>
            <NumberInput source="price" />
            <TextInput source="direction" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);
