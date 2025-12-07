import { DateField } from "@/components/admin/date-field";
import { NumberField } from "@/components/admin/number-field";
import { RecordField } from "@/components/admin/record-field";
import { Show } from "@/components/admin/show";
import { ReferenceArrayField } from "@/components/admin";

export const RoutingShow = () => (
    <Show>
        <div className="flex flex-row gap-4 flex-wrap">
            <RecordField source="id">
                <NumberField source="id" />
            </RecordField>
            <RecordField source="name" />
            <RecordField source="created_at">
                <DateField source="created_at" />
            </RecordField>
            <RecordField source="strategy_id" />
            <RecordField source="creator">
                <NumberField source="creator" />
            </RecordField>
            <RecordField source="description" />
            <RecordField source="priority">
                <DateField source="priority" />
            </RecordField>
        </div>

        <div className="flex flex-col gap-4 mt-4">
                <ReferenceArrayField reference="customer" source="customers" />

        </div>
        <div className="flex flex-col gap-4 mt-4">
                <ReferenceArrayField reference="channel" source="channels" />

        </div>
                <div className="flex flex-col gap-4 mt-4">
                <ReferenceArrayField reference="mcc_mnc" source="mcc_mnc" />

        </div>
    </Show>
);