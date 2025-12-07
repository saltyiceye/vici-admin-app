import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

export const Routing_mcc_mncList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="routing_id">
                <ReferenceField source="routing_id" reference="routing" />
            </DataTable.Col>
            <DataTable.Col source="mcc_mnc_id">
                <ReferenceField source="mcc_mnc_id" reference="mcc_mnc" />
            </DataTable.Col>
            <DataTable.Col source="id" />
        </DataTable>
    </List>
);