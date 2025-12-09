import { Edit, NumberInput, SelectInput } from "@/components/admin";
import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { BooleanInput } from "@/components/admin/boolean-input";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";

export const ChannelEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <BooleanInput source="enable" />
            <NumberInput source="status" />
            <NumberInput source="sessions" />
            <NumberInput source="connections" />
            <NumberInput source="type" />
            <SelectInput source="type" optionText={"name"} optionValue={"_id"} choices={[
                { _id: 0, name: 'Smpp' },
                { _id: 1, name: 'Device' },
                { _id: 2, name: 'Http' },
            ]} />
            <TextInput source="peer_ip" />
            <NumberInput source="peer_port" />
            <TextInput source="username" />
            <TextInput source="password" />
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
            <NumberInput source="request_expiry_timeout" />
            <NumberInput source="window_size" />
            <NumberInput source="data_coding" />
            <TextInput source="counting_rule" />
            <NumberInput source="dst_ton" />
            <NumberInput source="dst_npi" />
            <NumberInput source="src_ton" />
            <NumberInput source="src_npi" />
            <TextInput source="dev_mac" />
            <TextInput source="connect_at" />
            <NumberInput source="http_type" />
            <TextInput source="billing_rule" />
            <NumberInput source="submit_threshold" />
            <NumberInput source="deliver_threshold" />
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
    </Edit>
);