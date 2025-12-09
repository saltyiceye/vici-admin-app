import { Edit } from "@/components/admin/edit";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const PermissionEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="resource" />
            <TextInput source="permission_name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);