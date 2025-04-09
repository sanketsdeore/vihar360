import{u as De,l as Le,p as je,r as I,j as l}from"./index-CKb6SvpI.js";import{g as Be,e as K,_ as qe,u as Fe,v as Me,c as He,F as ze,p as $e,C as Ge,r as ae,S as Xe,t as Ve}from"./firebase-BApO6Ft-.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="firebasestorage.googleapis.com",_e="storageBucket",We=2*60*1e3,Ke=10*60*1e3,Ye=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g extends ze{constructor(e,n,s=0){super(Z(e),`Firebase Storage: ${n} (${Z(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,g.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Z(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var p;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(p||(p={}));function Z(t){return"storage/"+t}function te(){const t="An unknown error occurred, please check the error payload for server response.";return new g(p.UNKNOWN,t)}function Ze(t){return new g(p.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Je(t){return new g(p.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Qe(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new g(p.UNAUTHENTICATED,t)}function et(){return new g(p.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function tt(t){return new g(p.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function me(){return new g(p.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ge(){return new g(p.CANCELED,"User canceled the upload/download.")}function nt(t){return new g(p.INVALID_URL,"Invalid URL '"+t+"'.")}function st(t){return new g(p.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function rt(){return new g(p.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_e+"' property when initializing the app?")}function be(){return new g(p.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function it(){return new g(p.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function ot(){return new g(p.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function at(t){return new g(p.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ee(t){return new g(p.INVALID_ARGUMENT,t)}function Re(){return new g(p.APP_DELETED,"The Firebase app was deleted.")}function lt(t){return new g(p.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function z(t,e){return new g(p.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function H(t){throw new g(p.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=N.makeFromUrl(e,n)}catch{return new N(e,"")}if(s.path==="")return s;throw st(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(u){u.path.charAt(u.path.length-1)==="/"&&(u.path_=u.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+r+o,"i"),a={bucket:1,path:3};function h(u){u.path_=decodeURIComponent(u.path)}const d="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",y=new RegExp(`^https?://${m}/${d}/b/${r}/o${f}`,"i"),b={bucket:1,path:3},U=n===pe?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",v=new RegExp(`^https?://${U}/${r}/${R}`,"i"),w=[{regex:c,indices:a,postModify:i},{regex:y,indices:b,postModify:h},{regex:v,indices:{bucket:1,path:2},postModify:h}];for(let u=0;u<w.length;u++){const T=w[u],_=T.regex.exec(e);if(_){const S=_[T.indices.bucket];let A=_[T.indices.path];A||(A=""),s=new N(S,A),T.postModify(s);break}}if(s==null)throw nt(e);return s}}class ct{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,e,n){let s=1,r=null,i=null,o=!1,c=0;function a(){return c===2}let h=!1;function d(...R){h||(h=!0,e.apply(null,R))}function m(R){r=setTimeout(()=>{r=null,t(y,a())},R)}function f(){i&&clearTimeout(i)}function y(R,...v){if(h){f();return}if(R){f(),d.call(null,R,...v);return}if(a()||o){f(),d.call(null,R,...v);return}s<64&&(s*=2);let w;c===1?(c=2,w=0):w=(s+Math.random())*1e3,m(w)}let b=!1;function U(R){b||(b=!0,f(),!h&&(r!==null?(R||(c=2),clearTimeout(r),m(0)):R||(c=1)))}return m(0),i=setTimeout(()=>{o=!0,U(!0)},n),U}function ht(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){return t!==void 0}function ft(t){return typeof t=="function"}function pt(t){return typeof t=="object"&&!Array.isArray(t)}function Y(t){return typeof t=="string"||t instanceof String}function le(t){return ne()&&t instanceof Blob}function ne(){return typeof Blob<"u"}function ce(t,e,n,s){if(s<e)throw ee(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ee(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function xe(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var D;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(D||(D={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,s,r,i,o,c,a,h,d,m,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=a,this.timeout_=h,this.progressCallback_=d,this.connectionFactory_=m,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,b)=>{this.resolve_=y,this.reject_=b,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new X(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const a=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===D.NO_ERROR,a=i.getStatus();if(!c||ye(a,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===D.ABORT;s(!1,new X(!1,null,d));return}const h=this.successCodes_.indexOf(a)!==-1;s(!0,new X(h,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(c,c.getResponse());dt(a)?i(a):i()}catch(a){o(a)}else if(c!==null){const a=te();a.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,a)):o(a)}else if(r.canceled){const a=this.appDelete_?Re():ge();o(a)}else{const a=me();o(a)}};this.canceled_?n(!1,new X(!1,null,!0)):this.backoffId_=ut(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ht(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class X{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function mt(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function gt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function bt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Rt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function xt(t,e,n,s,r,i,o=!0){const c=xe(t.urlParams),a=t.url+c,h=Object.assign({},t.headers);return bt(h,e),mt(h,n),gt(h,i),Rt(h,s),new _t(a,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Tt(...t){const e=yt();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(ne())return new Blob(t);throw new g(p.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){if(typeof atob>"u")throw at("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class J{constructor(e,n){this.data=e,this.contentType=n||null}}function Ut(t,e){switch(t){case C.RAW:return new J(Te(e));case C.BASE64:case C.BASE64URL:return new J(we(t,e));case C.DATA_URL:return new J(Nt(e),vt(e))}throw te()}function Te(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Et(t){let e;try{e=decodeURIComponent(t)}catch{throw z(C.DATA_URL,"Malformed data URL.")}return Te(e)}function we(t,e){switch(t){case C.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw z(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case C.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw z(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=kt(e)}catch(r){throw r.message.includes("polyfill")?r:z(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class ke{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw z(C.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=St(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Nt(t){const e=new ke(t);return e.base64?we(C.BASE64,e.rest):Et(e.rest)}function vt(t){return new ke(t).contentType}function St(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,n){let s=0,r="";le(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(le(this.data_)){const s=this.data_,r=wt(s,e,n);return r===null?null:new P(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new P(s,!0)}}static getBlob(...e){if(ne()){const n=e.map(s=>s instanceof P?s.data_:s);return new P(Tt.apply(null,n))}else{const n=e.map(o=>Y(o)?Ut(C.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)r[i++]=o[c]}),new P(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){let e;try{e=JSON.parse(t)}catch{return null}return pt(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function At(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Ee(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,e){return e}class k{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Ot}}let V=null;function Pt(t){return!Y(t)||t.length<2?t:Ee(t)}function Ne(){if(V)return V;const t=[];t.push(new k("bucket")),t.push(new k("generation")),t.push(new k("metageneration")),t.push(new k("name","fullPath",!0));function e(i,o){return Pt(o)}const n=new k("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new k("size");return r.xform=s,t.push(r),t.push(new k("timeCreated")),t.push(new k("updated")),t.push(new k("md5Hash",null,!0)),t.push(new k("cacheControl",null,!0)),t.push(new k("contentDisposition",null,!0)),t.push(new k("contentEncoding",null,!0)),t.push(new k("contentLanguage",null,!0)),t.push(new k("contentType",null,!0)),t.push(new k("metadata","customMetadata",!0)),V=t,V}function It(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new N(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Dt(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return It(s,t),s}function ve(t,e,n){const s=Ue(e);return s===null?null:Dt(t,s,n)}function Lt(t,e,n,s){const r=Ue(e);if(r===null||!Y(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const d=t.bucket,m=t.fullPath,f="/b/"+o(d)+"/o/"+o(m),y=$(f,n,s),b=xe({alt:"media",token:h});return y+b})[0]}function Se(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class F{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t){if(!t)throw te()}function se(t,e){function n(s,r){const i=ve(t,r,e);return O(i!==null),i}return n}function jt(t,e){function n(s,r){const i=ve(t,r,e);return O(i!==null),Lt(i,r,t.host,t._protocol)}return n}function G(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=et():r=Qe():n.getStatus()===402?r=Je(t.bucket):n.getStatus()===403?r=tt(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Ce(t){const e=G(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Ze(t.path)),i.serverResponse=r.serverResponse,i}return n}function Bt(t,e,n){const s=e.fullServerUrl(),r=$(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new F(r,i,se(t,n),o);return c.errorHandler=Ce(e),c}function qt(t,e,n){const s=e.fullServerUrl(),r=$(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new F(r,i,jt(t,n),o);return c.errorHandler=Ce(e),c}function Ft(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ae(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Ft(null,e)),s}function Mt(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let w="";for(let u=0;u<2;u++)w=w+Math.random().toString().slice(2);return w}const a=c();o["Content-Type"]="multipart/related; boundary="+a;const h=Ae(e,s,r),d=Se(h,n),m="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+a+`\r
Content-Type: `+h.contentType+`\r
\r
`,f=`\r
--`+a+"--",y=P.getBlob(m,s,f);if(y===null)throw be();const b={name:h.fullPath},U=$(i,t.host,t._protocol),R="POST",v=t.maxUploadRetryTime,x=new F(U,R,se(t,n),v);return x.urlParams=b,x.headers=o,x.body=y.uploadData(),x.errorHandler=G(e),x}class W{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function re(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{O(!1)}return O(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Ht(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=Ae(e,s,r),c={name:o.fullPath},a=$(i,t.host,t._protocol),h="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},m=Se(o,n),f=t.maxUploadRetryTime;function y(U){re(U);let R;try{R=U.getResponseHeader("X-Goog-Upload-URL")}catch{O(!1)}return O(Y(R)),R}const b=new F(a,h,y,f);return b.urlParams=c,b.headers=d,b.body=m,b.errorHandler=G(e),b}function zt(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(h){const d=re(h,["active","final"]);let m=null;try{m=h.getResponseHeader("X-Goog-Upload-Size-Received")}catch{O(!1)}m||O(!1);const f=Number(m);return O(!isNaN(f)),new W(f,s.size(),d==="final")}const o="POST",c=t.maxUploadRetryTime,a=new F(n,o,i,c);return a.headers=r,a.errorHandler=G(e),a}const ue=256*1024;function $t(t,e,n,s,r,i,o,c){const a=new W(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=s.size()),s.size()!==a.total)throw it();const h=a.total-a.current;let d=h;r>0&&(d=Math.min(d,r));const m=a.current,f=m+d;let y="";d===0?y="finalize":h===d?y="upload, finalize":y="upload";const b={"X-Goog-Upload-Command":y,"X-Goog-Upload-Offset":`${a.current}`},U=s.slice(m,f);if(U===null)throw be();function R(u,T){const _=re(u,["active","final"]),S=a.current+d,A=s.size();let M;return _==="final"?M=se(e,i)(u,T):M=null,new W(S,A,_==="final",M)}const v="POST",x=e.maxUploadRetryTime,w=new F(n,v,R,x);return w.headers=b,w.body=U.uploadData(),w.progressCallback=c||null,w.errorHandler=G(t),w}const E={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Q(t){switch(t){case"running":case"pausing":case"canceling":return E.RUNNING;case"paused":return E.PAUSED;case"success":return E.SUCCESS;case"canceled":return E.CANCELED;case"error":return E.ERROR;default:return E.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n,s){if(ft(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Xt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=D.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=D.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=D.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw H("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw H("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw H("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw H("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw H("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Vt extends Xt{initXhr(){this.xhr_.responseType="text"}}function q(){return new Vt}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Ne(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(p.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(ye(r.status,[]))if(i)r=me();else{this.sleepTime=Math.max(this.sleepTime*2,Ye),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(p.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=Ht(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,q,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=zt(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,q,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=ue*this._chunkMultiplier,n=new W(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=$t(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const c=this._ref.storage._makeRequest(o,q,r,i,!1);this._request=c,c.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){ue*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=Bt(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,q,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=Mt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,q,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ge(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Q(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new Gt(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Q(this._state)){case E.SUCCESS:B(this._resolve.bind(null,this.snapshot))();break;case E.CANCELED:case E.ERROR:const n=this._reject;B(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Q(this._state)){case E.RUNNING:case E.PAUSED:e.next&&B(e.next.bind(e,this.snapshot))();break;case E.SUCCESS:e.complete&&B(e.complete.bind(e))();break;case E.CANCELED:case E.ERROR:e.error&&B(e.error.bind(e,this._error))();break;default:e.error&&B(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,n){this._service=e,n instanceof N?this._location=n:this._location=N.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new L(e,n)}get root(){const e=new N(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ee(this._location.path)}get storage(){return this._service}get parent(){const e=Ct(this._location.path);if(e===null)return null;const n=new N(this._location.bucket,e);return new L(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw lt(e)}}function Kt(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Wt(t,new P(e),n)}function Yt(t){t._throwIfRoot("getDownloadURL");const e=qt(t.storage,t._location,Ne());return t.storage.makeRequestWithTokens(e,q).then(n=>{if(n===null)throw ot();return n})}function Zt(t,e){const n=At(t._location.path,e),s=new N(t._location.bucket,n);return new L(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){return/^[A-Za-z]+:\/\//.test(t)}function Qt(t,e){return new L(t,e)}function Oe(t,e){if(t instanceof ie){const n=t;if(n._bucket==null)throw rt();const s=new L(n,n._bucket);return e!=null?Oe(s,e):s}else return e!==void 0?Zt(t,e):t}function en(t,e){if(e&&Jt(e)){if(t instanceof ie)return Qt(t,e);throw ee("To use ref(service, url), the first argument must be a Storage instance.")}else return Oe(t,e)}function he(t,e){const n=e==null?void 0:e[_e];return n==null?null:N.makeFromBucketSpec(n,t)}function tn(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Me(r,t.app.options.projectId))}class ie{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=pe,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=We,this._maxUploadRetryTime=Ke,this._requests=new Set,r!=null?this._bucket=N.makeFromBucketSpec(r,this._host):this._bucket=he(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=N.makeFromBucketSpec(this._url,e):this._bucket=he(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ce("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ce("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(He(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new L(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new ct(Re());{const o=xt(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const de="@firebase/storage",fe="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="storage";function nn(t,e,n){return t=K(t),Kt(t,e,n)}function sn(t){return t=K(t),Yt(t)}function rn(t,e){return t=K(t),en(t,e)}function on(t=Be(),e){t=K(t);const s=qe(t,Pe).getImmediate({identifier:e}),r=Fe("storage");return r&&an(s,...r),s}function an(t,e,n,s={}){tn(t,e,n,s)}function ln(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new ie(n,s,r,e,Xe)}function cn(){$e(new Ge(Pe,ln,"PUBLIC").setMultipleInstances(!0)),ae(de,fe,""),ae(de,fe,"esm2017")}cn();function dn(){const{currentUser:t}=De(u=>u.user),e=Le(),n=je(),[s,r]=I.useState([]),[i,o]=I.useState({imageUrls:[],name:"",description:"",address:"",type:"rent",bedrooms:1,bathrooms:1,regularPrice:50,discountPrice:0,offer:!1,parking:!1,furnished:!1}),[c,a]=I.useState(!1),[h,d]=I.useState(!1),[m,f]=I.useState(!1),[y,b]=I.useState(!1);I.useEffect(()=>{if(!n.listingId){console.error("No listingId found in URL");return}(async()=>{const T=n.listingId,_=await fetch(`/api/listing/get/${T}`),S=await _.json();if(!_.ok){console.error("Error fetching listing:",S.message);return}if(S.success===!1){console.log(S.message);return}o(A=>({...A,...S}))})()},[n.listingId]);const U=u=>{if(s.length>0&&s.length+i.imageUrls.length<7){d(!0),a(!1);const T=[];for(let _=0;_<s.length;_++)T.push(R(s[_]));Promise.all(T).then(_=>{o({...i,imageUrls:i.imageUrls.concat(_)}),a(!1),d(!1)}).catch(_=>{a("Image upload failed (2 mb max per image)"),d(!1)})}else a("You can only upload 6 images per listing"),d(!1)},R=async u=>new Promise((T,_)=>{const S=on(Ve),A=new Date().getTime()+u.name,M=rn(S,A),oe=nn(M,u);oe.on("state_changed",j=>{const Ie=j.bytesTransferred/j.totalBytes*100;console.log(`Upload is ${Ie}% done`)},j=>{_(j)},()=>{sn(oe.snapshot.ref).then(j=>{T(j)})})}),v=u=>{o({...i,imageUrls:i.imageUrls.filter((T,_)=>_!==u)})},x=u=>{(u.target.id==="sale"||u.target.id==="rent")&&o({...i,type:u.target.id}),(u.target.id==="parking"||u.target.id==="furnished"||u.target.id==="offer")&&o({...i,[u.target.id]:u.target.checked}),(u.target.type==="number"||u.target.type==="text"||u.target.type==="textarea")&&o({...i,[u.target.id]:u.target.value})},w=async u=>{u.preventDefault();try{if(i.imageUrls.length<1)return f("You must upload at least one image");if(+i.regularPrice<+i.discountPrice)return f("Discount price must be lower than regular price");b(!0),f(!1);const _=await(await fetch(`/api/listing/update/${n.listingId}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...i,userRef:t._id})})).json();b(!1),_.success===!1&&f(_.message),e(`/listing/${_._id}`)}catch(T){f(T.message),b(!1)}};return l.jsxs("main",{className:"p-3 max-w-4xl mx-auto",children:[l.jsx("h1",{className:"text-3xl font-semibold text-center my-7",children:"Update a Listing"}),l.jsxs("form",{onSubmit:w,className:"flex flex-col sm:flex-row gap-4",children:[l.jsxs("div",{className:"flex flex-col gap-4 flex-1",children:[l.jsx("input",{type:"text",placeholder:"Name",className:"border p-3 rounded-lg",id:"name",maxLength:"62",minLength:"10",required:!0,onChange:x,value:i.name}),l.jsx("textarea",{type:"text",placeholder:"Description",className:"border p-3 rounded-lg",id:"description",required:!0,onChange:x,value:i.description}),l.jsx("input",{type:"text",placeholder:"Address",className:"border p-3 rounded-lg",id:"address",required:!0,onChange:x,value:i.address}),l.jsxs("div",{className:"flex gap-6 flex-wrap",children:[l.jsxs("div",{className:"flex gap-2",children:[l.jsx("input",{type:"checkbox",id:"sale",className:"w-5",onChange:x,checked:i.type==="sale"}),l.jsx("span",{children:"Sell"})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("input",{type:"checkbox",id:"rent",className:"w-5",onChange:x,checked:i.type==="rent"}),l.jsx("span",{children:"Rent"})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("input",{type:"checkbox",id:"parking",className:"w-5",onChange:x,checked:i.parking}),l.jsx("span",{children:"Parking spot"})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("input",{type:"checkbox",id:"furnished",className:"w-5",onChange:x,checked:i.furnished}),l.jsx("span",{children:"Furnished"})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("input",{type:"checkbox",id:"offer",className:"w-5",onChange:x,checked:i.offer}),l.jsx("span",{children:"Offer"})]})]}),l.jsxs("div",{className:"flex flex-wrap gap-6",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("input",{type:"number",id:"bedrooms",min:"1",max:"10",required:!0,className:"p-3 border border-gray-300 rounded-lg",onChange:x,value:i.bedrooms}),l.jsx("p",{children:"Beds"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("input",{type:"number",id:"bathrooms",min:"1",max:"10",required:!0,className:"p-3 border border-gray-300 rounded-lg",onChange:x,value:i.bathrooms}),l.jsx("p",{children:"Baths"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("input",{type:"number",id:"regularPrice",min:"50",max:"10000000",required:!0,className:"p-3 border border-gray-300 rounded-lg",onChange:x,value:i.regularPrice}),l.jsxs("div",{className:"flex flex-col items-center",children:[l.jsx("p",{children:"Regular price"}),i.type==="rent"&&l.jsx("span",{className:"text-xs",children:"($ / month)"})]})]}),i.offer&&l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("input",{type:"number",id:"discountPrice",min:"0",max:"10000000",required:!0,className:"p-3 border border-gray-300 rounded-lg",onChange:x,value:i.discountPrice}),l.jsxs("div",{className:"flex flex-col items-center",children:[l.jsx("p",{children:"Discounted price"}),i.type==="rent"&&l.jsx("span",{className:"text-xs",children:"($ / month)"})]})]})]})]}),l.jsxs("div",{className:"flex flex-col flex-1 gap-4",children:[l.jsxs("p",{className:"font-semibold",children:["Images:",l.jsx("span",{className:"font-normal text-gray-600 ml-2",children:"The first image will be the cover (max 6)"})]}),l.jsxs("div",{className:"flex gap-4",children:[l.jsx("input",{onChange:u=>r(u.target.files),className:"p-3 border border-gray-300 rounded w-full",type:"file",id:"images",accept:"image/*",multiple:!0}),l.jsx("button",{type:"button",disabled:h,onClick:U,className:"p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80",children:h?"Uploading...":"Upload"})]}),l.jsx("p",{className:"text-red-700 text-sm",children:c&&c}),i.imageUrls.length>0&&i.imageUrls.map((u,T)=>l.jsxs("div",{className:"flex justify-between p-3 border items-center",children:[l.jsx("img",{src:u,alt:"listing image",className:"w-20 h-20 object-contain rounded-lg"}),l.jsx("button",{type:"button",onClick:()=>v(T),className:"p-3 text-red-700 rounded-lg uppercase hover:opacity-75",children:"Delete"})]},u)),l.jsx("button",{disabled:y||h,className:"p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80",children:y?"Updating...":"Update listing"}),m&&l.jsx("p",{className:"text-red-700 text-sm",children:m})]})]})]})}export{dn as default};
