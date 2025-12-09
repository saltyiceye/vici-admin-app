import { BooleanInput } from "@/components/admin/boolean-input";
import { Edit } from "@/components/admin/edit";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";
import { ReferenceArrayInput,AutocompleteArrayInput, NumberInput} from "@/components/admin";

export const RoutingEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="priority" />
            <ReferenceArrayInput source="customers" reference="customer" />
            <ReferenceArrayInput source="channels" reference="channel">
                <AutocompleteArrayInput label="Channel" />
            </ReferenceArrayInput>
            <ReferenceArrayInput source="mcc_mnc" reference="mcc_mnc">
                <AutocompleteArrayInput label="Mcc" />
            </ReferenceArrayInput>            
        </SimpleForm>
    </Edit>
);