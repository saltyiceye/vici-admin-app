import { DateField } from "@/components/admin/date-field";
import { NumberField } from "@/components/admin/number-field";
import { RecordField } from "@/components/admin/record-field";
import { ReferenceField } from "@/components/admin/reference-field";
import { Show } from "@/components/admin/show";

export const SdrShow = () => (
    <Show>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
                <RecordField source="id">
                    <NumberField source="id" />
                </RecordField>
                <RecordField source="created_at">
                    <DateField source="created_at" />
                </RecordField>
                <RecordField source="task_id">
                    <ReferenceField source="task_id" reference="task" />
                </RecordField>
                <RecordField source="customer_id">
                    <ReferenceField source="customer_id" reference="customer" />
                </RecordField>
                <RecordField source="source_type">
                    <NumberField source="source_type" />
                </RecordField>
                <RecordField source="receiver" />
                <RecordField source="sender" />
                <RecordField source="mcc">
                    <NumberField source="mcc" />
                </RecordField>
                <RecordField source="mnc">
                    <NumberField source="mnc" />
                </RecordField>
                <RecordField source="mcc_mnc_id">
                    <ReferenceField source="mcc_mnc_id" reference="mcc_mnc" />
                </RecordField>
                <RecordField source="msg_text" />
                <RecordField source="source_ip" />
                <RecordField source="src_ton">
                    <NumberField source="src_ton" />
                </RecordField>
                <RecordField source="src_npi">
                    <NumberField source="src_npi" />
                </RecordField>
                <RecordField source="dst_ton">
                    <NumberField source="dst_ton" />
                </RecordField>
                <RecordField source="dst_npi">
                    <NumberField source="dst_npi" />
                </RecordField>
            </div>

            <div className="space-y-4">
                <RecordField source="channel_type">
                    <NumberField source="channel_type" />
                </RecordField>
                <RecordField source="route_id">
                    <ReferenceField source="route_id" reference="routing" />
                </RecordField>
                <RecordField source="charging_num">
                    <NumberField source="charging_num" />
                </RecordField>
                <RecordField source="channel_id">
                    <ReferenceField source="channel_id" reference="channel" />
                </RecordField>
                <RecordField source="dev_port">
                    <NumberField source="dev_port" />
                </RecordField>
                <RecordField source="send_at" />
                <RecordField source="customer_rate">
                    <NumberField source="customer_rate" />
                </RecordField>
                <RecordField source="supplier_rate">
                    <NumberField source="supplier_rate" />
                </RecordField>
                <RecordField source="out_msg_id" />
                <RecordField source="send_result">
                    <NumberField source="send_result" />
                </RecordField>
                <RecordField source="send_fail_reason" />
                <RecordField source="deliver_at">
                    <DateField source="deliver_at" />
                </RecordField>
                <RecordField source="deliver_result">
                    <NumberField source="deliver_result" />
                </RecordField>
                <RecordField source="deliver_fail_reason" />
                <RecordField source="tenant_id">
                    <ReferenceField source="tenant_id" reference="tenant" />
                </RecordField>
                <RecordField source="supplier_id">
                    <ReferenceField source="supplier_id" reference="supplier" />
                </RecordField>
                <RecordField source="customer_sales_id">
                    <ReferenceField source="customer_sales_id" reference="user" />
                </RecordField>
                <RecordField source="tenant_rate">
                    <NumberField source="tenant_rate" />
                </RecordField>
                <RecordField source="tenant_cost">
                    <NumberField source="tenant_cost" />
                </RecordField>
                <RecordField source="customer_cost">
                    <NumberField source="customer_cost" />
                </RecordField>
                <RecordField source="supplier_cost">
                    <NumberField source="supplier_cost" />
                </RecordField>
                <RecordField source="supplier_sales_id">
                    <ReferenceField source="supplier_sales_id" reference="user" />
                </RecordField>
                <RecordField source="sms_type">
                    <DateField source="sms_type" />
                </RecordField>
            </div>
        </div>
    </Show>
);