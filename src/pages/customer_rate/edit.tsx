import { NumberInput } from "@/components/admin";
import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { Edit } from "@/components/admin/edit";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const CustomerRateEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="customer_id" reference="customer">
                <AutocompleteInput />
            </ReferenceInput>
            <ReferenceInput source="mcc_mnc_id" reference="mcc_mnc">
                <AutocompleteInput />
            </ReferenceInput>
            <NumberInput source="price" />
            <NumberInput source="direction" helperText="0=mt,1=mo" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);
