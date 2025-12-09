import { NumberInput } from "@/components/admin";
import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { BooleanInput } from "@/components/admin/boolean-input";
import { Create } from "@/components/admin/create";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const ChannelCreate = () => (
    <Create>
        <SimpleForm className="grid grid-cols-3 gap-4">
        <TextInput source="name" />
            <NumberInput source="status" />
            <NumberInput source="sessions" />
            <NumberInput source="connections" />
            <NumberInput source="type" />

            <TextInput source="username" />
            <TextInput source="password" />
            <TextInput source="peer_ip" />
            <NumberInput source="peer_port" />
            <TextInput source="allowed_prefixes" />
            <TextInput source="restricted_prefixes" />
            <TextInput source="allowed_senders" />
            <TextInput source="restricted_senders" />
            <TextInput source="description" />
            <NumberInput source="rate_limit" />
            <NumberInput source="request_expiry_timeout" defaultValue={30}/>
            <NumberInput source="window_size" defaultValue={600}/>
            <NumberInput source="data_coding" defaultValue={-1}/>
            <TextInput source="counting_rule" />
            <NumberInput source="dst_ton" defaultValue={-1}/>
            <NumberInput source="dst_npi" defaultValue={-1}/>
            <NumberInput source="src_ton" defaultValue={-1}/>
            <NumberInput source="src_npi" defaultValue={-1}/>
            <TextInput source="dev_mac" />
            <TextInput source="connect_at" />
            <TextInput source="http_type" />
            <NumberInput source="billing_rule" defaultValue={0}/>
            <NumberInput source="submit_threshold" defaultValue={600}/>
            <NumberInput source="deliver_threshold" defaultValue={600}/>
            <TextInput source="sender" />
            <ReferenceInput source="supplier_id" reference="supplier">
                  <AutocompleteInput />
              </ReferenceInput>
        </SimpleForm>
    </Create>
);