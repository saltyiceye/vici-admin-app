import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const TaskList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="customer_id">
                <ReferenceField source="customer_id" reference="customer" />
            </DataTable.Col>
            <DataTable.Col source="name" />
            <DataTable.Col source="status" />
            <DataTable.Col source="created_at" />
            <DataTable.Col source="submit_count" />
            <DataTable.Col source="submited_count" />
            <DataTable.Col source="delivered_count" />
            <DataTable.Col source="failed_count" />
            <DataTable.Col source="reply_count" />
            <DataTable.Col source="sms_content" />
            <DataTable.Col source="tenant_id">
                <ReferenceField source="tenant_id" reference="tenant" />
            </DataTable.Col>
            <DataTable.Col source="description" />
            <DataTable.Col source="submit_result" />
        </DataTable>
    </List>
);