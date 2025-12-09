import { NumberInput } from "@/components/admin";
import { BooleanInput } from "@/components/admin/boolean-input";
import { Create } from "@/components/admin/create";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const MccMncCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="mcc" />
            <NumberInput source="mnc" />
            <TextInput source="prefix" />
            <TextInput source="created_at" />
            <TextInput source="updated_at" />
            <TextInput source="country" />
            <BooleanInput source="is_deleted" />
        </SimpleForm>
    </Create>
);