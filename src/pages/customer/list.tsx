import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const CustomerList = () => (
    <List resource="customer" title="Customers">
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="username" />
            <DataTable.Col source="name" />
            <DataTable.Col source="role_id">
                <ReferenceField source="role_id" reference="role" />
            </DataTable.Col>
            <DataTable.Col source="balance" />
            <DataTable.Col source="overdraft_limit" />
            <DataTable.Col source="email" />
            <DataTable.Col source="smpp_switch" />
            <DataTable.Col source="http_switch" />
            <DataTable.Col source="web_switch" />
            <DataTable.Col source="ai_switch" />
            <DataTable.Col source="billing_rule" />
            <DataTable.Col source="counting_rule" />
            <DataTable.Col source="description" />
            <DataTable.Col source="sales_id">
                <ReferenceField source="sales_id" reference="sales" />
            </DataTable.Col>
            <DataTable.Col source="submit_speed" />
            <DataTable.Col source="smpp_password" />
            <DataTable.Col source="smpp_connections" />
            <DataTable.Col source="smpp_system_id" />
            <DataTable.Col source="sender" />
            <DataTable.Col source="ai_type" />
            <DataTable.Col source="tenant_id">
                <ReferenceField source="tenant_id" reference="tenant" />
            </DataTable.Col>
        </DataTable>
    </List>
);