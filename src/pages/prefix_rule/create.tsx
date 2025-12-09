import { Create } from "@/components/admin";
import { Edit } from "@/components/admin/edit";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const PrefixRuleCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="original_prefix" />
            <TextInput source="replacement_prefix" />
            <TextInput source="type" />
            <TextInput source="entity_id" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);