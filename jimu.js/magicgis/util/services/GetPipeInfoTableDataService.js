//
// Definitions for schema: http://def.service.cnpc.com/
//  http://10.100.1.173:8080/cxfWebService/webservice/GetPipeInfoTableData?wsdl=IGetPipeInfoTableData.wsdl#types1
//
//
// Constructor for XML Schema item {http://def.service.cnpc.com/}getPipeInfoDataResponse
//
function def_service_cnpc_com__getPipeInfoDataResponse () {
    this.typeMarker = 'def_service_cnpc_com__getPipeInfoDataResponse';
    this._return = null;
}

//
// accessor is def_service_cnpc_com__getPipeInfoDataResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_cnpc_com__getPipeInfoDataResponse.prototype.setReturn
//
function def_service_cnpc_com__getPipeInfoDataResponse_getReturn() { return this._return;}

def_service_cnpc_com__getPipeInfoDataResponse.prototype.getReturn = def_service_cnpc_com__getPipeInfoDataResponse_getReturn;

function def_service_cnpc_com__getPipeInfoDataResponse_setReturn(value) { this._return = value;}

def_service_cnpc_com__getPipeInfoDataResponse.prototype.setReturn = def_service_cnpc_com__getPipeInfoDataResponse_setReturn;
//
// Serialize {http://def.service.cnpc.com/}getPipeInfoDataResponse
//
function def_service_cnpc_com__getPipeInfoDataResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_cnpc_com__getPipeInfoDataResponse.prototype.serialize = def_service_cnpc_com__getPipeInfoDataResponse_serialize;

function def_service_cnpc_com__getPipeInfoDataResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_cnpc_com__getPipeInfoDataResponse();
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
// Constructor for XML Schema item {http://def.service.cnpc.com/}getPipeInfoData
//
function def_service_cnpc_com__getPipeInfoData () {
    this.typeMarker = 'def_service_cnpc_com__getPipeInfoData';
    this._arg0 = null;
    this._arg1 = 0.0;
    this._arg2 = 0.0;
    this._arg3 = 0.0;
    this._arg4 = null;
}

//
// accessor is def_service_cnpc_com__getPipeInfoData.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_cnpc_com__getPipeInfoData.prototype.setArg0
//
function def_service_cnpc_com__getPipeInfoData_getArg0() { return this._arg0;}

def_service_cnpc_com__getPipeInfoData.prototype.getArg0 = def_service_cnpc_com__getPipeInfoData_getArg0;

function def_service_cnpc_com__getPipeInfoData_setArg0(value) { this._arg0 = value;}

def_service_cnpc_com__getPipeInfoData.prototype.setArg0 = def_service_cnpc_com__getPipeInfoData_setArg0;
//
// accessor is def_service_cnpc_com__getPipeInfoData.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for arg1
// setter function is is def_service_cnpc_com__getPipeInfoData.prototype.setArg1
//
function def_service_cnpc_com__getPipeInfoData_getArg1() { return this._arg1;}

def_service_cnpc_com__getPipeInfoData.prototype.getArg1 = def_service_cnpc_com__getPipeInfoData_getArg1;

function def_service_cnpc_com__getPipeInfoData_setArg1(value) { this._arg1 = value;}

def_service_cnpc_com__getPipeInfoData.prototype.setArg1 = def_service_cnpc_com__getPipeInfoData_setArg1;
//
// accessor is def_service_cnpc_com__getPipeInfoData.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for arg2
// setter function is is def_service_cnpc_com__getPipeInfoData.prototype.setArg2
//
function def_service_cnpc_com__getPipeInfoData_getArg2() { return this._arg2;}

def_service_cnpc_com__getPipeInfoData.prototype.getArg2 = def_service_cnpc_com__getPipeInfoData_getArg2;

function def_service_cnpc_com__getPipeInfoData_setArg2(value) { this._arg2 = value;}

def_service_cnpc_com__getPipeInfoData.prototype.setArg2 = def_service_cnpc_com__getPipeInfoData_setArg2;
//
// accessor is def_service_cnpc_com__getPipeInfoData.prototype.getArg3
// element get for arg3
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for arg3
// setter function is is def_service_cnpc_com__getPipeInfoData.prototype.setArg3
//
function def_service_cnpc_com__getPipeInfoData_getArg3() { return this._arg3;}

def_service_cnpc_com__getPipeInfoData.prototype.getArg3 = def_service_cnpc_com__getPipeInfoData_getArg3;

function def_service_cnpc_com__getPipeInfoData_setArg3(value) { this._arg3 = value;}

def_service_cnpc_com__getPipeInfoData.prototype.setArg3 = def_service_cnpc_com__getPipeInfoData_setArg3;
//
// accessor is def_service_cnpc_com__getPipeInfoData.prototype.getArg4
// element get for arg4
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg4
// setter function is is def_service_cnpc_com__getPipeInfoData.prototype.setArg4
//
function def_service_cnpc_com__getPipeInfoData_getArg4() { return this._arg4;}

def_service_cnpc_com__getPipeInfoData.prototype.getArg4 = def_service_cnpc_com__getPipeInfoData_getArg4;

function def_service_cnpc_com__getPipeInfoData_setArg4(value) { this._arg4 = value;}

def_service_cnpc_com__getPipeInfoData.prototype.setArg4 = def_service_cnpc_com__getPipeInfoData_setArg4;
//
// Serialize {http://def.service.cnpc.com/}getPipeInfoData
//
function def_service_cnpc_com__getPipeInfoData_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    // block for local variables
    {
     xml = xml + '<arg1>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._arg1);
     xml = xml + '</arg1>';
    }
    // block for local variables
    {
     xml = xml + '<arg2>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._arg2);
     xml = xml + '</arg2>';
    }
    // block for local variables
    {
     xml = xml + '<arg3>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._arg3);
     xml = xml + '</arg3>';
    }
    // block for local variables
    {
     if (this._arg4 != null) {
      xml = xml + '<arg4>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg4);
      xml = xml + '</arg4>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_cnpc_com__getPipeInfoData.prototype.serialize = def_service_cnpc_com__getPipeInfoData_serialize;

function def_service_cnpc_com__getPipeInfoData_deserialize (cxfjsutils, element) {
    var newobject = new def_service_cnpc_com__getPipeInfoData();
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
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg1');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setArg1(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg2');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setArg2(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg3');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setArg3(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg4');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg4')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg4(item);
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
    this._message = null;
    this._keyValue = null;
    this._errorCode = null;
}

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
     if (this._message != null) {
      xml = xml + '<message>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._message);
      xml = xml + '</message>';
     }
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
// Definitions for service: {http://impl.service.cnpc.com/}GetPipeInfoTableDataService
//

// Javascript for {http://def.service.cnpc.com/}IGetPipeInfoTableData

function def_service_cnpc_com__IGetPipeInfoTableData () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://def.service.cnpc.com/}getPipeInfoDataResponse'] = def_service_cnpc_com__getPipeInfoDataResponse_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}getPipeInfoDataResponse'] = def_service_cnpc_com__getPipeInfoDataResponse_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}getPipeInfoData'] = def_service_cnpc_com__getPipeInfoData_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}getPipeInfoData'] = def_service_cnpc_com__getPipeInfoData_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}PioaGisException'] = def_service_cnpc_com__PioaGisException_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}PioaGisException'] = def_service_cnpc_com__PioaGisException_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}getPipeInfoDataResponse'] = def_service_cnpc_com__getPipeInfoDataResponse_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}getPipeInfoDataResponse'] = def_service_cnpc_com__getPipeInfoDataResponse_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}getPipeInfoData'] = def_service_cnpc_com__getPipeInfoData_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}getPipeInfoData'] = def_service_cnpc_com__getPipeInfoData_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}PioaGisException'] = def_service_cnpc_com__PioaGisException_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}PioaGisException'] = def_service_cnpc_com__PioaGisException_deserialize;
}

function def_service_cnpc_com__getPipeInfoData_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_cnpc_com__getPipeInfoDataResponse_deserializeResponse');
     responseObject = def_service_cnpc_com__getPipeInfoDataResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_cnpc_com__IGetPipeInfoTableData.prototype.getPipeInfoData_onsuccess = def_service_cnpc_com__getPipeInfoData_op_onsuccess;

function def_service_cnpc_com__getPipeInfoData_op_onerror(client) {
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

def_service_cnpc_com__IGetPipeInfoTableData.prototype.getPipeInfoData_onerror = def_service_cnpc_com__getPipeInfoData_op_onerror;

//
// Operation {http://def.service.cnpc.com/}getPipeInfoData
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}double// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}double// parameter arg3
// - simple type {http://www.w3.org/2001/XMLSchema}double// parameter arg4
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_cnpc_com__getPipeInfoData_op(successCallback, errorCallback, arg0, arg1, arg2, arg3, arg4) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(5);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    args[3] = arg3;
    args[4] = arg4;
    xml = this.getPipeInfoData_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getPipeInfoData_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getPipeInfoData_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_cnpc_com__IGetPipeInfoTableData.prototype.getPipeInfoData = def_service_cnpc_com__getPipeInfoData_op;

function def_service_cnpc_com__getPipeInfoData_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_cnpc_com__getPipeInfoData();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    wrapperObj.setArg3(args[3]);
    wrapperObj.setArg4(args[4]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getPipeInfoData', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_cnpc_com__IGetPipeInfoTableData.prototype.getPipeInfoData_serializeInput = def_service_cnpc_com__getPipeInfoData_serializeInput;

function def_service_cnpc_com__getPipeInfoDataResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_cnpc_com__getPipeInfoDataResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_cnpc_com__IGetPipeInfoTableData_impl_service_cnpc_com__GetPipeInfoTableDataPort () {
  this.url = 'http://10.100.1.173:8080/cxfWebService/webservice/GetPipeInfoTableData';
}
def_service_cnpc_com__IGetPipeInfoTableData_impl_service_cnpc_com__GetPipeInfoTableDataPort.prototype = new def_service_cnpc_com__IGetPipeInfoTableData;
