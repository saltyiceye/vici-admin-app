import { Resource } from "ra-core";
import { ListGuesser, EditGuesser } from "@/components/admin";
import { Admin } from "@/components/admin/admin";
import { LoginPage } from "./login-page";
import { dataProvider } from "@/dataProvider.ts";
import { authProvider } from "@/authProvider.ts";

import { ChannelCreate } from "./pages/channel/create";
import { ChannelList } from "./pages/channel/list";

import { Customer_routingList } from "./pages/customer_routing/list";
import { Routing_mcc_mncList } from "./pages/routing_mcc_mnc/list";
import { Routing_channelList } from "./pages/routing_channel/list";

import { ChatShow } from "./pages/chat/show";

import { TaskList } from "./pages/task/list";
import { RoutingList } from "./pages/routing/list";
import { Mcc_mncList } from "./pages/mcc_mnc/list";
import { Mcc_mncEdit } from "./pages/mcc_mnc/edit";
import { RoutingEdit } from "./pages/routing/edit";

import { CustomerRateList } from "./pages/customer_rate/list";
import { CustomerRateEdit } from "./pages/customer_rate/edit";
import { CustomerRateCreate } from "./pages/customer_rate/create";
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

function App() {
  return (
    <Admin dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={LoginPage}>
      <Resource name="sdr" list={SdrList}/>
      <Resource name="queue" list={ListGuesser}/>
      <Resource name="tenant" list={TenantList} edit={TenantEdit} create={TenantCreate}/>
      <Resource name="tenant_rate" list={TenantRateList} edit={TenantRateEdit} create={TenantRateCreate}/>
      <Resource name="supplier" list={SupplierList} edit={SupplierEdit} create={SupplierCreate}/>
      <Resource name="supplier_rate" list={SupplierRateList} edit={SupplierRateEdit} create={SupplierRateCreate}/>
      <Resource name="channel" list={ChannelList} create={ChannelCreate} edit={EditGuesser} />
      <Resource name="customer" list={CustomerList} edit={CustomerEdit} create={CustomerCreate}/>
      <Resource name="customer_routing" list={Customer_routingList} edit={EditGuesser} />
      <Resource name="customer_rate" list={CustomerRateList} edit={CustomerRateEdit} create={CustomerRateCreate} />
      <Resource name="routing" list={RoutingList} edit={RoutingEdit} create={RoutingCreate}/>
      <Resource name="routing_mcc_mnc" list={Routing_mcc_mncList} edit={EditGuesser} />
      <Resource name="routing_channel" list={Routing_channelList} edit={EditGuesser} />
      <Resource name="user" list={ListGuesser} edit={EditGuesser} />
      <Resource name="role" list={ListGuesser} edit={EditGuesser} />
      <Resource name="mcc_mnc" list={Mcc_mncList} edit={Mcc_mncEdit} create={MccMncCreate} recordRepresentation={(record) => `${record.country}:${record.mcc}:${record.mnc}`} />
      <Resource name="operator" list={ListGuesser} edit={EditGuesser} />
      <Resource name="payment" list={ListGuesser} edit={EditGuesser} />
      <Resource name="operator" list={ListGuesser} edit={EditGuesser} />
      <Resource name="black_list" list={ListGuesser} edit={EditGuesser} />
      <Resource name="content_rule" list={ListGuesser} edit={EditGuesser} />
      <Resource name="permission" list={ListGuesser} edit={EditGuesser} />
      <Resource name="chat" list={ListGuesser} show={ChatShow} />
      <Resource name="mo_message" list={ListGuesser} edit={EditGuesser} />
      <Resource name="prefix_rule" list={ListGuesser} edit={EditGuesser} />
      <Resource name="ip_pool" list={ListGuesser} edit={EditGuesser} />
      <Resource name="task" list={TaskList} edit={EditGuesser} />
      <Resource name="sales" list={SalesList} create={SalesCreate} edit={SalesEdit} />

    </Admin>
  );
}

export default App;