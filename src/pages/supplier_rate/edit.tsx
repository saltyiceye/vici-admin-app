import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { BooleanInput } from "@/components/admin/boolean-input";
import { Edit } from "@/components/admin/edit";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const SupplierRateEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="supplier_id" reference="supplier">
                  <AutocompleteInput />
              </ReferenceInput>
            <ReferenceInput source="mcc_mnc_id" reference="mcc_mnc">
                  <AutocompleteInput />
              </ReferenceInput>
            <TextInput source="price" />
            <TextInput source="direction" />
            <TextInput source="description" />
            <TextInput source="created_at" />
            <TextInput source="updated_at" />
            <ReferenceInput source="creator_id" reference="user">
                  <AutocompleteInput />
              </ReferenceInput>
        </SimpleForm>
    </Edit>
);