import { BooleanInput } from "@/components/admin/boolean-input";
import { Edit } from "@/components/admin/edit";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const Mcc_mncEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="mcc" />
            <TextInput source="mnc" />
            <TextInput source="prefix" />
            <TextInput source="created_at" />
            <TextInput source="updated_at" />
            <TextInput source="country" />
            <BooleanInput source="is_deleted" />
        </SimpleForm>
    </Edit>
);