import { AutocompleteArrayInput, ReferenceArrayInput } from "@/components/admin";
import { Edit } from "@/components/admin/edit";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const RoleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <ReferenceArrayInput source="permissions" reference="permission">
                <AutocompleteArrayInput label="Permissions" filterToQuery={(searchText: string) => ({ resource_q: searchText })}/>
            </ReferenceArrayInput> 
        </SimpleForm>
    </Edit>
);