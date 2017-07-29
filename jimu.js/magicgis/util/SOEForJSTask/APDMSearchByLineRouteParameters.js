///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
    'dojo/_base/declare'
], function (declare) {
    var instance = null, clazz;
    clazz = declare(null, {
        BeginSsEventID: null,  //起始站列

        BeginStation: null,   //起始里程

        EndSsEventID: null,     //终止站列

        EndStation: null,     //终止里程

        LineLoopEventID: null,   //管网ID

        UnitEventID: null,       //单位ID

        SubSystemEventID: null,   //子系统ID

        FeatureClass: null,   //要素类

        /**
         * 容差
         */
        Tolerance: null,

        /**
         * Enlelop
         */
        Envelop: null,

        setBeginSsEventID: function (beginsseventid) {
            this.BeginSsEventID = beginsseventid;
        },
        getBeginSsEventID: function () {
            return this.BeginSsEventID;
        },
        setBeginStation: function (beginstation) {
            this.BeginStation = beginstation;
        },
        getBeginStation: function () {
            return this.BeginStation;
        },
        setEndSsEventID: function (endsseventid) {
            this.EndSsEventID = endsseventid;
        },
        getEndSsEventID: function () {
            return this.EndSsEventID;
        },

        setEndStation: function (endstation) {
            this.EndStation = endstation;
        },
        getEndStation: function () {
            return this.EndStation;
        },

        setLineLoopEventID: function (lineloopeventid) {
            this.LineLoopEventID = lineloopeventid;
        },
        getLineLoopEventID: function () {
            return this.LineLoopEventID;
        },

        setUnitEventID: function (uniteventid) {
            this.UnitEventID = uniteventid;
        },
        getUnitEventID: function () {
            return this.UnitEventID;
        },

        setSubSystemEventID: function (subsysteneventid) {
            this.SubSystemEventID = subsysteneventid;
        },
        getSubSystemEventID: function () {
            return this.SubSystemEventID;
        },

        setFeatureClass: function (featureclass) {
            this.FeatureClass = featureclass;
        },
        getFeatureClass: function () {
            return this.FeatureClass;
        },

        setTolerance: function (tolerance) {
            this.Tolerance = tolerance;
        },
        getTolerance: function () {
            return this.Tolerance;
        },

        setEnvelop: function (envelop) {
            this.Envelop = envelop;
        },
        getEnvelop: function () {
            return this.Envelop;
        }
    });
    clazz.getInstance = function () {
        if (instance === null) {
            instance = new clazz();
        }
        return instance;
    };
    return clazz;
});