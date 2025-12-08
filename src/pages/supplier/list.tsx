import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const SupplierList = () => (
    <List>
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
            <DataTable.Col source="billing_rule" />
            <DataTable.Col source="description" />
            <DataTable.Col source="sales_id">
                <ReferenceField source="sales_id" reference="user" />
            </DataTable.Col>
        </DataTable>
    </List>
);