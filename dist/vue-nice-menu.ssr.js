'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'niceMenu',
  props: {
    reference: {
      required: false,
      default: 'nice-menu'
    },
    backgroundColor: {
      type: String,
      default: '#20babb'
    },
    color: {
      type: String,
      default: '#fff'
    },
    position: {
      type: String,
      default: 'top-left'
    },
    items: {
      type: Array,
      required: true
    },
    autoClose: {
      required: false,
      default: true
    }
  },
  computed: {
    openNewTab: function openNewTab() {
      return this.isOpenNewTab ? '_blank' : '_self';
    },
    quickMenuStyle: function quickMenuStyle() {
      var topPosition = {
        top: '30px'
      },
          bottomPosition = {
        bottom: '30px'
      },
          leftPosition = {
        left: '30px'
      },
          rightPosition = {
        right: '30px'
      };
      var style = this.isTop ? topPosition : bottomPosition;
      Object.assign(style, this.isLeft ? leftPosition : rightPosition);
      Object.assign(style, {
        transform: this.isLeft ? "rotate(-180deg)" : "rotate(180deg)"
      });
      return style;
    },
    menuStyle: function menuStyle() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color
      };
    },
    isTop: function isTop() {
      return !!~this.position.toLowerCase().indexOf('top');
    },
    isLeft: function isLeft() {
      return !!~this.position.toLowerCase().indexOf('left');
    }
  },
  data: function data() {
    return {
      menuSize: 60,
      subMenu4: [[["0", "-160"], ["-80", "-138.6"], ["-138.6", "-80"], ["-160", "0"]], [["0", "-160"], ["80", "-138.6"], ["138.6", "-80"], ["160", "0"]], [["0", "160"], ["138.6", "80"], ["80", "138.6"], ["160", "0"]], [["-160", "0"], ["-138.6", "80"], ["-80", "138.6"], ["0", "160"]]],
      subMenu3: [[["-160", "0"], ["-113", "-113"], ["0", "-160"]], [["0", "-160"], ["113", "-113"], ["160", "0"]], [["0", "160"], ["113", "113"], ["160", "0"]], [["-160", "0"], ["-113", "113"], ["0", "160"]]],
      subMenu2: [[["-160", "0"], ["0", "-160"]], [["0", "-160"], ["160", "0"]], [["0", "160"], ["160", "0"]], [["-160", "0"], ["0", "160"]]],
      menuCount: 0
    };
  },
  methods: {
    getSubMenu: function getSubMenu(n) {
      if (this.menuCount) {
        var menuPosition = this.menuCount === 4 ? this.subMenu4 : this.menuCount === 3 ? this.subMenu3 : this.subMenu2;
        menuPosition = this.isTop && this.isLeft ? menuPosition[2] : this.isTop && !this.isLeft ? menuPosition[1] : !this.isTop && this.isLeft ? menuPosition[3] : menuPosition[0];
        return {
          top: menuPosition[n][0] + 'px',
          left: menuPosition[n][1] + 'px'
        };
      }
    },
    toggleMenu: function toggleMenu() {
      var _this = this;

      this.$emit('nice-menu-togling');
      var menuEl = this.$refs[this.reference];

      if (!menuEl.classList.contains('active')) {
        menuEl.classList.add('active');
        this.items.forEach(function (item) {
          _this.$refs['icon-' + item.id][0].classList.add('menu-animate');
        });
        this.$emit('nice-menu-opened');
      } else {
        menuEl.classList.remove('active');
        this.items.forEach(function (item) {
          _this.$refs['icon-' + item.id][0].classList.remove('menu-animate');
        });
        this.$emit('nice-menu-closed');
      }
    },
    close: function close() {
      var _this2 = this;

      var menuEl = this.$refs[this.reference];
      menuEl.classList.remove('active');
      this.items.forEach(function (item) {
        _this2.$refs['icon-' + item.id][0].classList.remove('menu-animate');
      });
      this.$emit('nice-menu-closed');
    },
    open: function open() {
      var menuEl = this.$refs[this.reference];
      var menuIconEl = this.$refs.icon;
      menuEl.className = menuEl.className.replace(' active', '');
      menuIconEl.forEach(function (element, index) {
        element.className = element.className.replace(' menu-animate', '');
      });
      this.$emit('nice-menu-opened');
    },
    onClick: function onClick(item) {
      this.$emit('sub-menu-clicked', item);
      this.autoClose ? this.toggleMenu() : null;
    },
    mouseEnterSubMenu: function mouseEnterSubMenu(item) {
      this.$refs['sub-menu-' + item.id][0].style.backgroundColor = this.lightenColor(item.backgroundColor || this.backgroundColor, 20);
    },
    mouseOutSubMenu: function mouseOutSubMenu(item) {
      this.$refs['sub-menu-' + item.id][0].style.backgroundColor = item.backgroundColor || this.backgroundColor, 20;
    },
    lightenColor: function lightenColor(hex, amt) {
      var usePound = false;

      if (hex[0] === '#') {
        hex = hex.slice(1);
        usePound = true;
      }

      var num = parseInt(hex, 16);
      var r = (num >> 16) + amt;
      if (r > 255) r = 255;else if (r < 0) r = 0;
      var b = (num >> 8 & 0x00FF) + amt;
      if (b > 255) b = 255;else if (b < 0) b = 0;
      var g = (num & 0x0000FF) + amt;
      if (g > 255) g = 255;else if (g < 0) g = 0;
      return (usePound ? '#' : '') + (g | b << 8 | r << 16).toString(16);
    }
  },
  mounted: function mounted() {
    this.menuCount = this.items.length;

    if (this.menuCount !== 2 || this.menuCount !== 3 || this.menuCount !== 4 && !process.env.production) {
      console.warn("[Vue warn]: test");
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    ref: _vm.reference,
    staticClass: "quick-menu",
    style: _vm.quickMenuStyle
  }, [_vm._l(_vm.items, function (item, key) {
    return _vm._ssrNode("<div class=\"sub-menu\"" + _vm._ssrStyle(null, _vm.getSubMenu(key), null) + ">", "</div>", [item.isRouterLink ? _c('router-link', {
      ref: 'sub-menu-' + item.id,
      refInFor: true,
      style: {
        backgroundColor: item.backgroundColor || _vm.backgroundColor,
        color: item.color || _vm.color
      },
      attrs: {
        "to": item.url,
        "target": _vm.openNewTab
      },
      on: {
        "mouseover": function mouseover($event) {
          $event.stopPropagation();
          return _vm.mouseEnterSubMenu(item);
        },
        "mouseout": function mouseout($event) {
          $event.stopPropagation();
          return _vm.mouseOutSubMenu(item);
        }
      }
    }, [_c('i', {
      ref: 'icon-' + item.id,
      refInFor: true,
      class: item.iconClass
    })]) : _c('a', {
      ref: 'sub-menu-' + item.id,
      refInFor: true,
      style: {
        backgroundColor: item.backgroundColor || _vm.backgroundColor,
        color: item.color || _vm.color
      },
      on: {
        "mouseover": function mouseover($event) {
          $event.stopPropagation();
          return _vm.mouseEnterSubMenu(item);
        },
        "mouseout": function mouseout($event) {
          $event.stopPropagation();
          return _vm.mouseOutSubMenu(item);
        },
        "click": function click($event) {
          return _vm.onClick(item);
        }
      }
    }, [_c('i', {
      ref: 'icon-' + item.id,
      refInFor: true,
      class: item.iconClass
    })])], 1);
  }), _vm._ssrNode(" <div class=\"menu\"" + _vm._ssrStyle(null, _vm.menuStyle, null) + "><div class=\"core-menu\"><div class=\"bar\"></div></div></div>")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4dc55938_0", {
    source: ".menu-animate{-webkit-animation:bounce 1s linear 1s;-moz-animation:bounce 1s linear 1s;animation:bounce 1s linear 1s}.quick-menu{color:#fff;position:fixed;width:60px;height:60px;-webkit-transition:all 1s ease;-moz-transition:all 1s ease;transition:all 1s ease;right:30px}.quick-menu>.menu{display:block;position:absolute;border-radius:50%!important;width:60px;height:60px;text-align:center;box-shadow:0 3px 10px rgba(0,0,0,.23),0 3px 10px rgba(0,0,0,.16);color:#fff;-webkit-transition:all 1s ease;-moz-transition:all 1s ease;transition:all 1s ease}.quick-menu>.menu .core-menu{position:absolute;left:0;top:0;width:60px;height:60px;-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg);-webkit-transition:all 1s ease;-moz-transition:all 1s ease;transition:all 1s ease}.quick-menu>.menu .core-menu .bar{-webkit-transition:all 1s ease;-moz-transition:all 1s ease;transition:all 1s ease;width:28px;height:3px;background:#fff;position:absolute;top:35%;margin-top:-1.5px;left:16px;-webkit-transform-origin:0 50%;-moz-transform-origin:0 50%;-ms-transform-origin:0 50%;-o-transform-origin:0 50%;transform-origin:0 50%}.quick-menu>.menu .core-menu .bar:after,.quick-menu>.menu .core-menu .bar:before{-webkit-transition:all 1s ease;-moz-transition:all 1s ease;transition:all 1s ease;content:'';width:28px;height:3px;background:#fff;position:absolute;left:0;-webkit-transform-origin:0 50%;-moz-transform-origin:0 50%;-ms-transform-origin:0 50%;-o-transform-origin:0 50%;transform-origin:0 50%}.quick-menu>.menu .core-menu .bar:before{margin-top:30%}.quick-menu>.menu .core-menu .bar:after{margin-top:60%}.quick-menu .sub-menu{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;width:60px;height:60px;font-size:30px;text-align:center;border-radius:50%!important}.quick-menu .sub-menu a{outline:0;text-decoration:none;display:inline-block;border-radius:50%!important;width:100%;height:100%}.quick-menu .sub-menu a i{outline:0;font-size:30px;margin-top:12px;background:0 0}.quick-menu .sub-menu a i:before{vertical-align:middle}.quick-menu .sub-menu a:hover{cursor:pointer}.quick-menu.active{-webkit-transform:rotate(0)!important;-moz-transform:rotate(0)!important;-ms-transform:rotate(0)!important;-o-transform:rotate(0)!important;transform:rotate(0)!important}.quick-menu.active .menu{-webkit-transform:scale(.7);-moz-transform:scale(.7);-ms-transform:scale(.7);-o-transform:scale(.7);transform:scale(.7)}.quick-menu.active .menu .bar{top:50%;margin-top:-1.5px;left:50%;margin-left:-12px;-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-ms-transform-origin:50% 50%;-o-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(405deg);-moz-transform:rotate(405deg);-ms-transform:rotate(405deg);-o-transform:rotate(405deg);transform:rotate(405deg)}.quick-menu.active .menu .bar:before{-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-ms-transform-origin:50% 50%;-o-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(-450deg);-moz-transform:rotate(-450deg);-ms-transform:rotate(-450deg);-o-transform:rotate(-450deg);transform:rotate(-450deg);margin-top:0}.quick-menu.active .menu .bar:after{opacity:0}@-webkit-keyframes bounce{0%,100%{-webkit-transform:translateY(0)}10%{-webkit-transform:translateY(6px)}30%{-webkit-transform:translateY(-4px)}70%{-webkit-transform:translateY(3px)}90%{-webkit-transform:translateY(-2px)}}@-moz-keyframes bounce{0%,100%{-moz-transform:translateY(0)}10%{-moz-transform:translateY(6px)}30%{-moz-transform:translateY(-4px)}70%{-moz-transform:translateY(3px)}90%{-moz-transform:translateY(-2px)}}@keyframes bounce{0%,100%{-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}10%{-webkit-transform:translateY(6px);-moz-transform:translateY(6px);-ms-transform:translateY(6px);-o-transform:translateY(6px);transform:translateY(6px)}30%{-webkit-transform:translateY(-4px);-moz-transform:translateY(-4px);-ms-transform:translateY(-4px);-o-transform:translateY(-4px);transform:translateY(-4px)}70%{-webkit-transform:translateY(3px);-moz-transform:translateY(3px);-ms-transform:translateY(3px);-o-transform:translateY(3px);transform:translateY(3px)}90%{-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-4dc55938";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component

var install = function installVueNiceMenu(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueNiceMenu', __vue_component__);
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=__vue_component__;