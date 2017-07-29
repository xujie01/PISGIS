//
// Definitions for schema: http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/
//  http://10.100.1.173:8080/cxfWebService/webservice/ApdmSearch?wsdl=IApdmSearch.wsdl#types1
//
//
// Constructor for XML Schema item {http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchByLineStation
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation () {
    this.typeMarker = 'def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = 0.0;
    this._arg3 = 0.0;
}

//
// accessor is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.setArg0
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_getArg0() { return this._arg0;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.getArg0 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_getArg0;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_setArg0(value) { this._arg0 = value;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.setArg0 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_setArg0;
//
// accessor is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.setArg1
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_getArg1() { return this._arg1;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.getArg1 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_getArg1;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_setArg1(value) { this._arg1 = value;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.setArg1 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_setArg1;
//
// accessor is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for arg2
// setter function is is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.setArg2
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_getArg2() { return this._arg2;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.getArg2 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_getArg2;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_setArg2(value) { this._arg2 = value;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.setArg2 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_setArg2;
//
// accessor is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.getArg3
// element get for arg3
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for arg3
// setter function is is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.setArg3
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_getArg3() { return this._arg3;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.getArg3 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_getArg3;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_setArg3(value) { this._arg3 = value;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.setArg3 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_setArg3;
//
// Serialize {http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchByLineStation
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation.prototype.serialize = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_serialize;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation();
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
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchByLineStationResponse
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse () {
    this.typeMarker = 'def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse';
    this._return = null;
}

//
// accessor is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse.prototype.setReturn
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse_getReturn() { return this._return;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse.prototype.getReturn = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse_getReturn;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse_setReturn(value) { this._return = value;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse.prototype.setReturn = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse_setReturn;
//
// Serialize {http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchByLineStationResponse
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse.prototype.serialize = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse_serialize;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse();
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
// Constructor for XML Schema item {http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchLinebySsStation
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation () {
    this.typeMarker = 'def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation';
    this._arg0 = null;
    this._arg1 = null;
    this._arg2 = 0.0;
    this._arg3 = null;
    this._arg4 = 0.0;
}

//
// accessor is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.setArg0
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_getArg0() { return this._arg0;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.getArg0 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_getArg0;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_setArg0(value) { this._arg0 = value;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.setArg0 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_setArg0;
//
// accessor is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.setArg1
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_getArg1() { return this._arg1;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.getArg1 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_getArg1;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_setArg1(value) { this._arg1 = value;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.setArg1 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_setArg1;
//
// accessor is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for arg2
// setter function is is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.setArg2
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_getArg2() { return this._arg2;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.getArg2 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_getArg2;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_setArg2(value) { this._arg2 = value;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.setArg2 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_setArg2;
//
// accessor is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.getArg3
// element get for arg3
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg3
// setter function is is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.setArg3
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_getArg3() { return this._arg3;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.getArg3 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_getArg3;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_setArg3(value) { this._arg3 = value;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.setArg3 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_setArg3;
//
// accessor is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.getArg4
// element get for arg4
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for arg4
// setter function is is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.setArg4
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_getArg4() { return this._arg4;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.getArg4 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_getArg4;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_setArg4(value) { this._arg4 = value;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.setArg4 = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_setArg4;
//
// Serialize {http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchLinebySsStation
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<arg2>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._arg2);
     xml = xml + '</arg2>';
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
     xml = xml + '<arg4>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._arg4);
     xml = xml + '</arg4>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation.prototype.serialize = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_serialize;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation();
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
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setArg4(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}Exception
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception () {
    this.typeMarker = 'def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception';
    this._message = null;
}

//
// accessor is def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception.prototype.setMessage
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception_getMessage() { return this._message;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception.prototype.getMessage = def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception_getMessage;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception_setMessage(value) { this._message = value;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception.prototype.setMessage = def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception_setMessage;
//
// Serialize {http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}Exception
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception.prototype.serialize = def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception_serialize;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception();
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
// Constructor for XML Schema item {http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchLinebySsStationResponse
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse () {
    this.typeMarker = 'def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse';
    this._return = null;
}

//
// accessor is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse.prototype.setReturn
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse_getReturn() { return this._return;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse.prototype.getReturn = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse_getReturn;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse_setReturn(value) { this._return = value;}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse.prototype.setReturn = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse_setReturn;
//
// Serialize {http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchLinebySsStationResponse
//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse.prototype.serialize = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse_serialize;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse_deserialize (cxfjsutils, element) {
    var newobject = new def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse();
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
// Definitions for service: {http://impl.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchService
//

// Javascript for {http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}IApdmSearch

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__IApdmSearch () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchByLineStation'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_serialize;
    this.globalElementDeserializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchByLineStation'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_deserialize;
    this.globalElementSerializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchByLineStationResponse'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchByLineStationResponse'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchLinebySsStation'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_serialize;
    this.globalElementDeserializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchLinebySsStation'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_deserialize;
    this.globalElementSerializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}Exception'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception_serialize;
    this.globalElementDeserializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}Exception'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception_deserialize;
    this.globalElementSerializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchLinebySsStationResponse'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchLinebySsStationResponse'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchByLineStation'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_serialize;
    this.globalElementDeserializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchByLineStation'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_deserialize;
    this.globalElementSerializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchByLineStationResponse'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchByLineStationResponse'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse_deserialize;
    this.globalElementSerializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchLinebySsStation'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_serialize;
    this.globalElementDeserializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchLinebySsStation'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_deserialize;
    this.globalElementSerializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}Exception'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception_serialize;
    this.globalElementDeserializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}Exception'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__Exception_deserialize;
    this.globalElementSerializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchLinebySsStationResponse'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse_serialize;
    this.globalElementDeserializers['{http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchLinebySsStationResponse'] = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse_deserialize;
}

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse_deserializeResponse');
     responseObject = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__IApdmSearch.prototype.ApdmSearchByLineStation_onsuccess = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_op_onsuccess;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_op_onerror(client) {
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

def_service_pif_ApdmSearch_inf_pis_cnpc_com__IApdmSearch.prototype.ApdmSearchByLineStation_onerror = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_op_onerror;

//
// Operation {http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchByLineStation
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}double// parameter arg3
// - simple type {http://www.w3.org/2001/XMLSchema}double//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_op(successCallback, errorCallback, arg0, arg1, arg2, arg3) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(4);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    args[3] = arg3;
    xml = this.ApdmSearchByLineStation_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.ApdmSearchByLineStation_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.ApdmSearchByLineStation_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__IApdmSearch.prototype.ApdmSearchByLineStation = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_op;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    wrapperObj.setArg3(args[3]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:ApdmSearchByLineStation', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__IApdmSearch.prototype.ApdmSearchByLineStation_serializeInput = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStation_serializeInput;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchByLineStationResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse_deserializeResponse');
     responseObject = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__IApdmSearch.prototype.ApdmSearchLinebySsStation_onsuccess = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_op_onsuccess;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_op_onerror(client) {
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

def_service_pif_ApdmSearch_inf_pis_cnpc_com__IApdmSearch.prototype.ApdmSearchLinebySsStation_onerror = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_op_onerror;

//
// Operation {http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/}ApdmSearchLinebySsStation
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg2
// - simple type {http://www.w3.org/2001/XMLSchema}double// parameter arg3
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg4
// - simple type {http://www.w3.org/2001/XMLSchema}double//
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_op(successCallback, errorCallback, arg0, arg1, arg2, arg3, arg4) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(5);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    args[3] = arg3;
    args[4] = arg4;
    xml = this.ApdmSearchLinebySsStation_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.ApdmSearchLinebySsStation_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.ApdmSearchLinebySsStation_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__IApdmSearch.prototype.ApdmSearchLinebySsStation = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_op;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_serializeInput(cxfjsutils, args) {
    var wrapperObj = new def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    wrapperObj.setArg3(args[3]);
    wrapperObj.setArg4(args[4]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://def.service.pif_ApdmSearch.inf.pis.cnpc.com/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:ApdmSearchLinebySsStation', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

def_service_pif_ApdmSearch_inf_pis_cnpc_com__IApdmSearch.prototype.ApdmSearchLinebySsStation_serializeInput = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStation_serializeInput;

function def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = def_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchLinebySsStationResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function def_service_pif_ApdmSearch_inf_pis_cnpc_com__IApdmSearch_impl_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchPort () {
  this.url = 'http://10.100.1.173:8080/cxfWebService/webservice/ApdmSearch';
}
def_service_pif_ApdmSearch_inf_pis_cnpc_com__IApdmSearch_impl_service_pif_ApdmSearch_inf_pis_cnpc_com__ApdmSearchPort.prototype = new def_service_pif_ApdmSearch_inf_pis_cnpc_com__IApdmSearch;
