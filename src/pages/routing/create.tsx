import { BooleanInput } from "@/components/admin/boolean-input";
import { Create } from "@/components/admin";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";
import {ArrayInput, ReferenceArrayInput,AutocompleteArrayInput,SimpleFormIterator, TextField, NumberInput, ReferenceInput} from "@/components/admin";

export const RoutingCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="priority" />
            <NumberInput source="strategy_id" />   
        </SimpleForm>
    </Create>
);