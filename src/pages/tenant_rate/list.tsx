import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const TenantRateList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="tenant_id">
                <ReferenceField source="tenant_id" reference="tenant" />
            </DataTable.Col>
            <DataTable.Col source="mcc_mnc_id">
                <ReferenceField source="mcc_mnc_id" reference="mcc_mnc" />
            </DataTable.Col>
            <DataTable.Col source="price" />
            <DataTable.Col source="created_at" />
            <DataTable.Col source="description" />
            <DataTable.Col source="is_deleted" />
        </DataTable>
    </List>
);