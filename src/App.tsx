import { Resource } from "ra-core";
import { Admin } from "@/components/admin/admin";
import { LoginPage } from "./login-page";
import { dataProvider } from "@/dataProvider.ts";
import { authProvider } from "@/authProvider.ts";

import { ChannelCreate } from "./pages/channel/create";
import { ChannelList } from "./pages/channel/list";
import { ChannelEdit } from "./pages/channel/edit";

import { CustomerRoutingList } from "./pages/customer_routing/list";
import { CustomerRoutingCreate } from "./pages/customer_routing/create";
import { CustomerRoutingEdit } from "./pages/customer_routing/edit";

import { CustomerRateList } from "./pages/customer_rate/list";
import { CustomerRateEdit } from "./pages/customer_rate/edit";
import { CustomerRateCreate } from "./pages/customer_rate/create";

import { Routing_mcc_mncList } from "./pages/routing_mcc_mnc/list";
import { Routing_mcc_mncEdit } from "./pages/routing_mcc_mnc/edit";
import { Routing_mcc_mncCreate } from "./pages/routing_mcc_mnc/create";

import { Routing_channelList } from "./pages/routing_channel/list";
import { Routing_channelEdit } from "./pages/routing_channel/edit";
import { Routing_channelCreate } from "./pages/routing_channel/create";

import { ChatShow } from "./pages/chat/show";

import { TaskList } from "./pages/task/list";
import { RoutingList } from "./pages/routing/list";
import { Mcc_mncList } from "./pages/mcc_mnc/list";
import { Mcc_mncEdit } from "./pages/mcc_mnc/edit";
import { RoutingEdit } from "./pages/routing/edit";

import { SdrList } from "./pages/sdr/list";

import {MccMncCreate} from "./pages/mcc_mnc/create";

import { RoutingCreate } from "./pages/routing/create";


import { TenantRateCreate } from "./pages/tenant_rate/create";
import { TenantRateEdit } from "./pages/tenant_rate/edit";
import { TenantRateList } from "./pages/tenant_rate/list";

import { TenantList } from "./pages/tenant/list";
import { TenantCreate } from "./pages/tenant/create";
import { TenantEdit } from "./pages/tenant/edit";

import { SupplierCreate } from "./pages/supplier/create";
import { SupplierEdit } from "./pages/supplier/edit";
import { SupplierList } from "./pages/supplier/list";

import { CustomerList } from "./pages/customer/list";
import { CustomerCreate } from "./pages/customer/create";
import { CustomerEdit } from "./pages/customer/edit";

import { SalesList } from "./pages/sales/list";
import { SalesEdit } from "./pages/sales/edit";
import { SalesCreate } from "./pages/sales/create";

import { SupplierRateList } from "./pages/supplier_rate/list";
import { SupplierRateEdit } from "./pages/supplier_rate/edit";
import { SupplierRateCreate } from "./pages/supplier_rate/create";
import { UserList } from "./pages/user/list";
import { UserEdit } from "./pages/user/edit";
import { UserCreate } from "./pages/user/create";
import { RoleList } from "./pages/role/list";
import { RoleEdit } from "./pages/role/edit";
import { RoleCreate } from "./pages/role/create";
import { OperatorList } from "./pages/operator/list";
import { OperatorShow } from "./pages/operator/show";
import { PaymentList } from "./pages/payment/list";
import { PaymentShow } from "./pages/payment/show";
import { Black_listList } from "./pages/black_list/list";
import { Black_listEdit } from "./pages/black_list/edit";
import { Black_listCreate } from "./pages/black_list/create";
import { Content_ruleList } from "./pages/content_rule/list";
import { Content_ruleEdit } from "./pages/content_rule/edit";
import { Content_ruleCreate } from "./pages/content_rule/create";
import { PermissionList } from "./pages/permission/list";
import { PermissionEdit } from "./pages/permission/edit";
import { PermissionCreate } from "./pages/permission/create";
import { ChatList } from "./pages/chat/list";
import { Mo_messageList } from "./pages/mo_message/list";
import { Mo_messageShow } from "./pages/mo_message/show";
import { PrefixRuleList } from "./pages/prefix_rule/list";
import { PrefixRuleEdit } from "./pages/prefix_rule/edit";
import { PrefixRuleCreate } from "./pages/prefix_rule/create";
import { IpPoolList } from "./pages/ip_pool/list";
import { IpPoolEdit } from "./pages/ip_pool/edit";
import { IpPoolCreate } from "./pages/ip_pool/create";
import { TaskShow } from "./pages/task/show";
import { SdrShow } from "./pages/sdr/show";

function App() {
  return (
    <Admin dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={LoginPage}>
      <Resource name="sdr" list={SdrList} show={SdrShow}/>
      <Resource name="queue" list={SdrList} show = {SdrShow}/>
      <Resource name="tenant" list={TenantList} edit={TenantEdit} create={TenantCreate}/>
      <Resource name="tenant_rate" list={TenantRateList} edit={TenantRateEdit} create={TenantRateCreate}/>
      <Resource name="supplier" list={SupplierList} edit={SupplierEdit} create={SupplierCreate}/>
      <Resource name="supplier_rate" list={SupplierRateList} edit={SupplierRateEdit} create={SupplierRateCreate}/>
      <Resource name="channel" list={ChannelList} create={ChannelCreate} edit={ChannelEdit} />
      <Resource name="customer" list={CustomerList} edit={CustomerEdit} create={CustomerCreate}/>
      <Resource name="customer_routing" list={CustomerRoutingList} edit={CustomerRoutingEdit} create={CustomerRoutingCreate}/>
      <Resource name="customer_rate" list={CustomerRateList} edit={CustomerRateEdit} create={CustomerRateCreate} />
      <Resource name="routing" list={RoutingList} edit={RoutingEdit} create={RoutingCreate}/>
      <Resource name="routing_mcc_mnc" list={Routing_mcc_mncList} edit={Routing_mcc_mncEdit} create={Routing_mcc_mncCreate}/>
      <Resource name="routing_channel" list={Routing_channelList} edit={Routing_channelEdit} create={Routing_channelCreate} />
      <Resource name="role" list={RoleList} edit={RoleEdit} create={RoleCreate}/>
      <Resource name="mcc_mnc" list={Mcc_mncList} edit={Mcc_mncEdit} create={MccMncCreate} recordRepresentation={(record) => `${record.country}:${record.mcc}:${record.mnc}`} />
      <Resource name="operator" list={OperatorList} show={OperatorShow} />
      <Resource name="payment" list={PaymentList} show={PaymentShow} />
      <Resource name="black_list" list={Black_listList} edit={Black_listEdit} create={Black_listCreate}/>
      <Resource name="content_rule" list={Content_ruleList} edit={Content_ruleEdit} create={Content_ruleCreate}/>
      <Resource name="permission" list={PermissionList} edit={PermissionEdit} create={PermissionCreate} />
      <Resource name="chat" list={ChatList} show={ChatShow} />
      <Resource name="mo_message" list={Mo_messageList} show={Mo_messageShow} />
      <Resource name="prefix_rule" list={PrefixRuleList} edit={PrefixRuleEdit} create={PrefixRuleCreate} />
      <Resource name="ip_pool" list={IpPoolList} edit={IpPoolEdit} create={IpPoolCreate} />
      <Resource name="task" list={TaskList} show={TaskShow} />
      <Resource name="sales" list={SalesList} create={SalesCreate} edit={SalesEdit} />
      <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate}/>
    </Admin>
  );
}

export default App;