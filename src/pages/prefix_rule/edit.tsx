import { Edit } from "@/components/admin/edit";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const PrefixRuleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="original_prefix" />
            <TextInput source="replacement_prefix" />
            <TextInput source="type" />
            <TextInput source="entity_id" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);