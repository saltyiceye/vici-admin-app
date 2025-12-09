import { Edit } from "@/components/admin/edit";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const Content_ruleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="original_content" />
            <TextInput source="replacement_content" />
            <TextInput source="type" />
            <TextInput source="entity_id" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);