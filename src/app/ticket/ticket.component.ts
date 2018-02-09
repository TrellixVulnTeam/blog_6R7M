import { Component, OnInit } from '@angular/core';
import { Iticket } from './ticket';
import { TicketService } from './ticket.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'pm-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  clickMessage = '';
  error: any;
  pageTitle: string = 'Consulta del ticket';
  response:any;
  errorMessage: string;
  ticketCode: string;
  ticketDays: string;
//   get ticketCode(): string {
//     return this.ticketCode;
// }
// set ticketCode(ticketCode:string) {
//   //this.ticketCode = value;
//   this.responseTicket = this.ticketCode ? this.voidMethod(this.ticketCode) : this.tickets;
// }
responseTicket: Iticket[];
tickets: Iticket[] = [];
//object2 : Object = JSON.parse("{\"@hello.context\":\"world\"}");
//object: Object = (this.tickets.length>1) ? JSON.parse(this.tickets.toString().replace('"', '\\"')).value : 'length menor que 1';
object: Object = JSON.stringify(this.tickets);
//object: Object = JSON.parse(this.tickets);
//object: Object = JSON.parse("{"@odata.context":"https://api.applicationinsights.io/v1/apps/8763ef7e-9626-4502-9daf-fdb7e6e3564c/events/$metadata#Collection(Edm.EntityType)","@ai.messages":[{"code":"AddedLimitToQuery","message":"The query was limited to 500 rows"}],"value":[{"id":"14d031e0-00fb-11e8-bf38-31f7a45a47ef","type":"exception","count":1,"timestamp":"2018-01-24T11:38:07.376Z","exception":{"severityLevel":null,"problemId":"System.Data.SqlClient.SqlException at Raona.Data.DataService.ExecuteReader","handledAt":null,"assembly":"Raona, Version=1.0.0.0, Culture=neutral, PublicKeyToken=2c852ad424780043","method":"Raona.Data.DataService.ExecuteReader","message":null,"type":"System.Data.SqlClient.SqlException","outerType":"System.Data.SqlClient.SqlException","outerMethod":"Raona.Data.DataService.ExecuteReader","outerAssembly":"Raona, Version=1.0.0.0, Culture=neutral, PublicKeyToken=2c852ad424780043","outerMessage":"Invalid column name 'userPersona'.","innermostType":"System.Data.SqlClient.SqlException","innermostMessage":"Invalid column name 'userPersona'.","innermostMethod":null,"innermostAssembly":null,"details":[{"parsedStack":[{"method":"Raona.Data.DataService.ExecuteReader","fileName":"C:\\Wk_Sourcecode\\Repos\\ERPRepo\\Source Code\\Raona.Framework\\Source Code\\Raona Frameworks\\Raona\\Data\\DataService.cs","level":0,"line":2218,"assembly":"Raona, Version=1.0.0.0, Culture=neutral, PublicKeyToken=2c852ad424780043"},{"method":"Raona.Data.DataService.ProcessData","fileName":"C:\\Wk_Sourcecode\\Repos\\ERPRepo\\Source Code\\Raona.Framework\\Source Code\\Raona Frameworks\\Raona\\Data\\DataService.cs","level":1,"line":400,"assembly":"Raona, Version=1.0.0.0, Culture=neutral, PublicKeyToken=2c852ad424780043"},{"method":"Raona.Data.DataService.SelectData","fileName":"C:\\Wk_Sourcecode\\Repos\\ERPRepo\\Source Code\\Raona.Framework\\Source Code\\Raona Frameworks\\Raona\\Data\\DataService.cs","level":2,"line":301,"assembly":"Raona, Version=1.0.0.0, Culture=neutral, PublicKeyToken=2c852ad424780043"},{"method":"Raona.Data.DataService.SelectData","fileName":"C:\\Wk_Sourcecode\\Repos\\ERPRepo\\Source Code\\Raona.Framework\\Source Code\\Raona Frameworks\\Raona\\Data\\DataService.cs","level":3,"line":221,"assembly":"Raona, Version=1.0.0.0, Culture=neutral, PublicKeyToken=2c852ad424780043"},{"method":"a3ERP.Business.Common.Services.Sys.RolUsuarioService.ObtenerRolesUsuarios","fileName":"C:\\Wk_Sourcecode\\Repos\\ERPRepo\\Source Code\\a3ERP.Business\\Services\\Sys\\RolUsuarioService.cs","level":4,"line":48,"assembly":"a3ERP.Business.Common, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"},{"method":"a3ERP.Business.Common.Services.Sys.UsuarioService.ListaEmpresas","fileName":"C:\\Wk_Sourcecode\\Repos\\ERPRepo\\Source Code\\a3ERP.Business\\Services\\Sys\\UsuarioService.cs","level":5,"line":582,"assembly":"a3ERP.Business.Common, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"},{"method":"a3ERP.Business.Common.Services.Sys.UsuarioService.InformacionUsuario","fileName":"C:\\Wk_Sourcecode\\Repos\\ERPRepo\\Source Code\\a3ERP.Business\\Services\\Sys\\UsuarioService.cs","level":6,"line":554,"assembly":"a3ERP.Business.Common, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"},{"method":"a3ERP.Business.Common.AgentServices.Sys.UsuarioAgentService.InformacionUsuario","fileName":"C:\\Wk_Sourcecode\\Repos\\ERPRepo\\Source Code\\a3ERP.Business\\AgentServices\\Sys\\UsuarioAgentService.cs","level":7,"line":165,"assembly":"a3ERP.Business.Common, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"},{"method":"SyncInvokeInformacionUsuario","level":8,"line":0,"assembly":"System.ServiceModel, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"},{"method":"System.ServiceModel.Dispatcher.SyncMethodInvoker.Invoke","level":9,"line":0,"assembly":"System.ServiceModel, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"},{"method":"System.ServiceModel.Dispatcher.DispatchOperationRuntime.InvokeBegin","level":10,"line":0,"assembly":"System.ServiceModel, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"},{"method":"System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage5","level":11,"line":0,"assembly":"System.ServiceModel, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"},{"method":"System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage11","level":12,"line":0,"assembly":"System.ServiceModel, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"},{"method":"System.ServiceModel.Dispatcher.MessageRpc.Process","level":13,"line":0,"assembly":"System.ServiceModel, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"}],"outerId":"0","message":"Invalid column name 'userPersona'.","type":"System.Data.SqlClient.SqlException","id":"40724827"}]},"customDimensions":{"TenantId":"0","Ticket":"b02e0d26-b112-4389-9e3d-a4ddec1183ac","User":"6069"},"customMeasurements":null,"operation":{"name":null,"id":null,"parentId":null,"syntheticSource":null},"session":{"id":null},"user":{"id":null,"accountId":null,"authenticatedId":null},"cloud":{"roleName":"a3facturapre","roleInstance":"RD00155D529C7E"},"ai":{"iKey":"8aceb9c4-a936-480c-bf29-f4d33b2d28d4","appName":"FGO-PRE-FRE-APP","appId":"8763ef7e-9626-4502-9daf-fdb7e6e3564c","sdkVersion":"dotnet:2.4.0-32153"},"application":{"version":null},"client":{"model":null,"os":null,"type":"PC","browser":null,"ip":"52.164.220.0","city":"Dublin","stateOrProvince":"Leinster","countryOrRegion":"Ireland"}}]}");
//object: Object = JSON.parse("{\"@odata.context\":\"https://api.applicationinsights.io/v1/apps/8763ef7e-9626-4502-9daf-fdb7e6e3564c/events/$metadata#Collection(Edm.EntityType)\",\"@ai.messages\":[{\"code\":\"AddedLimitToQuery\",\"message\":\"The query was limited to 500 rows\"}],\"value\":[{\"id\":\"14d031e0-00fb-11e8-bf38-31f7a45a47ef\",\"type\":\"exception\",\"count\":1,\"timestamp\":\"2018-01-24T11:38:07.376Z\",\"exception\":{\"severityLevel\":null,\"problemId\":\"System.Data.SqlClient.SqlException at Raona.Data.DataService.ExecuteReader\",\"handledAt\":null,\"assembly\":\"Raona, Version=1.0.0.0, Culture=neutral, PublicKeyToken=2c852ad424780043\",\"method\":\"Raona.Data.DataService.ExecuteReader\",\"message\":null,\"type\":\"System.Data.SqlClient.SqlException\",\"outerType\":\"System.Data.SqlClient.SqlException\",\"outerMethod\":\"Raona.Data.DataService.ExecuteReader\",\"outerAssembly\":\"Raona, Version=1.0.0.0, Culture=neutral, PublicKeyToken=2c852ad424780043\",\"outerMessage\":\"Invalid column name 'userPersona'.\",\"innermostType\":\"System.Data.SqlClient.SqlException\",\"innermostMessage\":\"Invalid column name 'userPersona'.\",\"innermostMethod\":null,\"innermostAssembly\":null,\"details\":[{\"parsedStack\":[{\"method\":\"Raona.Data.DataService.ExecuteReader\",\"fileName\":\"C:\\\\Wk_Sourcecode\\\\Repos\\\\ERPRepo\\\\Source Code\\\\Raona.Framework\\\\Source Code\\\\Raona Frameworks\\\\Raona\\\\Data\\\\DataService.cs\",\"level\":0,\"line\":2218,\"assembly\":\"Raona, Version=1.0.0.0, Culture=neutral, PublicKeyToken=2c852ad424780043\"},{\"method\":\"Raona.Data.DataService.ProcessData\",\"fileName\":\"C:\\\\Wk_Sourcecode\\\\Repos\\\\ERPRepo\\\\Source Code\\\\Raona.Framework\\\\Source Code\\\\Raona Frameworks\\\\Raona\\\\Data\\\\DataService.cs\",\"level\":1,\"line\":400,\"assembly\":\"Raona, Version=1.0.0.0, Culture=neutral, PublicKeyToken=2c852ad424780043\"},{\"method\":\"Raona.Data.DataService.SelectData\",\"fileName\":\"C:\\\\Wk_Sourcecode\\\\Repos\\\\ERPRepo\\\\Source Code\\\\Raona.Framework\\\\Source Code\\\\Raona Frameworks\\\\Raona\\\\Data\\\\DataService.cs\",\"level\":2,\"line\":301,\"assembly\":\"Raona, Version=1.0.0.0, Culture=neutral, PublicKeyToken=2c852ad424780043\"},{\"method\":\"Raona.Data.DataService.SelectData\",\"fileName\":\"C:\\\\Wk_Sourcecode\\\\Repos\\\\ERPRepo\\\\Source Code\\\\Raona.Framework\\\\Source Code\\\\Raona Frameworks\\\\Raona\\\\Data\\\\DataService.cs\",\"level\":3,\"line\":221,\"assembly\":\"Raona, Version=1.0.0.0, Culture=neutral, PublicKeyToken=2c852ad424780043\"},{\"method\":\"a3ERP.Business.Common.Services.Sys.RolUsuarioService.ObtenerRolesUsuarios\",\"fileName\":\"C:\\\\Wk_Sourcecode\\\\Repos\\\\ERPRepo\\\\Source Code\\\\a3ERP.Business\\\\Services\\\\Sys\\\\RolUsuarioService.cs\",\"level\":4,\"line\":48,\"assembly\":\"a3ERP.Business.Common, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null\"},{\"method\":\"a3ERP.Business.Common.Services.Sys.UsuarioService.ListaEmpresas\",\"fileName\":\"C:\\\\Wk_Sourcecode\\\\Repos\\\\ERPRepo\\\\Source Code\\\\a3ERP.Business\\\\Services\\\\Sys\\\\UsuarioService.cs\",\"level\":5,\"line\":582,\"assembly\":\"a3ERP.Business.Common, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null\"},{\"method\":\"a3ERP.Business.Common.Services.Sys.UsuarioService.InformacionUsuario\",\"fileName\":\"C:\\\\Wk_Sourcecode\\\\Repos\\\\ERPRepo\\\\Source Code\\\\a3ERP.Business\\\\Services\\\\Sys\\\\UsuarioService.cs\",\"level\":6,\"line\":554,\"assembly\":\"a3ERP.Business.Common, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null\"},{\"method\":\"a3ERP.Business.Common.AgentServices.Sys.UsuarioAgentService.InformacionUsuario\",\"fileName\":\"C:\\\\Wk_Sourcecode\\\\Repos\\\\ERPRepo\\\\Source Code\\\\a3ERP.Business\\\\AgentServices\\\\Sys\\\\UsuarioAgentService.cs\",\"level\":7,\"line\":165,\"assembly\":\"a3ERP.Business.Common, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null\"},{\"method\":\"SyncInvokeInformacionUsuario\",\"level\":8,\"line\":0,\"assembly\":\"System.ServiceModel, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089\"},{\"method\":\"System.ServiceModel.Dispatcher.SyncMethodInvoker.Invoke\",\"level\":9,\"line\":0,\"assembly\":\"System.ServiceModel, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089\"},{\"method\":\"System.ServiceModel.Dispatcher.DispatchOperationRuntime.InvokeBegin\",\"level\":10,\"line\":0,\"assembly\":\"System.ServiceModel, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089\"},{\"method\":\"System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage5\",\"level\":11,\"line\":0,\"assembly\":\"System.ServiceModel, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089\"},{\"method\":\"System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage11\",\"level\":12,\"line\":0,\"assembly\":\"System.ServiceModel, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089\"},{\"method\":\"System.ServiceModel.Dispatcher.MessageRpc.Process\",\"level\":13,\"line\":0,\"assembly\":\"System.ServiceModel, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089\"}],\"outerId\":\"0\",\"message\":\"Invalid column name 'userPersona'.\",\"type\":\"System.Data.SqlClient.SqlException\",\"id\":\"40724827\"}]},\"customDimensions\":{\"TenantId\":\"0\",\"Ticket\":\"b02e0d26-b112-4389-9e3d-a4ddec1183ac\",\"User\":\"6069\"},\"customMeasurements\":null,\"operation\":{\"name\":null,\"id\":null,\"parentId\":null,\"syntheticSource\":null},\"session\":{\"id\":null},\"user\":{\"id\":null,\"accountId\":null,\"authenticatedId\":null},\"cloud\":{\"roleName\":\"a3facturapre\",\"roleInstance\":\"RD00155D529C7E\"},\"ai\":{\"iKey\":\"8aceb9c4-a936-480c-bf29-f4d33b2d28d4\",\"appName\":\"FGO-PRE-FRE-APP\",\"appId\":\"8763ef7e-9626-4502-9daf-fdb7e6e3564c\",\"sdkVersion\":\"dotnet:2.4.0-32153\"},\"application\":{\"version\":null},\"client\":{\"model\":null,\"os\":null,\"type\":\"PC\",\"browser\":null,\"ip\":\"52.164.220.0\",\"city\":\"Dublin\",\"stateOrProvince\":\"Leinster\",\"countryOrRegion\":\"Ireland\"}}]}");

constructor(private _ticketService: TicketService) { }
  
GetTicket(ticketCode:string, ticketDays:string) {
  this.clickMessage = 'Consultando...';
  return this._ticketService.getResponse('b02e0d26-b112-4389-9e3d-a4ddec1183ac', '13')
  .subscribe(tickets => {this.tickets = tickets;},error => this.errorMessage = <any>error);
}

voidMethod(arg0: any): any {}
ngOnInit(): void {}
}