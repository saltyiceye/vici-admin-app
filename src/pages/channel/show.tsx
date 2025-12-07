import { DateField } from "@/components/admin/date-field";
import { NumberField } from "@/components/admin/number-field";
import { RecordField } from "@/components/admin/record-field";
import { Show } from "@/components/admin/show";
import { ReferenceField } from "@/components/admin/reference-field";

export const ChannelShow = () => (
    <Show>
        <div className="flex flex-row gap-4 flex-wrap">
            <RecordField source="id">
                <NumberField source="id" />
            </RecordField>
            <RecordField source="supplier_id">
                <ReferenceField source="supplier_id" reference="suppliers" />
            </RecordField>
            <RecordField source="name" />
            <RecordField source="enable">
                <DateField source="enable" />
            </RecordField>
            <RecordField source="status">
                <NumberField source="status" />
            </RecordField>
            <RecordField source="sessions">
                <NumberField source="sessions" />
            </RecordField>
            <RecordField source="connections">
                <DateField source="connections" />
            </RecordField>
            <RecordField source="type">
                <DateField source="type" />
            </RecordField>
            <RecordField source="peer_ip" />
            <RecordField source="peer_port">
                <NumberField source="peer_port" />
            </RecordField>
            <RecordField source="username" />
            <RecordField source="password" />
            <RecordField source="allowed_prefixes" />
            <RecordField source="restricted_prefixes" />
            <RecordField source="allowed_senders" />
            <RecordField source="restricted_senders" />
            <RecordField source="description" />
            <RecordField source="rate_limit">
                <NumberField source="rate_limit" />
            </RecordField>
            <RecordField source="request_expiry_timeout">
                <NumberField source="request_expiry_timeout" />
            </RecordField>
            <RecordField source="window_size">
                <NumberField source="window_size" />
            </RecordField>
            <RecordField source="data_coding">
                <NumberField source="data_coding" />
            </RecordField>
            <RecordField source="counting_rule" />
            <RecordField source="dst_ton">
                <NumberField source="dst_ton" />
            </RecordField>
            <RecordField source="dst_npi">
                <NumberField source="dst_npi" />
            </RecordField>
            <RecordField source="src_ton">
                <NumberField source="src_ton" />
            </RecordField>
            <RecordField source="src_npi">
                <NumberField source="src_npi" />
            </RecordField>
            <RecordField source="created_at">
                <DateField source="created_at" />
            </RecordField>
            <RecordField source="dev_mac" />
            <RecordField source="connect_at" />
            <RecordField source="http_type" />
            <RecordField source="billing_rule">
                <DateField source="billing_rule" />
            </RecordField>
            <RecordField source="balance">
                <DateField source="balance" />
            </RecordField>
            <RecordField source="overdraft_limit">
                <DateField source="overdraft_limit" />
            </RecordField>
            <RecordField source="submit_threshold">
                <DateField source="submit_threshold" />
            </RecordField>
            <RecordField source="deliver_threshold">
                <DateField source="deliver_threshold" />
            </RecordField>
            <RecordField source="sender" />
            {/* <RecordField source="is_deleted" render={record => record[is_deleted] ? 'Yes' : 'No'} /> */}
        </div>
    </Show>
);