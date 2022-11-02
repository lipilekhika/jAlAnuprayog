if (true) {
    // https://github.com/abhas9/vanilla-caret-js
    (function (factory) {
        var mod = {
            exports: {}
        };
        factory(mod);
        $lf.CaretPos = mod.exports;
    })(function (module) {
        'use strict';

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var CaretPos = function () {
            function CaretPos(target) {
                _classCallCheck(this, CaretPos);

                this.target = target;
                this.isContentEditable = target && target.contentEditable;
            }
            _createClass(CaretPos, [{
                key: 'getPos',
                value: function getPos() {
                    if (document.activeElement !== this.target) {
                        return -1;
                    }
                    if (this.isContentEditable) {
                        this.target.focus();
                        var _range = document.getSelection().getRangeAt(0);
                        var range = _range.cloneRange();
                        range.selectNodeContents(this.target);
                        range.setEnd(_range.endContainer, _range.endOffset);
                        return range.toString().length;
                    }

                    return this.target.selectionStart;
                }
            }, {
                key: 'setPos',
                value: function setPos(position) {
                    if (this.isContentEditable) {
                        if (position >= 0) {
                            var selection = window.getSelection();
                            var range = this.createRange(this.target, {
                                count: position
                            });
                            if (range) {
                                range.collapse(false);
                                selection.removeAllRanges();
                                selection.addRange(range);
                            }
                        }
                    } else {
                        this.target.setSelectionRange(position, position);
                    }
                }
            }, {
                key: 'createRange',
                value: function createRange(node, chars, range) {
                    if (!range) {
                        range = document.createRange();
                        range.selectNode(node);
                        range.setStart(node, 0);
                    }
                    if (chars.count === 0) {
                        range.setEnd(node, chars.count);
                    } else if (node && chars.count > 0) {
                        if (node.nodeType === Node.TEXT_NODE) {
                            if (node.textContent.length < chars.count) {
                                chars.count -= node.textContent.length;
                            } else {
                                range.setEnd(node, chars.count);
                                chars.count = 0;
                            }
                        } else {
                            for (var lp = 0; lp < node.childNodes.length; lp++) {
                                range = this.createRange(node.childNodes[lp], chars, range);
                                if (chars.count === 0) {
                                    break;
                                }
                            }
                        }
                    }
                    return range;
                }
            }]);

            return CaretPos;
        }();
        module.exports = CaretPos;
    });
}
if (true) {
    // https://github.com/ichord/Caret.js/
    // मया पुनर्सृष्टः
    (function (factory) {
        factory();
    }(function () {
        "use strict";
        var EditableCaret, InputCaret, Mirror, Utils, discoveryIframeOf, methods, oDocument, oFrame, oWindow, pluginName, setContextBy;
        pluginName = 'caret';
        EditableCaret = (function () {
            function EditableCaret($inputor) {
                this.$inputor = $inputor;
                this.domInputor = this.$inputor[0];
            }
            EditableCaret.prototype.setPos = function (pos) {
                var fn, found, offset, sel;
                if (sel = oWindow.getSelection()) {
                    offset = 0;
                    found = false;
                    (fn = function (pos, parent) {
                        var node, range, _i, _len, _ref, _results;
                        _ref = parent.childNodes;
                        _results = [];
                        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                            node = _ref[_i];
                            if (found) {
                                break;
                            }
                            if (node.nodeType === 3) {
                                if (offset + node.length >= pos) {
                                    found = true;
                                    range = oDocument.createRange();
                                    range.setStart(node, pos - offset);
                                    sel.removeAllRanges();
                                    sel.addRange(range);
                                    break;
                                } else {
                                    _results.push(offset += node.length);
                                }
                            } else {
                                _results.push(fn(pos, node));
                            }
                        }
                        return _results;
                    })(pos, this.domInputor);
                }
                return this.domInputor;
            };
            EditableCaret.prototype.getIEPosition = function () {
                return this.getPosition();
            };
            EditableCaret.prototype.getPosition = function () {
                var inputor_offset, offset;
                offset = this.getOffset();
                inputor_offset = this.$inputor.offset();
                offset.left -= inputor_offset.left;
                offset.top -= inputor_offset.top;
                return offset;
            };
            EditableCaret.prototype.getPos = function () {
                var clonedRange, pos, range;
                if (range = this.range()) {
                    clonedRange = range.cloneRange();
                    clonedRange.selectNodeContents(this.domInputor);
                    clonedRange.setEnd(range.endContainer, range.endOffset);
                    pos = clonedRange.toString().length;
                    clonedRange.detach();
                    return pos;
                }
            };
            EditableCaret.prototype.getOffset = function (pos) {
                var clonedRange, offset, range, rect, shadowCaret;
                if (oWindow.getSelection && (range = this.range())) {
                    if (range.endOffset - 1 > 0 && range.endContainer !== this.domInputor) {
                        clonedRange = range.cloneRange();
                        clonedRange.setStart(range.endContainer, range.endOffset - 1);
                        clonedRange.setEnd(range.endContainer, range.endOffset);
                        rect = clonedRange.getBoundingClientRect();
                        offset = {
                            height: rect.height,
                            left: rect.left + rect.width,
                            top: rect.top
                        };
                        clonedRange.detach();
                    }
                    if (!offset || (offset != null ? offset.height : void 0) === 0) {
                        clonedRange = range.cloneRange();
                        shadowCaret = oDocument.createTextNode("|");
                        clonedRange.insertNode(shadowCaret);
                        clonedRange.selectNode(shadowCaret);
                        rect = clonedRange.getBoundingClientRect();
                        offset = {
                            height: rect.height,
                            left: rect.left,
                            top: rect.top
                        };
                        shadowCaret.remove();
                        clonedRange.detach();
                    }
                }
                if (offset) {
                    offset.top += oWindow.scrollY;
                    offset.left += oWindow.scrollX;
                }
                return offset;
            };
            EditableCaret.prototype.range = function () {
                var sel;
                if (!oWindow.getSelection) {
                    return;
                }
                sel = oWindow.getSelection();
                if (sel.rangeCount > 0) {
                    return sel.getRangeAt(0);
                } else {
                    return null;
                }
            };
            return EditableCaret;
        })();
        InputCaret = (function () {
            function InputCaret($inputor) {
                this.$inputor = $inputor;
                this.domInputor = this.$inputor[0];
            }
            InputCaret.prototype.getPos = function () {
                return this.domInputor.selectionStart;
            };
            InputCaret.prototype.setPos = function (pos) {
                var inputor, range;
                inputor = this.domInputor;
                if (oDocument.selection) {
                    range = inputor.createTextRange();
                    range.move("character", pos);
                    range.select();
                } else if (inputor.setSelectionRange) {
                    inputor.setSelectionRange(pos, pos);
                }
                return inputor;
            };
            InputCaret.prototype.getIEOffset = function (pos) {
                var h, textRange, x, y;
                textRange = this.domInputor.createTextRange();
                pos || (pos = this.getPos());
                textRange.move('character', pos);
                x = textRange.boundingLeft;
                y = textRange.boundingTop;
                h = textRange.boundingHeight;
                return {
                    left: x,
                    top: y,
                    height: h
                };
            };
            InputCaret.prototype.getOffset = function (pos) {
                var $inputor, offset, position;
                $inputor = this.$inputor;
                if (oDocument.selection) {
                    offset = this.getIEOffset(pos);
                    offset.top += oWindow.scrollY + $inputor.scrollTop();
                    offset.left += oWindow.scrollX + $inputor.scrollLeft();
                    return offset;
                } else {
                    offset = $inputor.offset();
                    position = this.getPosition(pos);
                    return offset = {
                        left: offset.left + position.left - $inputor.scrollLeft(),
                        top: offset.top + position.top - $inputor.scrollTop(),
                        height: position.height
                    };
                }
            };
            InputCaret.prototype.getPosition = function (pos) {
                var $inputor, at_rect, end_range, format, html, mirror, start_range;
                $inputor = this.$inputor;
                format = function (value) {
                    value = value.replace(/<|>|`|"|&/g, '?').replace(/\r\n|\r|\n/g, "<br/>");
                    if (/firefox/i.test(navigator.userAgent)) {
                        value = value.replace(/\s/g, '&nbsp;');
                    }
                    return value;
                };
                if (pos === void 0) {
                    pos = this.getPos();
                }
                start_range = $inputor.val().slice(0, pos);
                end_range = $inputor.val().slice(pos);
                html = format(start_range);
                html += "<span id='caret' style='position: relative; display: inline;'></span>";
                html += "<span id='caret_h' style='position: relative; display: inline;'>|</span>";
                html += format(end_range)
                mirror = new Mirror($inputor);
                return at_rect = mirror.create(html).rect();
            };
            InputCaret.prototype.getIEPosition = function (pos) {
                var h, inputorOffset, offset, x, y;
                offset = this.getIEOffset(pos);
                inputorOffset = this.$inputor.offset();
                x = offset.left - inputorOffset.left;
                y = offset.top - inputorOffset.top;
                h = offset.height;
                return {
                    left: x,
                    top: y,
                    height: h
                };
            };
            return InputCaret;
        })();
        Mirror = (function () {
            Mirror.prototype.css_attr = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontWeight", "height", "letterSpacing", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "outlineWidth", "overflow", "overflowX", "overflowY", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "textAlign", "textOverflow", "textTransform", "whiteSpace", "wordBreak", "wordWrap"];

            function Mirror($inputor) {
                this.$inputor = $inputor;
            }
            Mirror.prototype.mirrorCss = function () {
                var css,
                    _this = this;
                css = {
                    position: 'absolute',
                    left: -9999,
                    top: 0,
                    zIndex: -20000
                };
                if (this.$inputor[0].tagName == 'TEXTAREA') {
                    this.css_attr.push('width');
                }
                for (let p of this.css_attr)
                    css[p] = _this.$inputor.css(p);
                css["position"] = "relative";
                css["display"] = "block";
                return css;
            };
            Mirror.prototype.create = function (html) {
                this.$mirror = this.$inputor.afterHTML("<div></div>");
                this.$mirror.css(this.mirrorCss());
                this.$mirror.html(html);
                return this;
            };
            Mirror.prototype.rect = function () {
                var $flag, pos, rect;
                $flag = this.$mirror.find("#caret");
                pos = $flag.position();
                rect = {
                    left: pos.left,
                    top: pos.top,
                    height: this.$mirror.find("#caret_h").height()
                };
                this.$mirror.remove();
                return rect;
            };
            return Mirror;

        })();
        Utils = {
            contentEditable: function ($inputor) {
                return !!($inputor[0].contentEditable && $inputor[0].contentEditable === 'true');
            }
        };
        methods = {
            pos: function (pos) {
                if (pos || pos === 0) {
                    return this.setPos(pos);
                } else {
                    return this.getPos();
                }
            },
            position: function (pos) {
                if (oDocument.selection) {
                    return this.getIEPosition(pos);
                } else {
                    return this.getPosition(pos);
                }
            },
            offset: function (pos) {
                var offset;
                offset = this.getOffset(pos);
                return offset;
            }
        };
        oDocument = null;
        oWindow = null;
        oFrame = null;
        setContextBy = function (settings) {
            var iframe;
            if (iframe = settings != null ? settings.iframe : void 0) {
                oFrame = iframe;
                oWindow = iframe.contentWindow;
                return oDocument = iframe.contentDocument || oWindow.document;
            } else {
                oFrame = void 0;
                oWindow = window;
                return oDocument = document;
            }
        };
        discoveryIframeOf = function ($dom) {
            var error;
            oDocument = $dom[0].ownerDocument;
            oWindow = oDocument.defaultView || oDocument.parentWindow;
            try {
                return oFrame = oWindow.frameElement;
            } catch (_error) {
                error = _error;
            }
        };
        let lf = लिपिquery.prototype;
        lf.caret = function (method, value, settings) {
            var caret;
            if (methods[method]) {
                if ($lf.isPlainObject(value)) {
                    setContextBy(value);
                    value = void 0;
                } else {
                    setContextBy(settings);
                }
                caret = Utils.contentEditable(this) ? new EditableCaret(this) : new InputCaret(this);
                return methods[method].apply(caret, [value]);
            }
        };
        lf.caret.EditableCaret = EditableCaret;
        lf.caret.InputCaret = InputCaret;
        lf.caret.Utils = Utils;
        lf.caret.apis = methods;
    }));
}