//
// Definitions for schema: http://def.service.pif_gispatrol.inf.pis.cnpc.com/
//  http://10.100.1.173:8080/cxfWebService/webservice/EventReport?wsdl=IEventReport.wsdl#types1
//
//
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportIsUpdateResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportIsUpdateResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = null;
    this._arg3 = 0;
    this._arg4 = 0;
    this._arg5 = null;
    this._arg6 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_setArg1;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg2
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.setArg2
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_getArg2() { return this._arg2;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.getArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_getArg2;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_setArg2(value) { this._arg2 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.setArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_setArg2;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.getArg3
// element get for arg3
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for arg3
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.setArg3
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_getArg3() { return this._arg3;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.getArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_getArg3;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_setArg3(value) { this._arg3 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.setArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_setArg3;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.getArg4
// element get for arg4
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for arg4
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.setArg4
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_getArg4() { return this._arg4;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.getArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_getArg4;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_setArg4(value) { this._arg4 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.setArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_setArg4;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.getArg5
// element get for arg5
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg5
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.setArg5
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_getArg5() { return this._arg5;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.getArg5 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_getArg5;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_setArg5(value) { this._arg5 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.setArg5 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_setArg5;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.getArg6
// element get for arg6
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg6
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.setArg6
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_getArg6() { return this._arg6;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.getArg6 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_getArg6;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_setArg6(value) { this._arg6 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.setArg6 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_setArg6;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<arg3>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._arg3);
     xml = xml + '</arg3>';
    }
    // block for local variables
    {
     xml = xml + '<arg4>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._arg4);
     xml = xml + '</arg4>';
    }
    // block for local variables
    {
     if (this._arg5 != null) {
      xml = xml + '<arg5>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg5);
      xml = xml + '</arg5>';
     }
    }
    // block for local variables
    {
     if (this._arg6 != null) {
      xml = xml + '<arg6>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg6);
      xml = xml + '</arg6>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList();
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
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setArg3(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg4');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setArg4(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg6');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg6')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg6(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryStaticsForUnit
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = null;
    this._arg3 = null;
    this._arg4 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_setArg1;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg2
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.setArg2
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_getArg2() { return this._arg2;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.getArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_getArg2;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_setArg2(value) { this._arg2 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.setArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_setArg2;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.getArg3
// element get for arg3
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg3
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.setArg3
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_getArg3() { return this._arg3;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.getArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_getArg3;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_setArg3(value) { this._arg3 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.setArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_setArg3;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.getArg4
// element get for arg4
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg4
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.setArg4
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_getArg4() { return this._arg4;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.getArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_getArg4;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_setArg4(value) { this._arg4 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.setArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_setArg4;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryStaticsForUnit
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportImage
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage';
    this._arg0 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_setArg0;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportImage
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportIsUpdate
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate';
    this._arg0 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_setArg0;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportIsUpdate
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList_miniResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList_miniResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}lookEventReportImageResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}base64Binary
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}lookEventReportImageResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = cxfjsutils.deserializeBase64orMom(curElement);
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList_mini
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = null;
    this._arg3 = 0;
    this._arg4 = 0;
    this._arg5 = null;
    this._arg6 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_setArg1;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg2
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.setArg2
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_getArg2() { return this._arg2;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.getArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_getArg2;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_setArg2(value) { this._arg2 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.setArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_setArg2;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.getArg3
// element get for arg3
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for arg3
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.setArg3
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_getArg3() { return this._arg3;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.getArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_getArg3;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_setArg3(value) { this._arg3 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.setArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_setArg3;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.getArg4
// element get for arg4
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for arg4
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.setArg4
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_getArg4() { return this._arg4;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.getArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_getArg4;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_setArg4(value) { this._arg4 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.setArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_setArg4;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.getArg5
// element get for arg5
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg5
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.setArg5
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_getArg5() { return this._arg5;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.getArg5 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_getArg5;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_setArg5(value) { this._arg5 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.setArg5 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_setArg5;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.getArg6
// element get for arg6
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg6
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.setArg6
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_getArg6() { return this._arg6;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.getArg6 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_getArg6;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_setArg6(value) { this._arg6 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.setArg6 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_setArg6;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList_mini
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<arg3>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._arg3);
     xml = xml + '</arg3>';
    }
    // block for local variables
    {
     xml = xml + '<arg4>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._arg4);
     xml = xml + '</arg4>';
    }
    // block for local variables
    {
     if (this._arg5 != null) {
      xml = xml + '<arg5>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg5);
      xml = xml + '</arg5>';
     }
    }
    // block for local variables
    {
     if (this._arg6 != null) {
      xml = xml + '<arg6>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg6);
      xml = xml + '</arg6>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini();
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
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setArg3(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg4');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setArg4(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg6');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg6')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg6(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}lookEventReportImage
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage';
    this._arg0 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_setArg0;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}lookEventReportImage
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getEventReportImageByUrlResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}base64Binary
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getEventReportImageByUrlResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = cxfjsutils.deserializeBase64orMom(curElement);
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getEventReportImageByUrl
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl';
    this._arg0 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_setArg0;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getEventReportImageByUrl
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteEventPoint
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint';
    this._arg0 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_setArg0;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteEventPoint
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryStaticsForUnitResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryStaticsForUnitResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportCount
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_setArg1;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg2
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount.prototype.setArg2
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_getArg2() { return this._arg2;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount.prototype.getArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_getArg2;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_setArg2(value) { this._arg2 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount.prototype.setArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_setArg2;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportCount
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportCountResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportCountResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteEventPointResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteEventPointResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportImageResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportImageResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportListResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportListResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse();
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
// Definitions for service: {http://impl.service.pif_gispatrol.inf.pis.cnpc.com/}EventReportService
//

// Javascript for {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}IEventReport

function def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportIsUpdateResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportIsUpdateResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryStaticsForUnit'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryStaticsForUnit'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportImage'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportImage'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportIsUpdate'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportIsUpdate'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}lookEventReportImageResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}lookEventReportImageResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList_miniResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList_miniResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList_mini'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList_mini'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}lookEventReportImage'] = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}lookEventReportImage'] = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getEventReportImageByUrlResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getEventReportImageByUrlResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getEventReportImageByUrl'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getEventReportImageByUrl'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteEventPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteEventPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryStaticsForUnitResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryStaticsForUnitResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportCount'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportCount'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportCountResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportCountResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteEventPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteEventPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportImageResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportImageResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportIsUpdateResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportIsUpdateResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryStaticsForUnit'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryStaticsForUnit'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportImage'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportImage'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportIsUpdate'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportIsUpdate'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList_miniResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList_miniResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}lookEventReportImageResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}lookEventReportImageResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList_mini'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList_mini'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}lookEventReportImage'] = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}lookEventReportImage'] = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getEventReportImageByUrlResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getEventReportImageByUrlResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getEventReportImageByUrl'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getEventReportImageByUrl'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteEventPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteEventPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryStaticsForUnitResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryStaticsForUnitResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportCount'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportCount'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportCountResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportCountResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteEventPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteEventPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportImageResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportImageResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse_deserialize;
}

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportList_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportList_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg3
// - simple type {http://www.w3.org/2001/XMLSchema}int// parameter arg4
// - simple type {http://www.w3.org/2001/XMLSchema}int// parameter arg5
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg6
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_op(successCallback, errorCallback, arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(7);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    args[3] = arg3;
    args[4] = arg4;
    args[5] = arg5;
    args[6] = arg6;
    xml = this.queryEventReportList_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryEventReportList_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryEventReportList_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportList = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    wrapperObj.setArg3(args[3]);
    wrapperObj.setArg4(args[4]);
    wrapperObj.setArg5(args[5]);
    wrapperObj.setArg6(args[6]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryEventReportList', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportList_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportListResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryStaticsForUnit_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryStaticsForUnit_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryStaticsForUnit
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg3
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg4
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_op(successCallback, errorCallback, arg0, arg1, arg2, arg3, arg4) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(5);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    args[3] = arg3;
    args[4] = arg4;
    xml = this.queryStaticsForUnit_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryStaticsForUnit_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryStaticsForUnit_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryStaticsForUnit = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    wrapperObj.setArg3(args[3]);
    wrapperObj.setArg4(args[4]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryStaticsForUnit', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryStaticsForUnit_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnit_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryStaticsForUnitResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.deleteEventPoint_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.deleteEventPoint_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteEventPoint
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.deleteEventPoint_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deleteEventPoint_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deleteEventPoint_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.deleteEventPoint = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deleteEventPoint', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.deleteEventPoint_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPoint_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteEventPointResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportImage_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportImage_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportImage
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.queryEventReportImage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryEventReportImage_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryEventReportImage_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportImage = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryEventReportImage', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportImage_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImage_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportImageResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportIsUpdate_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportIsUpdate_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportIsUpdate
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.queryEventReportIsUpdate_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryEventReportIsUpdate_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryEventReportIsUpdate_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportIsUpdate = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryEventReportIsUpdate', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportIsUpdate_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdate_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportIsUpdateResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportCount_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportCount_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportCount
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_op(successCallback, errorCallback, arg0, arg1, arg2) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    xml = this.queryEventReportCount_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryEventReportCount_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryEventReportCount_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportCount = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryEventReportCount', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportCount_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCount_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportCountResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportList_mini_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportList_mini_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryEventReportList_mini
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg3
// - simple type {http://www.w3.org/2001/XMLSchema}int// parameter arg4
// - simple type {http://www.w3.org/2001/XMLSchema}int// parameter arg5
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg6
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_op(successCallback, errorCallback, arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(7);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    args[3] = arg3;
    args[4] = arg4;
    args[5] = arg5;
    args[6] = arg6;
    xml = this.queryEventReportList_mini_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryEventReportList_mini_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryEventReportList_mini_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportList_mini = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    wrapperObj.setArg3(args[3]);
    wrapperObj.setArg4(args[4]);
    wrapperObj.setArg5(args[5]);
    wrapperObj.setArg6(args[6]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryEventReportList_mini', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.queryEventReportList_mini_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_mini_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryEventReportList_miniResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.lookEventReportImage_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.lookEventReportImage_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}lookEventReportImage
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.lookEventReportImage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.lookEventReportImage_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.lookEventReportImage_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.lookEventReportImage = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:lookEventReportImage', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.lookEventReportImage_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImage_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__lookEventReportImageResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.getEventReportImageByUrl_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.getEventReportImageByUrl_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getEventReportImageByUrl
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getEventReportImageByUrl_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getEventReportImageByUrl_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getEventReportImageByUrl_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.getEventReportImageByUrl = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getEventReportImageByUrl', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport.prototype.getEventReportImageByUrl_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrl_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__getEventReportImageByUrlResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport_impl_service_pif_gispatrol_inf_pis_cnpc_com__EventReportPort () {
  this.url = 'http://10.100.1.173:8080/cxfWebService/webservice/EventReport';
}
def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport_impl_service_pif_gispatrol_inf_pis_cnpc_com__EventReportPort.prototype = new def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport;
