
import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const ChannelList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="name" />
            <DataTable.Col source="enable" />
            <DataTable.Col source="status" />
            <DataTable.Col source="sessions" />
            <DataTable.Col source="connections" />
            <DataTable.Col source="type" />
            <DataTable.Col source="peer_ip" />
            <DataTable.Col source="peer_port" />
            <DataTable.Col source="username" />
            <DataTable.Col source="password" />
            <DataTable.Col source="allowed_prefixes" />
            <DataTable.Col source="restricted_prefixes" />
            <DataTable.Col source="allowed_senders" />
            <DataTable.Col source="restricted_senders" />
            <DataTable.Col source="description" />
            <DataTable.Col source="rate_limit" />
            <DataTable.Col source="request_expiry_timeout" />
            <DataTable.Col source="window_size" />
            <DataTable.Col source="data_coding" />
            <DataTable.Col source="counting_rule" />
            <DataTable.Col source="dst_ton" />
            <DataTable.Col source="dst_npi" />
            <DataTable.Col source="src_ton" />
            <DataTable.Col source="src_npi" />
            <DataTable.Col source="created_at" />
            <DataTable.Col source="dev_mac" />
            <DataTable.Col source="connect_at" />
            <DataTable.Col source="http_type" />
            <DataTable.Col source="billing_rule" />
            <DataTable.Col source="balance" />
            <DataTable.Col source="overdraft_limit" />
            <DataTable.Col source="submit_threshold" />
            <DataTable.Col source="deliver_threshold" />
            <DataTable.Col source="sender" />
            <DataTable.Col source="is_deleted" />
            <DataTable.Col source="supplier_id">
                <ReferenceField source="supplier_id" reference="supplier" />
            </DataTable.Col>
        </DataTable>
    </List>
);