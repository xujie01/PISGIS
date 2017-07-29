//
// Definitions for schema: http://def.service.pif_gispatrol.inf.pis.cnpc.com/
//  http://10.100.1.173:8080/cxfWebService/webservice/KeyPoints?wsdl=IKeyPoints.wsdl#types1
//
//
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}editKeyPointResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}editKeyPointResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteKeyPointResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteKeyPointResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getKeyPointsResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getKeyPointsResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteKeyPoint
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint';
    this._arg0 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_setArg0;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteKeyPoint
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}searchKeyPoints
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = null;
    this._arg3 = null;
    this._arg4 = null;
    this._arg5 = null;
    this._arg6 = null;
    this._arg7 = null;
    this._arg8 = null;
    this._arg9 = null;
    this._arg10 = null;
    this._arg11 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg1;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg2
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg2
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg2() { return this._arg2;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg2;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg2(value) { this._arg2 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg2;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg3
// element get for arg3
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg3
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg3
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg3() { return this._arg3;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg3;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg3(value) { this._arg3 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg3;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg4
// element get for arg4
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg4
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg4
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg4() { return this._arg4;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg4;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg4(value) { this._arg4 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg4;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg5
// element get for arg5
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg5
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg5
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg5() { return this._arg5;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg5 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg5;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg5(value) { this._arg5 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg5 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg5;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg6
// element get for arg6
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg6
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg6
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg6() { return this._arg6;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg6 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg6;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg6(value) { this._arg6 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg6 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg6;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg7
// element get for arg7
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg7
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg7
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg7() { return this._arg7;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg7 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg7;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg7(value) { this._arg7 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg7 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg7;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg8
// element get for arg8
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg8
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg8
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg8() { return this._arg8;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg8 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg8;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg8(value) { this._arg8 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg8 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg8;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg9
// element get for arg9
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg9
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg9
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg9() { return this._arg9;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg9 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg9;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg9(value) { this._arg9 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg9 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg9;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg10
// element get for arg10
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg10
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg10
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg10() { return this._arg10;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg10 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg10;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg10(value) { this._arg10 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg10 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg10;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg11
// element get for arg11
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg11
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg11
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg11() { return this._arg11;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.getArg11 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_getArg11;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg11(value) { this._arg11 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.setArg11 = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_setArg11;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}searchKeyPoints
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    // block for local variables
    {
     if (this._arg6 != null) {
      xml = xml + '<arg6>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg6);
      xml = xml + '</arg6>';
     }
    }
    // block for local variables
    {
     if (this._arg7 != null) {
      xml = xml + '<arg7>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg7);
      xml = xml + '</arg7>';
     }
    }
    // block for local variables
    {
     if (this._arg8 != null) {
      xml = xml + '<arg8>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg8);
      xml = xml + '</arg8>';
     }
    }
    // block for local variables
    {
     if (this._arg9 != null) {
      xml = xml + '<arg9>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg9);
      xml = xml + '</arg9>';
     }
    }
    // block for local variables
    {
     if (this._arg10 != null) {
      xml = xml + '<arg10>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg10);
      xml = xml + '</arg10>';
     }
    }
    // block for local variables
    {
     if (this._arg11 != null) {
      xml = xml + '<arg11>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg11);
      xml = xml + '</arg11>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints();
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
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg7');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg7')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg7(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg8');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg8')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg8(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg9');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg9')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg9(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg10');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg10')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg10(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg11');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg11')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg11(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}addKeyPoint
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint';
    this._arg0 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_setArg0;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}addKeyPoint
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}editKeyPoint
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint';
    this._arg0 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_setArg0;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}editKeyPoint
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}searchKeyPointsResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}searchKeyPointsResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getKeyPoints
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = null;
    this._arg3 = null;
    this._arg4 = null;
    this._arg5 = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.setArg0
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_getArg0() { return this._arg0;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.getArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_getArg0;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_setArg0(value) { this._arg0 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.setArg0 = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_setArg0;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.setArg1
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_getArg1() { return this._arg1;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.getArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_getArg1;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_setArg1(value) { this._arg1 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.setArg1 = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_setArg1;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg2
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.setArg2
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_getArg2() { return this._arg2;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.getArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_getArg2;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_setArg2(value) { this._arg2 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.setArg2 = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_setArg2;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.getArg3
// element get for arg3
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg3
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.setArg3
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_getArg3() { return this._arg3;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.getArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_getArg3;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_setArg3(value) { this._arg3 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.setArg3 = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_setArg3;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.getArg4
// element get for arg4
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg4
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.setArg4
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_getArg4() { return this._arg4;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.getArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_getArg4;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_setArg4(value) { this._arg4 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.setArg4 = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_setArg4;
//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.getArg5
// element get for arg5
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg5
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.setArg5
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_getArg5() { return this._arg5;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.getArg5 = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_getArg5;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_setArg5(value) { this._arg5 = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.setArg5 = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_setArg5;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getKeyPoints
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints();
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
// Constructor for XML Schema item {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}addKeyPointResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse () {
    this.typeMarker = 'def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse';
    this._return = null;
}

//
// accessor is def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse.prototype.setReturn
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse_getReturn() { return this._return;}

def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse.prototype.getReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse_getReturn;

function def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse_setReturn(value) { this._return = value;}

def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse.prototype.setReturn = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse_setReturn;
//
// Serialize {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}addKeyPointResponse
//
function def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse.prototype.serialize = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse_serialize;

function def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse();
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
// Definitions for service: {http://impl.service.pif_gispatrol.inf.pis.cnpc.com/}KeyPointsService
//

// Javascript for {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}IKeyPoints

function def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}editKeyPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}editKeyPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteKeyPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteKeyPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getKeyPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getKeyPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteKeyPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteKeyPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}searchKeyPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}searchKeyPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}addKeyPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}addKeyPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}editKeyPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}editKeyPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}searchKeyPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}searchKeyPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getKeyPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getKeyPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}addKeyPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}addKeyPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}editKeyPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}editKeyPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteKeyPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteKeyPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getKeyPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getKeyPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteKeyPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteKeyPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}searchKeyPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}searchKeyPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}addKeyPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}addKeyPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}editKeyPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}editKeyPoint'] = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}searchKeyPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}searchKeyPointsResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getKeyPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getKeyPoints'] = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_deserialize;
    this.globalElementSerializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}addKeyPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_gispatrol.inf.pis.cnpc.com/}addKeyPointResponse'] = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse_deserialize;
}

function def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.editKeyPoint_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.editKeyPoint_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}editKeyPoint
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.editKeyPoint_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.editKeyPoint_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.editKeyPoint_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.editKeyPoint = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:editKeyPoint', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.editKeyPoint_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPoint_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__editKeyPointResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.deleteKeyPoint_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.deleteKeyPoint_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}deleteKeyPoint
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.deleteKeyPoint_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deleteKeyPoint_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deleteKeyPoint_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.deleteKeyPoint = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deleteKeyPoint', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.deleteKeyPoint_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPoint_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__deleteKeyPointResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.getKeyPoints_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.getKeyPoints_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}getKeyPoints
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg3
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg4
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg5
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_op(successCallback, errorCallback, arg0, arg1, arg2, arg3, arg4, arg5) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(6);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    args[3] = arg3;
    args[4] = arg4;
    args[5] = arg5;
    xml = this.getKeyPoints_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getKeyPoints_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getKeyPoints_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.getKeyPoints = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints();
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
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getKeyPoints', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.getKeyPoints_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPoints_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__getKeyPointsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.searchKeyPoints_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.searchKeyPoints_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}searchKeyPoints
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg3
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg4
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg5
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg6
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg7
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg8
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg9
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg10
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg11
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_op(successCallback, errorCallback, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(12);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    args[3] = arg3;
    args[4] = arg4;
    args[5] = arg5;
    args[6] = arg6;
    args[7] = arg7;
    args[8] = arg8;
    args[9] = arg9;
    args[10] = arg10;
    args[11] = arg11;
    xml = this.searchKeyPoints_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.searchKeyPoints_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.searchKeyPoints_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.searchKeyPoints = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    wrapperObj.setArg3(args[3]);
    wrapperObj.setArg4(args[4]);
    wrapperObj.setArg5(args[5]);
    wrapperObj.setArg6(args[6]);
    wrapperObj.setArg7(args[7]);
    wrapperObj.setArg8(args[8]);
    wrapperObj.setArg9(args[9]);
    wrapperObj.setArg10(args[10]);
    wrapperObj.setArg11(args[11]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:searchKeyPoints', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.searchKeyPoints_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPoints_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__searchKeyPointsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse_deserializeResponse');
     responseObject = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.addKeyPoint_onsuccess = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_op_onsuccess;

function def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_op_onerror(client) {
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

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.addKeyPoint_onerror = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_op_onerror;

//
// Operation {http://def.service.pif_gispatrol.inf.pis.cnpc.com/}addKeyPoint
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addKeyPoint_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addKeyPoint_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addKeyPoint_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.addKeyPoint = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_op;

function def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_gispatrol.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addKeyPoint', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints.prototype.addKeyPoint_serializeInput = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPoint_serializeInput;

function def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_gispatrol_inf_pis_cnpc_com__addKeyPointResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints_impl_service_pif_gispatrol_inf_pis_cnpc_com__KeyPointsPort () {
  this.url = 'http://10.100.1.173:8080/cxfWebService/webservice/KeyPoints';
}
def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints_impl_service_pif_gispatrol_inf_pis_cnpc_com__KeyPointsPort.prototype = new def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints;
