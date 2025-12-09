import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { Edit } from "@/components/admin/edit";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const Routing_channelEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="routing_id" reference="routing">
                  <AutocompleteInput />
              </ReferenceInput>
            <ReferenceInput source="channel_id" reference="channel">
                  <AutocompleteInput />
              </ReferenceInput>
        </SimpleForm>
    </Edit>
);