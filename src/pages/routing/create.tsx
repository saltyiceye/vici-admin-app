import { BooleanInput } from "@/components/admin/boolean-input";
import { Create } from "@/components/admin";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";
import {ArrayInput, ReferenceArrayInput,AutocompleteArrayInput,SimpleFormIterator, TextField, NumberInput, ReferenceInput} from "@/components/admin";

export const RoutingEdit = () => (
    <Create>
        <SimpleForm>
            <div className="flex flex-row gap-4 flex-wrap">
            <TextInput source="name" />
            <TextInput source="created_at" />
            <ReferenceInput source="creator" reference="user"/>
            <TextInput source="description" />
            <NumberInput source="priority" />
<ReferenceArrayInput source="customers" reference="customer" />
<ReferenceArrayInput source="channels" reference="channel">
    <AutocompleteArrayInput label="Channel" />
</ReferenceArrayInput>
<ReferenceArrayInput source="mcc_mnc" reference="mcc_mnc">
    <AutocompleteArrayInput label="Mcc" />
</ReferenceArrayInput>
 </div>
            
        </SimpleForm>
    </Create>
);