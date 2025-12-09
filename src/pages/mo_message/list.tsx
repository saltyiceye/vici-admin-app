import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const Mo_messageList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="channel_id">
                <ReferenceField source="channel_id" reference="channel" />
            </DataTable.Col>
            <DataTable.Col source="customer_id">
                <ReferenceField source="customer_id" reference="customer" />
            </DataTable.Col>
            <DataTable.Col source="sender" />
            <DataTable.Col source="receiver" />
            <DataTable.Col source="content" />
            <DataTable.Col source="status" />
            <DataTable.Col source="ai_trace_id" />
            <DataTable.Col source="created_at" />

            <DataTable.Col source="type" />
            <DataTable.Col source="tenant_id">
                <ReferenceField source="tenant_id" reference="tenant" />
            </DataTable.Col>
            <DataTable.Col source="session_id">
                <ReferenceField source="session_id" reference="chat" />
            </DataTable.Col>
            <DataTable.Col source="agent_id">
                <ReferenceField source="agent_id" reference="agents" />
            </DataTable.Col>
        </DataTable>
    </List>
);