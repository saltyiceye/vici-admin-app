import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const ChatList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="customer_id">
                <ReferenceField source="customer_id" reference="customer" />
            </DataTable.Col>
            <DataTable.Col source="receiver" />
            <DataTable.Col source="tenant_id">
                <ReferenceField source="tenant_id" reference="tenant" />
            </DataTable.Col>
            <DataTable.Col source="task_id">
                <ReferenceField source="task_id" reference="task" />
            </DataTable.Col>
            <DataTable.Col source="agent_id">
                <ReferenceField source="agent_id" reference="agent" />
            </DataTable.Col>
            <DataTable.Col source="unanswered" />
            <DataTable.Col source="channel_id">
                <ReferenceField source="channel_id" reference="channels" />
            </DataTable.Col>
            <DataTable.Col source="dev_port" />
            <DataTable.Col source="created_at" />
        </DataTable>
    </List>
);