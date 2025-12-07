import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { BooleanInput } from "@/components/admin/boolean-input";
import { Create } from "@/components/admin/create";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const ChannelCreate = () => (
    <Create>
        <SimpleForm>
        <div className="flex flex-row gap-4 flex-wrap">
            <TextInput source="name" />
            <TextInput source="enable" />
            <TextInput source="status" />
            <TextInput source="sessions" />
            <TextInput source="connections" />
            <TextInput source="type" />
            <TextInput source="peer_ip" />
            <TextInput source="peer_port" />
            <TextInput source="username" />
            <TextInput source="password" />
            <TextInput source="allowed_prefixes" />
            <TextInput source="restricted_prefixes" />
            <TextInput source="allowed_senders" />
            <TextInput source="restricted_senders" />
            <TextInput source="description" />
            <TextInput source="rate_limit" />
            <TextInput source="request_expiry_timeout" />
            <TextInput source="window_size" />
            <TextInput source="data_coding" />
            <TextInput source="counting_rule" />
            <TextInput source="dst_ton" />
            <TextInput source="dst_npi" />
            <TextInput source="src_ton" />
            <TextInput source="src_npi" />
            <TextInput source="created_at" />
            <TextInput source="dev_mac" />
            <TextInput source="connect_at" />
            <TextInput source="http_type" />
            <TextInput source="billing_rule" />
            <TextInput source="balance" />
            <TextInput source="overdraft_limit" />
            <TextInput source="submit_threshold" />
            <TextInput source="deliver_threshold" />
            <TextInput source="sender" />
            <BooleanInput source="is_deleted" />
            <ReferenceInput source="supplier_id" reference="supplier">
                  <AutocompleteInput />
              </ReferenceInput>
        </div>
        </SimpleForm>
    </Create>
);