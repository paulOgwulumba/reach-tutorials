// Automatically generated with Reach 0.1.6 (09c295c6)
/* eslint-disable */
export const _version = '0.1.6';
export const _versionHash = '0.1.6 (09c295c6)';
export const _backendVersion = 5;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v127 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v130 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:36:40:application',
    fs: ['at ./index.rsh:34:13:application call to [unknown function] (defined at: ./index.rsh:34:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v131 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:57:31:application',
    fs: ['at ./index.rsh:37:54:application call to "makeCommitment" (defined at: reach standard library:56:8:function exp)', 'at ./index.rsh:34:13:application call to [unknown function] (defined at: ./index.rsh:34:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v132 = stdlib.digest(ctc1, [v131, v130]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v127, v132],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:41:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [v127, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v135, v136], secs: v138, time: v137, didSend: v56, from: v134 } = txn1;
      
      sim_r.txns.push({
        amt: v135,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v135, v136], secs: v138, time: v137, didSend: v56, from: v134 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v145], secs: v147, time: v146, didSend: v67, from: v144 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v134, v135, v136, v144, v145, v131, v130],
    evt_cnt: 2,
    funcNum: 2,
    lct: v146,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v153, v154], secs: v156, time: v155, didSend: v78, from: v152 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v158 = stdlib.addressEq(v134, v152);
      stdlib.assert(v158, {
        at: './index.rsh:60:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v159 = stdlib.digest(ctc1, [v153, v154]);
      const v160 = stdlib.digestEq(v136, v159);
      stdlib.assert(v160, {
        at: 'reach standard library:62:17:application',
        fs: ['at ./index.rsh:62:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v161 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:64:33:decimal', stdlib.UInt_max, 4), v145);
      const v162 = stdlib.add(v154, v161);
      const v163 = stdlib.mod(v162, stdlib.checkedBigNumberify('./index.rsh:64:49:decimal', stdlib.UInt_max, 3));
      const v164 = stdlib.eq(v163, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v165 = stdlib.eq(v163, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v166 = [stdlib.checkedBigNumberify('./index.rsh:65:80:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:65:83:decimal', stdlib.UInt_max, 2)];
      const v167 = [stdlib.checkedBigNumberify('./index.rsh:65:89:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:65:92:decimal', stdlib.UInt_max, 1)];
      const v168 = v165 ? v166 : v167;
      const v169 = [stdlib.checkedBigNumberify('./index.rsh:65:51:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:65:54:decimal', stdlib.UInt_max, 0)];
      const v170 = v164 ? v169 : v168;
      const v171 = v170[stdlib.checkedBigNumberify('./index.rsh:65:9:array', stdlib.UInt_max, 0)];
      const v172 = v170[stdlib.checkedBigNumberify('./index.rsh:65:9:array', stdlib.UInt_max, 1)];
      const v173 = stdlib.mul(v171, v135);
      sim_r.txns.push({
        amt: v173,
        kind: 'from',
        to: v134,
        tok: undefined
        });
      const v178 = stdlib.mul(v172, v135);
      sim_r.txns.push({
        amt: v178,
        kind: 'from',
        to: v144,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v153, v154], secs: v156, time: v155, didSend: v78, from: v152 } = txn3;
  ;
  const v158 = stdlib.addressEq(v134, v152);
  stdlib.assert(v158, {
    at: './index.rsh:60:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v159 = stdlib.digest(ctc1, [v153, v154]);
  const v160 = stdlib.digestEq(v136, v159);
  stdlib.assert(v160, {
    at: 'reach standard library:62:17:application',
    fs: ['at ./index.rsh:62:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v161 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:64:33:decimal', stdlib.UInt_max, 4), v145);
  const v162 = stdlib.add(v154, v161);
  const v163 = stdlib.mod(v162, stdlib.checkedBigNumberify('./index.rsh:64:49:decimal', stdlib.UInt_max, 3));
  const v164 = stdlib.eq(v163, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
  const v165 = stdlib.eq(v163, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
  const v166 = [stdlib.checkedBigNumberify('./index.rsh:65:80:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:65:83:decimal', stdlib.UInt_max, 2)];
  const v167 = [stdlib.checkedBigNumberify('./index.rsh:65:89:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:65:92:decimal', stdlib.UInt_max, 1)];
  const v168 = v165 ? v166 : v167;
  const v169 = [stdlib.checkedBigNumberify('./index.rsh:65:51:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:65:54:decimal', stdlib.UInt_max, 0)];
  const v170 = v164 ? v169 : v168;
  const v171 = v170[stdlib.checkedBigNumberify('./index.rsh:65:9:array', stdlib.UInt_max, 0)];
  const v172 = v170[stdlib.checkedBigNumberify('./index.rsh:65:9:array', stdlib.UInt_max, 1)];
  const v173 = stdlib.mul(v171, v135);
  ;
  const v178 = stdlib.mul(v172, v135);
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v163), {
    at: './index.rsh:71:24:application',
    fs: ['at ./index.rsh:70:7:application call to [unknown function] (defined at: ./index.rsh:70:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v135, v136], secs: v138, time: v137, didSend: v56, from: v134 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v135), {
    at: './index.rsh:47:25:application',
    fs: ['at ./index.rsh:46:11:application call to [unknown function] (defined at: ./index.rsh:46:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v143 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:48:48:application',
    fs: ['at ./index.rsh:46:11:application call to [unknown function] (defined at: ./index.rsh:46:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v134, v135, v136, v143],
    evt_cnt: 1,
    funcNum: 1,
    lct: v137,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v135, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v145], secs: v147, time: v146, didSend: v67, from: v144 } = txn2;
      
      sim_r.txns.push({
        amt: v135,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v145], secs: v147, time: v146, didSend: v67, from: v144 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v153, v154], secs: v156, time: v155, didSend: v78, from: v152 } = txn3;
  ;
  const v158 = stdlib.addressEq(v134, v152);
  stdlib.assert(v158, {
    at: './index.rsh:60:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v159 = stdlib.digest(ctc3, [v153, v154]);
  const v160 = stdlib.digestEq(v136, v159);
  stdlib.assert(v160, {
    at: 'reach standard library:62:17:application',
    fs: ['at ./index.rsh:62:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v161 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:64:33:decimal', stdlib.UInt_max, 4), v145);
  const v162 = stdlib.add(v154, v161);
  const v163 = stdlib.mod(v162, stdlib.checkedBigNumberify('./index.rsh:64:49:decimal', stdlib.UInt_max, 3));
  const v164 = stdlib.eq(v163, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
  const v165 = stdlib.eq(v163, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
  const v166 = [stdlib.checkedBigNumberify('./index.rsh:65:80:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:65:83:decimal', stdlib.UInt_max, 2)];
  const v167 = [stdlib.checkedBigNumberify('./index.rsh:65:89:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:65:92:decimal', stdlib.UInt_max, 1)];
  const v168 = v165 ? v166 : v167;
  const v169 = [stdlib.checkedBigNumberify('./index.rsh:65:51:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:65:54:decimal', stdlib.UInt_max, 0)];
  const v170 = v164 ? v169 : v168;
  const v171 = v170[stdlib.checkedBigNumberify('./index.rsh:65:9:array', stdlib.UInt_max, 0)];
  const v172 = v170[stdlib.checkedBigNumberify('./index.rsh:65:9:array', stdlib.UInt_max, 1)];
  const v173 = stdlib.mul(v171, v135);
  ;
  const v178 = stdlib.mul(v172, v135);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v163), {
    at: './index.rsh:71:24:application',
    fs: ['at ./index.rsh:70:7:application call to [unknown function] (defined at: ./index.rsh:70:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
dup
int 8
extract_uint64
store 2
extract 16 32
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 72
==
assert
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:41:9:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:41:9:dot"
// "[]"
load 254
dup
bz l2_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l2_checkTxnK:
pop
txn Sender
load 254
itob
concat
load 253
concat
int 1
bzero
dig 1
extract 0 72
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l3_afterHandler1
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 252
pop
// "CheckPay"
// "./index.rsh:51:7:dot"
// "[]"
load 254
dup
bz l4_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l4_checkTxnK:
pop
load 255
load 254
itob
concat
load 253
concat
txn Sender
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 112
app_global_put
pop
int 2
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l3_afterHandler1:
// Handler 2
dup
int 2
==
bz l5_afterHandler2
pop
// check step
int 2
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
extract 72 32
store 252
dup
int 104
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
int 0
extract_uint64
store 250
dup
int 8
extract_uint64
store 249
pop
// "CheckPay"
// "./index.rsh:60:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:60:9:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "reach standard library:62:17:application"
// "[at ./index.rsh:62:18:application call to \"checkCommitment\" (defined at: reach standard library:61:8:function exp)]"
load 253
load 250
itob
load 249
itob
concat
sha256
==
assert
load 249
int 4
load 251
-
+
int 3
%
store 248
byte base64(AAAAAAAAAAEAAAAAAAAAAQ==)
byte base64(AAAAAAAAAAAAAAAAAAAAAg==)
load 248
int 0
==
select
byte base64(AAAAAAAAAAIAAAAAAAAAAA==)
load 248
int 2
==
select
dup
store 247
int 0
extract_uint64
load 254
*
dup
bz l6_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l6_checkTxnK:
pop
load 247
int 8
extract_uint64
load 254
*
dup
bz l7_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 252
dig 1
gtxns Receiver
==
assert
l7_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l8_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l5_afterHandler2:
int 0
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  escrow: `#pragma version 5
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 5
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v145",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v154",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v145",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v154",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000d5a38038062000d5a83398101604081905262000026916200022c565b60008055604080518251815260208084015180518284015201518183015290517ff6f99043ebaefcd14be52433ca7dc9978aa637aef8ca1601e1816a0abc2f99299181900360600190a160208101515162000085903414600762000125565b620000b3604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252600160008190554390558051808501959095529151848301525160608085019190915281518085039091018152608090930190528151620001189260029201906200014f565b50504360035550620002c9565b816200014b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015d906200028c565b90600052602060002090601f016020900481019282620001815760008555620001cc565b82601f106200019c57805160ff1916838001178555620001cc565b82800160010185558215620001cc579182015b82811115620001cc578251825591602001919060010190620001af565b50620001da929150620001de565b5090565b5b80821115620001da5760008155600101620001df565b604080519081016001600160401b03811182821017156200022657634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024057600080fd5b6200024a620001f5565b835181526040601f19830112156200026157600080fd5b6200026b620001f5565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002a157607f821691505b60208210811415620002c357634e487b7160e01b600052602260045260246000fd5b50919050565b610a8180620002d96000396000f3fe60806040526004361061004b5760003560e01c80630d28f591146100545780631e93b0f1146100675780634666ce221461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b6100526100623660046107f4565b6100d6565b34801561007357600080fd5b506003545b6040519081526020015b60405180910390f35b61005261009936600461080c565b6103ae565b3480156100aa57600080fd5b50600154610078565b3480156100bf57600080fd5b506100c86105be565b60405161008292919061081e565b6100e6600260005414600e61065b565b610100813515806100f957506001548235145b600f61065b565b6000808055600280546101129061087b565b80601f016020809104026020016040519081016040528092919081815260200182805461013e9061087b565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a391906108cc565b90506101ad610684565b604080518435815260208086013590820152848201358183015290517f797d3cf24c61ddef167f613bd90cd51f53bcc717a7944bf246f70f607221ac509181900360600190a16101ff3415600b61065b565b8151610217906001600160a01b03163314600c61065b565b604080516102639161023d91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836040015114600d61065b565b600382608001516004610276919061096c565b610284906040860135610983565b61028e919061099b565b81526020808201805160009081905290516002908301819052604084018051600190819052905184015260608401805182905251909201528151146102e8578051156102de5780604001516102ee565b80602001516102ee565b80606001515b608082018190528251602084015191516001600160a01b03909116916108fc9161031891906109bd565b6040518115909202916000818181858888f19350505050158015610340573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc836020015183608001516020015161036a91906109bd565b6040518115909202916000818181858888f19350505050158015610392573d6000803e3d6000fd5b50600080805560018190556103a99060029061071e565b505050565b6103be600160005414600961065b565b6103d8813515806103d157506001548235145b600a61065b565b6000808055600280546103ea9061087b565b80601f01602080910402602001604051908101604052809291908181526020018280546104169061087b565b80156104635780601f1061043857610100808354040283529160200191610463565b820191906000526020600020905b81548152906001019060200180831161044657829003601f168201915b505050505080602001905181019061047b91906109dc565b6040805184358152602080860135908201529192507fa08c449ed6ef7da678fe7758c5f03fb415c18ff52ea0281dc0c4f34e76337c9b910160405180910390a16104cc81602001513414600861065b565b6105106040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152336060840152848201356080840152600260005543600155516105949183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b604051602081830303815290604052600290805190602001906105b892919061075b565b50505050565b6000606060005460028080546105d39061087b565b80601f01602080910402602001604051908101604052809291908181526020018280546105ff9061087b565b801561064c5780601f106106215761010080835404028352916020019161064c565b820191906000526020600020905b81548152906001019060200180831161062f57829003601f168201915b50505050509050915091509091565b816106805760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518060a00160405280600081526020016106b3604051806040016040528060008152602001600081525090565b81526020016106d5604051806040016040528060008152602001600081525090565b81526020016106f7604051806040016040528060008152602001600081525090565b8152602001610719604051806040016040528060008152602001600081525090565b905290565b50805461072a9061087b565b6000825580601f1061073a575050565b601f01602090049060005260206000209081019061075891906107df565b50565b8280546107679061087b565b90600052602060002090601f01602090048101928261078957600085556107cf565b82601f106107a257805160ff19168380011785556107cf565b828001600101855582156107cf579182015b828111156107cf5782518255916020019190600101906107b4565b506107db9291506107df565b5090565b5b808211156107db57600081556001016107e0565b60006060828403121561080657600080fd5b50919050565b60006040828403121561080657600080fd5b82815260006020604081840152835180604085015260005b8181101561085257858101830151858201606001528201610836565b81811115610864576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061088f57607f821691505b6020821081141561080657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146108c757600080fd5b919050565b600060a082840312156108de57600080fd5b60405160a0810181811067ffffffffffffffff8211171561090f57634e487b7160e01b600052604160045260246000fd5b60405261091b836108b0565b8152602083015160208201526040830151604082015261093d606084016108b0565b6060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008282101561097e5761097e610956565b500390565b6000821982111561099657610996610956565b500190565b6000826109b857634e487b7160e01b600052601260045260246000fd5b500690565b60008160001904831182151516156109d7576109d7610956565b500290565b6000606082840312156109ee57600080fd5b6040516060810181811067ffffffffffffffff82111715610a1f57634e487b7160e01b600052604160045260246000fd5b604052610a2b836108b0565b81526020830151602082015260408301516040820152809150509291505056fea26469706673582212205c573002fb1bcb283072db56fe24936132a682174b5d04134930bfd81342243064736f6c63430008090033`,
  BytecodeLen: 3418,
  Which: `oD`,
  version: 5,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
