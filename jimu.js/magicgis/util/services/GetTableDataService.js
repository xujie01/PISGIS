//
// Definitions for schema: http://def.service.cnpc.com/
//  http://localhost:8080/cxfWebService/webservice/GetTableData?wsdl=IGetTableData.wsdl#types1
//
//
// Constructor for XML Schema item {http://def.service.cnpc.com/}getTableDataResponse
//
function def_service_cnpc_com__getTableDataResponse () {
    this.typeMarker = 'def_service_cnpc_com__getTableDataResponse';
    this._return = null;
}

//
// accessor is def_service_cnpc_com__getTableDataResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_cnpc_com__getTableDataResponse.prototype.setReturn
//
function def_service_cnpc_com__getTableDataResponse_getReturn() { return this._return;}

def_service_cnpc_com__getTableDataResponse.prototype.getReturn = def_service_cnpc_com__getTableDataResponse_getReturn;

function def_service_cnpc_com__getTableDataResponse_setReturn(value) { this._return = value;}

def_service_cnpc_com__getTableDataResponse.prototype.setReturn = def_service_cnpc_com__getTableDataResponse_setReturn;
//
// Serialize {http://def.service.cnpc.com/}getTableDataResponse
//
function def_service_cnpc_com__getTableDataResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._return != null) {
      xml = xml + '<return>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._return);
      xml = xml + '</return>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_cnpc_com__getTableDataResponse.prototype.serialize = def_service_cnpc_com__getTableDataResponse_serialize;

function def_service_cnpc_com__getTableDataResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_cnpc_com__getTableDataResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setReturn(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.cnpc.com/}getTableData
//
function def_service_cnpc_com__getTableData () {
    this.typeMarker = 'def_service_cnpc_com__getTableData';
    this._arg0 = null;
}

//
// accessor is def_service_cnpc_com__getTableData.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_cnpc_com__getTableData.prototype.setArg0
//
function def_service_cnpc_com__getTableData_getArg0() { return this._arg0;}

def_service_cnpc_com__getTableData.prototype.getArg0 = def_service_cnpc_com__getTableData_getArg0;

function def_service_cnpc_com__getTableData_setArg0(value) { this._arg0 = value;}

def_service_cnpc_com__getTableData.prototype.setArg0 = def_service_cnpc_com__getTableData_setArg0;
//
// Serialize {http://def.service.cnpc.com/}getTableData
//
function def_service_cnpc_com__getTableData_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._arg0 != null) {
      xml = xml + '<arg0>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg0);
      xml = xml + '</arg0>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_cnpc_com__getTableData.prototype.serialize = def_service_cnpc_com__getTableData_serialize;

function def_service_cnpc_com__getTableData_deserialize (cxfjsutils, element) {
    var newobject = new def_service_cnpc_com__getTableData();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.cnpc.com/}PioaGisException
//
function def_service_cnpc_com__PioaGisException () {
    this.typeMarker = 'def_service_cnpc_com__PioaGisException';
    this._keyValue = null;
    this._message = null;
    this._errorCode = null;
}

//
// accessor is def_service_cnpc_com__PioaGisException.prototype.getKeyValue
// element get for keyValue
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for keyValue
// setter function is is def_service_cnpc_com__PioaGisException.prototype.setKeyValue
//
function def_service_cnpc_com__PioaGisException_getKeyValue() { return this._keyValue;}

def_service_cnpc_com__PioaGisException.prototype.getKeyValue = def_service_cnpc_com__PioaGisException_getKeyValue;

function def_service_cnpc_com__PioaGisException_setKeyValue(value) { this._keyValue = value;}

def_service_cnpc_com__PioaGisException.prototype.setKeyValue = def_service_cnpc_com__PioaGisException_setKeyValue;
//
// accessor is def_service_cnpc_com__PioaGisException.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is def_service_cnpc_com__PioaGisException.prototype.setMessage
//
function def_service_cnpc_com__PioaGisException_getMessage() { return this._message;}

def_service_cnpc_com__PioaGisException.prototype.getMessage = def_service_cnpc_com__PioaGisException_getMessage;

function def_service_cnpc_com__PioaGisException_setMessage(value) { this._message = value;}

def_service_cnpc_com__PioaGisException.prototype.setMessage = def_service_cnpc_com__PioaGisException_setMessage;
//
// accessor is def_service_cnpc_com__PioaGisException.prototype.getErrorCode
// element get for errorCode
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for errorCode
// setter function is is def_service_cnpc_com__PioaGisException.prototype.setErrorCode
//
function def_service_cnpc_com__PioaGisException_getErrorCode() { return this._errorCode;}

def_service_cnpc_com__PioaGisException.prototype.getErrorCode = def_service_cnpc_com__PioaGisException_getErrorCode;

function def_service_cnpc_com__PioaGisException_setErrorCode(value) { this._errorCode = value;}

def_service_cnpc_com__PioaGisException.prototype.setErrorCode = def_service_cnpc_com__PioaGisException_setErrorCode;
//
// Serialize {http://def.service.cnpc.com/}PioaGisException
//
function def_service_cnpc_com__PioaGisException_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._keyValue != null) {
      xml = xml + '<keyValue>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._keyValue);
      xml = xml + '</keyValue>';
     }
    }
    // block for local variables
    {
     if (this._message != null) {
      xml = xml + '<message>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._message);
      xml = xml + '</message>';
     }
    }
    // block for local variables
    {
     if (this._errorCode != null) {
      xml = xml + '<errorCode>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._errorCode);
      xml = xml + '</errorCode>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_cnpc_com__PioaGisException.prototype.serialize = def_service_cnpc_com__PioaGisException_serialize;

function def_service_cnpc_com__PioaGisException_deserialize (cxfjsutils, element) {
    var newobject = new def_service_cnpc_com__PioaGisException();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing keyValue');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'keyValue')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setKeyValue(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing message');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'message')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMessage(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing errorCode');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'errorCode')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setErrorCode(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Definitions for service: {http://impl.service.cnpc.com/}GetTableDataService
//

// Javascript for {http://def.service.cnpc.com/}IGetTableData

function def_service_cnpc_com__IGetTableData () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://def.service.cnpc.com/}getTableDataResponse'] = def_service_cnpc_com__getTableDataResponse_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}getTableDataResponse'] = def_service_cnpc_com__getTableDataResponse_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}getTableData'] = def_service_cnpc_com__getTableData_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}getTableData'] = def_service_cnpc_com__getTableData_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}PioaGisException'] = def_service_cnpc_com__PioaGisException_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}PioaGisException'] = def_service_cnpc_com__PioaGisException_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}getTableDataResponse'] = def_service_cnpc_com__getTableDataResponse_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}getTableDataResponse'] = def_service_cnpc_com__getTableDataResponse_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}getTableData'] = def_service_cnpc_com__getTableData_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}getTableData'] = def_service_cnpc_com__getTableData_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}PioaGisException'] = def_service_cnpc_com__PioaGisException_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}PioaGisException'] = def_service_cnpc_com__PioaGisException_deserialize;
}

function def_service_cnpc_com__getTableData_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling def_service_cnpc_com__getTableDataResponse_deserializeResponse');
     responseObject = def_service_cnpc_com__getTableDataResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_cnpc_com__IGetTableData.prototype.getTableData_onsuccess = def_service_cnpc_com__getTableData_op_onsuccess;

function def_service_cnpc_com__getTableData_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

def_service_cnpc_com__IGetTableData.prototype.getTableData_onerror = def_service_cnpc_com__getTableData_op_onerror;

//
// Operation {http://def.service.cnpc.com/}getTableData
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_cnpc_com__getTableData_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getTableData_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getTableData_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getTableData_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_cnpc_com__IGetTableData.prototype.getTableData = def_service_cnpc_com__getTableData_op;

function def_service_cnpc_com__getTableData_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_cnpc_com__getTableData();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getTableData', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_cnpc_com__IGetTableData.prototype.getTableData_serializeInput = def_service_cnpc_com__getTableData_serializeInput;

function def_service_cnpc_com__getTableDataResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_cnpc_com__getTableDataResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_cnpc_com__IGetTableData_impl_service_cnpc_com__GetTableDataPort () {
  this.url = 'http://10.100.1.173:8080/cxfWebService/webservice/GetTableData';
}
def_service_cnpc_com__IGetTableData_impl_service_cnpc_com__GetTableDataPort.prototype = new def_service_cnpc_com__IGetTableData;
