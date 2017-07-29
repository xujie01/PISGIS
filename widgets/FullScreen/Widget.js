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
define(['dojo/_base/lang',
    'dojo/_base/declare',
    'dojo/on',
    'jimu/BaseWidget'
  ],
  function(
    lang,
    declare,
    on,
    BaseWidget) {
    var clazz = declare([BaseWidget], {
        baseClass: 'jimu-widget-fullscreen',
        name: 'FullScreen',

        postCreate: function () {
            this.inherited(arguments);
        },

        startup: function () {
            this.inherited(arguments);
        },

        //每次打开都执行
        onOpen: function () {
        },

        onClose: function () {
        },

        onMinimize: function () {
        },

        onMaximize: function () {
        },

        onSignIn: function () {
        },

        onSingnOut: function () {
        }
    });

    clazz.inPanel = false;
    clazz.hasUIFile = false;
    return clazz;
  });