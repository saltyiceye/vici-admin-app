import { DateField } from "@/components/admin/date-field";
import { NumberField } from "@/components/admin/number-field";
import { RecordField } from "@/components/admin/record-field";
import { ReferenceField } from "@/components/admin/reference-field";
import { Show } from "@/components/admin/show";
import { ReferenceManyField } from "@/components/admin/reference-many-field";
import { DataTable } from "@/components/admin/data-table";

export const CustomerShow = () => (
    <Show>
        <div className="flex flex-row gap-4 flex-wrap">
            <RecordField source="id">
                <NumberField source="id" />
            </RecordField>
            <RecordField source="username" />
            <RecordField source="name" />
            <RecordField source="created_at">
                <DateField source="created_at" />
            </RecordField>
            <RecordField source="email" />
            <RecordField source="balance">
                <DateField source="balance" />
            </RecordField>
            <RecordField source="overdraft_limit">
                <DateField source="overdraft_limit" />
            </RecordField>
            <RecordField source="billing_rule" />
            <RecordField source="counting_rule" />
            <RecordField source="profit_threshold">
                <DateField source="profit_threshold" />
            </RecordField>
            <RecordField source="encoding_method">
                <DateField source="encoding_method" />
            </RecordField>
            <RecordField source="smpp_switch">
                <DateField source="smpp_switch" />
            </RecordField>
            <RecordField source="http_switch">
                <DateField source="http_switch" />
            </RecordField>
            <RecordField source="web_switch">
                <DateField source="web_switch" />
            </RecordField>
            <RecordField source="ai_switch">
                <DateField source="ai_switch" />
            </RecordField>
            <RecordField source="send_speed">
                <NumberField source="send_speed" />
            </RecordField>
            <RecordField source="is_deleted">
                <DateField source="is_deleted" />
            </RecordField>
            <RecordField source="role_id">
                <ReferenceField source="role_id" reference="role" />
            </RecordField>
            <RecordField source="description" />
            <RecordField source="status">
                <DateField source="status" />
            </RecordField>
            <RecordField source="submit_speed">
                <NumberField source="submit_speed" />
            </RecordField>
            <RecordField source="smpp_password" />
            <RecordField source="smpp_connections">
                <DateField source="smpp_connections" />
            </RecordField>
            <RecordField source="smpp_system_id" />

            <RecordField source="sender" />
            <RecordField source="ai_type">
                <NumberField source="ai_type" />
            </RecordField>
            <RecordField source="tenant_id">
                <ReferenceField source="tenant_id" reference="tenant" />
            </RecordField>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <ReferenceManyField reference="customer_fee" target="customer_id">
                <DataTable>
                    <DataTable.Col source="id" />
                    <DataTable.Col source="fee" />
                    <DataTable.Col source="created_at" />
                </DataTable>
            </ReferenceManyField>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <ReferenceManyField reference="routing" target="id">
                <DataTable>
                    <DataTable.Col source="id" />
                    <DataTable.Col source="name" />
                    <DataTable.Col source="created_at" />
                </DataTable>
            </ReferenceManyField>
        </div>
    </Show>
);