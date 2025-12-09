import { NumberInput } from "@/components/admin";
import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { Edit } from "@/components/admin/edit";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const SupplierRateEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="supplier_id" reference="supplier">
                  <AutocompleteInput />
              </ReferenceInput>
            <ReferenceInput source="mcc_mnc_id" reference="mcc_mnc">
                  <AutocompleteInput />
              </ReferenceInput>
            <NumberInput source="price" />
            <NumberInput source="direction" />
            <TextInput source="description" />
            <TextInput source="created_at" />
            <TextInput source="updated_at" />
        </SimpleForm>
    </Edit>
);
