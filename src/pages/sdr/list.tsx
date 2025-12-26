import { DataTable } from "@/components/admin/data-table";
import { DateField, List, SelectField } from "@/components/admin";
import { ReferenceField } from "@/components/admin/reference-field";

export const SdrList = () => (
    <List sort={{ field: "created_at", order: "DESC" }} loading={<>Loading...</> }>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="created_at" />

            <DataTable.Col source="customer_id">
                <ReferenceField source="customer_id" reference="customer" />
            </DataTable.Col>
            <DataTable.Col source="task_id">
                <ReferenceField source="task_id" reference="task" link={false}/>
            </DataTable.Col>
            <DataTable.Col source="receiver" />
            <DataTable.Col source="sender" />
            <DataTable.Col source="mcc_mnc_id">
                <ReferenceField source="mcc_mnc_id" reference="mcc_mnc" />
            </DataTable.Col>
            <DataTable.Col source="send_result" />
            <DataTable.Col source="send_result">
                <SelectField source="send_result" optionText="name" optionValue="_id"
                    choices={[
                        { _id: 0, name: 'waiting' },
                        { _id: 1, name: 'sending' },
                        { _id: 2, name: 'success' },
                        { _id: 3, name: 'failed' },
                    ]}
                    className="status-field"
                />
            </DataTable.Col>
            <DataTable.Col source="send_fail_reason" />
            <DataTable.Col source="deliver_at" />
            <DataTable.Col source="deliver_result">
            <SelectField source="deliver_result" optionText="name" optionValue="_id"
                    choices={[
                        { _id: 0, name: 'none' },
                        { _id: 1, name: 'pending' },
                        { _id: 2, name: 'delivered' },
                        { _id: 3, name: 'failed' },
                        { _id: 4, name: 'failed' },
                        { _id: 5, name: 'failed' },
                        { _id: 6, name: 'failed' },
                        { _id: 7, name: 'failed' },
                        { _id: 8, name: 'rejected' },
                    ]}
                    className="status-field"
                />
            </DataTable.Col>
            <DataTable.Col source="deliver_fail_reason" />
            <DataTable.Col source="out_msg_id" />
            <DataTable.Col source="charging_num" />
            <DataTable.Col source="msg_text" />
            <DataTable.Col source="source_ip" />
            <DataTable.Col source="channel_type" />
            <DataTable.Col source="route_id">
                <ReferenceField source="route_id" reference="routing" />
            </DataTable.Col>
            <DataTable.Col source="channel_id">
                <ReferenceField source="channel_id" reference="channel" />
            </DataTable.Col>
            <DataTable.Col source="dev_port" />
            <DataTable.Col source="send_at" />
            <DataTable.Col source="source_type" />
            <DataTable.Col source="tenant_id">
                <ReferenceField source="tenant_id" reference="tenant" />
            </DataTable.Col>
            <DataTable.Col source="supplier_id">
                <ReferenceField source="supplier_id" reference="supplier" />
            </DataTable.Col>
            <DataTable.Col source="customer_sales_id">
                <ReferenceField source="customer_sales_id" reference="user" />
            </DataTable.Col>
            <DataTable.Col source="tenant_cost" />
            <DataTable.Col source="customer_cost" />
            <DataTable.Col source="supplier_cost" />
            <DataTable.Col source="supplier_sales_id">
                <ReferenceField source="supplier_sales_id" reference="user" />
            </DataTable.Col>
            <DataTable.Col source="sms_type" />
        </DataTable>
    </List>
);