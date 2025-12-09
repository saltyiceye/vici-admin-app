import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { Create, NumberInput } from "@/components/admin";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const SupplierRateCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="supplier_id" reference="supplier">
                  <AutocompleteInput />
              </ReferenceInput>
            <ReferenceInput source="mcc_mnc_id" reference="mcc_mnc">
                  <AutocompleteInput />
              </ReferenceInput>
            <NumberInput source="price" />
            <NumberInput source="direction" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);
