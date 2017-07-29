//
// Definitions for schema: http://def.service.pif_gispatrol.inf.pis.cnpc.com/
//  http://10.100.1.173:8080/cxfWebService/webservice/HistoryPoints?wsdl=IHistoryPoints.wsdl#types1
//
//
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHistoryPoints
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_setArg1;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg2
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints.prototype.setArg2
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_getArg2() { return this._arg2;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints.prototype.getArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_getArg2;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_setArg2(value) { this._arg2 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints.prototype.setArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_setArg2;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHistoryPoints
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UserPointListResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UserPointListResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryPersonPointsResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryPersonPointsResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHisPointsForUnit
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = null;
    this._arg3 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_setArg1;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg2
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.setArg2
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_getArg2() { return this._arg2;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.getArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_getArg2;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_setArg2(value) { this._arg2 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.setArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_setArg2;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.getArg3
// element get for arg3
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg3
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.setArg3
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_getArg3() { return this._arg3;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.getArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_getArg3;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_setArg3(value) { this._arg3 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.setArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_setArg3;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHisPointsForUnit
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}SQLException
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException';
    this._errorCode = null;
    this._sQLState = null;
    this._message = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException.prototype.getErrorCode
// element get for errorCode
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for errorCode
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException.prototype.setErrorCode
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_getErrorCode() { return this._errorCode;}

def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException.prototype.getErrorCode = def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_getErrorCode;

function def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_setErrorCode(value) { this._errorCode = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException.prototype.setErrorCode = def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_setErrorCode;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException.prototype.getSQLState
// element get for sQLState
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for sQLState
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException.prototype.setSQLState
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_getSQLState() { return this._sQLState;}

def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException.prototype.getSQLState = def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_getSQLState;

function def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_setSQLState(value) { this._sQLState = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException.prototype.setSQLState = def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_setSQLState;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException.prototype.setMessage
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_getMessage() { return this._message;}

def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException.prototype.getMessage = def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_getMessage;

function def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_setMessage(value) { this._message = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException.prototype.setMessage = def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_setMessage;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}SQLException
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._errorCode != null) {
      xml = xml + '<errorCode>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._errorCode);
      xml = xml + '</errorCode>';
     }
    }
    // block for local variables
    {
     if (this._sQLState != null) {
      xml = xml + '<sQLState>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sQLState);
      xml = xml + '</sQLState>';
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing errorCode');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'errorCode')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setErrorCode(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sQLState');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'sQLState')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setSQLState(item);
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
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getPersonInfoResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getPersonInfoResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryCurrentUserLocationResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryCurrentUserLocationResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UnitKeyPointList
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList';
    this._arg0 = null;
    this._arg1 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_setArg1;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UnitKeyPointList
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}JSONException
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException';
    this._message = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException.prototype.setMessage
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException_getMessage() { return this._message;}

def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException.prototype.getMessage = def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException_getMessage;

function def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException_setMessage(value) { this._message = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException.prototype.setMessage = def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException_setMessage;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}JSONException
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UserPointList
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList';
    this._arg0 = null;
    this._arg1 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_setArg1;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UserPointList
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHistoryPointsResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHistoryPointsResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}GetMonitorUserInfo
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo';
    this._arg0 = null;
    this._arg1 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_setArg1;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}GetMonitorUserInfo
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getPersonInfo
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo';
    this._arg0 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_setArg0;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getPersonInfo
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}GetMonitorUserInfoResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse.prototype.getReturn
// element get for return
// - element type is {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}jsonArray
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}GetMonitorUserInfoResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = def_service_pif_gispatrol_inf_pis_cnpc_com__jsonArray_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UnitKeyPointListResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UnitKeyPointListResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryCurrentUserLocation
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_setArg1;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg2
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation.prototype.setArg2
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_getArg2() { return this._arg2;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation.prototype.getArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_getArg2;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_setArg2(value) { this._arg2 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation.prototype.setArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_setArg2;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryCurrentUserLocation
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryPersonPoints
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints';
    this._arg0 = null;
    this._arg1 = 0;
    this._arg2 = null;
    this._arg3 = null;
    this._arg4 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_setArg1;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg2
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.setArg2
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_getArg2() { return this._arg2;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.getArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_getArg2;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_setArg2(value) { this._arg2 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.setArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_setArg2;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.getArg3
// element get for arg3
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg3
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.setArg3
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_getArg3() { return this._arg3;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.getArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_getArg3;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_setArg3(value) { this._arg3 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.setArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_setArg3;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.getArg4
// element get for arg4
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg4
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.setArg4
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_getArg4() { return this._arg4;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.getArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_getArg4;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_setArg4(value) { this._arg4 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.setArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_setArg4;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryPersonPoints
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints();
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
     item = parseInt(value);
    }
    newobject.setArg1(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}jsonArray
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__jsonArray () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__jsonArray';
}

//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}jsonArray
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__jsonArray_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__jsonArray.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__jsonArray_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__jsonArray_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__jsonArray();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHisPointsForUnitResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHisPointsForUnitResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}PioaGisException
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException';
    this._message = null;
    this._keyValue = null;
    this._errorCode = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException.prototype.setMessage
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_getMessage() { return this._message;}

def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException.prototype.getMessage = def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_getMessage;

function def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_setMessage(value) { this._message = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException.prototype.setMessage = def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_setMessage;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException.prototype.getKeyValue
// element get for keyValue
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for keyValue
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException.prototype.setKeyValue
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_getKeyValue() { return this._keyValue;}

def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException.prototype.getKeyValue = def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_getKeyValue;

function def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_setKeyValue(value) { this._keyValue = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException.prototype.setKeyValue = def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_setKeyValue;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException.prototype.getErrorCode
// element get for errorCode
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for errorCode
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException.prototype.setErrorCode
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_getErrorCode() { return this._errorCode;}

def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException.prototype.getErrorCode = def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_getErrorCode;

function def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_setErrorCode(value) { this._errorCode = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException.prototype.setErrorCode = def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_setErrorCode;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}PioaGisException
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException();
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
// Definitions for service: {http://impl.service.pif_gispatrol.inf.pis.cnpc.com/}HistoryPointsService
//

// Javascript for {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}IHistoryPoints

function def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UserPointListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UserPointListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHistoryPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHistoryPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryPersonPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryPersonPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHisPointsForUnit'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHisPointsForUnit'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}SQLException'] = def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}SQLException'] = def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getPersonInfoResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getPersonInfoResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryCurrentUserLocationResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryCurrentUserLocationResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UnitKeyPointList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UnitKeyPointList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}JSONException'] = def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}JSONException'] = def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UserPointList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UserPointList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHistoryPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHistoryPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}GetMonitorUserInfo'] = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}GetMonitorUserInfo'] = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getPersonInfo'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getPersonInfo'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}GetMonitorUserInfoResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}GetMonitorUserInfoResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UnitKeyPointListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UnitKeyPointListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryCurrentUserLocation'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryCurrentUserLocation'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryPersonPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryPersonPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHisPointsForUnitResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHisPointsForUnitResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}PioaGisException'] = def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}PioaGisException'] = def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHistoryPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHistoryPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UserPointListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UserPointListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryPersonPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryPersonPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHisPointsForUnit'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHisPointsForUnit'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}SQLException'] = def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}SQLException'] = def_service_pif_gispatrol_inf_pis_cnpc_com__SQLException_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getPersonInfoResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getPersonInfoResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryCurrentUserLocationResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryCurrentUserLocationResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UnitKeyPointList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UnitKeyPointList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}JSONException'] = def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}JSONException'] = def_service_pif_gispatrol_inf_pis_cnpc_com__JSONException_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UserPointList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UserPointList'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHistoryPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHistoryPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}GetMonitorUserInfo'] = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}GetMonitorUserInfo'] = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getPersonInfo'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getPersonInfo'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}GetMonitorUserInfoResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}GetMonitorUserInfoResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UnitKeyPointListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UnitKeyPointListResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryCurrentUserLocation'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryCurrentUserLocation'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryPersonPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryPersonPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}jsonArray'] = def_service_pif_gispatrol_inf_pis_cnpc_com__jsonArray_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}jsonArray'] = def_service_pif_gispatrol_inf_pis_cnpc_com__jsonArray_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHisPointsForUnitResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHisPointsForUnitResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}PioaGisException'] = def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}PioaGisException'] = def_service_pif_gispatrol_inf_pis_cnpc_com__PioaGisException_deserialize;
}

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryHistoryPoints_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryHistoryPoints_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHistoryPoints
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_op(successCallback, errorCallback, arg0, arg1, arg2) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    xml = this.queryHistoryPoints_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryHistoryPoints_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryHistoryPoints_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryHistoryPoints = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryHistoryPoints', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryHistoryPoints_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPoints_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHistoryPointsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.GetMonitorUserInfo_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.GetMonitorUserInfo_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}GetMonitorUserInfo
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.GetMonitorUserInfo_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.GetMonitorUserInfo_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.GetMonitorUserInfo_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.GetMonitorUserInfo = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:GetMonitorUserInfo', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.GetMonitorUserInfo_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfo_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__GetMonitorUserInfoResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.getPersonInfo_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.getPersonInfo_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getPersonInfo
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getPersonInfo_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getPersonInfo_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getPersonInfo_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.getPersonInfo = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getPersonInfo', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.getPersonInfo_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfo_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__getPersonInfoResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryHisPointsForUnit_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryHisPointsForUnit_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryHisPointsForUnit
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg3
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_op(successCallback, errorCallback, arg0, arg1, arg2, arg3) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(4);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    args[3] = arg3;
    xml = this.queryHisPointsForUnit_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryHisPointsForUnit_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryHisPointsForUnit_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryHisPointsForUnit = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    wrapperObj.setArg3(args[3]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryHisPointsForUnit', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryHisPointsForUnit_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnit_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryHisPointsForUnitResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.UnitKeyPointList_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.UnitKeyPointList_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UnitKeyPointList
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.UnitKeyPointList_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.UnitKeyPointList_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.UnitKeyPointList_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.UnitKeyPointList = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:UnitKeyPointList', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.UnitKeyPointList_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointList_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__UnitKeyPointListResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryCurrentUserLocation_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryCurrentUserLocation_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryCurrentUserLocation
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_op(successCallback, errorCallback, arg0, arg1, arg2) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    xml = this.queryCurrentUserLocation_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryCurrentUserLocation_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryCurrentUserLocation_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryCurrentUserLocation = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryCurrentUserLocation', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryCurrentUserLocation_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocation_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryCurrentUserLocationResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryPersonPoints_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryPersonPoints_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}queryPersonPoints
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}int// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg3
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg4
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_op(successCallback, errorCallback, arg0, arg1, arg2, arg3, arg4) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(5);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    args[3] = arg3;
    args[4] = arg4;
    xml = this.queryPersonPoints_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.queryPersonPoints_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.queryPersonPoints_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryPersonPoints = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    wrapperObj.setArg3(args[3]);
    wrapperObj.setArg4(args[4]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:queryPersonPoints', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.queryPersonPoints_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPoints_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__queryPersonPointsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.UserPointList_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.UserPointList_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}UserPointList
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.UserPointList_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.UserPointList_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.UserPointList_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.UserPointList = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:UserPointList', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints.prototype.UserPointList_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointList_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__UserPointListResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints_impl_service_pif_gispatrol_inf_pis_cnpc_com__HistoryPointsPort () {
  this.url = 'http://10.100.1.173:8080/cxfWebService/webservice/HistoryPoints';
}
def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints_impl_service_pif_gispatrol_inf_pis_cnpc_com__HistoryPointsPort.prototype = new def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints;
