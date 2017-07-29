//
// Definitions for schema: http://def.service.cnpc.com/
//  http://10.100.1.173:8080/cxfWebService/webservice/GetInspectionInfoData?wsdl=IGetInspectionInfoData.wsdl#types1
//
//
// Constructor for XML Schema item {http://def.service.cnpc.com/}selectPersonView
//
function def_service_cnpc_com__selectPersonView () {
    this.typeMarker = 'def_service_cnpc_com__selectPersonView';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = null;
    this._arg3 = null;
}

//
// accessor is def_service_cnpc_com__selectPersonView.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_cnpc_com__selectPersonView.prototype.setArg0
//
function def_service_cnpc_com__selectPersonView_getArg0() { return this._arg0;}

def_service_cnpc_com__selectPersonView.prototype.getArg0 = def_service_cnpc_com__selectPersonView_getArg0;

function def_service_cnpc_com__selectPersonView_setArg0(value) { this._arg0 = value;}

def_service_cnpc_com__selectPersonView.prototype.setArg0 = def_service_cnpc_com__selectPersonView_setArg0;
//
// accessor is def_service_cnpc_com__selectPersonView.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_cnpc_com__selectPersonView.prototype.setArg1
//
function def_service_cnpc_com__selectPersonView_getArg1() { return this._arg1;}

def_service_cnpc_com__selectPersonView.prototype.getArg1 = def_service_cnpc_com__selectPersonView_getArg1;

function def_service_cnpc_com__selectPersonView_setArg1(value) { this._arg1 = value;}

def_service_cnpc_com__selectPersonView.prototype.setArg1 = def_service_cnpc_com__selectPersonView_setArg1;
//
// accessor is def_service_cnpc_com__selectPersonView.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg2
// setter function is is def_service_cnpc_com__selectPersonView.prototype.setArg2
//
function def_service_cnpc_com__selectPersonView_getArg2() { return this._arg2;}

def_service_cnpc_com__selectPersonView.prototype.getArg2 = def_service_cnpc_com__selectPersonView_getArg2;

function def_service_cnpc_com__selectPersonView_setArg2(value) { this._arg2 = value;}

def_service_cnpc_com__selectPersonView.prototype.setArg2 = def_service_cnpc_com__selectPersonView_setArg2;
//
// accessor is def_service_cnpc_com__selectPersonView.prototype.getArg3
// element get for arg3
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg3
// setter function is is def_service_cnpc_com__selectPersonView.prototype.setArg3
//
function def_service_cnpc_com__selectPersonView_getArg3() { return this._arg3;}

def_service_cnpc_com__selectPersonView.prototype.getArg3 = def_service_cnpc_com__selectPersonView_getArg3;

function def_service_cnpc_com__selectPersonView_setArg3(value) { this._arg3 = value;}

def_service_cnpc_com__selectPersonView.prototype.setArg3 = def_service_cnpc_com__selectPersonView_setArg3;
//
// Serialize {http://def.service.cnpc.com/}selectPersonView
//
function def_service_cnpc_com__selectPersonView_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg1 != null) {
      xml = xml + '<arg1>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg1);
      xml = xml + '</arg1>';
     }
    }
    // block for local variables
    {
     if (this._arg2 != null) {
      xml = xml + '<arg2>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg2);
      xml = xml + '</arg2>';
     }
    }
    // block for local variables
    {
     if (this._arg3 != null) {
      xml = xml + '<arg3>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg3);
      xml = xml + '</arg3>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_cnpc_com__selectPersonView.prototype.serialize = def_service_cnpc_com__selectPersonView_serialize;

function def_service_cnpc_com__selectPersonView_deserialize (cxfjsutils, element) {
    var newobject = new def_service_cnpc_com__selectPersonView();
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
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg1')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg1(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg2');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg2')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg2(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg3');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg3')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg3(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.cnpc.com/}getInspectionPersonData
//
function def_service_cnpc_com__getInspectionPersonData () {
    this.typeMarker = 'def_service_cnpc_com__getInspectionPersonData';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = null;
}

//
// accessor is def_service_cnpc_com__getInspectionPersonData.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_cnpc_com__getInspectionPersonData.prototype.setArg0
//
function def_service_cnpc_com__getInspectionPersonData_getArg0() { return this._arg0;}

def_service_cnpc_com__getInspectionPersonData.prototype.getArg0 = def_service_cnpc_com__getInspectionPersonData_getArg0;

function def_service_cnpc_com__getInspectionPersonData_setArg0(value) { this._arg0 = value;}

def_service_cnpc_com__getInspectionPersonData.prototype.setArg0 = def_service_cnpc_com__getInspectionPersonData_setArg0;
//
// accessor is def_service_cnpc_com__getInspectionPersonData.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_cnpc_com__getInspectionPersonData.prototype.setArg1
//
function def_service_cnpc_com__getInspectionPersonData_getArg1() { return this._arg1;}

def_service_cnpc_com__getInspectionPersonData.prototype.getArg1 = def_service_cnpc_com__getInspectionPersonData_getArg1;

function def_service_cnpc_com__getInspectionPersonData_setArg1(value) { this._arg1 = value;}

def_service_cnpc_com__getInspectionPersonData.prototype.setArg1 = def_service_cnpc_com__getInspectionPersonData_setArg1;
//
// accessor is def_service_cnpc_com__getInspectionPersonData.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg2
// setter function is is def_service_cnpc_com__getInspectionPersonData.prototype.setArg2
//
function def_service_cnpc_com__getInspectionPersonData_getArg2() { return this._arg2;}

def_service_cnpc_com__getInspectionPersonData.prototype.getArg2 = def_service_cnpc_com__getInspectionPersonData_getArg2;

function def_service_cnpc_com__getInspectionPersonData_setArg2(value) { this._arg2 = value;}

def_service_cnpc_com__getInspectionPersonData.prototype.setArg2 = def_service_cnpc_com__getInspectionPersonData_setArg2;
//
// Serialize {http://def.service.cnpc.com/}getInspectionPersonData
//
function def_service_cnpc_com__getInspectionPersonData_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg1 != null) {
      xml = xml + '<arg1>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg1);
      xml = xml + '</arg1>';
     }
    }
    // block for local variables
    {
     if (this._arg2 != null) {
      xml = xml + '<arg2>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg2);
      xml = xml + '</arg2>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_cnpc_com__getInspectionPersonData.prototype.serialize = def_service_cnpc_com__getInspectionPersonData_serialize;

function def_service_cnpc_com__getInspectionPersonData_deserialize (cxfjsutils, element) {
    var newobject = new def_service_cnpc_com__getInspectionPersonData();
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
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg1')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg1(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg2');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg2')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg2(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.cnpc.com/}selectPersonViewResponse
//
function def_service_cnpc_com__selectPersonViewResponse () {
    this.typeMarker = 'def_service_cnpc_com__selectPersonViewResponse';
    this._return = null;
}

//
// accessor is def_service_cnpc_com__selectPersonViewResponse.prototype.getReturn
// element get for return
// - element type is {http://def.service.cnpc.com/}jsonObject
// - optional element
//
// element set for return
// setter function is is def_service_cnpc_com__selectPersonViewResponse.prototype.setReturn
//
function def_service_cnpc_com__selectPersonViewResponse_getReturn() { return this._return;}

def_service_cnpc_com__selectPersonViewResponse.prototype.getReturn = def_service_cnpc_com__selectPersonViewResponse_getReturn;

function def_service_cnpc_com__selectPersonViewResponse_setReturn(value) { this._return = value;}

def_service_cnpc_com__selectPersonViewResponse.prototype.setReturn = def_service_cnpc_com__selectPersonViewResponse_setReturn;
//
// Serialize {http://def.service.cnpc.com/}selectPersonViewResponse
//
function def_service_cnpc_com__selectPersonViewResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      xml = xml + this._return.serialize(cxfjsutils, 'return', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_cnpc_com__selectPersonViewResponse.prototype.serialize = def_service_cnpc_com__selectPersonViewResponse_serialize;

function def_service_cnpc_com__selectPersonViewResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_cnpc_com__selectPersonViewResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = def_service_cnpc_com__jsonObject_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://def.service.cnpc.com/}jsonObject
//
function def_service_cnpc_com__jsonObject () {
    this.typeMarker = 'def_service_cnpc_com__jsonObject';
}

//
// Serialize {http://def.service.cnpc.com/}jsonObject
//
function def_service_cnpc_com__jsonObject_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_cnpc_com__jsonObject.prototype.serialize = def_service_cnpc_com__jsonObject_serialize;

function def_service_cnpc_com__jsonObject_deserialize (cxfjsutils, element) {
    var newobject = new def_service_cnpc_com__jsonObject();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.cnpc.com/}JSONException
//
function def_service_cnpc_com__JSONException () {
    this.typeMarker = 'def_service_cnpc_com__JSONException';
    this._message = null;
}

//
// accessor is def_service_cnpc_com__JSONException.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is def_service_cnpc_com__JSONException.prototype.setMessage
//
function def_service_cnpc_com__JSONException_getMessage() { return this._message;}

def_service_cnpc_com__JSONException.prototype.getMessage = def_service_cnpc_com__JSONException_getMessage;

function def_service_cnpc_com__JSONException_setMessage(value) { this._message = value;}

def_service_cnpc_com__JSONException.prototype.setMessage = def_service_cnpc_com__JSONException_setMessage;
//
// Serialize {http://def.service.cnpc.com/}JSONException
//
function def_service_cnpc_com__JSONException_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_cnpc_com__JSONException.prototype.serialize = def_service_cnpc_com__JSONException_serialize;

function def_service_cnpc_com__JSONException_deserialize (cxfjsutils, element) {
    var newobject = new def_service_cnpc_com__JSONException();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.cnpc.com/}getInspectionPersonDataResponse
//
function def_service_cnpc_com__getInspectionPersonDataResponse () {
    this.typeMarker = 'def_service_cnpc_com__getInspectionPersonDataResponse';
    this._return = null;
}

//
// accessor is def_service_cnpc_com__getInspectionPersonDataResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_cnpc_com__getInspectionPersonDataResponse.prototype.setReturn
//
function def_service_cnpc_com__getInspectionPersonDataResponse_getReturn() { return this._return;}

def_service_cnpc_com__getInspectionPersonDataResponse.prototype.getReturn = def_service_cnpc_com__getInspectionPersonDataResponse_getReturn;

function def_service_cnpc_com__getInspectionPersonDataResponse_setReturn(value) { this._return = value;}

def_service_cnpc_com__getInspectionPersonDataResponse.prototype.setReturn = def_service_cnpc_com__getInspectionPersonDataResponse_setReturn;
//
// Serialize {http://def.service.cnpc.com/}getInspectionPersonDataResponse
//
function def_service_cnpc_com__getInspectionPersonDataResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_cnpc_com__getInspectionPersonDataResponse.prototype.serialize = def_service_cnpc_com__getInspectionPersonDataResponse_serialize;

function def_service_cnpc_com__getInspectionPersonDataResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_cnpc_com__getInspectionPersonDataResponse();
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
// Definitions for service: {http://impl.service.cnpc.com/}GetInspectionInfoDataService
//

// Javascript for {http://def.service.cnpc.com/}IGetInspectionInfoData

function def_service_cnpc_com__IGetInspectionInfoData () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://def.service.cnpc.com/}selectPersonView'] = def_service_cnpc_com__selectPersonView_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}selectPersonView'] = def_service_cnpc_com__selectPersonView_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}getInspectionPersonData'] = def_service_cnpc_com__getInspectionPersonData_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}getInspectionPersonData'] = def_service_cnpc_com__getInspectionPersonData_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}selectPersonViewResponse'] = def_service_cnpc_com__selectPersonViewResponse_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}selectPersonViewResponse'] = def_service_cnpc_com__selectPersonViewResponse_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}JSONException'] = def_service_cnpc_com__JSONException_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}JSONException'] = def_service_cnpc_com__JSONException_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}getInspectionPersonDataResponse'] = def_service_cnpc_com__getInspectionPersonDataResponse_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}getInspectionPersonDataResponse'] = def_service_cnpc_com__getInspectionPersonDataResponse_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}PioaGisException'] = def_service_cnpc_com__PioaGisException_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}PioaGisException'] = def_service_cnpc_com__PioaGisException_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}selectPersonView'] = def_service_cnpc_com__selectPersonView_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}selectPersonView'] = def_service_cnpc_com__selectPersonView_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}getInspectionPersonData'] = def_service_cnpc_com__getInspectionPersonData_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}getInspectionPersonData'] = def_service_cnpc_com__getInspectionPersonData_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}selectPersonViewResponse'] = def_service_cnpc_com__selectPersonViewResponse_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}selectPersonViewResponse'] = def_service_cnpc_com__selectPersonViewResponse_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}jsonObject'] = def_service_cnpc_com__jsonObject_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}jsonObject'] = def_service_cnpc_com__jsonObject_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}JSONException'] = def_service_cnpc_com__JSONException_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}JSONException'] = def_service_cnpc_com__JSONException_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}getInspectionPersonDataResponse'] = def_service_cnpc_com__getInspectionPersonDataResponse_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}getInspectionPersonDataResponse'] = def_service_cnpc_com__getInspectionPersonDataResponse_deserialize;
    this.globalElementSerializers['{http://def.service.cnpc.com/}PioaGisException'] = def_service_cnpc_com__PioaGisException_serialize;
    this.globalElementDeserializers['{http://def.service.cnpc.com/}PioaGisException'] = def_service_cnpc_com__PioaGisException_deserialize;
}

function def_service_cnpc_com__selectPersonView_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_cnpc_com__selectPersonViewResponse_deserializeResponse');
     responseObject = def_service_cnpc_com__selectPersonViewResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_cnpc_com__IGetInspectionInfoData.prototype.selectPersonView_onsuccess = def_service_cnpc_com__selectPersonView_op_onsuccess;

function def_service_cnpc_com__selectPersonView_op_onerror(client) {
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

def_service_cnpc_com__IGetInspectionInfoData.prototype.selectPersonView_onerror = def_service_cnpc_com__selectPersonView_op_onerror;

//
// Operation {http://def.service.cnpc.com/}selectPersonView
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg3
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_cnpc_com__selectPersonView_op(successCallback, errorCallback, arg0, arg1, arg2, arg3) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(4);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    args[3] = arg3;
    xml = this.selectPersonView_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.selectPersonView_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.selectPersonView_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_cnpc_com__IGetInspectionInfoData.prototype.selectPersonView = def_service_cnpc_com__selectPersonView_op;

function def_service_cnpc_com__selectPersonView_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_cnpc_com__selectPersonView();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    wrapperObj.setArg3(args[3]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:selectPersonView', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_cnpc_com__IGetInspectionInfoData.prototype.selectPersonView_serializeInput = def_service_cnpc_com__selectPersonView_serializeInput;

function def_service_cnpc_com__selectPersonViewResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_cnpc_com__selectPersonViewResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_cnpc_com__getInspectionPersonData_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_cnpc_com__getInspectionPersonDataResponse_deserializeResponse');
     responseObject = def_service_cnpc_com__getInspectionPersonDataResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_cnpc_com__IGetInspectionInfoData.prototype.getInspectionPersonData_onsuccess = def_service_cnpc_com__getInspectionPersonData_op_onsuccess;

function def_service_cnpc_com__getInspectionPersonData_op_onerror(client) {
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

def_service_cnpc_com__IGetInspectionInfoData.prototype.getInspectionPersonData_onerror = def_service_cnpc_com__getInspectionPersonData_op_onerror;

//
// Operation {http://def.service.cnpc.com/}getInspectionPersonData
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_cnpc_com__getInspectionPersonData_op(successCallback, errorCallback, arg0, arg1, arg2) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    xml = this.getInspectionPersonData_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getInspectionPersonData_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getInspectionPersonData_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_cnpc_com__IGetInspectionInfoData.prototype.getInspectionPersonData = def_service_cnpc_com__getInspectionPersonData_op;

function def_service_cnpc_com__getInspectionPersonData_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_cnpc_com__getInspectionPersonData();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getInspectionPersonData', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_cnpc_com__IGetInspectionInfoData.prototype.getInspectionPersonData_serializeInput = def_service_cnpc_com__getInspectionPersonData_serializeInput;

function def_service_cnpc_com__getInspectionPersonDataResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_cnpc_com__getInspectionPersonDataResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_cnpc_com__IGetInspectionInfoData_impl_service_cnpc_com__GetInspectionInfoDataPort () {
  this.url = 'http://10.100.1.173:8080/cxfWebService/webservice/GetInspectionInfoData';
}
def_service_cnpc_com__IGetInspectionInfoData_impl_service_cnpc_com__GetInspectionInfoDataPort.prototype = new def_service_cnpc_com__IGetInspectionInfoData;
