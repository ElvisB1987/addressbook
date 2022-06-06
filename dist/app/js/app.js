(self["webpackChunkquantox_internship2021_group4_addressbook"] = self["webpackChunkquantox_internship2021_group4_addressbook"] || []).push([["app"],{

/***/ "./src/app/App.css":
/*!*************************!*\
  !*** ./src/app/App.css ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1654481101531
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/app/App.js":
/*!************************!*\
  !*** ./src/app/App.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/app/App.css");
/* harmony import */ var _server_routes_Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server/routes/Routes */ "./src/server/routes/Routes.js");
/* harmony import */ var _server_routes_Routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_server_routes_Routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Table */ "./src/app/components/Table.js");
/* harmony import */ var _components_DeleteButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/DeleteButton */ "./src/app/components/DeleteButton.js");
/* harmony import */ var _components_ActionBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ActionBar */ "./src/app/components/ActionBar.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/context.js");
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! i18next-browser-languagedetector */ "./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js");
/* harmony import */ var _translations_en_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./translations/en.json */ "./src/app/translations/en.json");
/* harmony import */ var _translations_sr_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./translations/sr.json */ "./src/app/translations/sr.json");
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useFetch */ "./src/app/hooks/useFetch.js");
/* harmony import */ var _components_EntryEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/EntryEditor */ "./src/app/components/EntryEditor.js");
/* harmony import */ var _hooks_useModalHook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hooks/useModalHook */ "./src/app/hooks/useModalHook.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _a;
var _b;
_b = __webpack_require__.$Refresh$.signature();















i18next__WEBPACK_IMPORTED_MODULE_6__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_13__.initReactI18next) // passes i18n down to react-i18next
    .use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_7__["default"])
    .init({
    resources: {
        en: { translation: _translations_en_json__WEBPACK_IMPORTED_MODULE_8__ },
        sr: { translation: _translations_sr_json__WEBPACK_IMPORTED_MODULE_9__ },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});
const tableHeaderAllScreensClassName = "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell";
const tableCellAllScreensClassName = "px-4 py-3 flex-wrap hidden md:table-cell text-left text-base";
const tableHeaderLargeScreenClassName = "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden xl:table-cell";
const tableCellLargeScreenClassName = "px-4 py-3 flex-wrap hidden xl:table-cell text-left text-base";
const tableHeaderMediumScreenClassName = "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell";
const tableCellMediumScreenClassName = "px-4 py-3 flex-wrap hidden lg:table-cell text-left text-base";
const App = () => {
    _b();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)();
    //modal implementation
    const { openModal } = (0,_hooks_useModalHook__WEBPACK_IMPORTED_MODULE_12__["default"])();
    const { data: items, error, fetch: fetchItems, } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_10__.useFetchGet)(_server_routes_Routes__WEBPACK_IMPORTED_MODULE_2__.API_GET_ENTRIES_ROUTE, _hooks_useFetch__WEBPACK_IMPORTED_MODULE_10__.GET_RESPONSE_DATA_JSON);
    const refreshTable = () => {
        fetchItems();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        fetchItems();
    }, [fetchItems]);
    if (error) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            "Error: ",
            error.message);
    }
    const columns = [
        {
            label: "avatar",
            renderCell: (item) => {
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { className: "inline object-cover w-12 h-12 mr-2 rounded-full", src: item.avatarUrl, alt: "avatar" }));
            },
            headerClassName: tableHeaderAllScreensClassName,
            bodyClassName: tableCellAllScreensClassName,
        },
        {
            label: "firstName",
            renderCell: (item) => {
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "cursor-pointer hover:underline hover:text-gray-500", onClick: () => openModal(t("Edit") + " " + item.firstName, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_EntryEditor__WEBPACK_IMPORTED_MODULE_11__["default"], { readOnly: true, entry: item, refreshTable: refreshTable })) }, item.firstName));
            },
            headerClassName: tableHeaderAllScreensClassName,
            bodyClassName: tableCellAllScreensClassName,
        },
        {
            label: "lastName",
            renderCell: (item) => {
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item.lastName);
            },
            headerClassName: tableHeaderAllScreensClassName,
            bodyClassName: tableCellAllScreensClassName,
        },
        {
            label: "country",
            renderCell: (item) => {
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item.country);
            },
            headerClassName: tableHeaderMediumScreenClassName,
            bodyClassName: tableCellMediumScreenClassName,
        },
        {
            label: "city",
            renderCell: (item) => {
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item.city);
            },
            headerClassName: tableHeaderAllScreensClassName,
            bodyClassName: tableCellAllScreensClassName,
        },
        {
            label: "street",
            renderCell: (item) => {
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item.street);
            },
            headerClassName: tableHeaderLargeScreenClassName,
            bodyClassName: tableCellLargeScreenClassName,
        },
        {
            label: "postalCode",
            renderCell: (item) => {
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item.postalCode);
            },
            headerClassName: tableHeaderLargeScreenClassName,
            bodyClassName: tableCellLargeScreenClassName,
        },
        {
            label: "birthDate",
            renderCell: (item) => {
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item.birthDate);
            },
            headerClassName: tableHeaderLargeScreenClassName,
            bodyClassName: tableCellLargeScreenClassName,
        },
        {
            label: "email",
            renderCell: (item) => {
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item.email);
            },
            headerClassName: tableHeaderMediumScreenClassName,
            bodyClassName: tableCellMediumScreenClassName,
        },
        {
            label: "delete",
            renderCell: (item) => {
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DeleteButton__WEBPACK_IMPORTED_MODULE_4__["default"], { uuid: item.uuid, onDelete: refreshTable }));
            },
            headerClassName: tableHeaderAllScreensClassName,
            bodyClassName: tableCellAllScreensClassName,
        },
        {
            label: "mobile",
            renderCell: (item) => {
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex flex-col items-center border-black  shadow-xl rounded-md px-4 py-3 text-base" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex flex-col items-center pb-3" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: item.avatarUrl, alt: "avatar", className: "h-[100px] rounded-full" })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "cursor-pointer hover:underline hover:text-gray-500", onClick: () => openModal(t("Add new Entry"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_EntryEditor__WEBPACK_IMPORTED_MODULE_11__["default"], { readOnly: true, entry: item, refreshTable: refreshTable })) },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "font-bold uppercase " },
                                t("firstName"),
                                ":"),
                            " ",
                            item.firstName),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "font-bold uppercase" },
                                t("lastName"),
                                ":"),
                            " ",
                            item.lastName),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "font-bold uppercase" },
                                t("city"),
                                ":"),
                            " ",
                            item.city)),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DeleteButton__WEBPACK_IMPORTED_MODULE_4__["default"], { uuid: item.uuid, onDelete: refreshTable })));
            },
            headerClassName: "hidden",
            bodyClassName: "px-6 py-4 flex-wrap table-cell md:hidden",
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ActionBar__WEBPACK_IMPORTED_MODULE_5__["default"], { fetchItems: fetchItems, refreshTable: refreshTable }),
        items && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_3__["default"], { columns: columns, items: items })));
};
_a = App;
__webpack_require__.$Refresh$.register(_a, "App");
_b(App, "exnzW0jjDmsTti58eV2kNPHwymA=", false, () => [react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation, _hooks_useModalHook__WEBPACK_IMPORTED_MODULE_12__["default"], _hooks_useFetch__WEBPACK_IMPORTED_MODULE_10__.useFetchGet]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app/components/ActionBar.js":
/*!*****************************************!*\
  !*** ./src/app/components/ActionBar.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./src/app/components/Modal.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Settings */ "./src/app/components/Settings.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _EntryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EntryEditor */ "./src/app/components/EntryEditor.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Input */ "./src/app/components/Input.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./src/app/components/Button.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _a;
var _b;
_b = __webpack_require__.$Refresh$.signature();










const ActionBar = ({ fetchItems, refreshTable }) => {
    _b();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    const { openModal } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Modal__WEBPACK_IMPORTED_MODULE_2__.ModalContext);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", { className: "sticky w-full top-0 py-6 bg-white shadow-lg rounded-b-xl px-6 flex justify-between items-center" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], { intent: "success", onClick: () => openModal(t("Add new Entry"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EntryEditor__WEBPACK_IMPORTED_MODULE_4__["default"], { refreshTable: refreshTable })), className: "w-fit px-4 bg-gray-400 rounded-bl-lg py-3 shadow-md text-white hover:bg-gray-500 flex items-center justify-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.PlusIcon, { className: "w-[20px]" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "hidden md:inline-block ml-1" }, t("Add"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container flex items-center justify-center mx-5" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.SearchIcon, { className: "w-[20px] mr-1" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input__WEBPACK_IMPORTED_MODULE_6__["default"], { onChange: lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()((e) => {
                    fetchItems(`?search=${e.target.value}`);
                }, 350), type: "text", className: "w-full", placeholder: t("Search") })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], { intent: "info", onClick: () => openModal(t("settings"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Settings__WEBPACK_IMPORTED_MODULE_3__["default"], null)), className: "w-fit px-4 bg-white rounded-br-lg py-3 shadow-md hover:bg-gray-100 flex items-center justify-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.CogIcon, { className: "w-[20px]" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "hidden md:inline-block ml-1" }, t("settings")))));
};
_a = ActionBar;
__webpack_require__.$Refresh$.register(_a, "ActionBar");
_b(ActionBar, "didV+R5bHCM7p3tjhLx+u2S9YWM=", false, () => [react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation]);
ActionBar.propTypes = {
    searchTerm: prop_types__WEBPACK_IMPORTED_MODULE_9__.PropTypes.func,
    refreshTable: prop_types__WEBPACK_IMPORTED_MODULE_9__.PropTypes.func,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionBar);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app/components/Button.js":
/*!**************************************!*\
  !*** ./src/app/components/Button.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;



/**
 * @typedef {object} Props
 * @property {"button" | "submit"} [type="button"] - Button type.
 * @property {boolean} [disabled=false] - Whether the button is disabled.
 * @property {React.ReactNode} [label] - Button label.
 * @property {string} [className] - Additional classes to pass onto button.
 * @property {React.ReactNode} [children] - Button children.
 * @property {...any} [props] - Rest of the props.
 */
/**
 * Simple button.
 *
 * @type {React.FC<Props>}
 *
 */
const Button = (_b) => {
    var { intent = " ", type = "button", disabled = false, label, className, children } = _b, props = __rest(_b, ["intent", "type", "disabled", "label", "className", "children"]);
    const getColor = () => {
        switch (intent) {
            case "info":
                return [
                    "border-blue-600",
                    "hover:border-blue-400",
                    "hover:bg-blue-400",
                    "ring-blue-400",
                    "active:bg-blue-600",
                    "text-white",
                    "bg-blue-600",
                    "focus:ring-blue-500",
                    "active:translate-y-0.5",
                ];
            case "warning":
                return [
                    "border-orange-500",
                    "hover:border-orange-300",
                    "bg-orange-500",
                    "hover:bg-orange-300",
                    "ring-orange-200",
                    "active:bg-orange-500",
                    "text-white",
                    "focus:ring-orange-500",
                    "active:translate-y-0.5",
                ];
            case "danger":
                return [
                    "border-red-500",
                    "hover:border-red-300",
                    "hover:bg-red-300",
                    "ring-red-200",
                    "active:bg-red-500",
                    "text-white",
                    "bg-red-500",
                    "focus-ring-red-500",
                    "active:translate-y-0.5",
                ];
            case "success":
                return [
                    "border-green-600",
                    "hover:border-green-400",
                    "hover:bg-green-400",
                    "ring-green-200",
                    "active:bg-green-600",
                    "text-white",
                    "bg-green-600",
                    "active:translate-y-0.5",
                ];
            case "default":
            default:
                return [
                    "border-gray-500",
                    "hover:border-gray-900",
                    "hover:bg-gray-100",
                    "ring-gray-200",
                    "active:bg-gray-600",
                    "ring-offset-0",
                    "focus:outline-none",
                    "focus:ring-2",
                    "active:translate-y-0.5",
                ];
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", Object.assign({ intent: intent, type: type, disabled: disabled, className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("px-[1rem]", "py-[0.5rem]", "border", "rounded-[4px]", className, getColor()) }, props), children || label));
};
_a = Button;
__webpack_require__.$Refresh$.register(_a, "Button");
Button.propTypes = {
    type: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["button", "submit"]),
    intent: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([
        "warning",
        "info",
        "success",
        "danger",
        "default",
    ]),
    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    openModal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
};
Button.displayName = "Button";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app/components/ConfirmModal.js":
/*!********************************************!*\
  !*** ./src/app/components/ConfirmModal.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIRM_MODAL_YES": () => (/* binding */ CONFIRM_MODAL_YES),
/* harmony export */   "CONFIRM_MODAL_NO": () => (/* binding */ CONFIRM_MODAL_NO),
/* harmony export */   "CONFIRM_MODAL_ID": () => (/* binding */ CONFIRM_MODAL_ID)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./src/app/components/Modal.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/app/components/Button.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _a;
var _b;
_b = __webpack_require__.$Refresh$.signature();





const CONFIRM_MODAL_YES = "yes";
const CONFIRM_MODAL_NO = "no";
const ConfirmModal = () => {
    _b();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { closeModal } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Modal__WEBPACK_IMPORTED_MODULE_1__.ModalContext);
    const handleCloseModalYes = () => {
        return closeModal(CONFIRM_MODAL_YES);
    };
    const handleCloseModalNo = () => {
        return closeModal(CONFIRM_MODAL_NO);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex justify-end text-black w-100 py-2 px-4 text-left rounded mt-4" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], { onClick: handleCloseModalYes, intent: "success", className: "mr-4 text-base font-medium" }, t("yes")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], { onClick: handleCloseModalNo, intent: "danger", className: "text-base font-medium" }, t("no"))));
};
_a = ConfirmModal;
__webpack_require__.$Refresh$.register(_a, "ConfirmModal");
_b(ConfirmModal, "upkLkJnRDIR8YHXXvgpKaE8Vio0=", false, () => [react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation]);
const CONFIRM_MODAL_ID = react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConfirmModal, null);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app/components/DeleteButton.js":
/*!********************************************!*\
  !*** ./src/app/components/DeleteButton.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/app/components/Button.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var _server_routes_Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server/routes/Routes */ "./src/server/routes/Routes.js");
/* harmony import */ var _server_routes_Routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_server_routes_Routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ "./src/app/components/Modal.js");
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useFetch */ "./src/app/hooks/useFetch.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _ConfirmModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ConfirmModal */ "./src/app/components/ConfirmModal.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
var _b;
_b = __webpack_require__.$Refresh$.signature();









// eslint-disable-next-line react/prop-types
const DeleteButton = ({ uuid, onDelete }) => {
    _b();
    const { openConfirmModal } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Modal__WEBPACK_IMPORTED_MODULE_4__.ModalContext);
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    const openDeleteModal = () => {
        openConfirmModal(t("title")).then((resolveValue) => {
            if (_ConfirmModal__WEBPACK_IMPORTED_MODULE_6__.CONFIRM_MODAL_YES === resolveValue) {
                deleteUser();
            }
        });
    };
    // eslint-disable-next-line no-unused-vars
    const { response, error, fetch } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_5__.useFetchDelete)(_server_routes_Routes__WEBPACK_IMPORTED_MODULE_3__.API_DELETE_ENTRY_ROUTE.replace(":uuid", uuid));
    const deleteUser = () => __awaiter(void 0, void 0, void 0, function* () {
        yield fetch();
        onDelete(uuid);
        if (error) {
            console.error();
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { intent: "danger", className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__["default"])("rounded-br-md rounded-bl-md"), onClick: openDeleteModal },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.TrashIcon, { className: " w-5 h-5  text-black-500" })));
};
_a = DeleteButton;
__webpack_require__.$Refresh$.register(_a, "DeleteButton");
_b(DeleteButton, "u5ADPkAvBevZ+Ztk7kq35ozTOFo=", false, () => [react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation, _hooks_useFetch__WEBPACK_IMPORTED_MODULE_5__.useFetchDelete]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteButton);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app/components/EntryEditor.js":
/*!*******************************************!*\
  !*** ./src/app/components/EntryEditor.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _server_routes_Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../server/routes/Routes */ "./src/server/routes/Routes.js");
/* harmony import */ var _server_routes_Routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_server_routes_Routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFetch */ "./src/app/hooks/useFetch.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _EntryEditorControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EntryEditorControls */ "./src/app/components/EntryEditorControls.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ "./src/app/components/Modal.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Input */ "./src/app/components/Input.js");
/* harmony import */ var _resources_images_DefaultAvatar_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../resources/images/DefaultAvatar.jpg */ "./resources/images/DefaultAvatar.jpg");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
var _b;
_b = __webpack_require__.$Refresh$.signature();











// import defaultAvatar from "../../../resources/images/DefaultAvatar.jpg"
const EntryEditor = ({ resolve, reject, readOnly, entry, refreshTable }) => {
    var _c, _d, _e, _f, _g, _h, _j;
    _b();
    const { register, formState: { errors }, setValue, getValues, trigger, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
    if (!entry)
        entry = {};
    const [isDisabled, setIsDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(readOnly !== null && readOnly !== void 0 ? readOnly : false);
    const { closeModal } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Modal__WEBPACK_IMPORTED_MODULE_5__.ModalContext);
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    /*------------------Setting the values------------------*/
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        var _c, _d, _e, _f, _g, _h, _j;
        setValue("firstName", (_c = entry.firstName) !== null && _c !== void 0 ? _c : "");
        setValue("lastName", (_d = entry.lastName) !== null && _d !== void 0 ? _d : "");
        setValue("country", (_e = entry.country) !== null && _e !== void 0 ? _e : "");
        setValue("city", (_f = entry.city) !== null && _f !== void 0 ? _f : "");
        setValue("street", (_g = entry.street) !== null && _g !== void 0 ? _g : "");
        setValue("postalCode", (_h = entry.postalCode) !== null && _h !== void 0 ? _h : "");
        setValue("birthDate", entry.birthDate ? entry.birthDate.replace("Z", "") : "");
        setValue("email", (_j = entry.email) !== null && _j !== void 0 ? _j : "");
    }, []);
    /*------------------Formdata------------------*/
    const formData = new FormData();
    const prepareData = () => {
        console.log(getValues());
        const file = DataURIToBlob(_resources_images_DefaultAvatar_jpg__WEBPACK_IMPORTED_MODULE_7__);
        function DataURIToBlob(dataURI) {
            const splitDataURI = dataURI.split(",");
            const byteString = splitDataURI[0].indexOf("base64") >= 0
                ? atob(splitDataURI[1])
                : decodeURI(splitDataURI[1]);
            const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
            const ia = new Uint8Array(byteString.length);
            for (let i = 0; i < byteString.length; i++)
                ia[i] = byteString.charCodeAt(i);
            return new Blob([ia], { type: mimeString });
        }
        var avatarFile = document.querySelector('input[type="file"]').files[0];
        if (avatarFile) {
            formData.append("avatar", avatarFile);
        }
        else if (entry.avatarUrl) {
            formData.append("avatarUrl", entry.avatarUrl);
        }
        else {
            formData.append("avatar", file, "defaultAvatar.jpg");
        }
        formData.append("postalCode", getValues("postalCode") ? getValues("postalCode") : "");
        formData.append("firstName", getValues("firstName"));
        formData.append("lastName", getValues("lastName"));
        formData.append("country", getValues("country"));
        formData.append("city", getValues("city"));
        formData.append("street", getValues("street"));
        formData.append("birthDate", getValues("birthDate"));
        formData.append("email", getValues("email"));
    };
    /*------------------UseFetch Hook Implemetation------------------*/
    //Post
    const { fetch: fetchPost } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__.useFetchPost)(_server_routes_Routes__WEBPACK_IMPORTED_MODULE_2__.API_POST_V2_ENTRY_ROUTE, {
        body: formData,
    });
    function postData() {
        return __awaiter(this, void 0, void 0, function* () {
            prepareData();
            yield fetchPost();
            refreshTable();
            closeModal();
        });
    }
    //Put
    const { fetch: fetchPut } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__.useFetchPut)(_server_routes_Routes__WEBPACK_IMPORTED_MODULE_2__.API_PUT_V2_ENTRY_ROUTE.replace(":uuid", entry.uuid), { body: formData });
    function putData() {
        return __awaiter(this, void 0, void 0, function* () {
            prepareData();
            yield fetchPut();
            refreshTable();
            closeModal();
        });
    }
    /*------------------Handlers------------------*/
    function onAdd() {
        trigger().then((value) => {
            if (value)
                postData();
        });
    }
    function onSave() {
        trigger().then((value) => {
            if (value)
                putData();
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", { className: "text-xs flex flex-col lg:text-md lg:grid lg:grid-cols-2 gap-7 mx-4 my-3" },
        isDisabled ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-span-1 lg:col-span-2 flex justify-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { className: "w-[150px] lg:w-[300px]", src: entry.avatarUrl }))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-span-1 lg:col-span-2" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "font-bold uppercase mr-4", htmlFor: "" },
                t("avatar"),
                ":"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", Object.assign({ type: "file", disabled: isDisabled }, register("avatar"), { placeholder: "" })))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "font-bold uppercase mr-4", htmlFor: "" },
                t("firstName"),
                ":"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({ type: "text", disabled: isDisabled }, register("firstName", {
                required: t("This field can't be empty"),
            }), { placeholder: "" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "text-red-500" }, (_c = errors.firstName) === null || _c === void 0 ? void 0 : _c.message)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "font-bold uppercase mr-4", htmlFor: "" },
                t("lastName"),
                ":"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({ type: "text", disabled: isDisabled }, register("lastName", {
                required: t("This field can't be empty"),
            }), { placeholder: "" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "text-red-500" }, (_d = errors.lastName) === null || _d === void 0 ? void 0 : _d.message)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "font-bold uppercase mr-4", htmlFor: "" },
                t("country"),
                ":"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({ type: "text", disabled: isDisabled }, register("country", {
                required: t("This field can't be empty"),
            }), { placeholder: "" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "text-red-500" }, (_e = errors.country) === null || _e === void 0 ? void 0 : _e.message)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "font-bold uppercase mr-4", htmlFor: "" },
                t("city"),
                ":"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({ type: "text", disabled: isDisabled }, register("city", {
                required: t("This field can't be empty"),
            }), { placeholder: "" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "text-red-500" }, (_f = errors.city) === null || _f === void 0 ? void 0 : _f.message)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "font-bold uppercase mr-4", htmlFor: "" },
                t("street"),
                ":"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({ type: "text", disabled: isDisabled }, register("street", {
                required: t("This field can't be empty"),
            }), { placeholder: "" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "text-red-500" }, (_g = errors.street) === null || _g === void 0 ? void 0 : _g.message)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "font-bold uppercase mr-4", htmlFor: "" },
                t("postalCode"),
                ":"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({ type: "number", disabled: isDisabled }, register("postalCode"), { placeholder: "" }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "font-bold uppercase mr-4", htmlFor: "" },
                t("birthDate"),
                ":"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({ className: "w-[145px] lg:w-fit", type: "datetime-local", disabled: isDisabled }, register("birthDate", {
                required: t("This field can't be empty"),
            }), { placeholder: "" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "text-red-500" }, (_h = errors.birthDate) === null || _h === void 0 ? void 0 : _h.message)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "font-bold uppercase mr-4", htmlFor: "" },
                t("email"),
                ":"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({ type: "text", disabled: isDisabled }, register("email", {
                required: t("This field can't be empty"),
            }), { placeholder: "" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "text-red-500" }, (_j = errors.email) === null || _j === void 0 ? void 0 : _j.message)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "lg:col-span-2 w-full flex justify-center items-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EntryEditorControls__WEBPACK_IMPORTED_MODULE_4__["default"], { onSave: onSave, onAdd: onAdd, setIsDisabled: setIsDisabled, isDisabled: isDisabled, entry: entry }))));
};
_a = EntryEditor;
__webpack_require__.$Refresh$.register(_a, "EntryEditor");
_b(EntryEditor, "0t1cAjo1GqUFF1vOVjwulYS7EDU=", false, () => [react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm, react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation, _hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__.useFetchPost, _hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__.useFetchPut]);
EntryEditor.propTypes = {
    resolve: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
    reject: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
    readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),
    entry: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),
    refreshTable: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EntryEditor);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app/components/EntryEditorControls.js":
/*!***************************************************!*\
  !*** ./src/app/components/EntryEditorControls.js ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/app/components/Button.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _a;
var _b;
_b = __webpack_require__.$Refresh$.signature();



const EntryEditorControls = ({ onSave, onAdd, setIsDisabled, isDisabled, entry, }) => {
    _b();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    if (Object.keys(entry).length === 0)
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { intent: "success", onClick: () => onAdd(), className: "mt-5 w-[80%]" }, t("Add")));
    else if (isDisabled) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { intent: "info", onClick: () => {
                setIsDisabled(false);
            }, className: "mt-5 w-[80%]" }, t("Edit")));
    }
    else {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { intent: "success", onClick: () => {
                onSave();
            }, className: "mt-5 w-[80%]" }, t("Save")));
    }
};
_a = EntryEditorControls;
__webpack_require__.$Refresh$.register(_a, "EntryEditorControls");
_b(EntryEditorControls, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, () => [react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EntryEditorControls);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app/components/Input.js":
/*!*************************************!*\
  !*** ./src/app/components/Input.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b;



/**
 * @typedef {object} Props
 * @property {"text" | "password"} [type="text"] - Input type.
 * @property {boolean} [disabled=false] - Whether the input is disabled.
 * @property {string} [className] - Additional classes to pass onto button.
 * @property {...any} [props] - Rest of the props.
 */
/**
 * Simple input.
 *
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<Props> & React.RefAttributes<unknown>>}
 */
const Input = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(_a = (_c, ref) => {
    var { intent = "", type = "text", disabled = false, className } = _c, props = __rest(_c, ["intent", "type", "disabled", "className"]);
    const changeColor = () => {
        switch (intent) {
            case "info":
                return ["border-b-cyan-300",
                    "hover:border-cyan-500"];
            case "warning":
                return ["border-b-orange-300",
                    "hover:border-orange-500"];
            case "danger":
                return ["border-b-red-300",
                    "hover:border-red-500"];
            case "success":
                return ["border-b-green-300",
                    "hover:border-green-500"];
            default:
                return ["border-b-gray-300",
                    "hover:border-gray-500"];
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", Object.assign({ intent: intent, ref: ref, type: type, disabled: disabled, className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("px-[1rem]", "py-[0.5rem]", "outline-none", "border-b", "rounded-[4px]", "ring-offset-0", "ring-gray-200", "hover:", "focus:outline-none", "focus:none", "disabled:border-opacity-60", "disabled:bg-gray-100", "disabled:bg-opacity-60", "disabled:placeholder-opacity-60", "disabled:text-gray-400", "disabled:text-opacity-60", "disabled:cursor-not-allowed", className, changeColor()) }, props)));
});
__webpack_require__.$Refresh$.register(_a, "Input$React.forwardRef");
_b = Input;
__webpack_require__.$Refresh$.register(_b, "Input");
Input.propTypes = {
    type: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["text", "password"]),
    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    intent: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["warning", "info", "success", "danger"])
};
Input.displayName = "Input";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app/components/Modal.js":
/*!*************************************!*\
  !*** ./src/app/components/Modal.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalContext": () => (/* binding */ ModalContext),
/* harmony export */   "ModalContextProvider": () => (/* binding */ ModalContextProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ConfirmModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmModal */ "./src/app/components/ConfirmModal.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _a, _b;
var _c;
_c = __webpack_require__.$Refresh$.signature();






let MODAL_CONTENT = null;
const ModalContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const ModalContextProvider = ({ children }) => {
    _c();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    let resolveRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
    const openModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((title, content) => {
        setTitle(title);
        MODAL_CONTENT = content;
        const promise = new Promise((resolve) => {
            resolveRef.current = resolve;
        });
        setIsOpen(true);
        return promise;
    }, []);
    const openConfirmModal = (title) => {
        return openModal(title, _ConfirmModal__WEBPACK_IMPORTED_MODULE_1__.CONFIRM_MODAL_ID);
    };
    const closeModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((arg) => {
        resolveRef.current(arg);
        setIsOpen(false);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalContext.Provider, { value: { closeModal, openModal, openConfirmModal } },
        children,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Modal, { isOpen: isOpen, title: title, closeModal: closeModal })));
};
_a = ModalContextProvider;
__webpack_require__.$Refresh$.register(_a, "ModalContextProvider");
_c(ModalContextProvider, "Dp7BAXxM+URXo76KqdyOiF+HlXQ=");
const Modal = ({ isOpen, closeModal, title }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, { open: isOpen, onClose: closeModal, className: "fixed z-10 inset-0 overflow-y-auto" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex items-center justify-center min-h-screen" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Overlay, { className: "fixed inset-0 bg-black opacity-30" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "relative bg-white rounded-[8px] p-[8px] w-fit mx-auto" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex flex-col justify-between" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex flex-row justify-between items-center" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Title, { className: "mr-4 text-slate-800 py-4 px-4 font-medium" }, title),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 hover:cursor-pointer ml-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", onClick: closeModal },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, MODAL_CONTENT))))));
};
_b = Modal;
__webpack_require__.$Refresh$.register(_b, "Modal");
Modal.propTypes = {
    isOpen: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.bool,
    openModal: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.func,
    closeModal: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.func,
    title: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.string,
    resolve: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.func,
    reject: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.func,
};
ModalContextProvider.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_3__.PropTypes.node,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app/components/Settings.js":
/*!****************************************!*\
  !*** ./src/app/components/Settings.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _hooks_useModalHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useModalHook */ "./src/app/hooks/useModalHook.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./src/app/components/Button.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _a;
var _b;
_b = __webpack_require__.$Refresh$.signature();





const Settings = () => {
    _b();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language); //language detector
    const refSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const onConfirmClick = () => {
        i18next__WEBPACK_IMPORTED_MODULE_1__["default"].changeLanguage(refSelect.current.value);
        closeModal();
    };
    const { closeModal } = (0,_hooks_useModalHook__WEBPACK_IMPORTED_MODULE_2__["default"])();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "settings pb-6 pt-5 rounded-lg min-w-[200px] text-base" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { value: language, onChange: (e) => {
                setLanguage(e.target.value);
            }, ref: refSelect, name: "language", className: "mb-12 w-full outline-none bg-gray-100 px-4" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "en" }, t("english")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "sr" }, t("serbian"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex justify-around" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], { onClick: onConfirmClick, intent: "success" }, t("confirm")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], { onClick: closeModal, intent: "danger" }, t("cancel")))));
};
_a = Settings;
__webpack_require__.$Refresh$.register(_a, "Settings");
_b(Settings, "IQex8620vU3p/APEH3IqHY/1a18=", false, () => [react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation, _hooks_useModalHook__WEBPACK_IMPORTED_MODULE_2__["default"]]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app/components/Table.js":
/*!*************************************!*\
  !*** ./src/app/components/Table.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TableHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableHeader */ "./src/app/components/TableHeader.js");
/* harmony import */ var _TableBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableBody */ "./src/app/components/TableBody.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _a;




const Table = ({ columns, items = [] }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sm:px-6 mt-6 " },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: " border-collapse w-full min-w-full divide-y divide-gray-200" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_1__["default"], { columns: columns }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TableBody__WEBPACK_IMPORTED_MODULE_2__["default"], { columns: columns, items: items }))));
};
_a = Table;
__webpack_require__.$Refresh$.register(_a, "Table");
Table.propTypes = {
    columns: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),
    items: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app/components/TableBody.js":
/*!*****************************************!*\
  !*** ./src/app/components/TableBody.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _a;


const TableBody = ({ items, columns }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", { className: "bg-white divide-y divide-gray-200" }, items.map((item) => {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: item.uuid }, columns.map((column) => {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: column.bodyClassName, key: column.label }, column.renderCell(item)));
        })));
    })));
};
_a = TableBody;
__webpack_require__.$Refresh$.register(_a, "TableBody");
TableBody.propTypes = {
    columns: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
    items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableBody);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app/components/TableHeader.js":
/*!*******************************************!*\
  !*** ./src/app/components/TableHeader.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _a;
var _b;
_b = __webpack_require__.$Refresh$.signature();



const TableHeader = ({ columns }) => {
    _b();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", { className: "bg-gray-100" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, columns.map((column) => {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { key: column.label, className: column.headerClassName }, t(column.label)));
        }))));
};
_a = TableHeader;
__webpack_require__.$Refresh$.register(_a, "TableHeader");
_b(TableHeader, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, () => [react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation]);
TableHeader.propTypes = {
    columns: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableHeader);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app/hooks/useFetch.js":
/*!***********************************!*\
  !*** ./src/app/hooks/useFetch.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_RESPONSE_DATA_JSON": () => (/* binding */ GET_RESPONSE_DATA_JSON),
/* harmony export */   "GET_RESPONSE_DATA_BLOB": () => (/* binding */ GET_RESPONSE_DATA_BLOB),
/* harmony export */   "GET_RESPONSE_DATA_TEXT": () => (/* binding */ GET_RESPONSE_DATA_TEXT),
/* harmony export */   "GET_RESPONSE_DATA_FORM_DATA": () => (/* binding */ GET_RESPONSE_DATA_FORM_DATA),
/* harmony export */   "useFetchGet": () => (/* binding */ useFetchGet),
/* harmony export */   "useFetchPost": () => (/* binding */ useFetchPost),
/* harmony export */   "useFetchPut": () => (/* binding */ useFetchPut),
/* harmony export */   "useFetchDelete": () => (/* binding */ useFetchDelete)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d;
var _e, _f, _g, _h, _j;
_e = __webpack_require__.$Refresh$.signature();
_f = __webpack_require__.$Refresh$.signature();
_g = __webpack_require__.$Refresh$.signature();
_h = __webpack_require__.$Refresh$.signature();
_j = __webpack_require__.$Refresh$.signature();

const GET_RESPONSE_DATA_JSON = (response) => __awaiter(void 0, void 0, void 0, function* () { return response.json(); });
_a = GET_RESPONSE_DATA_JSON;
__webpack_require__.$Refresh$.register(_a, "GET_RESPONSE_DATA_JSON");
const GET_RESPONSE_DATA_BLOB = (response) => __awaiter(void 0, void 0, void 0, function* () { return response.blob(); });
_b = GET_RESPONSE_DATA_BLOB;
__webpack_require__.$Refresh$.register(_b, "GET_RESPONSE_DATA_BLOB");
const GET_RESPONSE_DATA_TEXT = (response) => __awaiter(void 0, void 0, void 0, function* () { return response.text(); });
_c = GET_RESPONSE_DATA_TEXT;
__webpack_require__.$Refresh$.register(_c, "GET_RESPONSE_DATA_TEXT");
const GET_RESPONSE_DATA_FORM_DATA = (response) => __awaiter(void 0, void 0, void 0, function* () { return response.formData(); });
_d = GET_RESPONSE_DATA_FORM_DATA;
__webpack_require__.$Refresh$.register(_d, "GET_RESPONSE_DATA_FORM_DATA");
const useFetch = (url, init = null, getResponseData = undefined) => {
    _e();
    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [isFetching, setIsFetching] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const fetch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((query = "") => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setError(null);
            setResponse(null);
            setIsFetching(true);
            // start fetching
            const response = yield window.fetch(url + query, init);
            // console.log(response);
            // check if response is ok
            if (!response.ok) {
                throw new Error({
                    status: response.status,
                    message: response.statusText,
                });
            }
            setResponse(response);
            // if(getResponseData){
            // setData(await getResponseData(response))
            // }
            if (getResponseData) {
                const getData = yield getResponseData(response);
                setData(getData);
            }
        }
        catch (error) {
            // catches errors
            console.log(error);
            setError(error);
        }
        finally {
            setIsFetching(false);
        }
    }), [url, init, getResponseData]);
    return { response, data, error, isFetching, fetch };
};
_e(useFetch, "mB1Uielb7fv0ZjKVofHs/eT8tf0=");
const useFetchGet = (url, init, getResponseData) => {
    _f();
    const initObject = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const checkedInit = init && typeof init !== "function" ? init : {};
        return Object.assign(Object.assign({}, checkedInit), { method: "GET" });
    }, [init]);
    if (typeof init === "function") {
        getResponseData = init;
    }
    return useFetch(url, initObject, getResponseData);
};
_f(useFetchGet, "baRKWgGuTLksTHHgUVXCIvZ7NFU=", false, () => [useFetch]);
const useFetchPost = (url, init, getResponseData) => {
    _g();
    const initObject = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const checkedInit = init && typeof init !== "function" ? init : {};
        return Object.assign(Object.assign({}, checkedInit), { method: "POST" });
    }, [init]);
    if (typeof init === "function") {
        getResponseData = init;
    }
    return useFetch(url, initObject, getResponseData);
};
_g(useFetchPost, "baRKWgGuTLksTHHgUVXCIvZ7NFU=", false, () => [useFetch]);
const useFetchPut = (url, init, getResponseData) => {
    _h();
    const initObject = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const checkedInit = init && typeof init !== "function" ? init : {};
        return Object.assign(Object.assign({}, checkedInit), { method: "PUT" });
    }, [init]);
    if (typeof init === "function") {
        getResponseData = init;
    }
    return useFetch(url, initObject, getResponseData);
};
_h(useFetchPut, "baRKWgGuTLksTHHgUVXCIvZ7NFU=", false, () => [useFetch]);
const useFetchDelete = (url, init, getResponseData) => {
    _j();
    const initObject = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const checkedInit = init && typeof init !== "function" ? init : {};
        return Object.assign(Object.assign({}, checkedInit), { method: "DELETE" });
    }, [init]);
    if (typeof init === "function") {
        getResponseData = init;
    }
    return useFetch(url, initObject, getResponseData);
};
_j(useFetchDelete, "baRKWgGuTLksTHHgUVXCIvZ7NFU=", false, () => [useFetch]);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app/hooks/useModalHook.js":
/*!***************************************!*\
  !*** ./src/app/hooks/useModalHook.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Modal */ "./src/app/components/Modal.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _a;
_a = __webpack_require__.$Refresh$.signature();


const useModalHook = () => {
    _a();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_Modal__WEBPACK_IMPORTED_MODULE_0__.ModalContext);
};
_a(useModalHook, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useModalHook);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/app/App.js");
/* harmony import */ var _app_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/components/Modal */ "./src/app/components/Modal.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_components_Modal__WEBPACK_IMPORTED_MODULE_3__.ModalContextProvider, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null))), document.getElementById("app-root"));


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/server/routes/Routes.js":
/*!*************************************!*\
  !*** ./src/server/routes/Routes.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

"use strict";
const INDEX_ROUTE = "/";
const API_ROUTE = `${INDEX_ROUTE}api`;
const API_GET_ENTRIES_ROUTE = `${API_ROUTE}/entries`;
const API_GET_ENTRY_ROUTE = `${API_GET_ENTRIES_ROUTE}/:uuid`;
const API_POST_ENTRY_ROUTE = `${API_ROUTE}/entries`;
const API_POST_V2_ENTRY_ROUTE = `${API_ROUTE}/v2/entries`;
const API_PUT_ENTRY_ROUTE = `${API_ROUTE}/entries/:uuid`;
const API_PUT_V2_ENTRY_ROUTE = `${API_ROUTE}/v2/entries/:uuid`;
const API_DELETE_ENTRY_ROUTE = `${API_ROUTE}/entries/:uuid`;
const API_GET_ANIMALS_ROUTE = `${API_ROUTE}/animals`;
const API = {
    INDEX_ROUTE: INDEX_ROUTE,
    API_ROUTE: API_ROUTE,
    API_GET_ENTRIES_ROUTE: API_GET_ENTRIES_ROUTE,
    API_GET_ENTRY_ROUTE: API_GET_ENTRY_ROUTE,
    API_POST_ENTRY_ROUTE: API_POST_ENTRY_ROUTE,
    API_POST_V2_ENTRY_ROUTE: API_POST_V2_ENTRY_ROUTE,
    API_PUT_ENTRY_ROUTE: API_PUT_ENTRY_ROUTE,
    API_PUT_V2_ENTRY_ROUTE: API_PUT_V2_ENTRY_ROUTE,
    API_DELETE_ENTRY_ROUTE: API_DELETE_ENTRY_ROUTE,
    API_GET_ANIMALS_ROUTE: API_GET_ANIMALS_ROUTE,
};
module.exports = API;


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./resources/images/DefaultAvatar.jpg":
/*!********************************************!*\
  !*** ./resources/images/DefaultAvatar.jpg ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAEsAAAAAQAAASwAAAAB/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAQAAAgAEAP/hDIFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMC4xMCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp0aWZmPSdodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyc+CiAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICA8dGlmZjpYUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpYUmVzb2x1dGlvbj4KICA8dGlmZjpZUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpZUmVzb2x1dGlvbj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPgogIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnN0b2NrOmI4Y2Y3MjAzLTk2MzAtNGM4NS05NzUxLWYwZTBhZjM3ZjA0YzwveG1wTU06RG9jdW1lbnRJRD4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjFkZGEyNDc2LTBkZTEtNDdkZS04Yjc0LTA1ODkwOTFlOWY4MzwveG1wTU06SW5zdGFuY2VJRD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgBaAFoAwERAAIRAQMRAf/EABwAAQABBQEBAAAAAAAAAAAAAAAEAgMFBgcBCP/EAEgQAAICAQICBQkDCQUGBwAAAAABAgMEBRESIQYxQVFhBxMiMnGBkaGxFELBCBUjUmJygtHh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";

/***/ }),

/***/ "./src/app/translations/en.json":
/*!**************************************!*\
  !*** ./src/app/translations/en.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"settings":"Settings","confirm":"Confirm","cancel":"Cancel","english":"English","serbian":"Serbian","delete":"Delete","Are you sure you want to delete":"Are you sure you want to delete ?","yes":"Yes","no":"No","avatar":"Avatar","firstName":"First Name","lastName":"Last Name","country":"Country","city":"City","street":"Street","postalCode":"Postal Code","birthDate":"Birth Date","email":"Email","mobile":"Mobile","title":"Are you sure you want to delete ?","Add new Entry":"Add new Entry","Edit":"Edit","Save":"Save","Search":"Search","Add":"Add","This field can\'t be empty":"This field can\'t be empty"}');

/***/ }),

/***/ "./src/app/translations/sr.json":
/*!**************************************!*\
  !*** ./src/app/translations/sr.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"settings":"Podešavanja","confirm":"Potvrdi","cancel":"Otkaži","english":"engleski","serbian":"srpski","delete":"Obriši","Are you sure you want to delete":"Da li ste sigurni da zelite obrisati ?","yes":"Da","no":"Ne","avatar":"Slika","firstName":"Ime","lastName":"Prezime","country":"Država","city":"Grad","street":"Ulica","postalCode":"Poštanski broj","birthDate":"Datum rođenja","email":"Email","mobile":"Mobilni prikaz","title":"Da li ste sigurni da želite obrisati ?","Add new Entry":"Nov unos","Edit":"Izmeni","Save":"Sačuvaj","Search":"Pretraži","Add":"Dodaj","This field can\'t be empty":"Ovo polje ne sme biti prazno"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js"), __webpack_exec__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js"), __webpack_exec__("./src/app/index.js"), __webpack_exec__("./node_modules/webpack-hot-middleware/client.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.js.map