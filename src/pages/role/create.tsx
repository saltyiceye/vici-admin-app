import { Create,ReferenceArrayInput, AutocompleteArrayInput } from "@/components/admin";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const RoleCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <ReferenceArrayInput source="permissions" reference="permission">
                <AutocompleteArrayInput label="Permissions" filterToQuery={(searchText: string) => ({ resource_q: searchText })}/>
            </ReferenceArrayInput> 
        </SimpleForm>
    </Create>
);