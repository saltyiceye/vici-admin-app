import { DateField } from "@/components/admin/date-field";
import { NumberField } from "@/components/admin/number-field";
import { RecordField } from "@/components/admin/record-field";
import { ReferenceField } from "@/components/admin/reference-field";
import { Show } from "@/components/admin/show";

export const PaymentShow = () => (
    <Show>
        <div className="flex flex-col gap-4">
            <RecordField source="id">
                <NumberField source="id" />
            </RecordField>
            <RecordField source="scope" />
            <RecordField source="scope_id">
                <NumberField source="scope_id" />
            </RecordField>
            <RecordField source="balance">
                <NumberField source="balance" />
            </RecordField>
            <RecordField source="current_balance">
                <NumberField source="current_balance" />
            </RecordField>
            <RecordField source="creator_id">
                <ReferenceField source="creator_id" reference="user" />
            </RecordField>
            <RecordField source="description" />
            <RecordField source="created_at">
                <DateField source="created_at" />
            </RecordField>
        </div>
    </Show>
);