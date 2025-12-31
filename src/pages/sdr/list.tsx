import { DataTable } from "@/components/admin/data-table";
import { AutocompleteInput, DateTimeInput, DateField, List, SelectField, TextInput, ReferenceInput } from "@/components/admin";
import { ReferenceField } from "@/components/admin/reference-field";
import { LongTextField } from "@/components/field/LongTextField";

const sdrFilters = [
    <DateTimeInput source="created_at_gte" alwaysOn label={false} />,
    <DateTimeInput source="created_at_lte" alwaysOn label={false} />,
    <TextInput source="msg_id" alwaysOn placeholder="MsgId" label={false} />,
    <TextInput source="receiver" alwaysOn placeholder="Number" label={false} />,
    <ReferenceInput label={false} source="mcc_mnc_id" reference="mcc_mnc" alwaysOn>
        <AutocompleteInput label={false} placeholder="MCC_MNC" />
    </ReferenceInput>,
    <AutocompleteInput
        source="send_result"
        optionText="name"
        optionValue="_id"
        choices={[
            { _id: 0, name: 'Waiting' },
            { _id: 1, name: 'Sending' },
            { _id: 2, name: 'Success' },
            { _id: 3, name: 'Failed' },
        ]}
        alwaysOn
        label={false}
        placeholder="Send Result"
    />,
    <AutocompleteInput
        source="deliver_result"
        optionText="name"
        optionValue="_id"
        choices={[
            { _id: 0, name: 'None' },
            { _id: 1, name: 'Pending' },
            { _id: 2, name: 'Delivered' },
            { _id: 3, name: 'Failed' },
            { _id: 8, name: 'Rejected' },
        ]}
        alwaysOn
        label={false}
        placeholder="Deliver Result"
    />,
    <ReferenceInput label={false} source="tenant_id" reference="tenant" alwaysOn>
        <AutocompleteInput label={false} placeholder="Tenant" />
    </ReferenceInput>,
    <ReferenceInput label={false} source="customer_id" reference="customer" alwaysOn>
        <AutocompleteInput label={false} placeholder="Customer" />
    </ReferenceInput>,
    <ReferenceInput label={false} source="agent_id" reference="agent" alwaysOn>
        <AutocompleteInput label={false} placeholder="Agent" />
    </ReferenceInput>,

    <ReferenceInput label={false} source="route_id" reference="routing" alwaysOn >
        <AutocompleteInput label={false} placeholder="Routing" />
    </ReferenceInput>,
    <ReferenceInput label={false} source="channel_id" reference="channel" alwaysOn>
        <AutocompleteInput label={false} placeholder="Channel" />
    </ReferenceInput>,

];

export const SdrList = () => (
    <List filters={sdrFilters} sort={{ field: "created_at", order: "DESC" }} loading={<>Loading...</>}>
        <DataTable loading={<>Loading...</>} rowClick={false} bulkActionButtons={false}>
            <DataTable.Col source="created_at">
                <DateField source="created_at" showTime={true} />
            </DataTable.Col>
            <DataTable.Col source="customer_id">
                <ReferenceField source="customer_id" reference="customer" link={false} />
            </DataTable.Col>

            <DataTable.Col source="receiver" />
            <DataTable.Col source="sender" />
            <DataTable.Col source="mcc_mnc_id">
                <ReferenceField source="mcc_mnc_id" reference="mcc_mnc" link={false} />
            </DataTable.Col>
            <DataTable.Col source="send_result">
                <SelectField source="send_result" optionText="name" optionValue="_id"
                    choices={[
                        { _id: 0, name: 'Waiting' },
                        { _id: 1, name: 'Sending' },
                        { _id: 2, name: 'Success' },
                        { _id: 3, name: 'Failed' },
                    ]}
                    className="status-field"
                />
            </DataTable.Col>

            <DataTable.Col source="deliver_result">
                <SelectField source="deliver_result" optionText="name" optionValue="_id"
                    choices={[
                        { _id: 0, name: 'None' },
                        { _id: 1, name: 'Pending' },
                        { _id: 2, name: 'Delivered' },
                        { _id: 3, name: 'Failed' },
                        { _id: 8, name: 'Rejected' },
                    ]}
                    className="status-field"
                />
            </DataTable.Col>
            <DataTable.Col source="deliver_at" >
                <DateField source="deliver_at" showTime={true} />
            </DataTable.Col>
            <DataTable.Col source="send_fail_reason" />
            <DataTable.Col source="deliver_fail_reason" />
            <DataTable.Col source="id" label="Msg id" />
            <DataTable.Col source="out_msg_id" label="Out msg id" />
            <DataTable.Col source="charging_num" />
            <DataTable.Col source="msg_text">
                <LongTextField source="msg_text" />
            </DataTable.Col>
            <DataTable.Col source="task_id">
                <ReferenceField source="task_id" reference="task" link={false} />
            </DataTable.Col>
            <DataTable.Col source="source_ip" />
            <DataTable.Col source="channel_type">
                <SelectField source="channel_type" optionText="name" optionValue="_id"
                    choices={[
                        { _id: 0, name: 'SMPP' },
                        { _id: 1, name: 'DEVICE' },
                        { _id: 2, name: 'HTTP' }
                    ]}
                    className="status-field"
                />
            </DataTable.Col>
            {/* <DataTable.Col source="route_id">
                <ReferenceField source="route_id" reference="routing" link={false}/>
            </DataTable.Col>
            <DataTable.Col source="channel_id">
                <ReferenceField source="channel_id" reference="channel" link={false}/>
            </DataTable.Col> */}
            <DataTable.Col source="dev_port" />
            <DataTable.Col source="send_at" >
                <DateField source="send_at" showTime={true} />
            </DataTable.Col>
            <DataTable.Col source="source_type" >
                <SelectField 
                    source="source_type" optionText="name" optionValue="_id"
                    choices={[
                        { _id: 0, name: 'SMPP' },
                        { _id: 1, name: 'WEB' },
                        { _id: 2, name: 'HTTP' }
                    ]}
                    className="status-field"
                />
            </DataTable.Col>
            {/* <DataTable.Col source="tenant_id">
                <ReferenceField source="tenant_id" reference="tenant" link={false}/>
            </DataTable.Col>
            <DataTable.Col source="supplier_id">
                <ReferenceField source="supplier_id" reference="supplier" link={false}/>
            </DataTable.Col>
            <DataTable.Col source="customer_sales_id">
                <ReferenceField source="customer_sales_id" reference="user" link={false}/>
            </DataTable.Col> */}
            <DataTable.Col source="tenant_cost" />
            <DataTable.Col source="customer_cost" />
            <DataTable.Col source="supplier_cost" />
            {/* <DataTable.Col source="supplier_sales_id">
                <ReferenceField source="supplier_sales_id" reference="user" link={false}/>
            </DataTable.Col> */}
            <DataTable.Col source="sms_type" >
                <SelectField source="sms_type" optionText="name" optionValue="_id"
                    choices={[
                        { _id: 0, name: 'SMS' },
                        { _id: 1, name: 'MMS' }
                    ]}
                    className="status-field"
                />
            </DataTable.Col>
        </DataTable>
    </List>
);