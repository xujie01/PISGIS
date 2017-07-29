//
// Definitions for schema: http://def.service.pif_gispatrol.inf.pis.cnpc.com/
//  http://10.100.1.173:8080/cxfWebService/webservice/AlarmReport?wsdl=IAlarmReport.wsdl#types1
//
//
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryUnWarnListResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryUnWarnListResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryInWarnList
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = null;
    this._arg3 = null;
    this._arg4 = null;
    this._arg5 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_setArg1;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg2
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.setArg2
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_getArg2() { return this._arg2;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.getArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_getArg2;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_setArg2(value) { this._arg2 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.setArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_setArg2;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.getArg3
// element get for arg3
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg3
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.setArg3
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_getArg3() { return this._arg3;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.getArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_getArg3;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_setArg3(value) { this._arg3 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.setArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_setArg3;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.getArg4
// element get for arg4
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg4
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.setArg4
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_getArg4() { return this._arg4;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.getArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_getArg4;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_setArg4(value) { this._arg4 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.setArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_setArg4;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.getArg5
// element get for arg5
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg5
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.setArg5
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_getArg5() { return this._arg5;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.getArg5 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_getArg5;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_setArg5(value) { this._arg5 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.setArg5 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_setArg5;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryInWarnList
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    // block for local variables
    {
     if (this._arg4 != null) {
      xml = xml + '<arg4>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg4);
      xml = xml + '</arg4>';
     }
    }
    // block for local variables
    {
     if (this._arg5 != null) {
      xml = xml + '<arg5>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg5);
      xml = xml + '</arg5>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList();
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
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg5');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg5')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg5(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryUnWarnList
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = null;
    this._arg3 = null;
    this._arg4 = null;
    this._arg5 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_setArg1;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg2
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.setArg2
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_getArg2() { return this._arg2;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.getArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_getArg2;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_setArg2(value) { this._arg2 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.setArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_setArg2;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.getArg3
// element get for arg3
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg3
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.setArg3
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_getArg3() { return this._arg3;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.getArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_getArg3;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_setArg3(value) { this._arg3 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.setArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_setArg3;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.getArg4
// element get for arg4
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg4
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.setArg4
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_getArg4() { return this._arg4;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.getArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_getArg4;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_setArg4(value) { this._arg4 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.setArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_setArg4;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.getArg5
// element get for arg5
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg5
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.setArg5
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_getArg5() { return this._arg5;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.getArg5 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_getArg5;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_setArg5(value) { this._arg5 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.setArg5 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_setArg5;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryUnWarnList
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    // block for local variables
    {
     if (this._arg4 != null) {
      xml = xml + '<arg4>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg4);
      xml = xml + '</arg4>';
     }
    }
    // block for local variables
    {
     if (this._arg5 != null) {
      xml = xml + '<arg5>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg5);
      xml = xml + '</arg5>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList();
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
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg5');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg5')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg5(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnList
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = null;
    this._arg3 = null;
    this._arg4 = null;
    this._arg5 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_setArg1;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg2
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.setArg2
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_getArg2() { return this._arg2;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.getArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_getArg2;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_setArg2(value) { this._arg2 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.setArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_setArg2;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.getArg3
// element get for arg3
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg3
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.setArg3
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_getArg3() { return this._arg3;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.getArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_getArg3;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_setArg3(value) { this._arg3 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.setArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_setArg3;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.getArg4
// element get for arg4
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg4
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.setArg4
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_getArg4() { return this._arg4;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.getArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_getArg4;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_setArg4(value) { this._arg4 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.setArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_setArg4;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.getArg5
// element get for arg5
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg5
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.setArg5
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_getArg5() { return this._arg5;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.getArg5 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_getArg5;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_setArg5(value) { this._arg5 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.setArg5 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_setArg5;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnList
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    // block for local variables
    {
     if (this._arg4 != null) {
      xml = xml + '<arg4>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg4);
      xml = xml + '</arg4>';
     }
    }
    // block for local variables
    {
     if (this._arg5 != null) {
      xml = xml + '<arg5>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg5);
      xml = xml + '</arg5>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList();
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
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg5');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg5')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg5(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryAlarmIsUpdate
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate';
    this._arg0 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_setArg0;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryAlarmIsUpdate
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnCountResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnCountResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnDetailResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnDetailResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnListResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnListResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryAlarmIsUpdateResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryAlarmIsUpdateResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnCount
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount';
    this._arg0 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_setArg0;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnCount
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnDetail
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail';
    this._arg0 = null;
    this._arg1 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_setArg1;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnDetail
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryInWarnListResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryInWarnListResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse();
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
// Definitions for service: {http://impl.service.pif_gispatrol.inf.pis.cnpc.com/}AlarmReportService
//

// Javascript for {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}IAlarmReport

function def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryUnWarnListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryUnWarnListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryInWarnList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryInWarnList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryUnWarnList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryUnWarnList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryAlarmIsUpdate'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryAlarmIsUpdate'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnCountResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnCountResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnDetailResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnDetailResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryAlarmIsUpdateResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryAlarmIsUpdateResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnCount'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnCount'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnDetail'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnDetail'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryInWarnListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryInWarnListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryUnWarnListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryUnWarnListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryInWarnList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryInWarnList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryUnWarnList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryUnWarnList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryAlarmIsUpdate'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryAlarmIsUpdate'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnCountResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnCountResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnDetailResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnDetailResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryAlarmIsUpdateResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryAlarmIsUpdateResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnCount'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnCount'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnDetail'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnDetail'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryInWarnListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryInWarnListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse_deserialize;
}

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryInWarnList_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryInWarnList_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryInWarnList
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg3
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg4
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg5
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_op(successCallback, errorCallback, arg0, arg1, arg2, arg3, arg4, arg5) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(6);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    args[3] = arg3;
    args[4] = arg4;
    args[5] = arg5;
    xml = this.queryInWarnList_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryInWarnList_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryInWarnList_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryInWarnList = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    wrapperObj.setArg3(args[3]);
    wrapperObj.setArg4(args[4]);
    wrapperObj.setArg5(args[5]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryInWarnList', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryInWarnList_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnList_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryInWarnListResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryUnWarnList_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryUnWarnList_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryUnWarnList
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg3
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg4
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg5
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_op(successCallback, errorCallback, arg0, arg1, arg2, arg3, arg4, arg5) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(6);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    args[3] = arg3;
    args[4] = arg4;
    args[5] = arg5;
    xml = this.queryUnWarnList_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryUnWarnList_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryUnWarnList_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryUnWarnList = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    wrapperObj.setArg3(args[3]);
    wrapperObj.setArg4(args[4]);
    wrapperObj.setArg5(args[5]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryUnWarnList', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryUnWarnList_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnList_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryUnWarnListResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryWarnList_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryWarnList_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnList
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg3
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg4
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg5
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_op(successCallback, errorCallback, arg0, arg1, arg2, arg3, arg4, arg5) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(6);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    args[3] = arg3;
    args[4] = arg4;
    args[5] = arg5;
    xml = this.queryWarnList_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryWarnList_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryWarnList_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryWarnList = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    wrapperObj.setArg3(args[3]);
    wrapperObj.setArg4(args[4]);
    wrapperObj.setArg5(args[5]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryWarnList', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryWarnList_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnList_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnListResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryAlarmIsUpdate_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryAlarmIsUpdate_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryAlarmIsUpdate
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.queryAlarmIsUpdate_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryAlarmIsUpdate_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryAlarmIsUpdate_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryAlarmIsUpdate = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryAlarmIsUpdate', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryAlarmIsUpdate_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdate_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryAlarmIsUpdateResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryWarnCount_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryWarnCount_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnCount
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.queryWarnCount_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryWarnCount_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryWarnCount_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryWarnCount = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryWarnCount', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryWarnCount_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCount_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnCountResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryWarnDetail_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryWarnDetail_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryWarnDetail
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.queryWarnDetail_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryWarnDetail_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryWarnDetail_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryWarnDetail = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryWarnDetail', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport.prototype.queryWarnDetail_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetail_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryWarnDetailResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport_impl_service_pif_gispatrol_inf_pis_cnpc_com__AlarmReportPort () {
  this.url = 'http://10.100.1.173:8080/cxfWebService/webservice/AlarmReport';
}
def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport_impl_service_pif_gispatrol_inf_pis_cnpc_com__AlarmReportPort.prototype = new def_service_pif_gispatrol_inf_pis_cnpc_com__IAlarmReport;
