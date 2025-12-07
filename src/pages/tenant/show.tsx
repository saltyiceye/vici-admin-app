
import { DateField } from "@/components/admin/date-field";
import { NumberField } from "@/components/admin/number-field";
import { RecordField } from "@/components/admin/record-field";
import { Show } from "@/components/admin/show";
import { ReferenceManyField } from "@/components/admin/reference-many-field";
import { DataTable } from "@/components/admin/data-table";

export const TenantShow = () => (
    <Show>
        <div className="flex flex-row gap-4 flex-wrap">
            <RecordField source="id">
                <NumberField source="id" />
            </RecordField>
            <RecordField source="name" />
            <RecordField source="created_at">
                <DateField source="created_at" />
            </RecordField>
            <RecordField source="description" />
            <RecordField source="status">
                <NumberField source="status" />
            </RecordField>
            
        </div>
        <h4>Customers</h4>
        <div className="flex flex-col gap-4 mt-4">
        <ReferenceManyField reference="customer" target="tenant_id">
                <DataTable>
                    <DataTable.Col source="id" />
                    <DataTable.Col source="username" />
                    <DataTable.Col source="name" />
                    <DataTable.Col source="created_at" />
                    <DataTable.Col source="email" />
                    <DataTable.Col source="balance" />
                    <DataTable.Col source="overdraft_limit" />
                    <DataTable.Col source="billing_rule" />
                    <DataTable.Col source="counting_rule" />
                    <DataTable.Col source="profit_threshold" />
                    <DataTable.Col source="encoding_method" />
                    <DataTable.Col source="smpp_switch" />
                    <DataTable.Col source="http_switch" />
                    <DataTable.Col source="web_switch" />
                    <DataTable.Col source="ai_switch" />
                    <DataTable.Col source="send_speed" />
                    <DataTable.Col source="is_deleted" />
                    <DataTable.Col source="role_id" />
                    <DataTable.Col source="description" />
                    <DataTable.Col source="status" />
                    <DataTable.Col source="submit_speed" />
                    <DataTable.Col source="smpp_password" />
                    <DataTable.Col source="smpp_connections" />
                    <DataTable.Col source="smpp_system_id" />
                    <DataTable.Col source="sender" />
                    <DataTable.Col source="ai_type" />
                </DataTable>
            </ReferenceManyField>
        </div>
        <h4>Tenant Rate</h4>
        <div className="flex flex-col gap-4 mt-4">
            <ReferenceManyField reference="tenant_rate" target="tenant_id">
                <DataTable>
                    <DataTable.Col source="id" />
                    <DataTable.Col source="price" />
                    <DataTable.Col source="created_at" />
                </DataTable>
            </ReferenceManyField>
        </div>
    </Show>
);