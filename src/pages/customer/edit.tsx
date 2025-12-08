import { BooleanInput, NumberInput } from "@/components/admin";
import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { Edit } from "@/components/admin/edit";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const CustomerEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="name" />
            <ReferenceInput source="role_id" reference="role">
                  <AutocompleteInput />
              </ReferenceInput>
            <NumberInput source="balance" />
            <NumberInput source="overdraft_limit" />
            <TextInput source="email" />
            <BooleanInput source="smpp_switch" />
            <BooleanInput source="http_switch" />
            <BooleanInput source="web_switch" />
            <BooleanInput source="ai_switch" />
            <NumberInput source="billing_rule" />
            <TextInput source="counting_rule" />
            <ReferenceInput source="sales_id" reference="user">
                  <AutocompleteInput />
              </ReferenceInput>
            <NumberInput source="submit_speed" />
            <TextInput source="smpp_password" />
            <TextInput source="smpp_system_id" />
            <TextInput source="sender" />
            <TextInput source="ai_type" />
            <ReferenceInput source="tenant_id" reference="tenant">
                  <AutocompleteInput />
              </ReferenceInput>
                          <TextInput source="description" />

        </SimpleForm>
    </Edit>
);