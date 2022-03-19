var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix2 = __toModule(require_remix());

// app/cookies.server.ts
init_react();
var import_remix = __toModule(require_remix());
var authCookie = (0, import_remix.createCookie)("auth", {
  expires: new Date(Date.now() + 6e4 * 60 * 24 * 365),
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 365,
  path: "/",
  sameSite: "strict",
  secrets: [process.env.APP_SECRET],
  secure: false
});
var userCookie = (0, import_remix.createCookie)("user", {
  expires: new Date(Date.now() + 6e4 * 60 * 24 * 365),
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 365,
  path: "/",
  sameSite: "strict",
  secrets: [process.env.APP_SECRET],
  secure: false
});

// app/entry.server.tsx
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix2.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  const cookieHeader = request.headers.get("Cookie");
  const isAuthorized = await authCookie.parse(cookieHeader) || false;
  const url = new URL(request.url);
  if (!isAuthorized && url.pathname !== "/auth") {
    responseStatusCode = 302;
    responseHeaders.set("Location", url.pathname.length > 1 ? "/auth?redirect=" + encodeURIComponent(url.pathname) : "/auth");
  } else if (isAuthorized && url.pathname === "/auth") {
    const redirectPath = url.searchParams.get("redirect") || "/";
    responseStatusCode = 302;
    responseHeaders.set("Location", redirectPath);
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  Root: () => Root,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/db.server.ts
init_react();
var import_client = __toModule(require("@prisma/client"));
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}
var db_server_default = db;

// app/styles/app.css
var app_default = "/build/_assets/app-Y7I5U5N5.css";

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/root.tsx
var meta = () => {
  return { title: "Partybilder" };
};
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var loader = async ({ request }) => {
  const cookieHeader = request.headers.get("Cookie");
  const username = await userCookie.parse(cookieHeader) || void 0;
  const bookmarks = username && typeof username === "string" ? await db_server_default.bookmark.findMany({
    where: {
      user: { name: username }
    }
  }) : [];
  return {
    envs: {
      MINIO_BASE_URL: process.env.MINIO_BASE_URL || "",
      APP_BASE_URL: process.env.APP_BASE_URL || ""
    },
    username,
    bookmarks
  };
};
function App() {
  const { envs } = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "de",
    className: "h-full scroll-smooth"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/favicon.png",
    sizes: "200x200"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:image",
    content: envs.APP_BASE_URL + "/logo.png"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:image:type",
    content: "image/png"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:image:width",
    content: "524"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:image:height",
    content: "183"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "h-full"
  }, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `window.ENV = ${JSON.stringify(envs)}`
    }
  }), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}
function Root() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "de"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null)));
}
var ErrorBoundary = ({ error }) => {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "de"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    className: "p-4 sm:p-6"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-semibold text-gray-900"
  }, "Sorry, da ist irgendwas schief gelaufen \u{1F648}"), /* @__PURE__ */ React.createElement("p", {
    className: "text-md font-medium text-gray-500"
  }, error.message)), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null)));
};

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/bookmarks/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action
});
init_react();
var import_remix4 = __toModule(require_remix());
var action = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const imageId = formData.get("imageId");
  if (!username || !imageId || typeof username !== "string" || typeof imageId !== "string") {
    return (0, import_remix4.json)({ error: "Missing username or imageId" });
  }
  const bookmark = {
    user: { connect: { name: username } },
    image: { connect: { id: imageId } }
  };
  try {
    await db_server_default.bookmark.create({
      data: bookmark,
      select: {
        id: true,
        imageId: true
      }
    });
    return (0, import_remix4.json)({ ok: true });
  } catch (error) {
    if (error instanceof Error) {
      return (0, import_remix4.json)({ error: error.message });
    }
    return (0, import_remix4.json)({ error: "Unknown error" });
  }
};

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/bookmarks/delete.tsx
var delete_exports = {};
__export(delete_exports, {
  action: () => action2
});
init_react();
var import_remix5 = __toModule(require_remix());
var action2 = async ({ request }) => {
  const formData = await request.formData();
  const bookmarkId = formData.get("bookmarkId");
  if (!bookmarkId || typeof bookmarkId !== "string") {
    return (0, import_remix5.json)({ error: "Missing bookmarkId" });
  }
  try {
    await db_server_default.bookmark.delete({
      where: {
        id: bookmarkId
      },
      select: {
        id: true,
        imageId: true
      }
    });
    return (0, import_remix5.json)({ ok: true });
  } catch (error) {
    if (error instanceof Error) {
      return (0, import_remix5.json)({ error: error.message });
    }
    return (0, import_remix5.json)({ error: "Unknown error" });
  }
};

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/parties/$partyId.tsx
var partyId_exports = {};
__export(partyId_exports, {
  default: () => partyId_default,
  loader: () => loader2,
  meta: () => meta2
});
init_react();
var import_remix9 = __toModule(require_remix());

// app/components/ImageList.tsx
init_react();
var import_react7 = __toModule(require("react"));

// app/utils/class-names.ts
init_react();
var classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// app/components/Gallery.tsx
init_react();
var import_react2 = __toModule(require("@headlessui/react"));
var import_react3 = __toModule(require("react"));

// app/utils/envs.ts
init_react();
var getEnv = (key) => (typeof document === "undefined" ? process.env[key] : window.ENV[key]) || "";

// app/components/ImageActions.tsx
init_react();
var import_outline = __toModule(require("@heroicons/react/outline"));
var import_solid = __toModule(require("@heroicons/react/solid"));
var import_react = __toModule(require("react"));
var import_react_copy_to_clipboard = __toModule(require("react-copy-to-clipboard"));
var import_remix6 = __toModule(require_remix());
var ImageActions = ({
  image,
  toParty,
  toImage,
  isRandom,
  onWhite,
  allowCancelingDeleteBookmark,
  onShowLogin
}) => {
  var _a, _b, _c;
  const { bookmarks, username } = (0, import_remix6.useMatches)()[0].data;
  const bookmarker = (0, import_remix6.useFetcher)();
  const [copiedId, setCopiedId] = (0, import_react.useState)();
  const [toDeletedBookmarkId, setToDeletedBookmarkId] = (0, import_react.useState)();
  (0, import_react.useEffect)(() => {
    if (copiedId) {
      const timeout = setTimeout(() => setCopiedId(void 0), 1e3);
      return () => clearTimeout(timeout);
    }
  }, [copiedId]);
  const handleCreateBookmarkClick = (imageId) => {
    if (!username) {
      onShowLogin();
    } else {
      bookmarker.submit({ username, imageId }, {
        method: "post",
        action: `/bookmarks/create`
      });
    }
  };
  const deleteBookmark = (bookmarkId2) => {
    bookmarker.submit({ bookmarkId: bookmarkId2 }, {
      method: "delete",
      action: `/bookmarks/delete`
    });
  };
  (0, import_react.useEffect)(() => {
    if (toDeletedBookmarkId) {
      const timeout = setTimeout(() => {
        deleteBookmark(toDeletedBookmarkId);
      }, 4e3);
      return () => clearTimeout(timeout);
    }
  }, [toDeletedBookmarkId]);
  const handleDeleteBookmarkClick = async (bookmarkId2) => {
    if (allowCancelingDeleteBookmark) {
      setToDeletedBookmarkId(bookmarkId2);
    } else {
      deleteBookmark(bookmarkId2);
    }
  };
  const bookmarkId = (_a = bookmarks.find((bookmark) => bookmark.imageId === image.id)) == null ? void 0 : _a.id;
  const isBookmarked = (!!bookmarkId || ((_b = bookmarker.submission) == null ? void 0 : _b.method) === "POST") && ((_c = bookmarker.submission) == null ? void 0 : _c.method) !== "DELETE";
  const actionPending = bookmarker.state !== "idle";
  const buttonClassName = classNames("relative pointer-events-auto cursor-pointer truncate flex items-center justify-center backdrop-blur-sm backdrop-filter text-gray-900 rounded-md py-2 text-center overflow-hidden", onWhite ? "bg-gray-100 hover:bg-gray-200" : "bg-white bg-opacity-50 hover:bg-opacity-100");
  return /* @__PURE__ */ React.createElement("div", {
    className: "xs:space-x-2 flex space-x-1 text-sm font-semibold"
  }, !!toDeletedBookmarkId ? /* @__PURE__ */ React.createElement("button", {
    onClick: () => setToDeletedBookmarkId(void 0),
    className: classNames(buttonClassName, "xxs:px-4 w-full px-3")
  }, /* @__PURE__ */ React.createElement("span", {
    className: "cancel-bar absolute bottom-0 left-0 h-1 w-full bg-sky-500"
  }), /* @__PURE__ */ React.createElement(import_outline.HeartIcon, {
    className: "mr-1.5 h-4 w-4 shrink-0 grow-0"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "truncate"
  }, "R\xFCckg\xE4ngig")) : !!copiedId ? /* @__PURE__ */ React.createElement("div", {
    className: classNames(buttonClassName, "xxs:px-4 w-full px-3")
  }, /* @__PURE__ */ React.createElement("span", {
    className: "truncate"
  }, "Link kopiert"), /* @__PURE__ */ React.createElement(import_solid.CheckCircleIcon, {
    className: "ml-1 h-4 w-4 shrink-0 grow-0 text-emerald-500"
  })) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => !!bookmarkId ? handleDeleteBookmarkClick(bookmarkId) : handleCreateBookmarkClick(image.id),
    disabled: actionPending,
    className: classNames(buttonClassName, "grow-0 shrink-0 px-2.5")
  }, isBookmarked ? /* @__PURE__ */ React.createElement(import_solid.HeartIcon, {
    className: "shrink-0 h-5 w-5 text-red-500"
  }) : /* @__PURE__ */ React.createElement(import_outline.HeartIcon, {
    className: "shrink-0 h-5 w-5"
  })), toParty ? /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: `/parties/${image.partyId}`,
    target: isRandom ? "_blank" : void 0,
    className: classNames(buttonClassName, "xxs:px-4 w-full px-3")
  }, "Zur Party") : toImage ? /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: `/image/${image.id}`,
    target: isRandom ? "_blank" : void 0,
    className: classNames(buttonClassName, "xxs:px-4 w-full px-3")
  }, "Zum Bild") : /* @__PURE__ */ React.createElement(import_react_copy_to_clipboard.default, {
    text: `${getEnv("APP_BASE_URL")}/image/${image.id}`,
    onCopy: () => setCopiedId(image.id)
  }, /* @__PURE__ */ React.createElement("div", {
    className: classNames(buttonClassName, "xxs:px-4 w-full px-3")
  }, "Bild teilen"))));
};
var ImageActions_default = ImageActions;

// app/components/Gallery.tsx
function Gallery({
  images,
  index,
  open,
  onClose,
  toParty,
  toImage,
  isRandom,
  allowCancelingDeleteBookmark,
  onShowLogin
}) {
  const [currentIndex, setCurrentIndex] = (0, import_react3.useState)(0);
  const [showImageNumber, setShowImageNumber] = (0, import_react3.useState)(true);
  const [changeOffset, setChangeOffset] = (0, import_react3.useState)(0);
  (0, import_react3.useEffect)(() => {
    if (index !== void 0 && open) {
      setChangeOffset(0);
      setCurrentIndex(index);
    }
  }, [index, open]);
  const handleUserKeyPress = (event) => {
    const { keyCode } = event;
    if (keyCode === 37)
      handlePrevious();
    if (keyCode === 39)
      handleNext();
  };
  (0, import_react3.useEffect)(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
  const handlePrevious = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
    setChangeOffset((old) => old - 1);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
    setChangeOffset((old) => old + 1);
  };
  (0, import_react3.useEffect)(() => {
    if (open) {
      setShowImageNumber(true);
      const timeout = setTimeout(() => {
        setShowImageNumber(false);
      }, 1e3);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, open]);
  const currentImage = images[currentIndex];
  return /* @__PURE__ */ React.createElement(import_react2.Transition.Root, {
    show: open,
    as: import_react3.Fragment
  }, /* @__PURE__ */ React.createElement(import_react2.Dialog, {
    as: "div",
    className: "fixed inset-0 z-10 overflow-y-auto",
    onClose: () => onClose(Math.abs(changeOffset) > 4 ? currentImage == null ? void 0 : currentImage.id : void 0)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xs:px-4 block min-h-screen items-end justify-center px-1 text-center"
  }, /* @__PURE__ */ React.createElement(import_react2.Transition.Child, {
    as: import_react3.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /* @__PURE__ */ React.createElement(import_react2.Dialog.Overlay, {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "inline-block h-screen align-middle",
    "aria-hidden": "true"
  }, "\u200B"), /* @__PURE__ */ React.createElement(import_react2.Transition.Child, {
    as: import_react3.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95"
  }, !!currentImage && /* @__PURE__ */ React.createElement("div", {
    className: "relative mt-4 mb-16 inline-block max-w-4xl transform rounded-lg bg-white p-0.5 text-left align-middle shadow-xl transition-all"
  }, /* @__PURE__ */ React.createElement("div", {
    className: classNames("absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-white px-2 pt-0.5 pb-1 transition-opacity duration-300", !showImageNumber && "opacity-0")
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-xs font-semibold text-gray-600"
  }, currentIndex + 1, " / ", images.length)), /* @__PURE__ */ React.createElement("img", {
    src: getEnv("MINIO_BASE_URL") + currentImage.filePath,
    alt: `Bild ${currentIndex + 1}`,
    className: "block w-full rounded-md object-cover"
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: handlePrevious,
    className: "absolute inset-y-0 left-0 right-2/3 cursor-w-resize focus:outline-none select-none"
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: handleNext,
    className: "absolute inset-y-0 left-2/3 right-0 cursor-e-resize focus:outline-none select-none"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "xs:pt-2 absolute top-full flex w-full items-center justify-center pt-1 pointer-events-none"
  }, /* @__PURE__ */ React.createElement(ImageActions_default, __spreadValues({
    image: currentImage
  }, {
    toParty,
    toImage,
    isRandom,
    allowCancelingDeleteBookmark,
    onShowLogin
  }))))))));
}

// app/components/ImageListItem.tsx
init_react();
var import_react4 = __toModule(require("react"));
var ImageListItem = ({
  image,
  toParty,
  toImage,
  isRandom,
  allowCancelingDeleteBookmark,
  onClick,
  onShowLogin,
  highlighted
}) => {
  const imageRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    var _a;
    if (highlighted) {
      (_a = imageRef.current) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, [highlighted]);
  return /* @__PURE__ */ React.createElement("li", {
    ref: imageRef,
    className: classNames("xs:scroll-mt-3 relative scroll-mt-2 transition-all lg:scroll-mt-4 select-none", highlighted && "animate-tada z-10")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-black focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
  }, /* @__PURE__ */ React.createElement("img", {
    src: getEnv("MINIO_BASE_URL") + image.filePath,
    alt: "",
    className: classNames("pointer-events-none object-cover", "is-hover:group-hover:blur-sm")
  }), /* @__PURE__ */ React.createElement("img", {
    src: getEnv("MINIO_BASE_URL") + image.filePath,
    alt: image.id,
    className: "is-hover:group-hover:block pointer-events-none hidden object-contain"
  }), /* @__PURE__ */ React.createElement("button", {
    onClick,
    className: "absolute inset-0 focus:outline-none"
  }), /* @__PURE__ */ React.createElement("div", {
    className: classNames("xs:p-2 pointer-events-none flex flex-col items-stretch justify-end p-1 sm:p-4", "is-hover:translate-y-2 is-hover:opacity-0 is-hover:duration-300 is-hover:group-hover:translate-y-0 is-hover:group-hover:opacity-100")
  }, /* @__PURE__ */ React.createElement(ImageActions_default, __spreadValues({}, {
    image,
    toParty,
    toImage,
    isRandom,
    allowCancelingDeleteBookmark,
    onShowLogin
  })))));
};
var ImageListItem_default = ImageListItem;

// app/components/UserLogin.tsx
init_react();
var import_react5 = __toModule(require("@headlessui/react"));
var import_react6 = __toModule(require("react"));
var import_remix7 = __toModule(require_remix());
function UserLogin({ onClose, open }) {
  const login = (0, import_remix7.useFetcher)();
  const create = (0, import_remix7.useFetcher)();
  const [userNotFound, setUserNotFound] = (0, import_react6.useState)(false);
  const [hasNewAccount, setHasNewAccount] = (0, import_react6.useState)(false);
  const actionPending = login.state !== "idle" || create.state !== "idle";
  (0, import_react6.useEffect)(() => {
    var _a, _b, _c;
    if ((_a = login.data) == null ? void 0 : _a.error) {
      setUserNotFound(true);
    }
    if ((_b = login.data) == null ? void 0 : _b.ok) {
      onClose();
    }
    if ((_c = create.data) == null ? void 0 : _c.ok) {
      setHasNewAccount(true);
    }
  }, [login.data, create.data]);
  const handleCreate = () => {
    create.submit({}, { method: "post", action: "/user/create" });
  };
  return /* @__PURE__ */ React.createElement(import_react5.Transition.Root, {
    show: open,
    as: import_react6.Fragment
  }, /* @__PURE__ */ React.createElement(import_react5.Dialog, {
    as: "div",
    className: "fixed inset-0 z-10 overflow-y-auto",
    onClose
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
  }, /* @__PURE__ */ React.createElement(import_react5.Transition.Child, {
    as: import_react6.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /* @__PURE__ */ React.createElement(import_react5.Dialog.Overlay, {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "hidden sm:inline-block sm:h-screen sm:align-middle",
    "aria-hidden": "true"
  }, "\u200B"), /* @__PURE__ */ React.createElement(import_react5.Transition.Child, {
    as: import_react6.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inline-block w-full max-w-sm transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:p-6 sm:align-middle"
  }, hasNewAccount ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-center text-3xl font-extrabold text-gray-900"
  }, "Wichtig!"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-center text-sm text-gray-600"
  }, "Es wurde f\xFCr dich ein neuer Account mit dem Namen", " ", /* @__PURE__ */ React.createElement("span", {
    className: "rounded-md bg-gray-200 px-2 py-0.5 font-bold text-gray-900"
  }, create.data.username), " ", "erstellt."), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-center text-sm font-medium text-gray-700"
  }, "Merke oder schreibe dir den Namen auf, um dich zuk\xFCnftig damit anzumelden."), /* @__PURE__ */ React.createElement("button", {
    onClick: onClose,
    type: "button",
    className: "mt-6 flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
  }, "Hab ich verstanden")) : /* @__PURE__ */ React.createElement("div", {
    className: "space-y-8"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-center text-3xl font-extrabold text-gray-900"
  }, "Anmelden"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-center text-sm text-gray-600"
  }, "oder", " ", /* @__PURE__ */ React.createElement("button", {
    onClick: handleCreate,
    className: "font-medium text-sky-600 hover:text-sky-500"
  }, "einen Account erstellen"), /* @__PURE__ */ React.createElement("br", null), "falls du noch keinen Account hast.")), /* @__PURE__ */ React.createElement(login.Form, {
    className: "mt-8",
    method: "post",
    action: "/user/login"
  }, /* @__PURE__ */ React.createElement("fieldset", {
    className: "space-y-3",
    disabled: actionPending
  }, userNotFound && /* @__PURE__ */ React.createElement("div", {
    className: "text-sm font-semibold text-red-500"
  }, "Der Nutzername wurde nicht gefunden. Falls du noch keinen Account hast, kannst du \xFCber den Link oben einen Neuen erstellen."), /* @__PURE__ */ React.createElement("div", {
    className: "-space-y-px rounded-md shadow-sm"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username",
    className: "block text-sm font-medium text-gray-700"
  }, "Dein Nutzername"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "username",
    name: "username",
    type: "text",
    required: true,
    className: "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
  })))), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
  }, actionPending ? "\u2026" : "Anmelden"), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-px grow bg-gray-400"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "mx-2 shrink-0 text-xs uppercase tracking-wider"
  }, "oder"), /* @__PURE__ */ React.createElement("div", {
    className: "h-px grow bg-gray-400"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: handleCreate,
    className: "flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
  }, actionPending ? "\u2026" : "Neuen Account erstellen")))))))));
}

// app/components/ImageList.tsx
var ImageList = (0, import_react7.forwardRef)(({ images, toParty, toImage, isRandom, allowCancelingDeleteBookmark }, ref) => {
  const [openGallery, setOpenGallery] = (0, import_react7.useState)(false);
  const [openLogin, setOpenLogin] = (0, import_react7.useState)(false);
  const [initialGalleryIndex, setInitialGalleryIndex] = (0, import_react7.useState)(0);
  const [highlightedImageId, setHighlightedImageId] = (0, import_react7.useState)(void 0);
  (0, import_react7.useImperativeHandle)(ref, () => ({ setHighlightedImageId }));
  (0, import_react7.useEffect)(() => {
    if (highlightedImageId) {
      setTimeout(() => {
        setHighlightedImageId(void 0);
      }, 1250);
    }
  }, [highlightedImageId]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Gallery, __spreadValues({
    images,
    index: initialGalleryIndex,
    open: openGallery,
    onClose: (imageId) => {
      setOpenGallery(false);
      setHighlightedImageId(imageId);
    },
    onShowLogin: () => setOpenLogin(true)
  }, { toParty, toImage, isRandom, allowCancelingDeleteBookmark })), /* @__PURE__ */ React.createElement(UserLogin, {
    open: openLogin,
    onClose: () => setOpenLogin(false)
  }), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-4"
  }, /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: classNames("grid grid-cols-2 gap-3 gap-y-3", "xs:gap-4 xs:gap-y-5", "lg:grid-cols-3 lg:gap-x-6 lg:gap-y-7", "xl:grid-cols-4 xl:gap-x-8 xl:gap-y-9")
  }, images.map((image, index) => /* @__PURE__ */ React.createElement(ImageListItem_default, __spreadValues({
    key: image.id,
    image,
    onClick: () => {
      setInitialGalleryIndex(index);
      setOpenGallery(true);
    },
    highlighted: image.id === highlightedImageId,
    onShowLogin: () => setOpenLogin(true)
  }, { toParty, toImage, isRandom, allowCancelingDeleteBookmark })))))));
});
var ImageList_default = ImageList;

// app/components/Page.tsx
init_react();
var import_react8 = __toModule(require("@headlessui/react"));
var import_outline2 = __toModule(require("@heroicons/react/outline"));
var import_solid2 = __toModule(require("@heroicons/react/solid"));
var import_debounce = __toModule(require("debounce"));
var import_react9 = __toModule(require("react"));
var import_remix8 = __toModule(require_remix());
var navigation = [
  { name: "Home", href: "/", icon: import_outline2.HomeIcon },
  { name: "Parties", href: "/parties", icon: import_outline2.UsersIcon },
  { name: "St\xE4dte", href: "/cities", icon: import_outline2.LocationMarkerIcon },
  { name: "Gemerkt", href: "/bookmarks", icon: import_outline2.HeartIcon }
];
var Page = ({ children, noSearch }) => {
  const { bookmarks } = (0, import_remix8.useMatches)()[0].data;
  const submit = (0, import_remix8.useSubmit)();
  const [searchParams] = (0, import_remix8.useSearchParams)();
  const search = searchParams.get("search") || void 0;
  const [sidebarOpen, setSidebarOpen] = (0, import_react9.useState)(false);
  const debouncedSubmit = (0, import_react9.useCallback)((0, import_debounce.default)((currentTarget) => {
    submit(currentTarget);
  }, 250), []);
  return /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement(import_react8.Transition.Root, {
    show: sidebarOpen,
    as: import_react9.Fragment
  }, /* @__PURE__ */ import_react9.default.createElement(import_react8.Dialog, {
    as: "div",
    className: "fixed inset-0 z-40 flex md:hidden",
    onClose: setSidebarOpen
  }, /* @__PURE__ */ import_react9.default.createElement(import_react8.Transition.Child, {
    as: import_react9.Fragment,
    enter: "transition-opacity ease-linear duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "transition-opacity ease-linear duration-300",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /* @__PURE__ */ import_react9.default.createElement(import_react8.Dialog.Overlay, {
    className: "fixed inset-0 bg-gray-600 bg-opacity-75"
  })), /* @__PURE__ */ import_react9.default.createElement(import_react8.Transition.Child, {
    as: import_react9.Fragment,
    enter: "transition ease-in-out duration-300 transform",
    enterFrom: "-translate-x-full",
    enterTo: "translate-x-0",
    leave: "transition ease-in-out duration-300 transform",
    leaveFrom: "translate-x-0",
    leaveTo: "-translate-x-full"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4"
  }, /* @__PURE__ */ import_react9.default.createElement(import_react8.Transition.Child, {
    as: import_react9.Fragment,
    enter: "ease-in-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in-out duration-300",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "absolute top-0 right-0 -mr-12 pt-2"
  }, /* @__PURE__ */ import_react9.default.createElement("button", {
    type: "button",
    className: "ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
    onClick: () => setSidebarOpen(false)
  }, /* @__PURE__ */ import_react9.default.createElement(import_outline2.XIcon, {
    className: "h-6 w-6 text-white",
    "aria-hidden": "true"
  })))), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex flex-shrink-0 items-center px-4"
  }, /* @__PURE__ */ import_react9.default.createElement("img", {
    className: "h-12 w-auto",
    src: "/logo.png",
    alt: "Partybilder"
  })), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "mt-5 h-0 flex-1 overflow-y-auto"
  }, /* @__PURE__ */ import_react9.default.createElement("nav", {
    className: "space-y-1 px-2"
  }, navigation.map((item) => /* @__PURE__ */ import_react9.default.createElement(import_remix8.NavLink, {
    key: item.name,
    to: item.href,
    prefetch: "intent",
    className: ({ isActive }) => classNames(isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900", "group flex items-center justify-between rounded-md py-2 px-2 text-base font-medium")
  }, ({ isActive }) => /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement("span", {
    className: "flex items-center"
  }, /* @__PURE__ */ import_react9.default.createElement(item.icon, {
    className: classNames(isActive ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500", "mr-4 h-6 w-6 flex-shrink-0"),
    "aria-hidden": "true"
  }), item.name), item.href === "/bookmarks" && bookmarks.length > 0 && /* @__PURE__ */ import_react9.default.createElement("span", {
    className: classNames("ml-2 rounded-full py-0.5 px-2 text-xs text-gray-800", isActive ? "bg-gray-300" : "bg-gray-200 group-hover:bg-gray-300")
  }, bookmarks.length > 100 ? "99+" : bookmarks.length)))))))), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "w-14 flex-shrink-0"
  }))), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "text-500 hidden md:fixed md:inset-y-0 md:flex md:w-56 md:flex-col"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex flex-shrink-0 items-center px-4"
  }, /* @__PURE__ */ import_react9.default.createElement("img", {
    className: "h-12 w-auto",
    src: "/logo.png",
    alt: "Partybilder"
  })), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "mt-5 flex flex-grow flex-col"
  }, /* @__PURE__ */ import_react9.default.createElement("nav", {
    className: "flex-1 space-y-1 px-2 pb-4"
  }, navigation.map((item) => /* @__PURE__ */ import_react9.default.createElement(import_remix8.NavLink, {
    key: item.name,
    to: item.href,
    prefetch: "intent",
    className: ({ isActive }) => classNames(isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900", "group flex items-center justify-between rounded-md py-2 px-2 text-sm font-medium")
  }, ({ isActive }) => /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement("span", {
    className: "flex items-center"
  }, /* @__PURE__ */ import_react9.default.createElement(item.icon, {
    className: classNames(isActive ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500", "mr-3 h-6 w-6 flex-shrink-0"),
    "aria-hidden": "true"
  }), item.name), item.href === "/bookmarks" && bookmarks.length > 0 && /* @__PURE__ */ import_react9.default.createElement("span", {
    className: classNames("ml-2 rounded-full py-0.5 px-2 text-xs text-gray-800", isActive ? "bg-gray-300" : "bg-gray-200 group-hover:bg-gray-300")
  }, bookmarks.length > 100 ? "99+" : bookmarks.length)))))))), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "md:pl-56"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "mx-auto flex max-w-7xl flex-col md:px-8"
  }, noSearch ? /* @__PURE__ */ import_react9.default.createElement("button", {
    type: "button",
    className: "sticky top-3 left-2 z-10 mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 md:hidden",
    onClick: () => setSidebarOpen(true)
  }, /* @__PURE__ */ import_react9.default.createElement(import_outline2.MenuAlt2Icon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })) : /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "sticky top-3 z-10 mx-2 mb-2 flex h-12 flex-shrink-0 rounded-full shadow-sm md:relative md:top-0 md:left-0 md:mb-0 md:h-16 md:rounded-none md:shadow-none"
  }, /* @__PURE__ */ import_react9.default.createElement("button", {
    type: "button",
    className: "rounded-l-full border-r border-gray-200 bg-black pl-3 pr-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 md:hidden md:px-4",
    onClick: () => setSidebarOpen(true)
  }, /* @__PURE__ */ import_react9.default.createElement(import_outline2.MenuAlt2Icon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex flex-1 justify-between rounded-r-full border-y border-r border-gray-300 bg-white px-4 md:rounded-none md:border-x-0 md:border-t-0 md:border-gray-200 md:px-0"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex w-full md:ml-0"
  }, /* @__PURE__ */ import_react9.default.createElement("label", {
    htmlFor: "search-field",
    className: "sr-only"
  }, "Suche"), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "relative w-full text-gray-400 focus-within:text-gray-600"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "pointer-events-none absolute inset-y-0 left-0 flex items-center"
  }, /* @__PURE__ */ import_react9.default.createElement(import_solid2.SearchIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  })), /* @__PURE__ */ import_react9.default.createElement("input", {
    id: "search-field",
    form: "search-and-pagination",
    onChange: (e) => !!e.currentTarget.form && debouncedSubmit(e.currentTarget.form),
    className: "block h-full w-full border-transparent bg-transparent py-2 pl-8 pr-0 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm",
    placeholder: "Suche",
    type: "search",
    name: "search",
    defaultValue: search
  }))))), /* @__PURE__ */ import_react9.default.createElement("main", {
    className: "flex-1"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "py-6"
  }, children)))));
};
var Page_default = Page;

// app/utils/intl.ts
init_react();
var formatDate = (date) => new Intl.DateTimeFormat("de", { dateStyle: "full" }).format(new Date(date));

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/parties/$partyId.tsx
var meta2 = ({ data }) => {
  return { title: `${(data == null ? void 0 : data.name) || "Party"} - Partybilder` };
};
var loader2 = async ({ params }) => {
  const { partyId } = params;
  const party = await db_server_default.party.findFirst({
    where: { id: partyId },
    include: {
      images: {
        orderBy: {
          rawDataId: "asc"
        }
      },
      city: {
        include: {
          country: true
        }
      },
      _count: {
        select: {
          images: true
        }
      }
    }
  });
  return party;
};
var Party = () => {
  const party = (0, import_remix9.useLoaderData)();
  if (!party)
    return /* @__PURE__ */ React.createElement(Page_default, {
      noSearch: true
    }, /* @__PURE__ */ React.createElement("div", {
      className: "px-4 sm:px-6 md:px-0"
    }, /* @__PURE__ */ React.createElement("h1", {
      className: "text-2xl font-semibold text-gray-900"
    }, "Party nicht gefunden")));
  return /* @__PURE__ */ React.createElement(Page_default, {
    noSearch: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-semibold text-gray-900"
  }, party.name, " in", " ", /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: `/cities/${party.city.id}`,
    className: "text-sky-700 underline-offset-2 hover:underline"
  }, party.city.name)), /* @__PURE__ */ React.createElement("p", {
    className: "text-md font-medium text-gray-500"
  }, formatDate(party.date))), /* @__PURE__ */ React.createElement(ImageList_default, {
    images: party.images
  }));
};
var partyId_default = Party;

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/bookmarks/index.tsx
var bookmarks_exports = {};
__export(bookmarks_exports, {
  default: () => Index,
  loader: () => loader3
});
init_react();
var import_solid3 = __toModule(require("@heroicons/react/solid"));
var import_react10 = __toModule(require("react"));
var import_react_copy_to_clipboard2 = __toModule(require("react-copy-to-clipboard"));
var import_remix10 = __toModule(require_remix());
var loader3 = async ({ request }) => {
  const cookieHeader = request.headers.get("Cookie");
  const username = await userCookie.parse(cookieHeader) || void 0;
  const user = !!username && await db_server_default.user.findUnique({
    where: { name: username },
    include: { bookmarks: { include: { image: true }, orderBy: { createdAt: "desc" } } }
  }) || void 0;
  return { user };
};
function Index() {
  const { user } = (0, import_remix10.useLoaderData)();
  const [openLogin, setOpenLogin] = (0, import_react10.useState)(false);
  const [isCopied, setIsCopied] = (0, import_react10.useState)(false);
  (0, import_react10.useEffect)(() => {
    if (isCopied) {
      const timeout = setTimeout(() => setIsCopied(false), 1e3);
      return () => clearTimeout(timeout);
    }
  }, [isCopied]);
  return /* @__PURE__ */ React.createElement(Page_default, {
    noSearch: true
  }, /* @__PURE__ */ React.createElement(UserLogin, {
    open: openLogin,
    onClose: () => setOpenLogin(false)
  }), !!user ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end justify-between space-x-2 px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-semibold text-gray-900"
  }, "Gemerkte Bilder"), /* @__PURE__ */ React.createElement("p", {
    className: "text-md font-medium text-gray-500"
  }, user.name)), /* @__PURE__ */ React.createElement(import_react_copy_to_clipboard2.default, {
    text: `${getEnv("APP_BASE_URL")}/user/${user.id}`,
    onCopy: () => setIsCopied(true)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xxs:px-4 pointer-events-auto relative flex cursor-pointer items-center justify-center overflow-hidden truncate rounded-md bg-gray-100 px-3 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur-sm backdrop-filter hover:bg-gray-200"
  }, isCopied ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    className: "truncate"
  }, "Link kopiert"), /* @__PURE__ */ React.createElement(import_solid3.CheckCircleIcon, {
    className: "ml-1 h-4 w-4 shrink-0 grow-0 text-emerald-500"
  })) : "Profil teilen"))), !!user.bookmarks.length ? /* @__PURE__ */ React.createElement(ImageList_default, {
    images: user.bookmarks.map((bookmark) => bookmark.image),
    toImage: true,
    allowCancelingDeleteBookmark: true
  }) : /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative mt-4 block w-full rounded-lg border-2 border-dashed border-gray-300 px-4 py-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, /* @__PURE__ */ React.createElement(import_solid3.HeartIcon, {
    className: "mx-auto h-12 w-12 text-gray-200"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "mt-4 block text-base font-medium text-gray-600"
  }, "Du hast dir noch keine Bilder gemerkt.")))) : /* @__PURE__ */ React.createElement("div", {
    className: "pt-16 text-center"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "mt-2 text-3xl font-extrabold text-gray-900"
  }, "Nicht angemeldet"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-sm text-gray-600"
  }, "Melde dich an um Bilder auf deiner Merkliste zu speichern."), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => setOpenLogin(true),
    className: "mx-auto mt-6 flex w-full max-w-xs justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
  }, "Anmelden")));
}

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/cities/$cityId.tsx
var cityId_exports = {};
__export(cityId_exports, {
  default: () => cityId_default,
  loader: () => loader4,
  meta: () => meta3
});
init_react();
var import_client2 = __toModule(require("@prisma/client"));
var import_remix12 = __toModule(require_remix());

// app/components/PartyList.tsx
init_react();
var import_solid5 = __toModule(require("@heroicons/react/solid"));
var import_remix11 = __toModule(require_remix());

// app/components/Pagination.tsx
init_react();
var import_solid4 = __toModule(require("@heroicons/react/solid"));
var import_react11 = __toModule(require("react"));
var Pagination = ({ currentPage, perPage: perPage4, total }) => {
  const numberOfPages = Math.ceil(total / perPage4);
  const pages = Array(numberOfPages).fill(0).map((_, i) => i + 1);
  const printablePages = pages.map((page) => ({
    page,
    viewable: page < 2 || Math.abs(page - currentPage) < 2 || Math.abs(page - numberOfPages) < 1 ? "always" : "never"
  }));
  return numberOfPages < 2 ? null : /* @__PURE__ */ import_react11.default.createElement("nav", {
    className: "my-4 flex items-center justify-between border-t border-gray-200"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "-mt-px flex w-0 flex-1"
  }, /* @__PURE__ */ import_react11.default.createElement("button", {
    form: "search-and-pagination",
    name: "page",
    value: currentPage > 1 ? currentPage - 1 : 1,
    type: "submit",
    className: classNames("inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700", currentPage === 1 && "pointer-events-none opacity-40"),
    disabled: currentPage === 1
  }, /* @__PURE__ */ import_react11.default.createElement(import_solid4.ArrowNarrowLeftIcon, {
    className: "mr-3 h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }), "Zur\xFCck")), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "inline border-t-2 border-transparent pt-4 text-sm text-gray-500 md:hidden"
  }, "Seite ", /* @__PURE__ */ import_react11.default.createElement("span", {
    className: "font-medium text-gray-700"
  }, currentPage), " von", " ", /* @__PURE__ */ import_react11.default.createElement("span", {
    className: "font-medium text-gray-700"
  }, numberOfPages)), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "hidden md:-mt-px md:flex"
  }, printablePages.map(({ page, viewable }, i) => {
    var _a;
    return viewable === "always" ? /* @__PURE__ */ import_react11.default.createElement("button", {
      key: page,
      form: "search-and-pagination",
      name: "page",
      value: page,
      type: "submit",
      className: classNames("inline-flex items-center border-t-2 px-3 pt-4 text-sm font-medium", page === currentPage ? "border-sky-500 text-sky-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")
    }, page) : ((_a = printablePages[i - 1]) == null ? void 0 : _a.viewable) !== "never" ? /* @__PURE__ */ import_react11.default.createElement("span", {
      key: page,
      className: "inline-flex items-center border-t-2 border-transparent px-3 pt-4 text-sm font-medium text-gray-500"
    }, "...") : /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, {
      key: page
    });
  })), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "-mt-px flex w-0 flex-1 justify-end"
  }, /* @__PURE__ */ import_react11.default.createElement("button", {
    form: "search-and-pagination",
    name: "page",
    value: currentPage < numberOfPages ? currentPage + 1 : numberOfPages,
    type: "submit",
    className: classNames("inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700", currentPage === numberOfPages && "pointer-events-none opacity-50"),
    disabled: currentPage === numberOfPages
  }, "Weiter", /* @__PURE__ */ import_react11.default.createElement(import_solid4.ArrowNarrowRightIcon, {
    className: "ml-3 h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }))));
};
var Pagination_default = Pagination;

// app/components/PartyList.tsx
{
}
var PartyList = ({
  page,
  parties,
  partyCount,
  perPage: perPage4
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-4"
  }, /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "grid grid-cols-2 gap-4 gap-y-5 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-7 lg:grid-cols-4 xl:gap-x-8 xl:gap-y-9"
  }, parties.map((party) => /* @__PURE__ */ React.createElement("li", {
    key: party.id,
    className: "relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
  }, party.images[0] && /* @__PURE__ */ React.createElement("img", {
    src: getEnv("MINIO_BASE_URL") + party.images[0].filePath,
    alt: "",
    className: "pointer-events-none object-cover group-hover:opacity-75"
  }), /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: `/parties/${party.id}`,
    className: "absolute inset-0 focus:outline-none"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "absolute right-2 bottom-2 flex gap-1 rounded-full bg-white px-2 py-1 text-xs font-medium text-gray-700 shadow-md"
  }, party._count.images, /* @__PURE__ */ React.createElement(import_solid5.PhotographIcon, {
    className: "h-4 w-4 text-gray-500"
  }))), /* @__PURE__ */ React.createElement("p", {
    className: "pointer-events-none mt-2 block text-sm font-medium text-gray-900"
  }, party.name, " in", " ", /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: `/cities/${party.city.id}`,
    className: "pointer-events-auto cursor-pointer text-sky-700 underline-offset-2 hover:underline"
  }, party.city.name)), /* @__PURE__ */ React.createElement("p", {
    className: "pointer-events-none block text-sm font-medium text-gray-500"
  }, formatDate(party.date)))))), /* @__PURE__ */ React.createElement(Pagination_default, {
    currentPage: page,
    perPage: perPage4,
    total: partyCount
  }));
};
var PartyList_default = PartyList;

// app/utils/year-filter.ts
init_react();
var getYearFilter = (year) => {
  if (!year)
    return void 0;
  const start = new Date(Date.UTC(year, 0, 1, 0, 0, 0, 0));
  const end = new Date(Date.UTC(year, 11, 31, 23, 59, 59, 999));
  return { lte: end, gte: start };
};

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/cities/$cityId.tsx
var meta3 = ({ data }) => {
  const { city } = data;
  return { title: `${(city == null ? void 0 : city.name) || "Stadt"} - Partybilder` };
};
var perPage = 12;
var loader4 = async ({ params, request }) => {
  const { cityId } = params;
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  const year = url.searchParams.get("year") || "";
  const yearFilter = getYearFilter(!!year ? parseInt(year, 10) : void 0);
  const pageParam = url.searchParams.get("page") || "1";
  const page = parseInt(pageParam, 10);
  const city = await db_server_default.city.findFirst({
    where: { id: cityId },
    include: {
      country: true
    }
  });
  const partyCount = await db_server_default.party.count({
    where: {
      cityId,
      OR: [
        { name: { contains: search, mode: import_client2.Prisma.QueryMode.insensitive } },
        { city: { name: { contains: search, mode: import_client2.Prisma.QueryMode.insensitive } } }
      ],
      date: yearFilter
    }
  });
  const parties = await db_server_default.party.findMany({
    where: {
      cityId,
      OR: [
        { name: { contains: search, mode: import_client2.Prisma.QueryMode.insensitive } },
        { city: { name: { contains: search, mode: import_client2.Prisma.QueryMode.insensitive } } }
      ],
      date: yearFilter
    },
    include: {
      city: { include: { country: true } },
      images: { orderBy: { rawDataId: "asc" }, take: 1 },
      _count: {
        select: {
          images: true
        }
      }
    },
    skip: perPage * (page - 1),
    take: perPage,
    orderBy: [{ date: "desc" }, { id: "desc" }]
  });
  const years = await db_server_default.$queryRaw(!!search ? import_client2.Prisma.sql`SELECT date_part('year', date) AS year from "Party" LEFT JOIN "City" ON "City".id = "Party"."cityId" WHERE "Party"."cityId" = ${cityId} AND ("Party".name ILIKE '%' || ${search} || '%' OR "City".name ILIKE '%' || ${search} || '%') GROUP BY year ORDER BY year DESC` : import_client2.Prisma.sql`SELECT date_part('year', date) AS year from "Party" WHERE "Party"."cityId" = ${cityId} GROUP BY year ORDER BY year DESC`);
  return { city, parties, page, partyCount, years };
};
var City = () => {
  const { city, page, parties, partyCount, years } = (0, import_remix12.useLoaderData)();
  const submit = (0, import_remix12.useSubmit)();
  const [searchParams] = (0, import_remix12.useSearchParams)();
  const year = searchParams.get("year") || void 0;
  if (!city)
    return /* @__PURE__ */ React.createElement(Page_default, null, /* @__PURE__ */ React.createElement("div", {
      className: "px-4 sm:px-6 md:px-0"
    }, /* @__PURE__ */ React.createElement("h1", {
      className: "text-2xl font-semibold text-gray-900"
    }, "Stadt nicht gefunden")));
  return /* @__PURE__ */ React.createElement(Page_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end justify-between space-x-2 px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-semibold text-gray-900"
  }, city.name), /* @__PURE__ */ React.createElement("p", {
    className: "text-md font-medium text-gray-500"
  }, city.country.name)), /* @__PURE__ */ React.createElement(import_remix12.Form, {
    id: "search-and-pagination",
    method: "get",
    onChange: (e) => submit(e.currentTarget)
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "location",
    className: "sr-only"
  }, "Location"), /* @__PURE__ */ React.createElement("select", {
    id: "year",
    name: "year",
    className: "block w-full rounded-md border-none bg-gray-100 py-1.5 pl-3 pr-10 text-base text-gray-900 hover:bg-gray-200 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm",
    defaultValue: year
  }, /* @__PURE__ */ React.createElement("option", {
    value: ""
  }, "Alle Jahre"), years.map((y) => /* @__PURE__ */ React.createElement("option", {
    key: y.year,
    value: y.year
  }, y.year))))), /* @__PURE__ */ React.createElement(PartyList_default, {
    parties,
    partyCount,
    page,
    perPage
  }));
};
var cityId_default = City;

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/image/$imageId.tsx
var imageId_exports = {};
__export(imageId_exports, {
  default: () => imageId_default,
  loader: () => loader5,
  meta: () => meta4
});
init_react();
var import_react12 = __toModule(require("react"));
var import_remix13 = __toModule(require_remix());
var meta4 = ({ data }) => {
  return { title: `${(data == null ? void 0 : data.party.name) || "Party"} - Partybilder` };
};
var loader5 = async ({ params }) => {
  const { imageId } = params;
  const image = await db_server_default.image.findFirst({
    where: { id: imageId },
    include: {
      party: {
        include: {
          city: {
            include: {
              country: true
            }
          },
          images: {
            orderBy: {
              rawDataId: "asc"
            }
          }
        }
      }
    }
  });
  return image;
};
var Party2 = () => {
  const [openLogin, setOpenLogin] = (0, import_react12.useState)(false);
  const image = (0, import_remix13.useLoaderData)();
  const imageListRef = (0, import_react12.useRef)(null);
  if (!image)
    return /* @__PURE__ */ React.createElement(Page_default, {
      noSearch: true
    }, /* @__PURE__ */ React.createElement("div", {
      className: "px-4 sm:px-6 md:px-0"
    }, /* @__PURE__ */ React.createElement("h1", {
      className: "text-2xl font-semibold text-gray-900"
    }, "Partybild nicht gefunden")));
  const handleImageClick = () => {
    if (imageListRef.current) {
      imageListRef.current.setHighlightedImageId(image.id);
    }
  };
  return /* @__PURE__ */ React.createElement(Page_default, {
    noSearch: true
  }, /* @__PURE__ */ React.createElement(UserLogin, {
    open: openLogin,
    onClose: () => setOpenLogin(false)
  }), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-semibold text-gray-900"
  }, "Partybild von", " ", /* @__PURE__ */ React.createElement(import_remix13.Link, {
    to: `/parties/${image.party.id}`,
    className: "text-sky-700 underline-offset-2 hover:underline"
  }, image.party.name), " ", "in", " ", /* @__PURE__ */ React.createElement(import_remix13.Link, {
    to: `/cities/${image.party.city.id}`,
    className: "text-sky-700 underline-offset-2 hover:underline"
  }, image.party.city.name)), /* @__PURE__ */ React.createElement("p", {
    className: "text-md font-medium text-gray-500"
  }, formatDate(image.party.date))), /* @__PURE__ */ React.createElement("div", {
    className: "p-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "block h-auto max-w-full cursor-pointer rounded-lg",
    src: getEnv("MINIO_BASE_URL") + image.filePath,
    alt: image.party.name,
    onClick: handleImageClick
  }), /* @__PURE__ */ React.createElement("div", {
    className: "xs:pt-2 flex items-center justify-start pt-1"
  }, /* @__PURE__ */ React.createElement(ImageActions_default, {
    onWhite: true,
    image,
    onShowLogin: () => setOpenLogin(true)
  }))), image.party.images.length > 1 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-900"
  }, "Alle Bilder der Party")), /* @__PURE__ */ React.createElement(ImageList_default, {
    ref: imageListRef,
    images: image.party.images
  })));
};
var imageId_default = Party2;

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/parties/index.tsx
var parties_exports = {};
__export(parties_exports, {
  default: () => parties_default,
  loader: () => loader6,
  meta: () => meta5
});
init_react();
var import_client3 = __toModule(require("@prisma/client"));
var import_remix14 = __toModule(require_remix());
var meta5 = () => {
  return { title: "Parties - Partybilder" };
};
var perPage2 = 12;
var loader6 = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  const year = url.searchParams.get("year") || "";
  const yearFilter = getYearFilter(!!year ? parseInt(year, 10) : void 0);
  const pageParam = url.searchParams.get("page") || "1";
  const page = parseInt(pageParam, 10);
  const partyCount = await db_server_default.party.count({
    where: {
      OR: [
        { name: { contains: search, mode: import_client3.Prisma.QueryMode.insensitive } },
        { city: { name: { contains: search, mode: import_client3.Prisma.QueryMode.insensitive } } }
      ],
      date: yearFilter
    }
  });
  const parties = await db_server_default.party.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: import_client3.Prisma.QueryMode.insensitive } },
        { city: { name: { contains: search, mode: import_client3.Prisma.QueryMode.insensitive } } }
      ],
      date: yearFilter
    },
    include: {
      city: { include: { country: true } },
      images: { orderBy: { rawDataId: "asc" }, take: 1 },
      _count: {
        select: {
          images: true
        }
      }
    },
    skip: perPage2 * (page - 1),
    take: perPage2,
    orderBy: [{ date: "desc" }, { id: "desc" }]
  });
  const years = await db_server_default.$queryRaw(!!search ? import_client3.Prisma.sql`SELECT date_part('year', date) AS year from "Party" LEFT JOIN "City" ON "City".id = "Party"."cityId" WHERE "Party".name ILIKE '%' || ${search} || '%' OR "City".name ILIKE '%' || ${search} || '%' GROUP BY year ORDER BY year DESC` : import_client3.Prisma.sql`SELECT date_part('year', date) AS year from "Party" GROUP BY year ORDER BY year DESC`);
  return { parties, partyCount, page, years };
};
var Parties = () => {
  const { parties, partyCount, page, years } = (0, import_remix14.useLoaderData)();
  const submit = (0, import_remix14.useSubmit)();
  const [searchParams] = (0, import_remix14.useSearchParams)();
  const year = searchParams.get("year") || void 0;
  return /* @__PURE__ */ React.createElement(Page_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end justify-between space-x-2 px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-semibold text-gray-900"
  }, "Parties"), /* @__PURE__ */ React.createElement(import_remix14.Form, {
    id: "search-and-pagination",
    method: "get",
    onChange: (e) => submit(e.currentTarget)
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "location",
    className: "sr-only"
  }, "Location"), /* @__PURE__ */ React.createElement("select", {
    id: "year",
    name: "year",
    className: "block w-full rounded-md border-none bg-gray-100 py-1.5 pl-3 pr-10 text-base text-gray-900 hover:bg-gray-200 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm",
    defaultValue: year
  }, /* @__PURE__ */ React.createElement("option", {
    value: ""
  }, "Alle Jahre"), years.map((y) => /* @__PURE__ */ React.createElement("option", {
    key: y.year,
    value: y.year
  }, y.year))))), /* @__PURE__ */ React.createElement(PartyList_default, {
    parties,
    partyCount,
    page,
    perPage: perPage2
  }));
};
var parties_default = Parties;

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/cities/index.tsx
var cities_exports = {};
__export(cities_exports, {
  default: () => Cities,
  loader: () => loader7,
  meta: () => meta6
});
init_react();
var import_solid6 = __toModule(require("@heroicons/react/solid"));
var import_client4 = __toModule(require("@prisma/client"));
var import_remix15 = __toModule(require_remix());
var meta6 = () => {
  return { title: "St\xE4dte - Partybilder" };
};
var perPage3 = 12;
var loader7 = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  const pageParam = url.searchParams.get("page") || "1";
  const page = parseInt(pageParam, 10);
  const cityCount = await db_server_default.city.count({
    where: {
      OR: [{ name: { contains: search, mode: import_client4.Prisma.QueryMode.insensitive } }]
    }
  });
  const cities = await db_server_default.city.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: import_client4.Prisma.QueryMode.insensitive } },
        { country: { name: { contains: search, mode: import_client4.Prisma.QueryMode.insensitive } } }
      ]
    },
    include: {
      country: true,
      parties: {
        orderBy: [{ date: "desc" }, { id: "desc" }],
        select: {
          id: true,
          name: true,
          images: {
            orderBy: { rawDataId: "asc" },
            select: {
              id: true,
              filePath: true
            },
            take: 1
          }
        },
        take: 4
      },
      _count: {
        select: {
          parties: true
        }
      }
    },
    skip: perPage3 * (page - 1),
    take: perPage3,
    orderBy: [{ name: "asc" }, { id: "desc" }]
  });
  return { cities, cityCount, page };
};
function Cities() {
  const { cities, cityCount, page } = (0, import_remix15.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Page_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-semibold text-gray-900"
  }, "St\xE4dte"), /* @__PURE__ */ React.createElement(import_remix15.Form, {
    id: "search-and-pagination",
    method: "get",
    className: "hidden"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-4"
  }, /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "divide-y divide-gray-200"
  }, cities.map((city) => /* @__PURE__ */ React.createElement("li", {
    key: city.id
  }, /* @__PURE__ */ React.createElement(import_remix15.Link, {
    to: `/cities/${city.id}`,
    className: "group relative block transition-transform duration-300 hover:translate-x-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute -left-5 top-0 bottom-0 w-1 origin-right scale-x-0 bg-sky-500 transition-transform duration-300 group-hover:scale-x-100"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "min-w-0 flex-1 sm:flex sm:items-center sm:justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "truncate"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex text-sm"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "truncate font-medium text-sky-600"
  }, city.name), /* @__PURE__ */ React.createElement("p", {
    className: "ml-1 flex-shrink-0 font-normal text-gray-500"
  }, "in ", city.country.name)), /* @__PURE__ */ React.createElement("div", {
    className: "mt-2 flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center text-sm text-gray-500"
  }, /* @__PURE__ */ React.createElement(import_solid6.UsersIcon, {
    className: "mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("p", null, city._count.parties, " ", city._count.parties === 1 ? "Party" : "Parties"))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 flex-shrink-0 sm:mt-0 sm:ml-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xxs:flex hidden -space-x-1 overflow-hidden"
  }, city.parties.map((party) => {
    var _a;
    return /* @__PURE__ */ React.createElement("img", {
      key: party.id,
      className: "xs:h-10 xs:w-10 h-8 w-8 rounded-lg object-cover ring-2 ring-white sm:h-12 sm:w-12",
      src: getEnv("MINIO_BASE_URL") + ((_a = party.images[0]) == null ? void 0 : _a.filePath),
      alt: party.name
    });
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "ml-5 flex-shrink-0"
  }, /* @__PURE__ */ React.createElement(import_solid6.ChevronRightIcon, {
    className: "h-5 w-5 text-gray-400 group-hover:text-sky-500",
    "aria-hidden": "true"
  })))))))), /* @__PURE__ */ React.createElement(Pagination_default, {
    currentPage: page,
    perPage: perPage3,
    total: cityCount
  })));
}

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/user/$userId.tsx
var userId_exports = {};
__export(userId_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  anonymize: () => anonymize,
  default: () => Index2,
  loader: () => loader8,
  meta: () => meta7
});
init_react();
var import_solid7 = __toModule(require("@heroicons/react/solid"));
var import_react13 = __toModule(require("react"));
var import_remix16 = __toModule(require_remix());
var anonymize = (str) => str.split(" ").map((word) => word.slice(0, 2) + "*****").join(" ");
var meta7 = ({ data }) => {
  var _a;
  return { title: `${((_a = data == null ? void 0 : data.user) == null ? void 0 : _a.name) ? anonymize(data.user.name) : "Nutzer"} - Partybilder` };
};
var loader8 = async ({ params }) => {
  const { userId } = params;
  const user = await db_server_default.user.findUnique({
    where: { id: userId },
    include: { bookmarks: { include: { image: true }, orderBy: { createdAt: "desc" } } }
  });
  if (!user) {
    throw new Error("User not found");
  }
  return { user: __spreadProps(__spreadValues({}, user), { name: anonymize(user.name) }) };
};
function Index2() {
  const { user } = (0, import_remix16.useLoaderData)();
  const [openLogin, setOpenLogin] = (0, import_react13.useState)(false);
  const [isCopied, setIsCopied] = (0, import_react13.useState)(false);
  (0, import_react13.useEffect)(() => {
    if (isCopied) {
      const timeout = setTimeout(() => setIsCopied(false), 1e3);
      return () => clearTimeout(timeout);
    }
  }, [isCopied]);
  return /* @__PURE__ */ React.createElement(Page_default, {
    noSearch: true
  }, /* @__PURE__ */ React.createElement(UserLogin, {
    open: openLogin,
    onClose: () => setOpenLogin(false)
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-end justify-between space-x-2 px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-semibold text-gray-900"
  }, "Profil von"), /* @__PURE__ */ React.createElement("p", {
    className: "text-md font-medium text-gray-500"
  }, user.name))), !!user.bookmarks.length ? /* @__PURE__ */ React.createElement(ImageList_default, {
    images: user.bookmarks.map((bookmark) => bookmark.image),
    toImage: true,
    allowCancelingDeleteBookmark: true
  }) : /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative mt-4 block w-full rounded-lg border-2 border-dashed border-gray-300 px-4 py-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, /* @__PURE__ */ React.createElement(import_solid7.HeartIcon, {
    className: "mx-auto h-12 w-12 text-gray-200"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "mt-4 block text-base font-medium text-gray-600"
  }, "Dieser Nutzer hat noch keine Bilder auf der Merkliste."))));
}
var ErrorBoundary2 = () => {
  return /* @__PURE__ */ React.createElement(Page_default, {
    noSearch: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-semibold text-gray-900"
  }, "Nutzer nicht gefunden")));
};

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/user/create.tsx
var create_exports2 = {};
__export(create_exports2, {
  action: () => action3
});
init_react();
var import_remix17 = __toModule(require_remix());

// app/utils/random.ts
init_react();
var randomFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// app/utils/words.ts
init_react();
var adjectives = [
  "Adorable",
  "Adventurous",
  "Aggressive",
  "Agreeable",
  "Alert",
  "Alive",
  "Amused",
  "Angry",
  "Annoyed",
  "Annoying",
  "Anxious",
  "Arrogant",
  "Ashamed",
  "Attractive",
  "Average",
  "Awful",
  "Bad",
  "Beautiful",
  "Better",
  "Bewildered",
  "Black",
  "Bloody",
  "Blue",
  "Blushing",
  "Bored",
  "Brainy",
  "Brave",
  "Breakable",
  "Bright",
  "Busy",
  "Calm",
  "Careful",
  "Cautious",
  "Charming",
  "Cheerful",
  "Clean",
  "Clear",
  "Clever",
  "Cloudy",
  "Clumsy",
  "Colorful",
  "Combative",
  "Comfortable",
  "Concerned",
  "Condemned",
  "Confused",
  "Cooperative",
  "Courageous",
  "Crazy",
  "Creepy",
  "Crowded",
  "Cruel",
  "Curious",
  "Cute",
  "Dangerous",
  "Dark",
  "Dead",
  "Defeated",
  "Defiant",
  "Delightful",
  "Depressed",
  "Determined",
  "Different",
  "Difficult",
  "Disgusted",
  "Distinct",
  "Disturbed",
  "Dizzy",
  "Doubtful",
  "Drab",
  "Dull",
  "Eager",
  "Easy",
  "Elated",
  "Elegant",
  "Embarrassed",
  "Enchanting",
  "Encouraging",
  "Energetic",
  "Enthusiastic",
  "Envious",
  "Evil",
  "Excited",
  "Expensive",
  "Exuberant",
  "Fair",
  "Faithful",
  "Famous",
  "Fancy",
  "Fantastic",
  "Fierce",
  "Filthy",
  "Fine",
  "Foolish",
  "Fragile",
  "Frail",
  "Frantic",
  "Friendly",
  "Frightened",
  "Funny",
  "Gentle",
  "Gifted",
  "Glamorous",
  "Gleaming",
  "Glorious",
  "Good",
  "Gorgeous",
  "Graceful",
  "Grieving",
  "Grotesque",
  "Grumpy",
  "Handsome",
  "Happy",
  "Healthy",
  "Helpful",
  "Helpless",
  "Hilarious",
  "Homeless",
  "Homely",
  "Horrible",
  "Hungry",
  "Hurt",
  "Ill",
  "Important",
  "Impossible",
  "Inexpensive",
  "Innocent",
  "Inquisitive",
  "Itchy",
  "Jealous",
  "Jittery",
  "Jolly",
  "Joyous",
  "Kind",
  "Lazy",
  "Light",
  "Lively",
  "Lonely",
  "Long",
  "Lovely",
  "Lucky",
  "Magnificent",
  "Misty",
  "Modern",
  "Motionless",
  "Muddy",
  "Mushy",
  "Mysterious",
  "Nasty",
  "Naughty",
  "Nervous",
  "Nice",
  "Nutty",
  "Obedient",
  "Obnoxious",
  "Odd",
  "Open",
  "Outrageous",
  "Outstanding",
  "Panicky",
  "Perfect",
  "Plain",
  "Pleasant",
  "Poised",
  "Poor",
  "Powerful",
  "Precious",
  "Prickly",
  "Proud",
  "Putrid",
  "Puzzled",
  "Quaint",
  "Real",
  "Relieved",
  "Repulsive",
  "Rich",
  "Scary",
  "Selfish",
  "Shiny",
  "Shy",
  "Silly",
  "Sleepy",
  "Smiling",
  "Smoggy",
  "Sore",
  "Sparkling",
  "Splendid",
  "Spotless",
  "Stormy",
  "Strange",
  "Stupid",
  "Successful",
  "Super",
  "Talented",
  "Tame",
  "Tasty",
  "Tender",
  "Tense",
  "Terrible",
  "Thankful",
  "Thoughtful",
  "Thoughtless",
  "Tired",
  "Tough",
  "Troubled",
  "Ugliest",
  "Ugly",
  "Uninterested",
  "Unsightly",
  "Unusual",
  "Upset",
  "Uptight",
  "Vast",
  "Victorious",
  "Vivacious",
  "Wandering",
  "Weary",
  "Wicked",
  "Wild",
  "Witty",
  "Worried",
  "Worrisome",
  "Wrong",
  "Zany",
  "Zealous"
];
var nouns = [
  "Ability",
  "Access",
  "Accident",
  "Account",
  "Act",
  "Action",
  "Activity",
  "Actor",
  "Ad",
  "Addition",
  "Address",
  "Administration",
  "Advantage",
  "Advertising",
  "Advice",
  "Affair",
  "Age",
  "Agency",
  "Agreement",
  "Air",
  "Airport",
  "Alcohol",
  "Ambition",
  "Amount",
  "Analysis",
  "Analyst",
  "Animal",
  "Answer",
  "Anxiety",
  "Apartment",
  "Appearance",
  "Apple",
  "Application",
  "Appointment",
  "Area",
  "Argument",
  "Army",
  "Arrival",
  "Art",
  "Article",
  "Aspect",
  "Assignment",
  "Assistance",
  "Assistant",
  "Association",
  "Assumption",
  "Atmosphere",
  "Attempt",
  "Attention",
  "Attitude",
  "Audience",
  "Aunt",
  "Average",
  "Awareness",
  "Back",
  "Bad",
  "Balance",
  "Ball",
  "Bank",
  "Baseball",
  "Basis",
  "Basket",
  "Bath",
  "Bathroom",
  "Bedroom",
  "Beer",
  "Beginning",
  "Benefit",
  "Bird",
  "Birth",
  "Birthday",
  "Bit",
  "Blood",
  "Board",
  "Boat",
  "Body",
  "Bonus",
  "Book",
  "Boss",
  "Bottom",
  "Box",
  "Boy",
  "Boyfriend",
  "Bread",
  "Breath",
  "Brother",
  "Building",
  "Bus",
  "Business",
  "Buyer",
  "Cabinet",
  "Camera",
  "Cancer",
  "Candidate",
  "Capital",
  "Car",
  "Card",
  "Care",
  "Career",
  "Case",
  "Cash",
  "Cat",
  "Category",
  "Cause",
  "Celebration",
  "Cell",
  "Championship",
  "Chance",
  "Chapter",
  "Charity",
  "Cheek",
  "Chemistry",
  "Chest",
  "Chicken",
  "Child",
  "Childhood",
  "Chocolate",
  "Choice",
  "Church",
  "Cigarette",
  "City",
  "Class",
  "Classroom",
  "Client",
  "Climate",
  "Clothes",
  "Coast",
  "Coffee",
  "Collection",
  "College",
  "Combination",
  "Committee",
  "Communication",
  "Community",
  "Company",
  "Comparison",
  "Competition",
  "Complaint",
  "Computer",
  "Concept",
  "Conclusion",
  "Condition",
  "Confusion",
  "Connection",
  "Consequence",
  "Construction",
  "Contact",
  "Context",
  "Contract",
  "Contribution",
  "Control",
  "Conversation",
  "Cookie",
  "Country",
  "County",
  "Courage",
  "Course",
  "Cousin",
  "Craft",
  "Credit",
  "Criticism",
  "Culture",
  "Currency",
  "Customer",
  "Cycle",
  "Dad",
  "Data",
  "Database",
  "Date",
  "Day",
  "Dealer",
  "Death",
  "Debt",
  "Decision",
  "Definition",
  "Delivery",
  "Demand",
  "Department",
  "Departure",
  "Depression",
  "Depth",
  "Description",
  "Design",
  "Desk",
  "Development",
  "Device",
  "Diamond",
  "Difference",
  "Difficulty",
  "Dinner",
  "Direction",
  "Director",
  "Dirt",
  "Disaster",
  "Discipline",
  "Discussion",
  "Disease",
  "Disk",
  "Distribution",
  "Dog",
  "Drama",
  "Drawer",
  "Drawing",
  "Driver",
  "Ear",
  "Earth",
  "Economics",
  "Economy",
  "Editor",
  "Education",
  "Effect",
  "Efficiency",
  "Effort",
  "Egg",
  "Election",
  "Elevator",
  "Emotion",
  "Emphasis",
  "Employee",
  "Employer",
  "Employment",
  "End",
  "Energy",
  "Engine",
  "Entertainment",
  "Enthusiasm",
  "Entry",
  "Environment",
  "Equipment",
  "Error",
  "Establishment",
  "Estate",
  "Event",
  "Exam",
  "Examination",
  "Example",
  "Exchange",
  "Excitement",
  "Exercise",
  "Experience",
  "Explanation",
  "Expression",
  "Extent",
  "Eye",
  "Face",
  "Fact",
  "Failure",
  "Family",
  "Farmer",
  "Fat",
  "Feature",
  "Feedback",
  "Field",
  "Figure",
  "Film",
  "Finding",
  "Fire",
  "Fish",
  "Flight",
  "Focus",
  "Food",
  "Football",
  "Force",
  "Form",
  "Fortune",
  "Foundation",
  "Frame",
  "Freedom",
  "Friendship",
  "Fun",
  "Funeral",
  "Future",
  "Game",
  "Garbage",
  "Garden",
  "Gate",
  "Gene",
  "Gift",
  "Girl",
  "Girlfriend",
  "Goal",
  "Government",
  "Grandmother",
  "Grocery",
  "Group",
  "Growth",
  "Guest",
  "Guidance",
  "Guide",
  "Guitar",
  "Hair",
  "Half",
  "Hall",
  "Hand",
  "Hat",
  "Head",
  "Health",
  "Hearing",
  "Heart",
  "Heat",
  "Height",
  "Highway",
  "Historian",
  "History",
  "Home",
  "Homework",
  "Honey",
  "Hope",
  "Hospital",
  "Hotel",
  "House",
  "Housing",
  "Ice",
  "Idea",
  "Image",
  "Imagination",
  "Impact",
  "Importance",
  "Impression",
  "Improvement",
  "Income",
  "Independence",
  "Indication",
  "Industry",
  "Inflation",
  "Information",
  "Initiative",
  "Injury",
  "Insect",
  "Inside",
  "Inspection",
  "Inspector",
  "Instance",
  "Instruction",
  "Insurance",
  "Intention",
  "Interaction",
  "Interest",
  "Internet",
  "Introduction",
  "Investment",
  "Issue",
  "Item",
  "Job",
  "Judgment",
  "Key",
  "Kind",
  "King",
  "Knowledge",
  "Lab",
  "Ladder",
  "Lady",
  "Lake",
  "Language",
  "Law",
  "Leader",
  "Leadership",
  "Length",
  "Level",
  "Library",
  "Life",
  "Light",
  "Line",
  "Link",
  "List",
  "Literature",
  "Location",
  "Loss",
  "Love",
  "Machine",
  "Magazine",
  "Maintenance",
  "Mall",
  "Man",
  "Management",
  "Manager",
  "Manufacturer",
  "Map",
  "Market",
  "Marketing",
  "Marriage",
  "Material",
  "Math",
  "Matter",
  "Meal",
  "Meaning",
  "Measurement",
  "Meat",
  "Media",
  "Medicine",
  "Medium",
  "Member",
  "Membership",
  "Memory",
  "Menu",
  "Message",
  "Metal",
  "Method",
  "Midnight",
  "Mind",
  "Mixture",
  "Mode",
  "Model",
  "Mom",
  "Moment",
  "Money",
  "Month",
  "Mood",
  "Morning",
  "Mouse",
  "Movie",
  "Mud",
  "Music",
  "Name",
  "Nation",
  "Nature",
  "Negotiation",
  "Network",
  "News",
  "Newspaper",
  "Night",
  "Note",
  "Nothing",
  "Number",
  "Object",
  "Obligation",
  "Office",
  "Oil",
  "Operation",
  "Opinion",
  "Opportunity",
  "Orange",
  "Order",
  "Organization",
  "Outcome",
  "Outside",
  "Oven",
  "Owner",
  "Page",
  "Paint",
  "Painting",
  "Paper",
  "Part",
  "Passenger",
  "Passion",
  "Patience",
  "Payment",
  "Penalty",
  "People",
  "Percentage",
  "Perception",
  "Performance",
  "Period",
  "Permission",
  "Person",
  "Personality",
  "Perspective",
  "Philosophy",
  "Phone",
  "Photo",
  "Physics",
  "Piano",
  "Picture",
  "Pie",
  "Piece",
  "Pizza",
  "Place",
  "Plan",
  "Platform",
  "Player",
  "Poem",
  "Poet",
  "Poetry",
  "Point",
  "Police",
  "Policy",
  "Politics",
  "Pollution",
  "Population",
  "Position",
  "Possession",
  "Possibility",
  "Post",
  "Pot",
  "Potato",
  "Power",
  "Practice",
  "Preference",
  "Preparation",
  "Presence",
  "Presentation",
  "President",
  "Pressure",
  "Price",
  "Priority",
  "Problem",
  "Procedure",
  "Process",
  "Product",
  "Profession",
  "Professor",
  "Profit",
  "Program",
  "Promotion",
  "Property",
  "Proposal",
  "Protection",
  "Psychology",
  "Purpose",
  "Quality",
  "Quantity",
  "Queen",
  "Question",
  "Radio",
  "Range",
  "Rate",
  "Ratio",
  "Reaction",
  "Reality",
  "Reason",
  "Reception",
  "Recipe",
  "Recognition",
  "Recommendation",
  "Record",
  "Recording",
  "Reflection",
  "Refrigerator",
  "Region",
  "Relation",
  "Relationship",
  "Replacement",
  "Republic",
  "Reputation",
  "Requirement",
  "Research",
  "Resolution",
  "Resource",
  "Response",
  "Responsibility",
  "Restaurant",
  "Result",
  "Revenue",
  "Review",
  "Revolution",
  "Risk",
  "River",
  "Road",
  "Rock",
  "Role",
  "Room",
  "Rule",
  "Safety",
  "Salad",
  "Salt",
  "Sample",
  "Satisfaction",
  "Scale",
  "Scene",
  "School",
  "Science",
  "Screen",
  "Secretary",
  "Section",
  "Sector",
  "Security",
  "Selection",
  "Sense",
  "Series",
  "Service",
  "Session",
  "Setting",
  "Shape",
  "Share",
  "Shirt",
  "Side",
  "Sign",
  "Signature",
  "Significance",
  "Singer",
  "Sir",
  "Sister",
  "Site",
  "Situation",
  "Size",
  "Skill",
  "Society",
  "Software",
  "Soil",
  "Solution",
  "Son",
  "Song",
  "Sound",
  "Soup",
  "Source",
  "Space",
  "Speaker",
  "Speech",
  "Sport",
  "Square",
  "Standard",
  "Star",
  "State",
  "Statement",
  "Steak",
  "Step",
  "Stock",
  "Storage",
  "Store",
  "Story",
  "Stranger",
  "Strategy",
  "Stress",
  "Structure",
  "Student",
  "Studio",
  "Study",
  "Style",
  "Subject",
  "Success",
  "Suggestion",
  "Sun",
  "Supermarket",
  "Surgery",
  "Sympathy",
  "System",
  "Table",
  "Tale",
  "Task",
  "Tax",
  "Tea",
  "Teacher",
  "Technology",
  "Television",
  "Temperature",
  "Tennis",
  "Tension",
  "Term",
  "Test",
  "Thanks",
  "Theory",
  "Thing",
  "Thought",
  "Throat",
  "Time",
  "Tongue",
  "Tool",
  "Tooth",
  "Top",
  "Topic",
  "Town",
  "Trade",
  "Tradition",
  "Trainer",
  "Training",
  "Transportation",
  "Truth",
  "Two",
  "Type",
  "Uncle",
  "Understanding",
  "Union",
  "Unit",
  "University",
  "User",
  "Value",
  "Variation",
  "Variety",
  "Vehicle",
  "Version",
  "Video",
  "View",
  "Village",
  "Virus",
  "Voice",
  "Volume",
  "War",
  "Warning",
  "Water",
  "Way",
  "Weakness",
  "Wealth",
  "Weather",
  "Web",
  "Wedding",
  "Week",
  "While",
  "Wife",
  "Wind",
  "Winner",
  "Woman",
  "Wood",
  "Word",
  "Work",
  "Worker",
  "World",
  "Writer",
  "Writing",
  "Year",
  "Youth"
];

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/user/create.tsx
var action3 = async () => {
  let user = null;
  let tries = 0;
  do {
    const username = `${randomFromArray(adjectives)} ${randomFromArray(nouns)}`;
    const newUser = {
      name: username
    };
    try {
      user = await db_server_default.user.create({
        data: newUser
      });
      return (0, import_remix17.json)({ ok: true, username: user.name }, {
        headers: {
          "Set-Cookie": await userCookie.serialize(user.name)
        }
      });
    } catch (error) {
      tries++;
    }
  } while (!user && tries < 10);
  return (0, import_remix17.json)({ error: "Could not create user" });
};

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/user/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action4
});
init_react();
var import_remix18 = __toModule(require_remix());
var action4 = async ({ request }) => {
  const username = (await request.formData()).get("username");
  if (!username || typeof username !== "string") {
    return (0, import_remix18.json)({ error: "Missing username" });
  }
  try {
    await db_server_default.user.findUnique({
      where: {
        name: username
      },
      rejectOnNotFound: true
    });
    return (0, import_remix18.json)({ ok: true }, {
      headers: {
        "Set-Cookie": await userCookie.serialize(username)
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      return (0, import_remix18.json)({ error: error.message });
    }
    return (0, import_remix18.json)({ error: "Unknown error" });
  }
};

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/raw-data.tsx
var raw_data_exports = {};
__export(raw_data_exports, {
  default: () => raw_data_default,
  loader: () => loader9,
  meta: () => meta8
});
init_react();
var import_client5 = __toModule(require("@prisma/client"));
var import_remix19 = __toModule(require_remix());
var meta8 = () => {
  return { title: "Raw Data - Partybilder" };
};
var loader9 = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  const images = await db_server_default.rawData.findMany({
    where: {
      OR: [
        { party: { contains: search, mode: import_client5.Prisma.QueryMode.insensitive } },
        { city: { contains: search, mode: import_client5.Prisma.QueryMode.insensitive } }
      ]
    },
    take: 300
  });
  return images;
};
var RawData = () => {
  const images = (0, import_remix19.useLoaderData)();
  const { state } = (0, import_remix19.useTransition)();
  return /* @__PURE__ */ React.createElement(Page_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-semibold text-gray-900"
  }, "Raw Data")), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-4"
  }, /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
  }, state !== "idle" ? /* @__PURE__ */ React.createElement("li", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "pointer-events-none mt-2 block text-sm font-medium text-gray-900"
  }, "image.party"), /* @__PURE__ */ React.createElement("p", {
    className: "pointer-events-none block text-sm font-medium text-gray-500"
  }, "image.partydate")) : images.map((image) => /* @__PURE__ */ React.createElement("li", {
    key: image.id,
    className: "relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
  }, /* @__PURE__ */ React.createElement("img", {
    src: getEnv("MINIO_BASE_URL") + image.url.replace("http://www.binpartygeil.de/", "/downloads/"),
    alt: "",
    className: "pointer-events-none object-cover group-hover:opacity-75"
  }), /* @__PURE__ */ React.createElement("a", {
    href: image.url.replace("http://www.binpartygeil.de/", "/downloads/"),
    target: "_blank",
    className: "absolute inset-0 focus:outline-none"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "pointer-events-none mt-2 block text-sm font-medium text-gray-900"
  }, image.party, " in", " ", /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "pointer-events-auto cursor-pointer text-sky-700 underline-offset-2 hover:underline"
  }, image.country, " - ", image.city)), /* @__PURE__ */ React.createElement("p", {
    className: "pointer-events-none block text-sm font-medium text-gray-500"
  }, formatDate(image.partydate)), /* @__PURE__ */ React.createElement("p", {
    className: "pointer-events-none block text-sm font-medium text-gray-500"
  }, image.id)))))));
};
var raw_data_default = RawData;

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index3,
  loader: () => loader10,
  unstable_shouldReload: () => unstable_shouldReload
});
init_react();
var import_remix20 = __toModule(require_remix());
var loader10 = async ({ request }) => {
  const images = await db_server_default.$queryRaw`SELECT * from "Image" ORDER BY random() LIMIT 12`;
  return images;
};
function Index3() {
  const images = (0, import_remix20.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Page_default, {
    noSearch: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 md:px-0"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-semibold text-gray-900"
  }, "Zuf\xE4llige Bilder")), /* @__PURE__ */ React.createElement(ImageList_default, {
    images,
    toParty: true,
    isRandom: true
  }));
}
var unstable_shouldReload = () => false;

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/auth.tsx
var auth_exports = {};
__export(auth_exports, {
  action: () => action5,
  default: () => Login,
  loader: () => loader11,
  meta: () => meta9
});
init_react();
var import_remix21 = __toModule(require_remix());

// app/routes/user/$userId.tsx
init_react();
var import_solid8 = __toModule(require("@heroicons/react/solid"));
var import_react14 = __toModule(require("react"));
var anonymize2 = (str) => str.split(" ").map((word) => word.slice(0, 2) + "*****").join(" ");

// route:/Users/matthiasmartin/GitHub/party-crawler/app/app/routes/auth.tsx
var action5 = async ({ request }) => {
  var _a;
  const body = await request.formData();
  const password = body.get("password");
  const redirectPath = ((_a = body.get("redirect")) == null ? void 0 : _a.toString()) || "/";
  if (password === process.env.APP_PASSWORD) {
    return (0, import_remix21.redirect)(redirectPath, {
      headers: {
        "Set-Cookie": await authCookie.serialize(true)
      }
    });
  }
  return { wrongPassword: true, redirectPath };
};
var loader11 = async ({ request }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const searchParams = new URLSearchParams(request.url.split("?")[1]);
  if ((_a = searchParams.get("redirect")) == null ? void 0 : _a.startsWith("/image/")) {
    const imageId = (_b = searchParams.get("redirect")) == null ? void 0 : _b.split("/")[2];
    const image = await db_server_default.image.findFirst({
      where: {
        id: imageId
      },
      include: {
        party: true
      }
    });
    return { title: image == null ? void 0 : image.party.name };
  }
  if ((_c = searchParams.get("redirect")) == null ? void 0 : _c.startsWith("/parties/")) {
    const partyId = (_d = searchParams.get("redirect")) == null ? void 0 : _d.split("/")[2];
    const party = await db_server_default.party.findFirst({
      where: {
        id: partyId
      }
    });
    return { title: party == null ? void 0 : party.name };
  }
  if ((_e = searchParams.get("redirect")) == null ? void 0 : _e.startsWith("/cities/")) {
    const cityId = (_f = searchParams.get("redirect")) == null ? void 0 : _f.split("/")[2];
    const city = await db_server_default.city.findFirst({
      where: {
        id: cityId
      }
    });
    return { title: city == null ? void 0 : city.name };
  }
  if ((_g = searchParams.get("redirect")) == null ? void 0 : _g.startsWith("/user/")) {
    const userId = (_h = searchParams.get("redirect")) == null ? void 0 : _h.split("/")[2];
    const user = await db_server_default.user.findFirst({
      where: {
        id: userId
      }
    });
    return { title: (user == null ? void 0 : user.name) ? anonymize2(user.name) : void 0 };
  }
  return null;
};
var meta9 = ({ data }) => {
  return { title: `${(data == null ? void 0 : data.title) || "Login"} - Partybilder` };
};
function Login() {
  const data = (0, import_remix21.useActionData)();
  const [searchParams] = (0, import_remix21.useSearchParams)();
  const { state } = (0, import_remix21.useTransition)();
  const redirect3 = (data == null ? void 0 : data.redirectPath) || searchParams.get("redirect") || "/";
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-full bg-gray-50"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xs:px-6 flex min-h-full flex-col justify-center py-12 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xs:mx-auto xs:w-full xs:max-w-md xs:px-0 px-4"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "mx-auto h-12 w-auto",
    src: "/logo.png",
    alt: "Workflow"
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "mt-6 text-center text-3xl font-extrabold text-gray-900"
  }, "Passwort erforderlich"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-center text-sm text-gray-600"
  }, "Diese Seite wird ausschlie\xDFlich privat verwendet und ist daf\xFCr passwortgesch\xFCtzt.")), /* @__PURE__ */ React.createElement("div", {
    className: "xs:mx-auto xs:w-full xs:max-w-md mt-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xs:rounded-lg xs:px-10 bg-white py-8 px-4 shadow"
  }, (data == null ? void 0 : data.wrongPassword) && /* @__PURE__ */ React.createElement("div", {
    className: "mb-4 text-sm font-semibold text-red-500"
  }, "Das Passwort ist falsch. Bitte versuche es erneut."), /* @__PURE__ */ React.createElement(import_remix21.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("fieldset", {
    className: "space-y-6",
    disabled: state !== "idle"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password",
    className: "block text-sm font-medium text-gray-700"
  }, "Passwort"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirect",
    value: redirect3
  }), /* @__PURE__ */ React.createElement("input", {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "password",
    required: true,
    className: "xs:text-sm block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
  }, state !== "idle" ? "\u2026" : "Lass mich rein"))))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "fe4db0a1", "entry": { "module": "/build/entry.client-EEO4HHVI.js", "imports": ["/build/_shared/chunk-IN3G2LTI.js", "/build/_shared/chunk-34MPKFUT.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-HQ2V7CVV.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/auth": { "id": "routes/auth", "parentId": "root", "path": "auth", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth-FHV5CF2R.js", "imports": ["/build/_shared/chunk-SJRI2MRE.js", "/build/_shared/chunk-GFLOZMUU.js", "/build/_shared/chunk-D4PXPP5W.js", "/build/_shared/chunk-Y4DDWG6E.js", "/build/_shared/chunk-HKKJI7V2.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/bookmarks/create": { "id": "routes/bookmarks/create", "parentId": "root", "path": "bookmarks/create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/bookmarks/create-BPPJFNLZ.js", "imports": ["/build/_shared/chunk-HKKJI7V2.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/bookmarks/delete": { "id": "routes/bookmarks/delete", "parentId": "root", "path": "bookmarks/delete", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/bookmarks/delete-MSBXIFSB.js", "imports": ["/build/_shared/chunk-HKKJI7V2.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/bookmarks/index": { "id": "routes/bookmarks/index", "parentId": "root", "path": "bookmarks", "index": true, "caseSensitive": void 0, "module": "/build/routes/bookmarks/index-UIN2ND4N.js", "imports": ["/build/_shared/chunk-GFLOZMUU.js", "/build/_shared/chunk-D4PXPP5W.js", "/build/_shared/chunk-Y4DDWG6E.js", "/build/_shared/chunk-HKKJI7V2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/cities/$cityId": { "id": "routes/cities/$cityId", "parentId": "root", "path": "cities/:cityId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/cities/$cityId-425USTRJ.js", "imports": ["/build/_shared/chunk-FNND7WPU.js", "/build/_shared/chunk-WMEOV7PL.js", "/build/_shared/chunk-767S2ROY.js", "/build/_shared/chunk-Y4DDWG6E.js", "/build/_shared/chunk-HKKJI7V2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/cities/index": { "id": "routes/cities/index", "parentId": "root", "path": "cities", "index": true, "caseSensitive": void 0, "module": "/build/routes/cities/index-USQ3AVUG.js", "imports": ["/build/_shared/chunk-WMEOV7PL.js", "/build/_shared/chunk-Y4DDWG6E.js", "/build/_shared/chunk-HKKJI7V2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/image/$imageId": { "id": "routes/image/$imageId", "parentId": "root", "path": "image/:imageId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/image/$imageId-7AKWBHBO.js", "imports": ["/build/_shared/chunk-D4PXPP5W.js", "/build/_shared/chunk-767S2ROY.js", "/build/_shared/chunk-Y4DDWG6E.js", "/build/_shared/chunk-HKKJI7V2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-4XMOVOJW.js", "imports": ["/build/_shared/chunk-D4PXPP5W.js", "/build/_shared/chunk-Y4DDWG6E.js", "/build/_shared/chunk-HKKJI7V2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/parties/$partyId": { "id": "routes/parties/$partyId", "parentId": "root", "path": "parties/:partyId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/parties/$partyId-ABFSL5YY.js", "imports": ["/build/_shared/chunk-D4PXPP5W.js", "/build/_shared/chunk-767S2ROY.js", "/build/_shared/chunk-Y4DDWG6E.js", "/build/_shared/chunk-HKKJI7V2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/parties/index": { "id": "routes/parties/index", "parentId": "root", "path": "parties", "index": true, "caseSensitive": void 0, "module": "/build/routes/parties/index-G3U5B7TN.js", "imports": ["/build/_shared/chunk-FNND7WPU.js", "/build/_shared/chunk-WMEOV7PL.js", "/build/_shared/chunk-767S2ROY.js", "/build/_shared/chunk-Y4DDWG6E.js", "/build/_shared/chunk-HKKJI7V2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/raw-data": { "id": "routes/raw-data", "parentId": "root", "path": "raw-data", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/raw-data-NFOOI6JH.js", "imports": ["/build/_shared/chunk-767S2ROY.js", "/build/_shared/chunk-Y4DDWG6E.js", "/build/_shared/chunk-HKKJI7V2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/user/$userId": { "id": "routes/user/$userId", "parentId": "root", "path": "user/:userId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/user/$userId-CEPRCH3M.js", "imports": ["/build/_shared/chunk-SJRI2MRE.js", "/build/_shared/chunk-D4PXPP5W.js", "/build/_shared/chunk-Y4DDWG6E.js", "/build/_shared/chunk-HKKJI7V2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/user/create": { "id": "routes/user/create", "parentId": "root", "path": "user/create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/user/create-JIB2CQQ2.js", "imports": ["/build/_shared/chunk-GFLOZMUU.js", "/build/_shared/chunk-HKKJI7V2.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/user/login": { "id": "routes/user/login", "parentId": "root", "path": "user/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/user/login-P5QACZKD.js", "imports": ["/build/_shared/chunk-GFLOZMUU.js", "/build/_shared/chunk-HKKJI7V2.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-FE4DB0A1.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/bookmarks/create": {
    id: "routes/bookmarks/create",
    parentId: "root",
    path: "bookmarks/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/bookmarks/delete": {
    id: "routes/bookmarks/delete",
    parentId: "root",
    path: "bookmarks/delete",
    index: void 0,
    caseSensitive: void 0,
    module: delete_exports
  },
  "routes/parties/$partyId": {
    id: "routes/parties/$partyId",
    parentId: "root",
    path: "parties/:partyId",
    index: void 0,
    caseSensitive: void 0,
    module: partyId_exports
  },
  "routes/bookmarks/index": {
    id: "routes/bookmarks/index",
    parentId: "root",
    path: "bookmarks",
    index: true,
    caseSensitive: void 0,
    module: bookmarks_exports
  },
  "routes/cities/$cityId": {
    id: "routes/cities/$cityId",
    parentId: "root",
    path: "cities/:cityId",
    index: void 0,
    caseSensitive: void 0,
    module: cityId_exports
  },
  "routes/image/$imageId": {
    id: "routes/image/$imageId",
    parentId: "root",
    path: "image/:imageId",
    index: void 0,
    caseSensitive: void 0,
    module: imageId_exports
  },
  "routes/parties/index": {
    id: "routes/parties/index",
    parentId: "root",
    path: "parties",
    index: true,
    caseSensitive: void 0,
    module: parties_exports
  },
  "routes/cities/index": {
    id: "routes/cities/index",
    parentId: "root",
    path: "cities",
    index: true,
    caseSensitive: void 0,
    module: cities_exports
  },
  "routes/user/$userId": {
    id: "routes/user/$userId",
    parentId: "root",
    path: "user/:userId",
    index: void 0,
    caseSensitive: void 0,
    module: userId_exports
  },
  "routes/user/create": {
    id: "routes/user/create",
    parentId: "root",
    path: "user/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports2
  },
  "routes/user/login": {
    id: "routes/user/login",
    parentId: "root",
    path: "user/login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/raw-data": {
    id: "routes/raw-data",
    parentId: "root",
    path: "raw-data",
    index: void 0,
    caseSensitive: void 0,
    module: raw_data_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/auth": {
    id: "routes/auth",
    parentId: "root",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uL2FwcC9jb29raWVzLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvbWF0dGhpYXNtYXJ0aW4vR2l0SHViL3BhcnR5LWNyYXdsZXIvYXBwL2FwcC9yb290LnRzeCIsICIuLi9hcHAvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9tYXR0aGlhc21hcnRpbi9HaXRIdWIvcGFydHktY3Jhd2xlci9hcHAvYXBwL3JvdXRlcy9ib29rbWFya3MvY3JlYXRlLnRzeCIsICJyb3V0ZTovVXNlcnMvbWF0dGhpYXNtYXJ0aW4vR2l0SHViL3BhcnR5LWNyYXdsZXIvYXBwL2FwcC9yb3V0ZXMvYm9va21hcmtzL2RlbGV0ZS50c3giLCAicm91dGU6L1VzZXJzL21hdHRoaWFzbWFydGluL0dpdEh1Yi9wYXJ0eS1jcmF3bGVyL2FwcC9hcHAvcm91dGVzL3BhcnRpZXMvJHBhcnR5SWQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ltYWdlTGlzdC50c3giLCAiLi4vYXBwL3V0aWxzL2NsYXNzLW5hbWVzLnRzIiwgIi4uL2FwcC9jb21wb25lbnRzL0dhbGxlcnkudHN4IiwgIi4uL2FwcC91dGlscy9lbnZzLnRzIiwgIi4uL2FwcC9jb21wb25lbnRzL0ltYWdlQWN0aW9ucy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSW1hZ2VMaXN0SXRlbS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVXNlckxvZ2luLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9QYWdlLnRzeCIsICIuLi9hcHAvdXRpbHMvaW50bC50cyIsICJyb3V0ZTovVXNlcnMvbWF0dGhpYXNtYXJ0aW4vR2l0SHViL3BhcnR5LWNyYXdsZXIvYXBwL2FwcC9yb3V0ZXMvYm9va21hcmtzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvbWF0dGhpYXNtYXJ0aW4vR2l0SHViL3BhcnR5LWNyYXdsZXIvYXBwL2FwcC9yb3V0ZXMvY2l0aWVzLyRjaXR5SWQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1BhcnR5TGlzdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUGFnaW5hdGlvbi50c3giLCAiLi4vYXBwL3V0aWxzL3llYXItZmlsdGVyLnRzIiwgInJvdXRlOi9Vc2Vycy9tYXR0aGlhc21hcnRpbi9HaXRIdWIvcGFydHktY3Jhd2xlci9hcHAvYXBwL3JvdXRlcy9pbWFnZS8kaW1hZ2VJZC50c3giLCAicm91dGU6L1VzZXJzL21hdHRoaWFzbWFydGluL0dpdEh1Yi9wYXJ0eS1jcmF3bGVyL2FwcC9hcHAvcm91dGVzL3BhcnRpZXMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9tYXR0aGlhc21hcnRpbi9HaXRIdWIvcGFydHktY3Jhd2xlci9hcHAvYXBwL3JvdXRlcy9jaXRpZXMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9tYXR0aGlhc21hcnRpbi9HaXRIdWIvcGFydHktY3Jhd2xlci9hcHAvYXBwL3JvdXRlcy91c2VyLyR1c2VySWQudHN4IiwgInJvdXRlOi9Vc2Vycy9tYXR0aGlhc21hcnRpbi9HaXRIdWIvcGFydHktY3Jhd2xlci9hcHAvYXBwL3JvdXRlcy91c2VyL2NyZWF0ZS50c3giLCAiLi4vYXBwL3V0aWxzL3JhbmRvbS50cyIsICIuLi9hcHAvdXRpbHMvd29yZHMudHMiLCAicm91dGU6L1VzZXJzL21hdHRoaWFzbWFydGluL0dpdEh1Yi9wYXJ0eS1jcmF3bGVyL2FwcC9hcHAvcm91dGVzL3VzZXIvbG9naW4udHN4IiwgInJvdXRlOi9Vc2Vycy9tYXR0aGlhc21hcnRpbi9HaXRIdWIvcGFydHktY3Jhd2xlci9hcHAvYXBwL3JvdXRlcy9yYXctZGF0YS50c3giLCAicm91dGU6L1VzZXJzL21hdHRoaWFzbWFydGluL0dpdEh1Yi9wYXJ0eS1jcmF3bGVyL2FwcC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvbWF0dGhpYXNtYXJ0aW4vR2l0SHViL3BhcnR5LWNyYXdsZXIvYXBwL2FwcC9yb3V0ZXMvYXV0aC50c3giLCAiLi4vYXBwL3JvdXRlcy91c2VyLyR1c2VySWQudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL21hdHRoaWFzbWFydGluL0dpdEh1Yi9wYXJ0eS1jcmF3bGVyL2FwcC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvbWF0dGhpYXNtYXJ0aW4vR2l0SHViL3BhcnR5LWNyYXdsZXIvYXBwL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbWF0dGhpYXNtYXJ0aW4vR2l0SHViL3BhcnR5LWNyYXdsZXIvYXBwL2FwcC9yb3V0ZXMvYm9va21hcmtzL2NyZWF0ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL21hdHRoaWFzbWFydGluL0dpdEh1Yi9wYXJ0eS1jcmF3bGVyL2FwcC9hcHAvcm91dGVzL2Jvb2ttYXJrcy9kZWxldGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9tYXR0aGlhc21hcnRpbi9HaXRIdWIvcGFydHktY3Jhd2xlci9hcHAvYXBwL3JvdXRlcy9wYXJ0aWVzLyRwYXJ0eUlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbWF0dGhpYXNtYXJ0aW4vR2l0SHViL3BhcnR5LWNyYXdsZXIvYXBwL2FwcC9yb3V0ZXMvYm9va21hcmtzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvbWF0dGhpYXNtYXJ0aW4vR2l0SHViL3BhcnR5LWNyYXdsZXIvYXBwL2FwcC9yb3V0ZXMvY2l0aWVzLyRjaXR5SWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9tYXR0aGlhc21hcnRpbi9HaXRIdWIvcGFydHktY3Jhd2xlci9hcHAvYXBwL3JvdXRlcy9pbWFnZS8kaW1hZ2VJZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL21hdHRoaWFzbWFydGluL0dpdEh1Yi9wYXJ0eS1jcmF3bGVyL2FwcC9hcHAvcm91dGVzL3BhcnRpZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9tYXR0aGlhc21hcnRpbi9HaXRIdWIvcGFydHktY3Jhd2xlci9hcHAvYXBwL3JvdXRlcy9jaXRpZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9tYXR0aGlhc21hcnRpbi9HaXRIdWIvcGFydHktY3Jhd2xlci9hcHAvYXBwL3JvdXRlcy91c2VyLyR1c2VySWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvbWF0dGhpYXNtYXJ0aW4vR2l0SHViL3BhcnR5LWNyYXdsZXIvYXBwL2FwcC9yb3V0ZXMvdXNlci9jcmVhdGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvVXNlcnMvbWF0dGhpYXNtYXJ0aW4vR2l0SHViL3BhcnR5LWNyYXdsZXIvYXBwL2FwcC9yb3V0ZXMvdXNlci9sb2dpbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9Vc2Vycy9tYXR0aGlhc21hcnRpbi9HaXRIdWIvcGFydHktY3Jhd2xlci9hcHAvYXBwL3JvdXRlcy9yYXctZGF0YS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIi9Vc2Vycy9tYXR0aGlhc21hcnRpbi9HaXRIdWIvcGFydHktY3Jhd2xlci9hcHAvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTQgZnJvbSBcIi9Vc2Vycy9tYXR0aGlhc21hcnRpbi9HaXRIdWIvcGFydHktY3Jhd2xlci9hcHAvYXBwL3JvdXRlcy9hdXRoLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYm9va21hcmtzL2NyZWF0ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYm9va21hcmtzL2NyZWF0ZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJib29rbWFya3MvY3JlYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9ib29rbWFya3MvZGVsZXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ib29rbWFya3MvZGVsZXRlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJvb2ttYXJrcy9kZWxldGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3BhcnRpZXMvJHBhcnR5SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BhcnRpZXMvJHBhcnR5SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGFydGllcy86cGFydHlJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYm9va21hcmtzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ib29rbWFya3MvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYm9va21hcmtzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2l0aWVzLyRjaXR5SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NpdGllcy8kY2l0eUlkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNpdGllcy86Y2l0eUlkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9pbWFnZS8kaW1hZ2VJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW1hZ2UvJGltYWdlSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaW1hZ2UvOmltYWdlSWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3BhcnRpZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BhcnRpZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGFydGllc1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2NpdGllcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2l0aWVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNpdGllc1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL3VzZXIvJHVzZXJJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdXNlci8kdXNlcklkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInVzZXIvOnVzZXJJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvdXNlci9jcmVhdGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3VzZXIvY3JlYXRlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInVzZXIvY3JlYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvdXNlci9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdXNlci9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ1c2VyL2xvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvcmF3LWRhdGFcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Jhdy1kYXRhXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInJhdy1kYXRhXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL2F1dGhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IEVudHJ5Q29udGV4dCwgUmVtaXhTZXJ2ZXIgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBhdXRoQ29va2llIH0gZnJvbSAnLi9jb29raWVzLnNlcnZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0LFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+KTtcblxuICBjb25zdCBjb29raWVIZWFkZXIgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKTtcbiAgY29uc3QgaXNBdXRob3JpemVkID0gKGF3YWl0IGF1dGhDb29raWUucGFyc2UoY29va2llSGVhZGVyKSkgfHwgZmFsc2U7XG5cbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG5cbiAgaWYgKCFpc0F1dGhvcml6ZWQgJiYgdXJsLnBhdGhuYW1lICE9PSAnL2F1dGgnKSB7XG4gICAgcmVzcG9uc2VTdGF0dXNDb2RlID0gMzAyO1xuICAgIHJlc3BvbnNlSGVhZGVycy5zZXQoXG4gICAgICAnTG9jYXRpb24nLFxuICAgICAgdXJsLnBhdGhuYW1lLmxlbmd0aCA+IDEgPyAnL2F1dGg/cmVkaXJlY3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh1cmwucGF0aG5hbWUpIDogJy9hdXRoJyxcbiAgICApO1xuICB9IGVsc2UgaWYgKGlzQXV0aG9yaXplZCAmJiB1cmwucGF0aG5hbWUgPT09ICcvYXV0aCcpIHtcbiAgICBjb25zdCByZWRpcmVjdFBhdGggPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncmVkaXJlY3QnKSB8fCAnLyc7XG4gICAgcmVzcG9uc2VTdGF0dXNDb2RlID0gMzAyO1xuICAgIHJlc3BvbnNlSGVhZGVycy5zZXQoJ0xvY2F0aW9uJywgcmVkaXJlY3RQYXRoKTtcbiAgfVxuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKCc8IURPQ1RZUEUgaHRtbD4nICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb29raWUgfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBjb25zdCBhdXRoQ29va2llID0gY3JlYXRlQ29va2llKCdhdXRoJywge1xuICBleHBpcmVzOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgNjBfMDAwICogNjAgKiAyNCAqIDM2NSksIC8vIDEgeWVhclxuICBodHRwT25seTogdHJ1ZSxcbiAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzNjUsIC8vIDEgeWVhclxuICBwYXRoOiAnLycsXG4gIHNhbWVTaXRlOiAnc3RyaWN0JyxcbiAgc2VjcmV0czogW3Byb2Nlc3MuZW52LkFQUF9TRUNSRVQhXSxcbiAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1c2VyQ29va2llID0gY3JlYXRlQ29va2llKCd1c2VyJywge1xuICBleHBpcmVzOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgNjBfMDAwICogNjAgKiAyNCAqIDM2NSksIC8vIDEgeWVhclxuICBodHRwT25seTogdHJ1ZSxcbiAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzNjUsIC8vIDEgeWVhclxuICBwYXRoOiAnLycsXG4gIHNhbWVTaXRlOiAnc3RyaWN0JyxcbiAgc2VjcmV0czogW3Byb2Nlc3MuZW52LkFQUF9TRUNSRVQhXSxcbiAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxufSk7XG4iLCAiaW1wb3J0IHsgRXJyb3JCb3VuZGFyeUNvbXBvbmVudCB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3Qvcm91dGVNb2R1bGVzJztcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YSxcbiAgTWV0YUZ1bmN0aW9uLFxuICBPdXRsZXQsXG4gIHJlZGlyZWN0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbn0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgYXV0aENvb2tpZSwgdXNlckNvb2tpZSB9IGZyb20gJy4vY29va2llcy5zZXJ2ZXInO1xuaW1wb3J0IGRiIGZyb20gJy4vZGIuc2VydmVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgeyBSb290RGF0YSB9IGZyb20gJy4vdXRpbHMvdHlwZXMtYW5kLWVudW1zJztcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdQYXJ0eWJpbGRlcicgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KTogUHJvbWlzZTxSb290RGF0YT4gPT4ge1xuICBjb25zdCBjb29raWVIZWFkZXIgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKTtcblxuICBjb25zdCB1c2VybmFtZSA9IChhd2FpdCB1c2VyQ29va2llLnBhcnNlKGNvb2tpZUhlYWRlcikpIHx8IHVuZGVmaW5lZDtcbiAgY29uc3QgYm9va21hcmtzID1cbiAgICB1c2VybmFtZSAmJiB0eXBlb2YgdXNlcm5hbWUgPT09ICdzdHJpbmcnXG4gICAgICA/IGF3YWl0IGRiLmJvb2ttYXJrLmZpbmRNYW55KHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdXNlcjogeyBuYW1lOiB1c2VybmFtZSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICA6IFtdO1xuXG4gIHJldHVybiB7XG4gICAgZW52czoge1xuICAgICAgTUlOSU9fQkFTRV9VUkw6IHByb2Nlc3MuZW52Lk1JTklPX0JBU0VfVVJMIHx8ICcnLFxuICAgICAgQVBQX0JBU0VfVVJMOiBwcm9jZXNzLmVudi5BUFBfQkFTRV9VUkwgfHwgJycsXG4gICAgfSxcbiAgICB1c2VybmFtZSxcbiAgICBib29rbWFya3MsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHsgZW52cyB9ID0gdXNlTG9hZGVyRGF0YTxSb290RGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJkZVwiIGNsYXNzTmFtZT1cImgtZnVsbCBzY3JvbGwtc21vb3RoXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiBzaXplcz1cIjIwMHgyMDBcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17ZW52cy5BUFBfQkFTRV9VUkwgKyAnL2xvZ28ucG5nJ30gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp0eXBlXCIgY29udGVudD1cImltYWdlL3BuZ1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiNTI0XCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiMTgzXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJoLWZ1bGxcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgIF9faHRtbDogYHdpbmRvdy5FTlYgPSAke0pTT04uc3RyaW5naWZ5KGVudnMpfWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUm9vdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZGVcIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgRXJyb3JCb3VuZGFyeTogRXJyb3JCb3VuZGFyeUNvbXBvbmVudCA9ICh7IGVycm9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZGVcIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzbTpwLTZcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+U29ycnksIGRhIGlzdCBpcmdlbmR3YXMgc2NoaWVmIGdlbGF1ZmVuIFx1RDgzRFx1REU0ODwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59O1xuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgX19kYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG4vLyB0aGlzIGlzIG5lZWRlZCBiZWNhdXNlIGluIGRldmVsb3BtZW50IHdlIGRvbid0IHdhbnQgdG8gcmVzdGFydFxuLy8gdGhlIHNlcnZlciB3aXRoIGV2ZXJ5IGNoYW5nZSwgYnV0IHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGRvbid0XG4vLyBjcmVhdGUgYSBuZXcgY29ubmVjdGlvbiB0byB0aGUgREIgd2l0aCBldmVyeSBjaGFuZ2UgZWl0aGVyLlxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgZGIuJGNvbm5lY3QoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLl9fZGIpIHtcbiAgICBnbG9iYWwuX19kYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICBnbG9iYWwuX19kYi4kY29ubmVjdCgpO1xuICB9XG4gIGRiID0gZ2xvYmFsLl9fZGI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiIiwgImltcG9ydCB7IFByaXNtYSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBqc29uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IGRiIGZyb20gJ34vZGIuc2VydmVyJztcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IHVzZXJuYW1lID0gZm9ybURhdGEuZ2V0KCd1c2VybmFtZScpO1xuICBjb25zdCBpbWFnZUlkID0gZm9ybURhdGEuZ2V0KCdpbWFnZUlkJyk7XG5cbiAgaWYgKCF1c2VybmFtZSB8fCAhaW1hZ2VJZCB8fCB0eXBlb2YgdXNlcm5hbWUgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBpbWFnZUlkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBqc29uKHsgZXJyb3I6ICdNaXNzaW5nIHVzZXJuYW1lIG9yIGltYWdlSWQnIH0pO1xuICB9XG4gIGNvbnN0IGJvb2ttYXJrOiBQcmlzbWEuQm9va21hcmtDcmVhdGVJbnB1dCA9IHtcbiAgICB1c2VyOiB7IGNvbm5lY3Q6IHsgbmFtZTogdXNlcm5hbWUgfSB9LFxuICAgIGltYWdlOiB7IGNvbm5lY3Q6IHsgaWQ6IGltYWdlSWQgfSB9LFxuICB9O1xuICB0cnkge1xuICAgIGF3YWl0IGRiLmJvb2ttYXJrLmNyZWF0ZSh7XG4gICAgICBkYXRhOiBib29rbWFyayxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgaW1hZ2VJZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIGpzb24oeyBvazogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgcmV0dXJuIGpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGpzb24oeyBlcnJvcjogJ1Vua25vd24gZXJyb3InIH0pO1xuICB9XG59O1xuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBqc29uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IGRiIGZyb20gJ34vZGIuc2VydmVyJztcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IGJvb2ttYXJrSWQgPSBmb3JtRGF0YS5nZXQoJ2Jvb2ttYXJrSWQnKTtcblxuICBpZiAoIWJvb2ttYXJrSWQgfHwgdHlwZW9mIGJvb2ttYXJrSWQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGpzb24oeyBlcnJvcjogJ01pc3NpbmcgYm9va21hcmtJZCcgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBhd2FpdCBkYi5ib29rbWFyay5kZWxldGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IGJvb2ttYXJrSWQsXG4gICAgICB9LFxuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIGlkOiB0cnVlLFxuICAgICAgICBpbWFnZUlkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4ganNvbih7IG9rOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICByZXR1cm4ganNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgICByZXR1cm4ganNvbih7IGVycm9yOiAnVW5rbm93biBlcnJvcicgfSk7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHsgUGFydHkgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgeyBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IEltYWdlTGlzdCBmcm9tICd+L2NvbXBvbmVudHMvSW1hZ2VMaXN0JztcbmltcG9ydCBQYWdlIGZyb20gJ34vY29tcG9uZW50cy9QYWdlJztcbmltcG9ydCBkYiBmcm9tICd+L2RiLnNlcnZlcic7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnfi91dGlscy9pbnRsJztcbmltcG9ydCB7IFBhcnR5RGF0YSB9IGZyb20gJ34vdXRpbHMvdHlwZXMtYW5kLWVudW1zJztcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogYCR7ZGF0YT8ubmFtZSB8fCAnUGFydHknfSAtIFBhcnR5YmlsZGVyYCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSk6IFByb21pc2U8UGFydHlEYXRhIHwgbnVsbD4gPT4ge1xuICBjb25zdCB7IHBhcnR5SWQgfSA9IHBhcmFtcztcblxuICBjb25zdCBwYXJ0eSA9IGF3YWl0IGRiLnBhcnR5LmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHsgaWQ6IHBhcnR5SWQgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBpbWFnZXM6IHtcbiAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgIHJhd0RhdGFJZDogJ2FzYycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY2l0eToge1xuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgY291bnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBfY291bnQ6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgaW1hZ2VzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHBhcnR5O1xufTtcblxuY29uc3QgUGFydHkgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcnR5ID0gdXNlTG9hZGVyRGF0YTxQYXJ0eURhdGEgfCBudWxsPigpO1xuXG4gIGlmICghcGFydHkpXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5vU2VhcmNoPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBtZDpweC0wXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlBhcnR5IG5pY2h0IGdlZnVuZGVuPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5vU2VhcmNoPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHNtOnB4LTYgbWQ6cHgtMFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAge3BhcnR5Lm5hbWV9IGlueycgJ31cbiAgICAgICAgICA8TGluayB0bz17YC9jaXRpZXMvJHtwYXJ0eS5jaXR5LmlkfWB9IGNsYXNzTmFtZT1cInRleHQtc2t5LTcwMCB1bmRlcmxpbmUtb2Zmc2V0LTIgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICB7cGFydHkuY2l0eS5uYW1lfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+e2Zvcm1hdERhdGUocGFydHkuZGF0ZSl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8SW1hZ2VMaXN0IGltYWdlcz17cGFydHkuaW1hZ2VzfSAvPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnR5O1xuIiwgImltcG9ydCB7IEltYWdlIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgdXNlRWZmZWN0LCB1c2VJbXBlcmF0aXZlSGFuZGxlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICd+L3V0aWxzL2NsYXNzLW5hbWVzJztcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSc7XG5pbXBvcnQgSW1hZ2VMaXN0SXRlbSBmcm9tICcuL0ltYWdlTGlzdEl0ZW0nO1xuaW1wb3J0IFVzZXJMb2dpbiBmcm9tICcuL1VzZXJMb2dpbic7XG5cbnR5cGUgSW1hZ2VMaXN0UHJvcHMgPSB7XG4gIGltYWdlczogSW1hZ2VbXTtcbiAgdG9QYXJ0eT86IGJvb2xlYW47XG4gIHRvSW1hZ2U/OiBib29sZWFuO1xuICBpc1JhbmRvbT86IGJvb2xlYW47XG4gIGFsbG93Q2FuY2VsaW5nRGVsZXRlQm9va21hcms/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgSW1hZ2VMaXN0UmVmID0ge1xuICBzZXRIaWdobGlnaHRlZEltYWdlSWQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZyB8IHVuZGVmaW5lZD4+O1xufTtcblxuY29uc3QgSW1hZ2VMaXN0ID0gZm9yd2FyZFJlZjxJbWFnZUxpc3RSZWYsIEltYWdlTGlzdFByb3BzPihcbiAgKHsgaW1hZ2VzLCB0b1BhcnR5LCB0b0ltYWdlLCBpc1JhbmRvbSwgYWxsb3dDYW5jZWxpbmdEZWxldGVCb29rbWFyayB9LCByZWYpID0+IHtcbiAgICBjb25zdCBbb3BlbkdhbGxlcnksIHNldE9wZW5HYWxsZXJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbb3BlbkxvZ2luLCBzZXRPcGVuTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpbml0aWFsR2FsbGVyeUluZGV4LCBzZXRJbml0aWFsR2FsbGVyeUluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gICAgY29uc3QgW2hpZ2hsaWdodGVkSW1hZ2VJZCwgc2V0SGlnaGxpZ2h0ZWRJbWFnZUlkXSA9IHVzZVN0YXRlPEltYWdlWydpZCddIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7IHNldEhpZ2hsaWdodGVkSW1hZ2VJZCB9KSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKGhpZ2hsaWdodGVkSW1hZ2VJZCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRIaWdobGlnaHRlZEltYWdlSWQodW5kZWZpbmVkKTtcbiAgICAgICAgfSwgMTI1MCk7XG4gICAgICB9XG4gICAgfSwgW2hpZ2hsaWdodGVkSW1hZ2VJZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxHYWxsZXJ5XG4gICAgICAgICAgaW1hZ2VzPXtpbWFnZXN9XG4gICAgICAgICAgaW5kZXg9e2luaXRpYWxHYWxsZXJ5SW5kZXh9XG4gICAgICAgICAgb3Blbj17b3BlbkdhbGxlcnl9XG4gICAgICAgICAgb25DbG9zZT17KGltYWdlSWQpID0+IHtcbiAgICAgICAgICAgIHNldE9wZW5HYWxsZXJ5KGZhbHNlKTtcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkSW1hZ2VJZChpbWFnZUlkKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uU2hvd0xvZ2luPXsoKSA9PiBzZXRPcGVuTG9naW4odHJ1ZSl9XG4gICAgICAgICAgey4uLnsgdG9QYXJ0eSwgdG9JbWFnZSwgaXNSYW5kb20sIGFsbG93Q2FuY2VsaW5nRGVsZXRlQm9va21hcmsgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFVzZXJMb2dpbiBvcGVuPXtvcGVuTG9naW59IG9uQ2xvc2U9eygpID0+IHNldE9wZW5Mb2dpbihmYWxzZSl9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IG1kOnB4LTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIj5cbiAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICByb2xlPVwibGlzdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAnZ3JpZCBncmlkLWNvbHMtMiBnYXAtMyBnYXAteS0zJyxcbiAgICAgICAgICAgICAgICAneHM6Z2FwLTQgeHM6Z2FwLXktNScsXG4gICAgICAgICAgICAgICAgJ2xnOmdyaWQtY29scy0zIGxnOmdhcC14LTYgbGc6Z2FwLXktNycsXG4gICAgICAgICAgICAgICAgJ3hsOmdyaWQtY29scy00IHhsOmdhcC14LTggeGw6Z2FwLXktOScsXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8SW1hZ2VMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtpbWFnZS5pZH1cbiAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5pdGlhbEdhbGxlcnlJbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHNldE9wZW5HYWxsZXJ5KHRydWUpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkPXtpbWFnZS5pZCA9PT0gaGlnaGxpZ2h0ZWRJbWFnZUlkfVxuICAgICAgICAgICAgICAgICAgb25TaG93TG9naW49eygpID0+IHNldE9wZW5Mb2dpbih0cnVlKX1cbiAgICAgICAgICAgICAgICAgIHsuLi57IHRvUGFydHksIHRvSW1hZ2UsIGlzUmFuZG9tLCBhbGxvd0NhbmNlbGluZ0RlbGV0ZUJvb2ttYXJrIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUxpc3Q7XG4iLCAiZXhwb3J0IGNvbnN0IGNsYXNzTmFtZXMgPSAoLi4uY2xhc3NlczogKHN0cmluZyB8IGZhbHNlIHwgdW5kZWZpbmVkKVtdKSA9PiB7XG4gIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG59O1xuIiwgIi8qIFRoaXMgZXhhbXBsZSByZXF1aXJlcyBUYWlsd2luZCBDU1MgdjIuMCsgKi9cbmltcG9ydCB7IERpYWxvZywgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0JztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnfi91dGlscy9jbGFzcy1uYW1lcyc7XG5pbXBvcnQgeyBnZXRFbnYgfSBmcm9tICd+L3V0aWxzL2VudnMnO1xuaW1wb3J0IEltYWdlQWN0aW9ucyBmcm9tICcuL0ltYWdlQWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnkoe1xuICBpbWFnZXMsXG4gIGluZGV4LFxuICBvcGVuLFxuICBvbkNsb3NlLFxuICB0b1BhcnR5LFxuICB0b0ltYWdlLFxuICBpc1JhbmRvbSxcbiAgYWxsb3dDYW5jZWxpbmdEZWxldGVCb29rbWFyayxcbiAgb25TaG93TG9naW4sXG59OiB7XG4gIGltYWdlczogSW1hZ2VbXTtcbiAgaW5kZXg/OiBudW1iZXI7XG4gIG9wZW4/OiBib29sZWFuO1xuICBvbkNsb3NlOiAoaW1hZ2VJZD86IEltYWdlWydpZCddKSA9PiB2b2lkO1xuICB0b1BhcnR5PzogYm9vbGVhbjtcbiAgdG9JbWFnZT86IGJvb2xlYW47XG4gIGlzUmFuZG9tPzogYm9vbGVhbjtcbiAgYWxsb3dDYW5jZWxpbmdEZWxldGVCb29rbWFyaz86IGJvb2xlYW47XG4gIG9uU2hvd0xvZ2luOiAoKSA9PiB2b2lkO1xufSkge1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzaG93SW1hZ2VOdW1iZXIsIHNldFNob3dJbWFnZU51bWJlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2NoYW5nZU9mZnNldCwgc2V0Q2hhbmdlT2Zmc2V0XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgb3Blbikge1xuICAgICAgc2V0Q2hhbmdlT2Zmc2V0KDApO1xuICAgICAgc2V0Q3VycmVudEluZGV4KGluZGV4KTtcbiAgICB9XG4gIH0sIFtpbmRleCwgb3Blbl0pO1xuXG4gIGNvbnN0IGhhbmRsZVVzZXJLZXlQcmVzcyA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG4gICAgaWYgKGtleUNvZGUgPT09IDM3KSBoYW5kbGVQcmV2aW91cygpO1xuICAgIGlmIChrZXlDb2RlID09PSAzOSkgaGFuZGxlTmV4dCgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVVc2VyS2V5UHJlc3MpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVVzZXJLZXlQcmVzcyk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZVVzZXJLZXlQcmVzc10pO1xuXG4gIGNvbnN0IGhhbmRsZVByZXZpb3VzID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggPiAwID8gY3VycmVudEluZGV4IC0gMSA6IGltYWdlcy5sZW5ndGggLSAxKTtcbiAgICBzZXRDaGFuZ2VPZmZzZXQob2xkID0+IG9sZCAtIDEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KGN1cnJlbnRJbmRleCA8IGltYWdlcy5sZW5ndGggLSAxID8gY3VycmVudEluZGV4ICsgMSA6IDApO1xuICAgIHNldENoYW5nZU9mZnNldChvbGQgPT4gb2xkICsgMSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAob3Blbikge1xuICAgICAgc2V0U2hvd0ltYWdlTnVtYmVyKHRydWUpO1xuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTaG93SW1hZ2VOdW1iZXIoZmFsc2UpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRJbmRleCwgb3Blbl0pO1xuXG4gIGNvbnN0IGN1cnJlbnRJbWFnZSA9IGltYWdlc1tjdXJyZW50SW5kZXhdO1xuXG4gIHJldHVybiAoXG4gICAgPFRyYW5zaXRpb24uUm9vdCBzaG93PXtvcGVufSBhcz17RnJhZ21lbnR9PlxuICAgICAgPERpYWxvZ1xuICAgICAgICBhcz1cImRpdlwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei0xMCBvdmVyZmxvdy15LWF1dG9cIlxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBvbkNsb3NlKE1hdGguYWJzKGNoYW5nZU9mZnNldCkgPiA0ID8gY3VycmVudEltYWdlPy5pZCA6IHVuZGVmaW5lZCl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieHM6cHgtNCBibG9jayBtaW4taC1zY3JlZW4gaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIHB4LTEgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxuICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxuICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wXCJcbiAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEaWFsb2cuT3ZlcmxheSBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWdyYXktNTAwIGJnLW9wYWNpdHktNzUgdHJhbnNpdGlvbi1vcGFjaXR5XCIgLz5cbiAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XG5cbiAgICAgICAgICB7LyogVGhpcyBlbGVtZW50IGlzIHRvIHRyaWNrIHRoZSBicm93c2VyIGludG8gY2VudGVyaW5nIHRoZSBtb2RhbCBjb250ZW50cy4gKi99XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGgtc2NyZWVuIGFsaWduLW1pZGRsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgJiM4MjAzO1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxuICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxuICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyEhY3VycmVudEltYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC00IG1iLTE2IGlubGluZS1ibG9jayBtYXgtdy00eGwgdHJhbnNmb3JtIHJvdW5kZWQtbGcgYmctd2hpdGUgcC0wLjUgdGV4dC1sZWZ0IGFsaWduLW1pZGRsZSBzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGxcIj5cbiAgICAgICAgICAgICAgICB7LyogU2hvdyBudW1iZXIgb2YgY3VycmVudCBpbWFnZSBhbmQgbnVtYmVyIG9mIHRvdGFsIGltYWdlcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICdhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHJvdW5kZWQtYmwtbGcgcm91bmRlZC10ci1sZyBiZy13aGl0ZSBweC0yIHB0LTAuNSBwYi0xIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAnLFxuICAgICAgICAgICAgICAgICAgICAhc2hvd0ltYWdlTnVtYmVyICYmICdvcGFjaXR5LTAnLFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudEluZGV4ICsgMX0gLyB7aW1hZ2VzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2dldEVudignTUlOSU9fQkFTRV9VUkwnKSArIGN1cnJlbnRJbWFnZS5maWxlUGF0aH1cbiAgICAgICAgICAgICAgICAgIGFsdD17YEJpbGQgJHtjdXJyZW50SW5kZXggKyAxfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXN9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIHJpZ2h0LTIvMyBjdXJzb3Itdy1yZXNpemUgZm9jdXM6b3V0bGluZS1ub25lIHNlbGVjdC1ub25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0yLzMgcmlnaHQtMCBjdXJzb3ItZS1yZXNpemUgZm9jdXM6b3V0bGluZS1ub25lIHNlbGVjdC1ub25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieHM6cHQtMiBhYnNvbHV0ZSB0b3AtZnVsbCBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHQtMSBwb2ludGVyLWV2ZW50cy1ub25lXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VBY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtjdXJyZW50SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICAgICAgICAgICAgdG9QYXJ0eSxcbiAgICAgICAgICAgICAgICAgICAgICB0b0ltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgIGlzUmFuZG9tLFxuICAgICAgICAgICAgICAgICAgICAgIGFsbG93Q2FuY2VsaW5nRGVsZXRlQm9va21hcmssXG4gICAgICAgICAgICAgICAgICAgICAgb25TaG93TG9naW4sXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvVHJhbnNpdGlvbi5Sb290PlxuICApO1xufVxuIiwgImltcG9ydCB7IEVudnMgfSBmcm9tICcuL3R5cGVzLWFuZC1lbnVtcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgRU5WOiBFbnZzO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRFbnYgPSAoa2V5OiBrZXlvZiBFbnZzKTogc3RyaW5nID0+XG4gICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnID8gcHJvY2Vzcy5lbnZba2V5XSA6IHdpbmRvdy5FTlZba2V5XSkgfHwgJyc7XG4iLCAiaW1wb3J0IHsgSGVhcnRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJztcbmltcG9ydCB7IENoZWNrQ2lyY2xlSWNvbiwgSGVhcnRJY29uIGFzIEhlYXJ0SWNvblNvbGlkIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29weVRvQ2xpcGJvYXJkIGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJztcbmltcG9ydCB7IExpbmssIHVzZUZldGNoZXIsIHVzZU1hdGNoZXMgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnfi91dGlscy9jbGFzcy1uYW1lcyc7XG5pbXBvcnQgeyBnZXRFbnYgfSBmcm9tICd+L3V0aWxzL2VudnMnO1xuaW1wb3J0IHsgUm9vdERhdGEgfSBmcm9tICd+L3V0aWxzL3R5cGVzLWFuZC1lbnVtcyc7XG5cbmNvbnN0IEltYWdlQWN0aW9ucyA9ICh7XG4gIGltYWdlLFxuICB0b1BhcnR5LFxuICB0b0ltYWdlLFxuICBpc1JhbmRvbSxcbiAgb25XaGl0ZSxcbiAgYWxsb3dDYW5jZWxpbmdEZWxldGVCb29rbWFyayxcbiAgb25TaG93TG9naW4sXG59OiB7XG4gIGltYWdlOiBJbWFnZTtcbiAgdG9QYXJ0eT86IGJvb2xlYW47XG4gIHRvSW1hZ2U/OiBib29sZWFuO1xuICBpc1JhbmRvbT86IGJvb2xlYW47XG4gIG9uV2hpdGU/OiBib29sZWFuO1xuICBhbGxvd0NhbmNlbGluZ0RlbGV0ZUJvb2ttYXJrPzogYm9vbGVhbjtcbiAgb25TaG93TG9naW46ICgpID0+IHZvaWQ7XG59KSA9PiB7XG4gIGNvbnN0IHsgYm9va21hcmtzLCB1c2VybmFtZSB9ID0gdXNlTWF0Y2hlcygpWzBdIS5kYXRhIGFzIFJvb3REYXRhO1xuICBjb25zdCBib29rbWFya2VyID0gdXNlRmV0Y2hlcigpO1xuICBjb25zdCBbY29waWVkSWQsIHNldENvcGllZElkXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW3RvRGVsZXRlZEJvb2ttYXJrSWQsIHNldFRvRGVsZXRlZEJvb2ttYXJrSWRdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gIC8vIHJlc2V0IHRoZSBjb3BpZWQgaWQgYWZ0ZXIgYSBzZWNvbmRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29waWVkSWQpIHtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHNldENvcGllZElkKHVuZGVmaW5lZCksIDEwMDApO1xuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9XG4gIH0sIFtjb3BpZWRJZF0pO1xuXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUJvb2ttYXJrQ2xpY2sgPSAoaW1hZ2VJZDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCF1c2VybmFtZSkge1xuICAgICAgb25TaG93TG9naW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9va21hcmtlci5zdWJtaXQoXG4gICAgICAgIHsgdXNlcm5hbWU6IHVzZXJuYW1lLCBpbWFnZUlkIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICBhY3Rpb246IGAvYm9va21hcmtzL2NyZWF0ZWAsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVCb29rbWFyayA9IChib29rbWFya0lkOiBzdHJpbmcpID0+IHtcbiAgICBib29rbWFya2VyLnN1Ym1pdChcbiAgICAgIHsgYm9va21hcmtJZCB9LFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdkZWxldGUnLFxuICAgICAgICBhY3Rpb246IGAvYm9va21hcmtzL2RlbGV0ZWAsXG4gICAgICB9LFxuICAgICk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodG9EZWxldGVkQm9va21hcmtJZCkge1xuICAgICAgLy8gd2FpdCA0MDAwbXMgdG8gZGVsZXRlIHRoZSBib29rbWFya1xuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkZWxldGVCb29rbWFyayh0b0RlbGV0ZWRCb29rbWFya0lkKTtcbiAgICAgIH0sIDQwMDApO1xuXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH1cbiAgfSwgW3RvRGVsZXRlZEJvb2ttYXJrSWRdKTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVCb29rbWFya0NsaWNrID0gYXN5bmMgKGJvb2ttYXJrSWQ6IHN0cmluZykgPT4ge1xuICAgIGlmIChhbGxvd0NhbmNlbGluZ0RlbGV0ZUJvb2ttYXJrKSB7XG4gICAgICBzZXRUb0RlbGV0ZWRCb29rbWFya0lkKGJvb2ttYXJrSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGVCb29rbWFyayhib29rbWFya0lkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYm9va21hcmtJZCA9IGJvb2ttYXJrcy5maW5kKChib29rbWFyaykgPT4gYm9va21hcmsuaW1hZ2VJZCA9PT0gaW1hZ2UuaWQpPy5pZDtcbiAgY29uc3QgaXNCb29rbWFya2VkID1cbiAgICAoISFib29rbWFya0lkIHx8IGJvb2ttYXJrZXIuc3VibWlzc2lvbj8ubWV0aG9kID09PSAnUE9TVCcpICYmIGJvb2ttYXJrZXIuc3VibWlzc2lvbj8ubWV0aG9kICE9PSAnREVMRVRFJztcbiAgY29uc3QgYWN0aW9uUGVuZGluZyA9IGJvb2ttYXJrZXIuc3RhdGUgIT09ICdpZGxlJztcblxuICBjb25zdCBidXR0b25DbGFzc05hbWUgPSBjbGFzc05hbWVzKFxuICAgICdyZWxhdGl2ZSBwb2ludGVyLWV2ZW50cy1hdXRvIGN1cnNvci1wb2ludGVyIHRydW5jYXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJhY2tkcm9wLWJsdXItc20gYmFja2Ryb3AtZmlsdGVyIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBweS0yIHRleHQtY2VudGVyIG92ZXJmbG93LWhpZGRlbicsXG4gICAgb25XaGl0ZSA/ICdiZy1ncmF5LTEwMCBob3ZlcjpiZy1ncmF5LTIwMCcgOiAnYmctd2hpdGUgYmctb3BhY2l0eS01MCBob3ZlcjpiZy1vcGFjaXR5LTEwMCcsXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInhzOnNwYWNlLXgtMiBmbGV4IHNwYWNlLXgtMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgIHshIXRvRGVsZXRlZEJvb2ttYXJrSWQgPyAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb0RlbGV0ZWRCb29rbWFya0lkKHVuZGVmaW5lZCl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGJ1dHRvbkNsYXNzTmFtZSwgJ3h4czpweC00IHctZnVsbCBweC0zJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYW5jZWwtYmFyIGFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCBoLTEgdy1mdWxsIGJnLXNreS01MDBcIiAvPlxuICAgICAgICAgIDxIZWFydEljb24gY2xhc3NOYW1lPVwibXItMS41IGgtNCB3LTQgc2hyaW5rLTAgZ3Jvdy0wXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPlJcdTAwRkNja2dcdTAwRTRuZ2lnPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkgOiAhIWNvcGllZElkID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhidXR0b25DbGFzc05hbWUsICd4eHM6cHgtNCB3LWZ1bGwgcHgtMycpfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPkxpbmsga29waWVydDwvc3Bhbj5cbiAgICAgICAgICA8Q2hlY2tDaXJjbGVJY29uIGNsYXNzTmFtZT1cIm1sLTEgaC00IHctNCBzaHJpbmstMCBncm93LTAgdGV4dC1lbWVyYWxkLTUwMFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAoISFib29rbWFya0lkID8gaGFuZGxlRGVsZXRlQm9va21hcmtDbGljayhib29rbWFya0lkKSA6IGhhbmRsZUNyZWF0ZUJvb2ttYXJrQ2xpY2soaW1hZ2UuaWQpKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXthY3Rpb25QZW5kaW5nfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGJ1dHRvbkNsYXNzTmFtZSwgJ2dyb3ctMCBzaHJpbmstMCBweC0yLjUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNCb29rbWFya2VkID8gPEhlYXJ0SWNvblNvbGlkIGNsYXNzTmFtZT1cInNocmluay0wIGgtNSB3LTUgdGV4dC1yZWQtNTAwXCIgLz4gOiA8SGVhcnRJY29uIGNsYXNzTmFtZT1cInNocmluay0wIGgtNSB3LTVcIiAvPn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7dG9QYXJ0eSA/IChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPXtgL3BhcnRpZXMvJHtpbWFnZS5wYXJ0eUlkfWB9XG4gICAgICAgICAgICAgIHRhcmdldD17aXNSYW5kb20gPyAnX2JsYW5rJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGJ1dHRvbkNsYXNzTmFtZSwgJ3h4czpweC00IHctZnVsbCBweC0zJyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFp1ciBQYXJ0eVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkgOiB0b0ltYWdlID8gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89e2AvaW1hZ2UvJHtpbWFnZS5pZH1gfVxuICAgICAgICAgICAgICB0YXJnZXQ9e2lzUmFuZG9tID8gJ19ibGFuaycgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhidXR0b25DbGFzc05hbWUsICd4eHM6cHgtNCB3LWZ1bGwgcHgtMycpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBadW0gQmlsZFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkIHRleHQ9e2Ake2dldEVudignQVBQX0JBU0VfVVJMJyl9L2ltYWdlLyR7aW1hZ2UuaWR9YH0gb25Db3B5PXsoKSA9PiBzZXRDb3BpZWRJZChpbWFnZS5pZCl9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhidXR0b25DbGFzc05hbWUsICd4eHM6cHgtNCB3LWZ1bGwgcHgtMycpfT5cbiAgICAgICAgICAgICAgICBCaWxkIHRlaWxlblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQWN0aW9ucztcbiIsICJpbXBvcnQgeyBJbWFnZSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ34vdXRpbHMvY2xhc3MtbmFtZXMnO1xuaW1wb3J0IHsgZ2V0RW52IH0gZnJvbSAnfi91dGlscy9lbnZzJztcbmltcG9ydCBJbWFnZUFjdGlvbnMgZnJvbSAnLi9JbWFnZUFjdGlvbnMnO1xuXG5jb25zdCBJbWFnZUxpc3RJdGVtID0gKHtcbiAgaW1hZ2UsXG4gIHRvUGFydHksXG4gIHRvSW1hZ2UsXG4gIGlzUmFuZG9tLFxuICBhbGxvd0NhbmNlbGluZ0RlbGV0ZUJvb2ttYXJrLFxuICBvbkNsaWNrLFxuICBvblNob3dMb2dpbixcbiAgaGlnaGxpZ2h0ZWQsXG59OiB7XG4gIGltYWdlOiBJbWFnZTtcbiAgdG9QYXJ0eT86IGJvb2xlYW47XG4gIHRvSW1hZ2U/OiBib29sZWFuO1xuICBpc1JhbmRvbT86IGJvb2xlYW47XG4gIGFsbG93Q2FuY2VsaW5nRGVsZXRlQm9va21hcms/OiBib29sZWFuO1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICBvblNob3dMb2dpbjogKCkgPT4gdm9pZDtcbiAgaGlnaGxpZ2h0ZWQ/OiBib29sZWFuO1xufSkgPT4ge1xuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZjxIVE1MTElFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoaWdobGlnaHRlZCkge1xuICAgICAgaW1hZ2VSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIGJsb2NrOiAnY2VudGVyJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2hpZ2hsaWdodGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bGlcbiAgICAgIHJlZj17aW1hZ2VSZWZ9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICd4czpzY3JvbGwtbXQtMyByZWxhdGl2ZSBzY3JvbGwtbXQtMiB0cmFuc2l0aW9uLWFsbCBsZzpzY3JvbGwtbXQtNCBzZWxlY3Qtbm9uZScsXG4gICAgICAgIGhpZ2hsaWdodGVkICYmICdhbmltYXRlLXRhZGEgei0xMCcsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgYXNwZWN0LXctMTAgYXNwZWN0LWgtMTAgYmxvY2sgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGJnLWJsYWNrIGZvY3VzLXdpdGhpbjpyaW5nLTIgZm9jdXMtd2l0aGluOnJpbmctc2t5LTUwMCBmb2N1cy13aXRoaW46cmluZy1vZmZzZXQtMiBmb2N1cy13aXRoaW46cmluZy1vZmZzZXQtZ3JheS0xMDBcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17Z2V0RW52KCdNSU5JT19CQVNFX1VSTCcpICsgaW1hZ2UuZmlsZVBhdGh9XG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3BvaW50ZXItZXZlbnRzLW5vbmUgb2JqZWN0LWNvdmVyJywgJ2lzLWhvdmVyOmdyb3VwLWhvdmVyOmJsdXItc20nKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17Z2V0RW52KCdNSU5JT19CQVNFX1VSTCcpICsgaW1hZ2UuZmlsZVBhdGh9XG4gICAgICAgICAgYWx0PXtpbWFnZS5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJpcy1ob3Zlcjpncm91cC1ob3ZlcjpibG9jayBwb2ludGVyLWV2ZW50cy1ub25lIGhpZGRlbiBvYmplY3QtY29udGFpblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgJ3hzOnAtMiBwb2ludGVyLWV2ZW50cy1ub25lIGZsZXggZmxleC1jb2wgaXRlbXMtc3RyZXRjaCBqdXN0aWZ5LWVuZCBwLTEgc206cC00JyxcbiAgICAgICAgICAgICdpcy1ob3Zlcjp0cmFuc2xhdGUteS0yIGlzLWhvdmVyOm9wYWNpdHktMCBpcy1ob3ZlcjpkdXJhdGlvbi0zMDAgaXMtaG92ZXI6Z3JvdXAtaG92ZXI6dHJhbnNsYXRlLXktMCBpcy1ob3Zlcjpncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCcsXG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbWFnZUFjdGlvbnNcbiAgICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgICB0b1BhcnR5LFxuICAgICAgICAgICAgICB0b0ltYWdlLFxuICAgICAgICAgICAgICBpc1JhbmRvbSxcbiAgICAgICAgICAgICAgYWxsb3dDYW5jZWxpbmdEZWxldGVCb29rbWFyayxcbiAgICAgICAgICAgICAgb25TaG93TG9naW4sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlTGlzdEl0ZW07XG4iLCAiLyogVGhpcyBleGFtcGxlIHJlcXVpcmVzIFRhaWx3aW5kIENTUyB2Mi4wKyAqL1xuaW1wb3J0IHsgRGlhbG9nLCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGZXRjaGVyIH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyTG9naW4oeyBvbkNsb3NlLCBvcGVuIH06IHsgb25DbG9zZTogKCkgPT4gdm9pZDsgb3Blbj86IGJvb2xlYW4gfSkge1xuICBjb25zdCBsb2dpbiA9IHVzZUZldGNoZXIoKTtcbiAgY29uc3QgY3JlYXRlID0gdXNlRmV0Y2hlcigpO1xuICBjb25zdCBbdXNlck5vdEZvdW5kLCBzZXRVc2VyTm90Rm91bmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGFzTmV3QWNjb3VudCwgc2V0SGFzTmV3QWNjb3VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgYWN0aW9uUGVuZGluZyA9IGxvZ2luLnN0YXRlICE9PSAnaWRsZScgfHwgY3JlYXRlLnN0YXRlICE9PSAnaWRsZSc7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9naW4uZGF0YT8uZXJyb3IpIHtcbiAgICAgIHNldFVzZXJOb3RGb3VuZCh0cnVlKTtcbiAgICB9XG4gICAgaWYgKGxvZ2luLmRhdGE/Lm9rKSB7XG4gICAgICBvbkNsb3NlKCk7XG4gICAgfVxuICAgIGlmIChjcmVhdGUuZGF0YT8ub2spIHtcbiAgICAgIHNldEhhc05ld0FjY291bnQodHJ1ZSk7XG4gICAgfVxuICB9LCBbbG9naW4uZGF0YSwgY3JlYXRlLmRhdGFdKTtcblxuICBjb25zdCBoYW5kbGVDcmVhdGUgPSAoKSA9PiB7XG4gICAgY3JlYXRlLnN1Ym1pdCh7fSwgeyBtZXRob2Q6ICdwb3N0JywgYWN0aW9uOiAnL3VzZXIvY3JlYXRlJyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUcmFuc2l0aW9uLlJvb3Qgc2hvdz17b3Blbn0gYXM9e0ZyYWdtZW50fT5cbiAgICAgIDxEaWFsb2cgYXM9XCJkaXZcIiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotMTAgb3ZlcmZsb3cteS1hdXRvXCIgb25DbG9zZT17b25DbG9zZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIHB4LTQgcHQtNCBwYi0yMCB0ZXh0LWNlbnRlciBzbTpibG9jayBzbTpwLTBcIj5cbiAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxuICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxuICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wXCJcbiAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEaWFsb2cuT3ZlcmxheSBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWdyYXktNTAwIGJnLW9wYWNpdHktNzUgdHJhbnNpdGlvbi1vcGFjaXR5XCIgLz5cbiAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XG5cbiAgICAgICAgICB7LyogVGhpcyBlbGVtZW50IGlzIHRvIHRyaWNrIHRoZSBicm93c2VyIGludG8gY2VudGVyaW5nIHRoZSBtb2RhbCBjb250ZW50cy4gKi99XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZS1ibG9jayBzbTpoLXNjcmVlbiBzbTphbGlnbi1taWRkbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICYjODIwMztcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcbiAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMCB0cmFuc2xhdGUteS00IHNtOnRyYW5zbGF0ZS15LTAgc206c2NhbGUtOTVcIlxuICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTAgc206c2NhbGUtMTAwXCJcbiAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCBzbTpzY2FsZS0xMDBcIlxuICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCB0cmFuc2xhdGUteS00IHNtOnRyYW5zbGF0ZS15LTAgc206c2NhbGUtOTVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctZnVsbCBtYXgtdy1zbSB0cmFuc2Zvcm0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYmctd2hpdGUgcHgtNCBwdC01IHBiLTQgdGV4dC1sZWZ0IGFsaWduLWJvdHRvbSBzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgc206bXktOCBzbTpwLTYgc206YWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgIHtoYXNOZXdBY2NvdW50ID8gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMFwiPldpY2h0aWchPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIEVzIHd1cmRlIGZcdTAwRkNyIGRpY2ggZWluIG5ldWVyIEFjY291bnQgbWl0IGRlbSBOYW1lbnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctZ3JheS0yMDAgcHgtMiBweS0wLjUgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Y3JlYXRlLmRhdGEudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICBlcnN0ZWxsdC5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1jZW50ZXIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIE1lcmtlIG9kZXIgc2NocmVpYmUgZGlyIGRlbiBOYW1lbiBhdWYsIHVtIGRpY2ggenVrXHUwMEZDbmZ0aWcgZGFtaXQgYW56dW1lbGRlbi5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTYgZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGJnLXNreS02MDAgcHktMiBweC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6Ymctc2t5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctc2t5LTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgSGFiIGljaCB2ZXJzdGFuZGVuXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktOFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDBcIj5Bbm1lbGRlbjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgb2RlcnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmVhdGV9IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtc2t5LTYwMCBob3Zlcjp0ZXh0LXNreS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVpbmVuIEFjY291bnQgZXJzdGVsbGVuXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgZmFsbHMgZHUgbm9jaCBrZWluZW4gQWNjb3VudCBoYXN0LlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxsb2dpbi5Gb3JtIGNsYXNzTmFtZT1cIm10LThcIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiL3VzZXIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiIGRpc2FibGVkPXthY3Rpb25QZW5kaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dXNlck5vdEZvdW5kICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBEZXIgTnV0emVybmFtZSB3dXJkZSBuaWNodCBnZWZ1bmRlbi4gRmFsbHMgZHUgbm9jaCBrZWluZW4gQWNjb3VudCBoYXN0LCBrYW5uc3QgZHUgXHUwMEZDYmVyIGRlblxuICAgICAgICAgICAgICAgICAgICAgICAgICBMaW5rIG9iZW4gZWluZW4gTmV1ZW4gZXJzdGVsbGVuLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1zcGFjZS15LXB4IHJvdW5kZWQtbWQgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVpbiBOdXR6ZXJuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB4LTMgcHktMiBwbGFjZWhvbGRlci1ncmF5LTQwMCBzaGFkb3ctc20gZm9jdXM6Ym9yZGVyLXNreS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctc2t5LTUwMCBzbTp0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctc2t5LTYwMCBweS0yIHB4LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1za3ktNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1za3ktNTAwIGZvY3VzOnJpbmctb2Zmc2V0LTJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25QZW5kaW5nID8gJ1x1MjAyNicgOiAnQW5tZWxkZW4nfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1weCBncm93IGJnLWdyYXktNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTIgc2hyaW5rLTAgdGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5vZGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXB4IGdyb3cgYmctZ3JheS00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGJnLXNreS02MDAgcHktMiBweC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6Ymctc2t5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctc2t5LTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uUGVuZGluZyA/ICdcdTIwMjYnIDogJ05ldWVuIEFjY291bnQgZXJzdGVsbGVuJ31cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgIDwvbG9naW4uRm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L1RyYW5zaXRpb24uUm9vdD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBEaWFsb2csIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCc7XG5pbXBvcnQgeyBIZWFydEljb24sIEhvbWVJY29uLCBMb2NhdGlvbk1hcmtlckljb24sIE1lbnVBbHQySWNvbiwgVXNlcnNJY29uLCBYSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSc7XG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnZGVib3VuY2UnO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZMaW5rLCB1c2VNYXRjaGVzLCB1c2VTZWFyY2hQYXJhbXMsIHVzZVN1Ym1pdCB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICd+L3V0aWxzL2NsYXNzLW5hbWVzJztcbmltcG9ydCB7IFJvb3REYXRhIH0gZnJvbSAnfi91dGlscy90eXBlcy1hbmQtZW51bXMnO1xuXG5jb25zdCBuYXZpZ2F0aW9uID0gW1xuICB7IG5hbWU6ICdIb21lJywgaHJlZjogJy8nLCBpY29uOiBIb21lSWNvbiB9LFxuICB7IG5hbWU6ICdQYXJ0aWVzJywgaHJlZjogJy9wYXJ0aWVzJywgaWNvbjogVXNlcnNJY29uIH0sXG4gIHsgbmFtZTogJ1N0XHUwMEU0ZHRlJywgaHJlZjogJy9jaXRpZXMnLCBpY29uOiBMb2NhdGlvbk1hcmtlckljb24gfSxcbiAgeyBuYW1lOiAnR2VtZXJrdCcsIGhyZWY6ICcvYm9va21hcmtzJywgaWNvbjogSGVhcnRJY29uIH0sXG4gIC8vIHsgbmFtZTogJ1JhdyBEYXRhJywgaHJlZjogJy9yYXctZGF0YScsIGljb246IFVzZXJzSWNvbiB9LFxuXTtcblxuY29uc3QgUGFnZTogUmVhY3QuRkM8eyBub1NlYXJjaD86IGJvb2xlYW4gfT4gPSAoeyBjaGlsZHJlbiwgbm9TZWFyY2ggfSkgPT4ge1xuICBjb25zdCB7IGJvb2ttYXJrcyB9ID0gdXNlTWF0Y2hlcygpWzBdIS5kYXRhIGFzIFJvb3REYXRhO1xuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3Qgc2VhcmNoID0gc2VhcmNoUGFyYW1zLmdldCgnc2VhcmNoJykgfHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0IFtzaWRlYmFyT3Blbiwgc2V0U2lkZWJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGRlYm91bmNlZFN1Ym1pdCA9IHVzZUNhbGxiYWNrKFxuICAgIGRlYm91bmNlKChjdXJyZW50VGFyZ2V0OiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgICAgIHN1Ym1pdChjdXJyZW50VGFyZ2V0KTtcbiAgICB9LCAyNTApLFxuICAgIFtdLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUcmFuc2l0aW9uLlJvb3Qgc2hvdz17c2lkZWJhck9wZW59IGFzPXtGcmFnbWVudH0+XG4gICAgICAgIDxEaWFsb2cgYXM9XCJkaXZcIiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNDAgZmxleCBtZDpoaWRkZW5cIiBvbkNsb3NlPXtzZXRTaWRlYmFyT3Blbn0+XG4gICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcbiAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICAgIGVudGVyPVwidHJhbnNpdGlvbi1vcGFjaXR5IGVhc2UtbGluZWFyIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxuICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgIGxlYXZlPVwidHJhbnNpdGlvbi1vcGFjaXR5IGVhc2UtbGluZWFyIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGlhbG9nLk92ZXJsYXkgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ncmF5LTYwMCBiZy1vcGFjaXR5LTc1XCIgLz5cbiAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XG4gICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcbiAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICAgIGVudGVyPVwidHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtXCJcbiAgICAgICAgICAgIGVudGVyRnJvbT1cIi10cmFuc2xhdGUteC1mdWxsXCJcbiAgICAgICAgICAgIGVudGVyVG89XCJ0cmFuc2xhdGUteC0wXCJcbiAgICAgICAgICAgIGxlYXZlPVwidHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtXCJcbiAgICAgICAgICAgIGxlYXZlRnJvbT1cInRyYW5zbGF0ZS14LTBcIlxuICAgICAgICAgICAgbGVhdmVUbz1cIi10cmFuc2xhdGUteC1mdWxsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggdy1mdWxsIG1heC13LXhzIGZsZXgtMSBmbGV4LWNvbCBiZy13aGl0ZSBwdC01IHBiLTRcIj5cbiAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcbiAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXG4gICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIC1tci0xMiBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xIGZsZXggaC0xMCB3LTEwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlYmFyT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxYSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtd2hpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtc2hyaW5rLTAgaXRlbXMtY2VudGVyIHB4LTRcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtMTIgdy1hdXRvXCIgc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwiUGFydHliaWxkZXJcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IGgtMCBmbGV4LTEgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzcGFjZS15LTEgcHgtMlwiPlxuICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgdG89e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaD1cImludGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPyAnYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMCcgOiAndGV4dC1ncmF5LTYwMCBob3ZlcjpiZy1ncmF5LTUwIGhvdmVyOnRleHQtZ3JheS05MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQtbWQgcHktMiBweC0yIHRleHQtYmFzZSBmb250LW1lZGl1bScsXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgeyh7IGlzQWN0aXZlIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0uaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICd0ZXh0LWdyYXktNTAwJyA6ICd0ZXh0LWdyYXktNDAwIGdyb3VwLWhvdmVyOnRleHQtZ3JheS01MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbXItNCBoLTYgdy02IGZsZXgtc2hyaW5rLTAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmhyZWYgPT09ICcvYm9va21hcmtzJyAmJiBib29rbWFya3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21sLTIgcm91bmRlZC1mdWxsIHB5LTAuNSBweC0yIHRleHQteHMgdGV4dC1ncmF5LTgwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ2JnLWdyYXktMzAwJyA6ICdiZy1ncmF5LTIwMCBncm91cC1ob3ZlcjpiZy1ncmF5LTMwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib29rbWFya3MubGVuZ3RoID4gMTAwID8gJzk5KycgOiBib29rbWFya3MubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTQgZmxleC1zaHJpbmstMFwiPnsvKiBEdW1teSBlbGVtZW50IHRvIGZvcmNlIHNpZGViYXIgdG8gc2hyaW5rIHRvIGZpdCBjbG9zZSBpY29uICovfTwvZGl2PlxuICAgICAgICA8L0RpYWxvZz5cbiAgICAgIDwvVHJhbnNpdGlvbi5Sb290PlxuXG4gICAgICB7LyogU3RhdGljIHNpZGViYXIgZm9yIGRlc2t0b3AgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNTAwIGhpZGRlbiBtZDpmaXhlZCBtZDppbnNldC15LTAgbWQ6ZmxleCBtZDp3LTU2IG1kOmZsZXgtY29sXCI+XG4gICAgICAgIHsvKiBTaWRlYmFyIGNvbXBvbmVudCwgc3dhcCB0aGlzIGVsZW1lbnQgd2l0aCBhbm90aGVyIHNpZGViYXIgaWYgeW91IGxpa2UgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWdyb3cgZmxleC1jb2wgb3ZlcmZsb3cteS1hdXRvIGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMCBiZy13aGl0ZSBwdC01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtc2hyaW5rLTAgaXRlbXMtY2VudGVyIHB4LTRcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC0xMiB3LWF1dG9cIiBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJQYXJ0eWJpbGRlclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IGZsZXggZmxleC1ncm93IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTEgcHgtMiBwYi00XCI+XG4gICAgICAgICAgICAgIHtuYXZpZ2F0aW9uLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIHRvPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgICAgICAgICBwcmVmZXRjaD1cImludGVudFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPyAnYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMCcgOiAndGV4dC1ncmF5LTYwMCBob3ZlcjpiZy1ncmF5LTUwIGhvdmVyOnRleHQtZ3JheS05MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICdncm91cCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC1tZCBweS0yIHB4LTIgdGV4dC1zbSBmb250LW1lZGl1bScsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7KHsgaXNBY3RpdmUgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS5pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICd0ZXh0LWdyYXktNTAwJyA6ICd0ZXh0LWdyYXktNDAwIGdyb3VwLWhvdmVyOnRleHQtZ3JheS01MDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtci0zIGgtNiB3LTYgZmxleC1zaHJpbmstMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaHJlZiA9PT0gJy9ib29rbWFya3MnICYmIGJvb2ttYXJrcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWwtMiByb3VuZGVkLWZ1bGwgcHktMC41IHB4LTIgdGV4dC14cyB0ZXh0LWdyYXktODAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICdiZy1ncmF5LTMwMCcgOiAnYmctZ3JheS0yMDAgZ3JvdXAtaG92ZXI6YmctZ3JheS0zMDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9va21hcmtzLmxlbmd0aCA+IDEwMCA/ICc5OSsnIDogYm9va21hcmtzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnBsLTU2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBmbGV4IG1heC13LTd4bCBmbGV4LWNvbCBtZDpweC04XCI+XG4gICAgICAgICAge25vU2VhcmNoID8gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0zIGxlZnQtMiB6LTEwIG1iLTIgZmxleCBoLTEyIHctMTIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1ibGFjayB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1za3ktNTAwIG1kOmhpZGRlblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpZGViYXJPcGVuKHRydWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudUFsdDJJY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0zIHotMTAgbXgtMiBtYi0yIGZsZXggaC0xMiBmbGV4LXNocmluay0wIHJvdW5kZWQtZnVsbCBzaGFkb3ctc20gbWQ6cmVsYXRpdmUgbWQ6dG9wLTAgbWQ6bGVmdC0wIG1kOm1iLTAgbWQ6aC0xNiBtZDpyb3VuZGVkLW5vbmUgbWQ6c2hhZG93LW5vbmVcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbC1mdWxsIGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMCBiZy1ibGFjayBwbC0zIHByLTIgdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1za3ktNTAwIG1kOmhpZGRlbiBtZDpweC00XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlYmFyT3Blbih0cnVlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51QWx0Mkljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLXItZnVsbCBib3JkZXIteSBib3JkZXItciBib3JkZXItZ3JheS0zMDAgYmctd2hpdGUgcHgtNCBtZDpyb3VuZGVkLW5vbmUgbWQ6Ym9yZGVyLXgtMCBtZDpib3JkZXItdC0wIG1kOmJvcmRlci1ncmF5LTIwMCBtZDpweC0wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBtZDptbC0wXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlYXJjaC1maWVsZFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cbiAgICAgICAgICAgICAgICAgICAgU3VjaGVcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCB0ZXh0LWdyYXktNDAwIGZvY3VzLXdpdGhpbjp0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaC01IHctNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaC1maWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybT1cInNlYXJjaC1hbmQtcGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiAhIWUuY3VycmVudFRhcmdldC5mb3JtICYmIGRlYm91bmNlZFN1Ym1pdChlLmN1cnJlbnRUYXJnZXQuZm9ybSl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaC1mdWxsIHctZnVsbCBib3JkZXItdHJhbnNwYXJlbnQgYmctdHJhbnNwYXJlbnQgcHktMiBwbC04IHByLTAgdGV4dC1iYXNlIHRleHQtZ3JheS05MDAgcGxhY2Vob2xkZXItZ3JheS01MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOnBsYWNlaG9sZGVyLWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgc206dGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdWNoZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTZcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiIsICJleHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlOiBEYXRlKSA9PiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZGUnLCB7IGRhdGVTdHlsZTogJ2Z1bGwnIH0pLmZvcm1hdChuZXcgRGF0ZShkYXRlKSk7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXROdW1iZXIgPSAobnVtPzogbnVtYmVyLCBkZWNpbWFscz86IG51bWJlcikgPT5cbiAgTnVtYmVyLmlzTmFOKG51bSkgfHwgbnVtID09PSB1bmRlZmluZWQgfHwgbnVtID09PSBudWxsXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IEludGwuTnVtYmVyRm9ybWF0KCdkZScsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBkZWNpbWFscyB9KS5mb3JtYXQobnVtKTtcbiIsICJpbXBvcnQgeyBDaGVja0NpcmNsZUljb24sIEhlYXJ0SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29weVRvQ2xpcGJvYXJkIGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJztcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IEltYWdlTGlzdCBmcm9tICd+L2NvbXBvbmVudHMvSW1hZ2VMaXN0JztcbmltcG9ydCBQYWdlIGZyb20gJ34vY29tcG9uZW50cy9QYWdlJztcbmltcG9ydCBVc2VyTG9naW4gZnJvbSAnfi9jb21wb25lbnRzL1VzZXJMb2dpbic7XG5pbXBvcnQgeyB1c2VyQ29va2llIH0gZnJvbSAnfi9jb29raWVzLnNlcnZlcic7XG5pbXBvcnQgZGIgZnJvbSAnfi9kYi5zZXJ2ZXInO1xuaW1wb3J0IHsgZ2V0RW52IH0gZnJvbSAnfi91dGlscy9lbnZzJztcbmltcG9ydCB7IEJvb2ttYXJrRGF0YSB9IGZyb20gJ34vdXRpbHMvdHlwZXMtYW5kLWVudW1zJztcblxudHlwZSBMb2FkZXJSZXR1cm5UeXBlID0geyB1c2VyPzogVXNlciAmIHsgYm9va21hcmtzOiBCb29rbWFya0RhdGFbXSB9IH07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KTogUHJvbWlzZTxMb2FkZXJSZXR1cm5UeXBlPiA9PiB7XG4gIGNvbnN0IGNvb2tpZUhlYWRlciA9IHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpO1xuICBjb25zdCB1c2VybmFtZSA9IChhd2FpdCB1c2VyQ29va2llLnBhcnNlKGNvb2tpZUhlYWRlcikpIHx8IHVuZGVmaW5lZDtcbiAgY29uc3QgdXNlciA9XG4gICAgKCEhdXNlcm5hbWUgJiZcbiAgICAgIChhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyBuYW1lOiB1c2VybmFtZSB9LFxuICAgICAgICBpbmNsdWRlOiB7IGJvb2ttYXJrczogeyBpbmNsdWRlOiB7IGltYWdlOiB0cnVlIH0sIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSB9IH0sXG4gICAgICB9KSkpIHx8XG4gICAgdW5kZWZpbmVkO1xuICByZXR1cm4geyB1c2VyIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlclJldHVyblR5cGU+KCk7XG4gIGNvbnN0IFtvcGVuTG9naW4sIHNldE9wZW5Mb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0NvcGllZCwgc2V0SXNDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIHJlc2V0IGlzQ29waWVkIGFmdGVyIGEgc2Vjb25kXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQ29waWVkKSB7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBzZXRJc0NvcGllZChmYWxzZSksIDEwMDApO1xuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9XG4gIH0sIFtpc0NvcGllZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2Ugbm9TZWFyY2g+XG4gICAgICA8VXNlckxvZ2luIG9wZW49e29wZW5Mb2dpbn0gb25DbG9zZT17KCkgPT4gc2V0T3BlbkxvZ2luKGZhbHNlKX0gLz5cbiAgICAgIHshIXVzZXIgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteC0yIHB4LTQgc206cHgtNiBtZDpweC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPkdlbWVya3RlIEJpbGRlcjwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPnt1c2VyLm5hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17YCR7Z2V0RW52KCdBUFBfQkFTRV9VUkwnKX0vdXNlci8ke3VzZXIuaWR9YH0gb25Db3B5PXsoKSA9PiBzZXRJc0NvcGllZCh0cnVlKX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieHhzOnB4LTQgcG9pbnRlci1ldmVudHMtYXV0byByZWxhdGl2ZSBmbGV4IGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gdHJ1bmNhdGUgcm91bmRlZC1tZCBiZy1ncmF5LTEwMCBweC0zIHB5LTIgdGV4dC1jZW50ZXIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGJhY2tkcm9wLWJsdXItc20gYmFja2Ryb3AtZmlsdGVyIGhvdmVyOmJnLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAge2lzQ29waWVkID8gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj5MaW5rIGtvcGllcnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZUljb24gY2xhc3NOYW1lPVwibWwtMSBoLTQgdy00IHNocmluay0wIGdyb3ctMCB0ZXh0LWVtZXJhbGQtNTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAnUHJvZmlsIHRlaWxlbidcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHshIXVzZXIuYm9va21hcmtzLmxlbmd0aCA/IChcbiAgICAgICAgICAgIDxJbWFnZUxpc3QgaW1hZ2VzPXt1c2VyLmJvb2ttYXJrcy5tYXAoKGJvb2ttYXJrKSA9PiBib29rbWFyay5pbWFnZSl9IHRvSW1hZ2UgYWxsb3dDYW5jZWxpbmdEZWxldGVCb29rbWFyayAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBtZDpweC0wXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtNCBibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZGFzaGVkIGJvcmRlci1ncmF5LTMwMCBweC00IHB5LTEyIHRleHQtY2VudGVyIGhvdmVyOmJvcmRlci1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPEhlYXJ0SWNvbiBjbGFzc05hbWU9XCJteC1hdXRvIGgtMTIgdy0xMiB0ZXh0LWdyYXktMjAwXCIgLz5cblxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTQgYmxvY2sgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgIER1IGhhc3QgZGlyIG5vY2gga2VpbmUgQmlsZGVyIGdlbWVya3QuXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC0yIHRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDBcIj5OaWNodCBhbmdlbWVsZGV0PC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gdGV4dC1ncmF5LTYwMFwiPk1lbGRlIGRpY2ggYW4gdW0gQmlsZGVyIGF1ZiBkZWluZXIgTWVya2xpc3RlIHp1IHNwZWljaGVybi48L3A+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuTG9naW4odHJ1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG10LTYgZmxleCB3LWZ1bGwgbWF4LXcteHMganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGJnLXNreS02MDAgcHktMiBweC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6Ymctc2t5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctc2t5LTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBBbm1lbGRlblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9QYWdlPlxuICApO1xufVxuIiwgImltcG9ydCB7IENpdHksIFByaXNtYSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IEZvcm0sIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEsIHVzZVNlYXJjaFBhcmFtcywgdXNlU3VibWl0IH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnfi9jb21wb25lbnRzL1BhZ2UnO1xuaW1wb3J0IFBhcnR5TGlzdCBmcm9tICd+L2NvbXBvbmVudHMvUGFydHlMaXN0JztcbmltcG9ydCBkYiBmcm9tICd+L2RiLnNlcnZlcic7XG5pbXBvcnQgeyBDaXR5RGF0YSwgUGFydHlEYXRhIH0gZnJvbSAnfi91dGlscy90eXBlcy1hbmQtZW51bXMnO1xuaW1wb3J0IHsgZ2V0WWVhckZpbHRlciB9IGZyb20gJ34vdXRpbHMveWVhci1maWx0ZXInO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHsgY2l0eSB9ID0gZGF0YSBhcyBMb2FkZXJSZXR1cm5UeXBlO1xuICByZXR1cm4geyB0aXRsZTogYCR7Y2l0eT8ubmFtZSB8fCAnU3RhZHQnfSAtIFBhcnR5YmlsZGVyYCB9O1xufTtcblxuY29uc3QgcGVyUGFnZSA9IDEyO1xuXG50eXBlIExvYWRlclJldHVyblR5cGUgPSB7XG4gIGNpdHk6IE9taXQ8Q2l0eURhdGEsICdwYXJ0aWVzJyB8ICdfY291bnQnPiB8IG51bGw7XG4gIHBhcnR5Q291bnQ6IG51bWJlcjtcbiAgcGFydGllczogUGFydHlEYXRhW107XG4gIHBhZ2U6IG51bWJlcjtcbiAgeWVhcnM6IHsgeWVhcjogbnVtYmVyIH1bXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zLCByZXF1ZXN0IH0pOiBQcm9taXNlPExvYWRlclJldHVyblR5cGU+ID0+IHtcbiAgY29uc3QgeyBjaXR5SWQgfSA9IHBhcmFtcztcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IHNlYXJjaCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdzZWFyY2gnKSB8fCAnJztcbiAgY29uc3QgeWVhciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCd5ZWFyJykgfHwgJyc7XG4gIGNvbnN0IHllYXJGaWx0ZXIgPSBnZXRZZWFyRmlsdGVyKCEheWVhciA/IHBhcnNlSW50KHllYXIsIDEwKSA6IHVuZGVmaW5lZCk7XG4gIGNvbnN0IHBhZ2VQYXJhbSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdwYWdlJykgfHwgJzEnO1xuICBjb25zdCBwYWdlID0gcGFyc2VJbnQocGFnZVBhcmFtLCAxMCk7XG5cbiAgY29uc3QgY2l0eSA9IGF3YWl0IGRiLmNpdHkuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyBpZDogY2l0eUlkIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgY291bnRyeTogdHJ1ZSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBwYXJ0eUNvdW50ID0gYXdhaXQgZGIucGFydHkuY291bnQoe1xuICAgIHdoZXJlOiB7XG4gICAgICBjaXR5SWQsXG4gICAgICBPUjogW1xuICAgICAgICB7IG5hbWU6IHsgY29udGFpbnM6IHNlYXJjaCwgbW9kZTogUHJpc21hLlF1ZXJ5TW9kZS5pbnNlbnNpdGl2ZSB9IH0sXG4gICAgICAgIHsgY2l0eTogeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6IFByaXNtYS5RdWVyeU1vZGUuaW5zZW5zaXRpdmUgfSB9IH0sXG4gICAgICBdLFxuICAgICAgZGF0ZTogeWVhckZpbHRlcixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBwYXJ0aWVzID0gYXdhaXQgZGIucGFydHkuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBjaXR5SWQsXG4gICAgICBPUjogW1xuICAgICAgICB7IG5hbWU6IHsgY29udGFpbnM6IHNlYXJjaCwgbW9kZTogUHJpc21hLlF1ZXJ5TW9kZS5pbnNlbnNpdGl2ZSB9IH0sXG4gICAgICAgIHsgY2l0eTogeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6IFByaXNtYS5RdWVyeU1vZGUuaW5zZW5zaXRpdmUgfSB9IH0sXG4gICAgICBdLFxuICAgICAgZGF0ZTogeWVhckZpbHRlcixcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGNpdHk6IHsgaW5jbHVkZTogeyBjb3VudHJ5OiB0cnVlIH0gfSxcbiAgICAgIGltYWdlczogeyBvcmRlckJ5OiB7IHJhd0RhdGFJZDogJ2FzYycgfSwgdGFrZTogMSB9LFxuICAgICAgX2NvdW50OiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGltYWdlczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBza2lwOiBwZXJQYWdlICogKHBhZ2UgLSAxKSxcbiAgICB0YWtlOiBwZXJQYWdlLFxuICAgIG9yZGVyQnk6IFt7IGRhdGU6ICdkZXNjJyB9LCB7IGlkOiAnZGVzYycgfV0sXG4gIH0pO1xuICBjb25zdCB5ZWFycyA9IGF3YWl0IGRiLiRxdWVyeVJhdzx7IHllYXI6IG51bWJlciB9W10+KFxuICAgICEhc2VhcmNoXG4gICAgICA/IFByaXNtYS5zcWxgU0VMRUNUIGRhdGVfcGFydCgneWVhcicsIGRhdGUpIEFTIHllYXIgZnJvbSBcIlBhcnR5XCIgTEVGVCBKT0lOIFwiQ2l0eVwiIE9OIFwiQ2l0eVwiLmlkID0gXCJQYXJ0eVwiLlwiY2l0eUlkXCIgV0hFUkUgXCJQYXJ0eVwiLlwiY2l0eUlkXCIgPSAke2NpdHlJZH0gQU5EIChcIlBhcnR5XCIubmFtZSBJTElLRSAnJScgfHwgJHtzZWFyY2h9IHx8ICclJyBPUiBcIkNpdHlcIi5uYW1lIElMSUtFICclJyB8fCAke3NlYXJjaH0gfHwgJyUnKSBHUk9VUCBCWSB5ZWFyIE9SREVSIEJZIHllYXIgREVTQ2BcbiAgICAgIDogUHJpc21hLnNxbGBTRUxFQ1QgZGF0ZV9wYXJ0KCd5ZWFyJywgZGF0ZSkgQVMgeWVhciBmcm9tIFwiUGFydHlcIiBXSEVSRSBcIlBhcnR5XCIuXCJjaXR5SWRcIiA9ICR7Y2l0eUlkfSBHUk9VUCBCWSB5ZWFyIE9SREVSIEJZIHllYXIgREVTQ2AsXG4gICk7XG5cbiAgcmV0dXJuIHsgY2l0eSwgcGFydGllcywgcGFnZSwgcGFydHlDb3VudCwgeWVhcnMgfTtcbn07XG5cbmNvbnN0IENpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY2l0eSwgcGFnZSwgcGFydGllcywgcGFydHlDb3VudCwgeWVhcnMgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyUmV0dXJuVHlwZT4oKTtcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IHllYXIgPSBzZWFyY2hQYXJhbXMuZ2V0KCd5ZWFyJykgfHwgdW5kZWZpbmVkO1xuXG4gIGlmICghY2l0eSlcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IG1kOnB4LTBcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+U3RhZHQgbmljaHQgZ2VmdW5kZW48L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlbiBzcGFjZS14LTIgcHgtNCBzbTpweC02IG1kOnB4LTBcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+e2NpdHkubmFtZX08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPntjaXR5LmNvdW50cnkubmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9ybSBpZD1cInNlYXJjaC1hbmQtcGFnaW5hdGlvblwiIG1ldGhvZD1cImdldFwiIG9uQ2hhbmdlPXsoZSkgPT4gc3VibWl0KGUuY3VycmVudFRhcmdldCl9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9jYXRpb25cIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICBMb2NhdGlvblxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgaWQ9XCJ5ZWFyXCJcbiAgICAgICAgICAgIG5hbWU9XCJ5ZWFyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci1ub25lIGJnLWdyYXktMTAwIHB5LTEuNSBwbC0zIHByLTEwIHRleHQtYmFzZSB0ZXh0LWdyYXktOTAwIGhvdmVyOmJnLWdyYXktMjAwIGZvY3VzOmJvcmRlci1za3ktNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXNreS01MDAgc206dGV4dC1zbVwiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3llYXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbGUgSmFocmU8L29wdGlvbj5cbiAgICAgICAgICAgIHt5ZWFycy5tYXAoKHkpID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3kueWVhcn0gdmFsdWU9e3kueWVhcn0+XG4gICAgICAgICAgICAgICAge3kueWVhcn1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8UGFydHlMaXN0IHBhcnRpZXM9e3BhcnRpZXN9IHBhcnR5Q291bnQ9e3BhcnR5Q291bnR9IHBhZ2U9e3BhZ2V9IHBlclBhZ2U9e3BlclBhZ2V9IC8+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2l0eTtcbiIsICJpbXBvcnQgeyBQaG90b2dyYXBoSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ34vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcbmltcG9ydCB7IGdldEVudiB9IGZyb20gJ34vdXRpbHMvZW52cyc7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnfi91dGlscy9pbnRsJztcbmltcG9ydCB7IFBhcnR5RGF0YSB9IGZyb20gJ34vdXRpbHMvdHlwZXMtYW5kLWVudW1zJztcblxue1xuICAvKiA8bGkgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgPGRpdiBjbGFzc05hbWU9XCJncm91cCBhc3BlY3Qtdy0xMCBhc3BlY3QtaC0xMCBibG9jayB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYmctZ3JheS0xMDAgZm9jdXMtd2l0aGluOnJpbmctMiBmb2N1cy13aXRoaW46cmluZy1za3ktNTAwIGZvY3VzLXdpdGhpbjpyaW5nLW9mZnNldC0yIGZvY3VzLXdpdGhpbjpyaW5nLW9mZnNldC1ncmF5LTEwMFwiPjwvZGl2PlxuICA8cCBjbGFzc05hbWU9XCJtdC0yIGJsb2NrIGgtMiB3LTMvNCBiZy1ncmF5LTQwMFwiPjwvcD5cbiAgPHAgY2xhc3NOYW1lPVwibXQtMiBibG9jayBoLTIgdy0xLzIgYmctZ3JheS0yMDBcIj48L3A+XG48L2xpPiAqL1xufVxuXG5jb25zdCBQYXJ0eUxpc3QgPSAoe1xuICBwYWdlLFxuICBwYXJ0aWVzLFxuICBwYXJ0eUNvdW50LFxuICBwZXJQYWdlLFxufToge1xuICBwYXJ0aWVzOiBQYXJ0eURhdGFbXTtcbiAgcGFydHlDb3VudDogbnVtYmVyO1xuICBwYWdlOiBudW1iZXI7XG4gIHBlclBhZ2U6IG51bWJlcjtcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBtZDpweC0wXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIj5cbiAgICAgICAgPHVsXG4gICAgICAgICAgcm9sZT1cImxpc3RcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTQgZ2FwLXktNSBzbTpncmlkLWNvbHMtMyBzbTpnYXAteC02IHNtOmdhcC15LTcgbGc6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOCB4bDpnYXAteS05XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtwYXJ0aWVzLm1hcCgocGFydHkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3BhcnR5LmlkfSBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCBhc3BlY3Qtdy0xMCBhc3BlY3QtaC0xMCBibG9jayB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYmctZ3JheS0xMDAgZm9jdXMtd2l0aGluOnJpbmctMiBmb2N1cy13aXRoaW46cmluZy1za3ktNTAwIGZvY3VzLXdpdGhpbjpyaW5nLW9mZnNldC0yIGZvY3VzLXdpdGhpbjpyaW5nLW9mZnNldC1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgICAgICAge3BhcnR5LmltYWdlc1swXSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2dldEVudignTUlOSU9fQkFTRV9VUkwnKSArIHBhcnR5LmltYWdlc1swXS5maWxlUGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgb2JqZWN0LWNvdmVyIGdyb3VwLWhvdmVyOm9wYWNpdHktNzVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3BhcnRpZXMvJHtwYXJ0eS5pZH1gfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0yIGJvdHRvbS0yIGZsZXggZ2FwLTEgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHB4LTIgcHktMSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICAgICAgICB7cGFydHkuX2NvdW50LmltYWdlc31cbiAgICAgICAgICAgICAgICAgIDxQaG90b2dyYXBoSWNvbiBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtZ3JheS01MDBcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBtdC0yIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgIHtwYXJ0eS5uYW1lfSBpbnsnICd9XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIHRvPXtgL2NpdGllcy8ke3BhcnR5LmNpdHkuaWR9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLWF1dG8gY3Vyc29yLXBvaW50ZXIgdGV4dC1za3ktNzAwIHVuZGVybGluZS1vZmZzZXQtMiBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwYXJ0eS5jaXR5Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+e2Zvcm1hdERhdGUocGFydHkuZGF0ZSl9PC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPFBhZ2luYXRpb24gY3VycmVudFBhZ2U9e3BhZ2V9IHBlclBhZ2U9e3BlclBhZ2V9IHRvdGFsPXtwYXJ0eUNvdW50fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFydHlMaXN0O1xuIiwgImltcG9ydCB7IEFycm93TmFycm93TGVmdEljb24sIEFycm93TmFycm93UmlnaHRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ34vdXRpbHMvY2xhc3MtbmFtZXMnO1xuXG50eXBlIFZpZXdhYmxlID0gJ2Fsd2F5cycgfCAnbmV2ZXInO1xuXG50eXBlIFByb3BzID0geyBjdXJyZW50UGFnZTogbnVtYmVyOyBwZXJQYWdlOiBudW1iZXI7IHRvdGFsOiBudW1iZXIgfTtcblxuY29uc3QgUGFnaW5hdGlvbiA9ICh7IGN1cnJlbnRQYWdlLCBwZXJQYWdlLCB0b3RhbCB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsIC8gcGVyUGFnZSk7XG5cbiAgLy8gYWx3YXlzIDEgMiAzPyBhbmQgOD8gOSAxMFxuICAvLyBuLTI/IG4tMSBuIG4rMSBuKzI/XG5cbiAgY29uc3QgcGFnZXMgPSBBcnJheShudW1iZXJPZlBhZ2VzKVxuICAgIC5maWxsKDApXG4gICAgLm1hcCgoXywgaSkgPT4gaSArIDEpO1xuXG4gIGNvbnN0IHByaW50YWJsZVBhZ2VzOiB7IHBhZ2U6IG51bWJlcjsgdmlld2FibGU6IFZpZXdhYmxlIH1bXSA9IHBhZ2VzLm1hcCgocGFnZSkgPT4gKHtcbiAgICBwYWdlLFxuICAgIHZpZXdhYmxlOiBwYWdlIDwgMiB8fCBNYXRoLmFicyhwYWdlIC0gY3VycmVudFBhZ2UpIDwgMiB8fCBNYXRoLmFicyhwYWdlIC0gbnVtYmVyT2ZQYWdlcykgPCAxID8gJ2Fsd2F5cycgOiAnbmV2ZXInLFxuICB9KSk7XG5cbiAgcmV0dXJuIG51bWJlck9mUGFnZXMgPCAyID8gbnVsbCA6IChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm15LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci10IGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXQtcHggZmxleCB3LTAgZmxleC0xXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBmb3JtPVwic2VhcmNoLWFuZC1wYWdpbmF0aW9uXCJcbiAgICAgICAgICBuYW1lPVwicGFnZVwiXG4gICAgICAgICAgdmFsdWU9e2N1cnJlbnRQYWdlID4gMSA/IGN1cnJlbnRQYWdlIC0gMSA6IDF9XG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgJ2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItdC0yIGJvcmRlci10cmFuc3BhcmVudCBwdC00IHByLTEgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktNzAwJyxcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID09PSAxICYmICdwb2ludGVyLWV2ZW50cy1ub25lIG9wYWNpdHktNDAnLFxuICAgICAgICAgICl9XG4gICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSAxfVxuICAgICAgICA+XG4gICAgICAgICAgPEFycm93TmFycm93TGVmdEljb24gY2xhc3NOYW1lPVwibXItMyBoLTUgdy01IHRleHQtZ3JheS00MDBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgIFp1clx1MDBGQ2NrXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZSBib3JkZXItdC0yIGJvcmRlci10cmFuc3BhcmVudCBwdC00IHRleHQtc20gdGV4dC1ncmF5LTUwMCBtZDpoaWRkZW5cIj5cbiAgICAgICAgU2VpdGUgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPntjdXJyZW50UGFnZX08L3NwYW4+IHZvbnsnICd9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj57bnVtYmVyT2ZQYWdlc308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOi1tdC1weCBtZDpmbGV4XCI+XG4gICAgICAgIHtwcmludGFibGVQYWdlcy5tYXAoKHsgcGFnZSwgdmlld2FibGUgfSwgaSkgPT5cbiAgICAgICAgICB2aWV3YWJsZSA9PT0gJ2Fsd2F5cycgPyAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgICAgICAgZm9ybT1cInNlYXJjaC1hbmQtcGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwYWdlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3BhZ2V9XG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgJ2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItdC0yIHB4LTMgcHQtNCB0ZXh0LXNtIGZvbnQtbWVkaXVtJyxcbiAgICAgICAgICAgICAgICBwYWdlID09PSBjdXJyZW50UGFnZVxuICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLXNreS01MDAgdGV4dC1za3ktNjAwJ1xuICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtZ3JheS01MDAgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOnRleHQtZ3JheS03MDAnLFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGFnZX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiBwcmludGFibGVQYWdlc1tpIC0gMV0/LnZpZXdhYmxlICE9PSAnbmV2ZXInID8gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAga2V5PXtwYWdlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLXQtMiBib3JkZXItdHJhbnNwYXJlbnQgcHgtMyBwdC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtwYWdlfT48L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICksXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW10LXB4IGZsZXggdy0wIGZsZXgtMSBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgZm9ybT1cInNlYXJjaC1hbmQtcGFnaW5hdGlvblwiXG4gICAgICAgICAgbmFtZT1cInBhZ2VcIlxuICAgICAgICAgIHZhbHVlPXtjdXJyZW50UGFnZSA8IG51bWJlck9mUGFnZXMgPyBjdXJyZW50UGFnZSArIDEgOiBudW1iZXJPZlBhZ2VzfVxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICdpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLXQtMiBib3JkZXItdHJhbnNwYXJlbnQgcHQtNCBwbC0xIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6dGV4dC1ncmF5LTcwMCcsXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9PT0gbnVtYmVyT2ZQYWdlcyAmJiAncG9pbnRlci1ldmVudHMtbm9uZSBvcGFjaXR5LTUwJyxcbiAgICAgICAgICApfVxuICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gbnVtYmVyT2ZQYWdlc31cbiAgICAgICAgPlxuICAgICAgICAgIFdlaXRlclxuICAgICAgICAgIDxBcnJvd05hcnJvd1JpZ2h0SWNvbiBjbGFzc05hbWU9XCJtbC0zIGgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuIiwgImV4cG9ydCBjb25zdCBnZXRZZWFyRmlsdGVyID0gKHllYXI/OiBudW1iZXIpID0+IHtcbiAgaWYgKCF5ZWFyKSByZXR1cm4gdW5kZWZpbmVkO1xuICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIDAsIDEsIDAsIDAsIDAsIDApKTtcbiAgY29uc3QgZW5kID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgMTEsIDMxLCAyMywgNTksIDU5LCA5OTkpKTtcblxuICByZXR1cm4geyBsdGU6IGVuZCwgZ3RlOiBzdGFydCB9XG59O1xuIiwgImltcG9ydCB7IENpdHksIENvdW50cnksIEltYWdlLCBQYXJ0eSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IFJlZiwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgSW1hZ2VBY3Rpb25zIGZyb20gJ34vY29tcG9uZW50cy9JbWFnZUFjdGlvbnMnO1xuaW1wb3J0IEltYWdlTGlzdCwgeyBJbWFnZUxpc3RSZWYgfSBmcm9tICd+L2NvbXBvbmVudHMvSW1hZ2VMaXN0JztcbmltcG9ydCBQYWdlIGZyb20gJ34vY29tcG9uZW50cy9QYWdlJztcbmltcG9ydCBVc2VyTG9naW4gZnJvbSAnfi9jb21wb25lbnRzL1VzZXJMb2dpbic7XG5pbXBvcnQgZGIgZnJvbSAnfi9kYi5zZXJ2ZXInO1xuaW1wb3J0IHsgZ2V0RW52IH0gZnJvbSAnfi91dGlscy9lbnZzJztcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICd+L3V0aWxzL2ludGwnO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBgJHtkYXRhPy5wYXJ0eS5uYW1lIHx8ICdQYXJ0eSd9IC0gUGFydHliaWxkZXJgIH07XG59O1xuXG50eXBlIExvYWRlclJldHVyblR5cGUgPSBJbWFnZSAmIHsgcGFydHk6IFBhcnR5ICYgeyBpbWFnZXM6IEltYWdlW107IGNpdHk6IENpdHkgJiB7IGNvdW50cnk6IENvdW50cnkgfSB9IH07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pOiBQcm9taXNlPExvYWRlclJldHVyblR5cGUgfCBudWxsPiA9PiB7XG4gIGNvbnN0IHsgaW1hZ2VJZCB9ID0gcGFyYW1zO1xuXG4gIGNvbnN0IGltYWdlID0gYXdhaXQgZGIuaW1hZ2UuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyBpZDogaW1hZ2VJZCB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIHBhcnR5OiB7XG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICBjaXR5OiB7XG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgIGNvdW50cnk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW1hZ2VzOiB7XG4gICAgICAgICAgICBvcmRlckJ5OiB7XG4gICAgICAgICAgICAgIHJhd0RhdGFJZDogJ2FzYycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gaW1hZ2U7XG59O1xuXG5jb25zdCBQYXJ0eSA9ICgpID0+IHtcbiAgY29uc3QgW29wZW5Mb2dpbiwgc2V0T3BlbkxvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaW1hZ2UgPSB1c2VMb2FkZXJEYXRhPExvYWRlclJldHVyblR5cGUgfCBudWxsPigpO1xuICBjb25zdCBpbWFnZUxpc3RSZWY6IFJlZjxJbWFnZUxpc3RSZWY+IHwgbnVsbCA9IHVzZVJlZihudWxsKTtcblxuICBpZiAoIWltYWdlKVxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBub1NlYXJjaD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHNtOnB4LTYgbWQ6cHgtMFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5QYXJ0eWJpbGQgbmljaHQgZ2VmdW5kZW48L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuXG4gIGNvbnN0IGhhbmRsZUltYWdlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKGltYWdlTGlzdFJlZi5jdXJyZW50KSB7XG4gICAgICBpbWFnZUxpc3RSZWYuY3VycmVudC5zZXRIaWdobGlnaHRlZEltYWdlSWQoaW1hZ2UuaWQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5vU2VhcmNoPlxuICAgICAgPFVzZXJMb2dpbiBvcGVuPXtvcGVuTG9naW59IG9uQ2xvc2U9eygpID0+IHNldE9wZW5Mb2dpbihmYWxzZSl9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBtZDpweC0wXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICBQYXJ0eWJpbGQgdm9ueycgJ31cbiAgICAgICAgICA8TGluayB0bz17YC9wYXJ0aWVzLyR7aW1hZ2UucGFydHkuaWR9YH0gY2xhc3NOYW1lPVwidGV4dC1za3ktNzAwIHVuZGVybGluZS1vZmZzZXQtMiBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgIHtpbWFnZS5wYXJ0eS5uYW1lfVxuICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgIGlueycgJ31cbiAgICAgICAgICA8TGluayB0bz17YC9jaXRpZXMvJHtpbWFnZS5wYXJ0eS5jaXR5LmlkfWB9IGNsYXNzTmFtZT1cInRleHQtc2t5LTcwMCB1bmRlcmxpbmUtb2Zmc2V0LTIgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICB7aW1hZ2UucGFydHkuY2l0eS5uYW1lfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+e2Zvcm1hdERhdGUoaW1hZ2UucGFydHkuZGF0ZSl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzbTpweC02IG1kOnB4LTBcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGgtYXV0byBtYXgtdy1mdWxsIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbGdcIlxuICAgICAgICAgIHNyYz17Z2V0RW52KCdNSU5JT19CQVNFX1VSTCcpICsgaW1hZ2UuZmlsZVBhdGh9XG4gICAgICAgICAgYWx0PXtpbWFnZS5wYXJ0eS5uYW1lfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUltYWdlQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieHM6cHQtMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHB0LTFcIj5cbiAgICAgICAgICA8SW1hZ2VBY3Rpb25zIG9uV2hpdGUgaW1hZ2U9e2ltYWdlfSBvblNob3dMb2dpbj17KCkgPT4gc2V0T3BlbkxvZ2luKHRydWUpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2ltYWdlLnBhcnR5LmltYWdlcy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgcHgtNCBzbTpweC02IG1kOnB4LTBcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5BbGxlIEJpbGRlciBkZXIgUGFydHk8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxJbWFnZUxpc3QgcmVmPXtpbWFnZUxpc3RSZWZ9IGltYWdlcz17aW1hZ2UucGFydHkuaW1hZ2VzfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFydHk7XG4iLCAiaW1wb3J0IHsgUHJpc21hIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgRm9ybSwgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSwgdXNlU2VhcmNoUGFyYW1zLCB1c2VTdWJtaXQgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgUGFnZSBmcm9tICd+L2NvbXBvbmVudHMvUGFnZSc7XG5pbXBvcnQgUGFydHlMaXN0IGZyb20gJ34vY29tcG9uZW50cy9QYXJ0eUxpc3QnO1xuaW1wb3J0IGRiIGZyb20gJ34vZGIuc2VydmVyJztcbmltcG9ydCB7IFBhcnR5RGF0YSB9IGZyb20gJ34vdXRpbHMvdHlwZXMtYW5kLWVudW1zJztcbmltcG9ydCB7IGdldFllYXJGaWx0ZXIgfSBmcm9tICd+L3V0aWxzL3llYXItZmlsdGVyJztcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdQYXJ0aWVzIC0gUGFydHliaWxkZXInIH07XG59O1xuXG50eXBlIExvYWRlclJldHVyblR5cGUgPSB7IHBhcnRpZXM6IFBhcnR5RGF0YVtdOyBwYXJ0eUNvdW50OiBudW1iZXI7IHBhZ2U6IG51bWJlcjsgeWVhcnM6IHsgeWVhcjogbnVtYmVyIH1bXSB9O1xuXG5jb25zdCBwZXJQYWdlID0gMTI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KTogUHJvbWlzZTxMb2FkZXJSZXR1cm5UeXBlPiA9PiB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICBjb25zdCBzZWFyY2ggPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnc2VhcmNoJykgfHwgJyc7XG4gIGNvbnN0IHllYXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgneWVhcicpIHx8ICcnO1xuICBjb25zdCB5ZWFyRmlsdGVyID0gZ2V0WWVhckZpbHRlcighIXllYXIgPyBwYXJzZUludCh5ZWFyLCAxMCkgOiB1bmRlZmluZWQpO1xuICBjb25zdCBwYWdlUGFyYW0gPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncGFnZScpIHx8ICcxJztcbiAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHBhZ2VQYXJhbSwgMTApO1xuXG4gIGNvbnN0IHBhcnR5Q291bnQgPSBhd2FpdCBkYi5wYXJ0eS5jb3VudCh7XG4gICAgd2hlcmU6IHtcbiAgICAgIE9SOiBbXG4gICAgICAgIHsgbmFtZTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiBQcmlzbWEuUXVlcnlNb2RlLmluc2Vuc2l0aXZlIH0gfSxcbiAgICAgICAgeyBjaXR5OiB7IG5hbWU6IHsgY29udGFpbnM6IHNlYXJjaCwgbW9kZTogUHJpc21hLlF1ZXJ5TW9kZS5pbnNlbnNpdGl2ZSB9IH0gfSxcbiAgICAgIF0sXG4gICAgICBkYXRlOiB5ZWFyRmlsdGVyLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBwYXJ0aWVzID0gYXdhaXQgZGIucGFydHkuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBPUjogW1xuICAgICAgICB7IG5hbWU6IHsgY29udGFpbnM6IHNlYXJjaCwgbW9kZTogUHJpc21hLlF1ZXJ5TW9kZS5pbnNlbnNpdGl2ZSB9IH0sXG4gICAgICAgIHsgY2l0eTogeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6IFByaXNtYS5RdWVyeU1vZGUuaW5zZW5zaXRpdmUgfSB9IH0sXG4gICAgICBdLFxuICAgICAgZGF0ZTogeWVhckZpbHRlcixcbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIGNpdHk6IHsgaW5jbHVkZTogeyBjb3VudHJ5OiB0cnVlIH0gfSxcbiAgICAgIGltYWdlczogeyBvcmRlckJ5OiB7IHJhd0RhdGFJZDogJ2FzYycgfSwgdGFrZTogMSB9LFxuICAgICAgX2NvdW50OiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGltYWdlczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBza2lwOiBwZXJQYWdlICogKHBhZ2UgLSAxKSxcbiAgICB0YWtlOiBwZXJQYWdlLFxuICAgIG9yZGVyQnk6IFt7IGRhdGU6ICdkZXNjJyB9LCB7IGlkOiAnZGVzYycgfV0sXG4gIH0pO1xuICBjb25zdCB5ZWFycyA9IGF3YWl0IGRiLiRxdWVyeVJhdzx7IHllYXI6IG51bWJlciB9W10+KFxuICAgICEhc2VhcmNoXG4gICAgICA/IFByaXNtYS5zcWxgU0VMRUNUIGRhdGVfcGFydCgneWVhcicsIGRhdGUpIEFTIHllYXIgZnJvbSBcIlBhcnR5XCIgTEVGVCBKT0lOIFwiQ2l0eVwiIE9OIFwiQ2l0eVwiLmlkID0gXCJQYXJ0eVwiLlwiY2l0eUlkXCIgV0hFUkUgXCJQYXJ0eVwiLm5hbWUgSUxJS0UgJyUnIHx8ICR7c2VhcmNofSB8fCAnJScgT1IgXCJDaXR5XCIubmFtZSBJTElLRSAnJScgfHwgJHtzZWFyY2h9IHx8ICclJyBHUk9VUCBCWSB5ZWFyIE9SREVSIEJZIHllYXIgREVTQ2BcbiAgICAgIDogUHJpc21hLnNxbGBTRUxFQ1QgZGF0ZV9wYXJ0KCd5ZWFyJywgZGF0ZSkgQVMgeWVhciBmcm9tIFwiUGFydHlcIiBHUk9VUCBCWSB5ZWFyIE9SREVSIEJZIHllYXIgREVTQ2AsXG4gICk7XG4gIHJldHVybiB7IHBhcnRpZXMsIHBhcnR5Q291bnQsIHBhZ2UsIHllYXJzIH07XG59O1xuXG5jb25zdCBQYXJ0aWVzID0gKCkgPT4ge1xuICBjb25zdCB7IHBhcnRpZXMsIHBhcnR5Q291bnQsIHBhZ2UsIHllYXJzIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlclJldHVyblR5cGU+KCk7XG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCB5ZWFyID0gc2VhcmNoUGFyYW1zLmdldCgneWVhcicpIHx8IHVuZGVmaW5lZDtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteC0yIHB4LTQgc206cHgtNiBtZDpweC0wXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5QYXJ0aWVzPC9oMT5cbiAgICAgICAgPEZvcm0gaWQ9XCJzZWFyY2gtYW5kLXBhZ2luYXRpb25cIiBtZXRob2Q9XCJnZXRcIiBvbkNoYW5nZT17KGUpID0+IHN1Ym1pdChlLmN1cnJlbnRUYXJnZXQpfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvY2F0aW9uXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlxuICAgICAgICAgICAgTG9jYXRpb25cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGlkPVwieWVhclwiXG4gICAgICAgICAgICBuYW1lPVwieWVhclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItbm9uZSBiZy1ncmF5LTEwMCBweS0xLjUgcGwtMyBwci0xMCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTkwMCBob3ZlcjpiZy1ncmF5LTIwMCBmb2N1czpib3JkZXItc2t5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1za3ktNTAwIHNtOnRleHQtc21cIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt5ZWFyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BbGxlIEphaHJlPC9vcHRpb24+XG4gICAgICAgICAgICB7eWVhcnMubWFwKCh5KSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt5LnllYXJ9IHZhbHVlPXt5LnllYXJ9PlxuICAgICAgICAgICAgICAgIHt5LnllYXJ9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPFBhcnR5TGlzdCBwYXJ0aWVzPXtwYXJ0aWVzfSBwYXJ0eUNvdW50PXtwYXJ0eUNvdW50fSBwYWdlPXtwYWdlfSBwZXJQYWdlPXtwZXJQYWdlfSAvPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRpZXM7XG4iLCAiLyogVGhpcyBleGFtcGxlIHJlcXVpcmVzIFRhaWx3aW5kIENTUyB2Mi4wKyAqL1xuaW1wb3J0IHsgQ2hldnJvblJpZ2h0SWNvbiwgVXNlcnNJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XG5pbXBvcnQgeyBQcmlzbWEgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgeyBGb3JtLCBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnfi9jb21wb25lbnRzL1BhZ2UnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnfi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xuaW1wb3J0IGRiIGZyb20gJ34vZGIuc2VydmVyJztcbmltcG9ydCB7IGdldEVudiB9IGZyb20gJ34vdXRpbHMvZW52cyc7XG5pbXBvcnQgeyBDaXR5RGF0YSB9IGZyb20gJ34vdXRpbHMvdHlwZXMtYW5kLWVudW1zJztcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdTdFx1MDBFNGR0ZSAtIFBhcnR5YmlsZGVyJyB9O1xufTtcblxudHlwZSBMb2FkZXJSZXR1cm5UeXBlID0geyBjaXRpZXM6IENpdHlEYXRhW107IGNpdHlDb3VudDogbnVtYmVyOyBwYWdlOiBudW1iZXIgfTtcblxuY29uc3QgcGVyUGFnZSA9IDEyO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSk6IFByb21pc2U8TG9hZGVyUmV0dXJuVHlwZT4gPT4ge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgY29uc3Qgc2VhcmNoID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3NlYXJjaCcpIHx8ICcnO1xuICBjb25zdCBwYWdlUGFyYW0gPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncGFnZScpIHx8ICcxJztcbiAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHBhZ2VQYXJhbSwgMTApO1xuXG4gIGNvbnN0IGNpdHlDb3VudCA9IGF3YWl0IGRiLmNpdHkuY291bnQoe1xuICAgIHdoZXJlOiB7XG4gICAgICBPUjogW3sgbmFtZTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiBQcmlzbWEuUXVlcnlNb2RlLmluc2Vuc2l0aXZlIH0gfV0sXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGNpdGllcyA9IGF3YWl0IGRiLmNpdHkuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBPUjogW1xuICAgICAgICB7IG5hbWU6IHsgY29udGFpbnM6IHNlYXJjaCwgbW9kZTogUHJpc21hLlF1ZXJ5TW9kZS5pbnNlbnNpdGl2ZSB9IH0sXG4gICAgICAgIHsgY291bnRyeTogeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6IFByaXNtYS5RdWVyeU1vZGUuaW5zZW5zaXRpdmUgfSB9IH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgY291bnRyeTogdHJ1ZSxcbiAgICAgIHBhcnRpZXM6IHtcbiAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgaWQ6ICdkZXNjJyB9XSxcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICBpbWFnZXM6IHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgcmF3RGF0YUlkOiAnYXNjJyB9LFxuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgICBmaWxlUGF0aDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWtlOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRha2U6IDQsXG4gICAgICB9LFxuICAgICAgX2NvdW50OiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIHBhcnRpZXM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2tpcDogcGVyUGFnZSAqIChwYWdlIC0gMSksXG4gICAgdGFrZTogcGVyUGFnZSxcbiAgICBvcmRlckJ5OiBbeyBuYW1lOiAnYXNjJyB9LCB7IGlkOiAnZGVzYycgfV0sXG4gIH0pO1xuICByZXR1cm4geyBjaXRpZXMsIGNpdHlDb3VudCwgcGFnZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2l0aWVzKCkge1xuICBjb25zdCB7IGNpdGllcywgY2l0eUNvdW50LCBwYWdlIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlclJldHVyblR5cGU+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IG1kOnB4LTBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlN0XHUwMEU0ZHRlPC9oMT5cbiAgICAgICAgPEZvcm0gaWQ9XCJzZWFyY2gtYW5kLXBhZ2luYXRpb25cIiBtZXRob2Q9XCJnZXRcIiBjbGFzc05hbWU9J2hpZGRlbicgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBtZDpweC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiPlxuICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxuICAgICAgICAgICAge2NpdGllcy5tYXAoKGNpdHkpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17Y2l0eS5pZH0+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIHRvPXtgL2NpdGllcy8ke2NpdHkuaWR9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIGJsb2NrIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBob3Zlcjp0cmFuc2xhdGUteC0xXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1sZWZ0LTUgdG9wLTAgYm90dG9tLTAgdy0xIG9yaWdpbi1yaWdodCBzY2FsZS14LTAgYmctc2t5LTUwMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZ3JvdXAtaG92ZXI6c2NhbGUteC0xMDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctMCBmbGV4LTEgc206ZmxleCBzbTppdGVtcy1jZW50ZXIgc206anVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJ1bmNhdGUgZm9udC1tZWRpdW0gdGV4dC1za3ktNjAwXCI+e2NpdHkubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTEgZmxleC1zaHJpbmstMCBmb250LW5vcm1hbCB0ZXh0LWdyYXktNTAwXCI+aW4ge2NpdHkuY291bnRyeS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlcnNJY29uIGNsYXNzTmFtZT1cIm1yLTEuNSBoLTUgdy01IGZsZXgtc2hyaW5rLTAgdGV4dC1ncmF5LTQwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2l0eS5fY291bnQucGFydGllc30ge2NpdHkuX2NvdW50LnBhcnRpZXMgPT09IDEgPyAnUGFydHknIDogJ1BhcnRpZXMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4LXNocmluay0wIHNtOm10LTAgc206bWwtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieHhzOmZsZXggaGlkZGVuIC1zcGFjZS14LTEgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2l0eS5wYXJ0aWVzLm1hcCgocGFydHkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cGFydHkuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwieHM6aC0xMCB4czp3LTEwIGgtOCB3LTggcm91bmRlZC1sZyBvYmplY3QtY292ZXIgcmluZy0yIHJpbmctd2hpdGUgc206aC0xMiBzbTp3LTEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2dldEVudignTUlOSU9fQkFTRV9VUkwnKSArIHBhcnR5LmltYWdlc1swXT8uZmlsZVBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwYXJ0eS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTUgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1ncmF5LTQwMCBncm91cC1ob3Zlcjp0ZXh0LXNreS01MDBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UGFnaW5hdGlvbiBjdXJyZW50UGFnZT17cGFnZX0gcGVyUGFnZT17cGVyUGFnZX0gdG90YWw9e2NpdHlDb3VudH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBIZWFydEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L3JvdXRlTW9kdWxlcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgSW1hZ2VMaXN0IGZyb20gJ34vY29tcG9uZW50cy9JbWFnZUxpc3QnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnfi9jb21wb25lbnRzL1BhZ2UnO1xuaW1wb3J0IFVzZXJMb2dpbiBmcm9tICd+L2NvbXBvbmVudHMvVXNlckxvZ2luJztcbmltcG9ydCBkYiBmcm9tICd+L2RiLnNlcnZlcic7XG5pbXBvcnQgeyBCb29rbWFya0RhdGEgfSBmcm9tICd+L3V0aWxzL3R5cGVzLWFuZC1lbnVtcyc7XG5cbmV4cG9ydCBjb25zdCBhbm9ueW1pemUgPSAoc3RyOiBzdHJpbmcpID0+XG4gIHN0clxuICAgIC5zcGxpdCgnICcpXG4gICAgLm1hcCgod29yZCkgPT4gd29yZC5zbGljZSgwLCAyKSArICcqKioqKicpXG4gICAgLmpvaW4oJyAnKTtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogYCR7ZGF0YT8udXNlcj8ubmFtZSA/IGFub255bWl6ZShkYXRhLnVzZXIubmFtZSkgOiAnTnV0emVyJ30gLSBQYXJ0eWJpbGRlcmAgfTtcbn07XG5cbnR5cGUgTG9hZGVyUmV0dXJuVHlwZSA9IHsgdXNlcjogVXNlciAmIHsgYm9va21hcmtzOiBCb29rbWFya0RhdGFbXSB9IH07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pOiBQcm9taXNlPExvYWRlclJldHVyblR5cGU+ID0+IHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IHBhcmFtcztcbiAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxuICAgIGluY2x1ZGU6IHsgYm9va21hcmtzOiB7IGluY2x1ZGU6IHsgaW1hZ2U6IHRydWUgfSwgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9IH0gfSxcbiAgfSk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBmb3VuZCcpO1xuICB9XG5cbiAgcmV0dXJuIHsgdXNlcjogeyAuLi51c2VyLCBuYW1lOiBhbm9ueW1pemUodXNlci5uYW1lKSB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlclJldHVyblR5cGU+KCk7XG4gIGNvbnN0IFtvcGVuTG9naW4sIHNldE9wZW5Mb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0NvcGllZCwgc2V0SXNDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIHJlc2V0IGlzQ29waWVkIGFmdGVyIGEgc2Vjb25kXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQ29waWVkKSB7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBzZXRJc0NvcGllZChmYWxzZSksIDEwMDApO1xuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9XG4gIH0sIFtpc0NvcGllZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2Ugbm9TZWFyY2g+XG4gICAgICA8VXNlckxvZ2luIG9wZW49e29wZW5Mb2dpbn0gb25DbG9zZT17KCkgPT4gc2V0T3BlbkxvZ2luKGZhbHNlKX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXgtMiBweC00IHNtOnB4LTYgbWQ6cHgtMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+UHJvZmlsIHZvbjwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+e3VzZXIubmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7ISF1c2VyLmJvb2ttYXJrcy5sZW5ndGggPyAoXG4gICAgICAgIDxJbWFnZUxpc3QgaW1hZ2VzPXt1c2VyLmJvb2ttYXJrcy5tYXAoKGJvb2ttYXJrKSA9PiBib29rbWFyay5pbWFnZSl9IHRvSW1hZ2UgYWxsb3dDYW5jZWxpbmdEZWxldGVCb29rbWFyayAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHNtOnB4LTYgbWQ6cHgtMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtNCBibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZGFzaGVkIGJvcmRlci1ncmF5LTMwMCBweC00IHB5LTEyIHRleHQtY2VudGVyIGhvdmVyOmJvcmRlci1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCI+XG4gICAgICAgICAgICA8SGVhcnRJY29uIGNsYXNzTmFtZT1cIm14LWF1dG8gaC0xMiB3LTEyIHRleHQtZ3JheS0yMDBcIiAvPlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC00IGJsb2NrIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgIERpZXNlciBOdXR6ZXIgaGF0IG5vY2gga2VpbmUgQmlsZGVyIGF1ZiBkZXIgTWVya2xpc3RlLlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgRXJyb3JCb3VuZGFyeSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFnZSBub1NlYXJjaD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IG1kOnB4LTBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPk51dHplciBuaWNodCBnZWZ1bmRlbjwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuIiwgImltcG9ydCB7IFByaXNtYSwgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBqc29uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgdXNlckNvb2tpZSB9IGZyb20gJ34vY29va2llcy5zZXJ2ZXInO1xuaW1wb3J0IGRiIGZyb20gJ34vZGIuc2VydmVyJztcbmltcG9ydCB7IHJhbmRvbUZyb21BcnJheSB9IGZyb20gJ34vdXRpbHMvcmFuZG9tJztcbmltcG9ydCB7IGFkamVjdGl2ZXMsIG5vdW5zIH0gZnJvbSAnfi91dGlscy93b3Jkcyc7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgdXNlcjogVXNlciB8IG51bGwgPSBudWxsO1xuICBsZXQgdHJpZXMgPSAwO1xuXG4gIGRvIHtcbiAgICBjb25zdCB1c2VybmFtZSA9IGAke3JhbmRvbUZyb21BcnJheShhZGplY3RpdmVzKX0gJHtyYW5kb21Gcm9tQXJyYXkobm91bnMpfWA7XG4gICAgY29uc3QgbmV3VXNlcjogUHJpc21hLlVzZXJDcmVhdGVJbnB1dCA9IHtcbiAgICAgIG5hbWU6IHVzZXJuYW1lLFxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIHVzZXIgPSBhd2FpdCBkYi51c2VyLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IG5ld1VzZXIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBqc29uKFxuICAgICAgICB7IG9rOiB0cnVlLCB1c2VybmFtZTogdXNlci5uYW1lIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IHVzZXJDb29raWUuc2VyaWFsaXplKHVzZXIubmFtZSksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRyaWVzKys7XG4gICAgfVxuICB9IHdoaWxlICghdXNlciAmJiB0cmllcyA8IDEwKTtcbiAgcmV0dXJuIGpzb24oeyBlcnJvcjogJ0NvdWxkIG5vdCBjcmVhdGUgdXNlcicgfSk7XG59O1xuIiwgImV4cG9ydCBjb25zdCByYW5kb21Gcm9tQXJyYXkgPSAoYXJyOiBhbnlbXSkgPT4ge1xuICByZXR1cm4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcbn0iLCAiZXhwb3J0IGNvbnN0IGFkamVjdGl2ZXMgPSBbXG4gICdBZG9yYWJsZScsXG4gICdBZHZlbnR1cm91cycsXG4gICdBZ2dyZXNzaXZlJyxcbiAgJ0FncmVlYWJsZScsXG4gICdBbGVydCcsXG4gICdBbGl2ZScsXG4gICdBbXVzZWQnLFxuICAnQW5ncnknLFxuICAnQW5ub3llZCcsXG4gICdBbm5veWluZycsXG4gICdBbnhpb3VzJyxcbiAgJ0Fycm9nYW50JyxcbiAgJ0FzaGFtZWQnLFxuICAnQXR0cmFjdGl2ZScsXG4gICdBdmVyYWdlJyxcbiAgJ0F3ZnVsJyxcbiAgJ0JhZCcsXG4gICdCZWF1dGlmdWwnLFxuICAnQmV0dGVyJyxcbiAgJ0Jld2lsZGVyZWQnLFxuICAnQmxhY2snLFxuICAnQmxvb2R5JyxcbiAgJ0JsdWUnLFxuICAnQmx1c2hpbmcnLFxuICAnQm9yZWQnLFxuICAnQnJhaW55JyxcbiAgJ0JyYXZlJyxcbiAgJ0JyZWFrYWJsZScsXG4gICdCcmlnaHQnLFxuICAnQnVzeScsXG4gICdDYWxtJyxcbiAgJ0NhcmVmdWwnLFxuICAnQ2F1dGlvdXMnLFxuICAnQ2hhcm1pbmcnLFxuICAnQ2hlZXJmdWwnLFxuICAnQ2xlYW4nLFxuICAnQ2xlYXInLFxuICAnQ2xldmVyJyxcbiAgJ0Nsb3VkeScsXG4gICdDbHVtc3knLFxuICAnQ29sb3JmdWwnLFxuICAnQ29tYmF0aXZlJyxcbiAgJ0NvbWZvcnRhYmxlJyxcbiAgJ0NvbmNlcm5lZCcsXG4gICdDb25kZW1uZWQnLFxuICAnQ29uZnVzZWQnLFxuICAnQ29vcGVyYXRpdmUnLFxuICAnQ291cmFnZW91cycsXG4gICdDcmF6eScsXG4gICdDcmVlcHknLFxuICAnQ3Jvd2RlZCcsXG4gICdDcnVlbCcsXG4gICdDdXJpb3VzJyxcbiAgJ0N1dGUnLFxuICAnRGFuZ2Vyb3VzJyxcbiAgJ0RhcmsnLFxuICAnRGVhZCcsXG4gICdEZWZlYXRlZCcsXG4gICdEZWZpYW50JyxcbiAgJ0RlbGlnaHRmdWwnLFxuICAnRGVwcmVzc2VkJyxcbiAgJ0RldGVybWluZWQnLFxuICAnRGlmZmVyZW50JyxcbiAgJ0RpZmZpY3VsdCcsXG4gICdEaXNndXN0ZWQnLFxuICAnRGlzdGluY3QnLFxuICAnRGlzdHVyYmVkJyxcbiAgJ0Rpenp5JyxcbiAgJ0RvdWJ0ZnVsJyxcbiAgJ0RyYWInLFxuICAnRHVsbCcsXG4gICdFYWdlcicsXG4gICdFYXN5JyxcbiAgJ0VsYXRlZCcsXG4gICdFbGVnYW50JyxcbiAgJ0VtYmFycmFzc2VkJyxcbiAgJ0VuY2hhbnRpbmcnLFxuICAnRW5jb3VyYWdpbmcnLFxuICAnRW5lcmdldGljJyxcbiAgJ0VudGh1c2lhc3RpYycsXG4gICdFbnZpb3VzJyxcbiAgJ0V2aWwnLFxuICAnRXhjaXRlZCcsXG4gICdFeHBlbnNpdmUnLFxuICAnRXh1YmVyYW50JyxcbiAgJ0ZhaXInLFxuICAnRmFpdGhmdWwnLFxuICAnRmFtb3VzJyxcbiAgJ0ZhbmN5JyxcbiAgJ0ZhbnRhc3RpYycsXG4gICdGaWVyY2UnLFxuICAnRmlsdGh5JyxcbiAgJ0ZpbmUnLFxuICAnRm9vbGlzaCcsXG4gICdGcmFnaWxlJyxcbiAgJ0ZyYWlsJyxcbiAgJ0ZyYW50aWMnLFxuICAnRnJpZW5kbHknLFxuICAnRnJpZ2h0ZW5lZCcsXG4gICdGdW5ueScsXG4gICdHZW50bGUnLFxuICAnR2lmdGVkJyxcbiAgJ0dsYW1vcm91cycsXG4gICdHbGVhbWluZycsXG4gICdHbG9yaW91cycsXG4gICdHb29kJyxcbiAgJ0dvcmdlb3VzJyxcbiAgJ0dyYWNlZnVsJyxcbiAgJ0dyaWV2aW5nJyxcbiAgJ0dyb3Rlc3F1ZScsXG4gICdHcnVtcHknLFxuICAnSGFuZHNvbWUnLFxuICAnSGFwcHknLFxuICAnSGVhbHRoeScsXG4gICdIZWxwZnVsJyxcbiAgJ0hlbHBsZXNzJyxcbiAgJ0hpbGFyaW91cycsXG4gICdIb21lbGVzcycsXG4gICdIb21lbHknLFxuICAnSG9ycmlibGUnLFxuICAnSHVuZ3J5JyxcbiAgJ0h1cnQnLFxuICAnSWxsJyxcbiAgJ0ltcG9ydGFudCcsXG4gICdJbXBvc3NpYmxlJyxcbiAgJ0luZXhwZW5zaXZlJyxcbiAgJ0lubm9jZW50JyxcbiAgJ0lucXVpc2l0aXZlJyxcbiAgJ0l0Y2h5JyxcbiAgJ0plYWxvdXMnLFxuICAnSml0dGVyeScsXG4gICdKb2xseScsXG4gICdKb3lvdXMnLFxuICAnS2luZCcsXG4gICdMYXp5JyxcbiAgJ0xpZ2h0JyxcbiAgJ0xpdmVseScsXG4gICdMb25lbHknLFxuICAnTG9uZycsXG4gICdMb3ZlbHknLFxuICAnTHVja3knLFxuICAnTWFnbmlmaWNlbnQnLFxuICAnTWlzdHknLFxuICAnTW9kZXJuJyxcbiAgJ01vdGlvbmxlc3MnLFxuICAnTXVkZHknLFxuICAnTXVzaHknLFxuICAnTXlzdGVyaW91cycsXG4gICdOYXN0eScsXG4gICdOYXVnaHR5JyxcbiAgJ05lcnZvdXMnLFxuICAnTmljZScsXG4gICdOdXR0eScsXG4gICdPYmVkaWVudCcsXG4gICdPYm5veGlvdXMnLFxuICAnT2RkJyxcbiAgJ09wZW4nLFxuICAnT3V0cmFnZW91cycsXG4gICdPdXRzdGFuZGluZycsXG4gICdQYW5pY2t5JyxcbiAgJ1BlcmZlY3QnLFxuICAnUGxhaW4nLFxuICAnUGxlYXNhbnQnLFxuICAnUG9pc2VkJyxcbiAgJ1Bvb3InLFxuICAnUG93ZXJmdWwnLFxuICAnUHJlY2lvdXMnLFxuICAnUHJpY2tseScsXG4gICdQcm91ZCcsXG4gICdQdXRyaWQnLFxuICAnUHV6emxlZCcsXG4gICdRdWFpbnQnLFxuICAnUmVhbCcsXG4gICdSZWxpZXZlZCcsXG4gICdSZXB1bHNpdmUnLFxuICAnUmljaCcsXG4gICdTY2FyeScsXG4gICdTZWxmaXNoJyxcbiAgJ1NoaW55JyxcbiAgJ1NoeScsXG4gICdTaWxseScsXG4gICdTbGVlcHknLFxuICAnU21pbGluZycsXG4gICdTbW9nZ3knLFxuICAnU29yZScsXG4gICdTcGFya2xpbmcnLFxuICAnU3BsZW5kaWQnLFxuICAnU3BvdGxlc3MnLFxuICAnU3Rvcm15JyxcbiAgJ1N0cmFuZ2UnLFxuICAnU3R1cGlkJyxcbiAgJ1N1Y2Nlc3NmdWwnLFxuICAnU3VwZXInLFxuICAnVGFsZW50ZWQnLFxuICAnVGFtZScsXG4gICdUYXN0eScsXG4gICdUZW5kZXInLFxuICAnVGVuc2UnLFxuICAnVGVycmlibGUnLFxuICAnVGhhbmtmdWwnLFxuICAnVGhvdWdodGZ1bCcsXG4gICdUaG91Z2h0bGVzcycsXG4gICdUaXJlZCcsXG4gICdUb3VnaCcsXG4gICdUcm91YmxlZCcsXG4gICdVZ2xpZXN0JyxcbiAgJ1VnbHknLFxuICAnVW5pbnRlcmVzdGVkJyxcbiAgJ1Vuc2lnaHRseScsXG4gICdVbnVzdWFsJyxcbiAgJ1Vwc2V0JyxcbiAgJ1VwdGlnaHQnLFxuICAnVmFzdCcsXG4gICdWaWN0b3Jpb3VzJyxcbiAgJ1ZpdmFjaW91cycsXG4gICdXYW5kZXJpbmcnLFxuICAnV2VhcnknLFxuICAnV2lja2VkJyxcbiAgJ1dpbGQnLFxuICAnV2l0dHknLFxuICAnV29ycmllZCcsXG4gICdXb3JyaXNvbWUnLFxuICAnV3JvbmcnLFxuICAnWmFueScsXG4gICdaZWFsb3VzJyxcbl07XG5cbmV4cG9ydCBjb25zdCBub3VucyA9IFtcbiAgJ0FiaWxpdHknLFxuICAnQWNjZXNzJyxcbiAgJ0FjY2lkZW50JyxcbiAgJ0FjY291bnQnLFxuICAnQWN0JyxcbiAgJ0FjdGlvbicsXG4gICdBY3Rpdml0eScsXG4gICdBY3RvcicsXG4gICdBZCcsXG4gICdBZGRpdGlvbicsXG4gICdBZGRyZXNzJyxcbiAgJ0FkbWluaXN0cmF0aW9uJyxcbiAgJ0FkdmFudGFnZScsXG4gICdBZHZlcnRpc2luZycsXG4gICdBZHZpY2UnLFxuICAnQWZmYWlyJyxcbiAgJ0FnZScsXG4gICdBZ2VuY3knLFxuICAnQWdyZWVtZW50JyxcbiAgJ0FpcicsXG4gICdBaXJwb3J0JyxcbiAgJ0FsY29ob2wnLFxuICAnQW1iaXRpb24nLFxuICAnQW1vdW50JyxcbiAgJ0FuYWx5c2lzJyxcbiAgJ0FuYWx5c3QnLFxuICAnQW5pbWFsJyxcbiAgJ0Fuc3dlcicsXG4gICdBbnhpZXR5JyxcbiAgJ0FwYXJ0bWVudCcsXG4gICdBcHBlYXJhbmNlJyxcbiAgJ0FwcGxlJyxcbiAgJ0FwcGxpY2F0aW9uJyxcbiAgJ0FwcG9pbnRtZW50JyxcbiAgJ0FyZWEnLFxuICAnQXJndW1lbnQnLFxuICAnQXJteScsXG4gICdBcnJpdmFsJyxcbiAgJ0FydCcsXG4gICdBcnRpY2xlJyxcbiAgJ0FzcGVjdCcsXG4gICdBc3NpZ25tZW50JyxcbiAgJ0Fzc2lzdGFuY2UnLFxuICAnQXNzaXN0YW50JyxcbiAgJ0Fzc29jaWF0aW9uJyxcbiAgJ0Fzc3VtcHRpb24nLFxuICAnQXRtb3NwaGVyZScsXG4gICdBdHRlbXB0JyxcbiAgJ0F0dGVudGlvbicsXG4gICdBdHRpdHVkZScsXG4gICdBdWRpZW5jZScsXG4gICdBdW50JyxcbiAgJ0F2ZXJhZ2UnLFxuICAnQXdhcmVuZXNzJyxcbiAgJ0JhY2snLFxuICAnQmFkJyxcbiAgJ0JhbGFuY2UnLFxuICAnQmFsbCcsXG4gICdCYW5rJyxcbiAgJ0Jhc2ViYWxsJyxcbiAgJ0Jhc2lzJyxcbiAgJ0Jhc2tldCcsXG4gICdCYXRoJyxcbiAgJ0JhdGhyb29tJyxcbiAgJ0JlZHJvb20nLFxuICAnQmVlcicsXG4gICdCZWdpbm5pbmcnLFxuICAnQmVuZWZpdCcsXG4gICdCaXJkJyxcbiAgJ0JpcnRoJyxcbiAgJ0JpcnRoZGF5JyxcbiAgJ0JpdCcsXG4gICdCbG9vZCcsXG4gICdCb2FyZCcsXG4gICdCb2F0JyxcbiAgJ0JvZHknLFxuICAnQm9udXMnLFxuICAnQm9vaycsXG4gICdCb3NzJyxcbiAgJ0JvdHRvbScsXG4gICdCb3gnLFxuICAnQm95JyxcbiAgJ0JveWZyaWVuZCcsXG4gICdCcmVhZCcsXG4gICdCcmVhdGgnLFxuICAnQnJvdGhlcicsXG4gICdCdWlsZGluZycsXG4gICdCdXMnLFxuICAnQnVzaW5lc3MnLFxuICAnQnV5ZXInLFxuICAnQ2FiaW5ldCcsXG4gICdDYW1lcmEnLFxuICAnQ2FuY2VyJyxcbiAgJ0NhbmRpZGF0ZScsXG4gICdDYXBpdGFsJyxcbiAgJ0NhcicsXG4gICdDYXJkJyxcbiAgJ0NhcmUnLFxuICAnQ2FyZWVyJyxcbiAgJ0Nhc2UnLFxuICAnQ2FzaCcsXG4gICdDYXQnLFxuICAnQ2F0ZWdvcnknLFxuICAnQ2F1c2UnLFxuICAnQ2VsZWJyYXRpb24nLFxuICAnQ2VsbCcsXG4gICdDaGFtcGlvbnNoaXAnLFxuICAnQ2hhbmNlJyxcbiAgJ0NoYXB0ZXInLFxuICAnQ2hhcml0eScsXG4gICdDaGVlaycsXG4gICdDaGVtaXN0cnknLFxuICAnQ2hlc3QnLFxuICAnQ2hpY2tlbicsXG4gICdDaGlsZCcsXG4gICdDaGlsZGhvb2QnLFxuICAnQ2hvY29sYXRlJyxcbiAgJ0Nob2ljZScsXG4gICdDaHVyY2gnLFxuICAnQ2lnYXJldHRlJyxcbiAgJ0NpdHknLFxuICAnQ2xhc3MnLFxuICAnQ2xhc3Nyb29tJyxcbiAgJ0NsaWVudCcsXG4gICdDbGltYXRlJyxcbiAgJ0Nsb3RoZXMnLFxuICAnQ29hc3QnLFxuICAnQ29mZmVlJyxcbiAgJ0NvbGxlY3Rpb24nLFxuICAnQ29sbGVnZScsXG4gICdDb21iaW5hdGlvbicsXG4gICdDb21taXR0ZWUnLFxuICAnQ29tbXVuaWNhdGlvbicsXG4gICdDb21tdW5pdHknLFxuICAnQ29tcGFueScsXG4gICdDb21wYXJpc29uJyxcbiAgJ0NvbXBldGl0aW9uJyxcbiAgJ0NvbXBsYWludCcsXG4gICdDb21wdXRlcicsXG4gICdDb25jZXB0JyxcbiAgJ0NvbmNsdXNpb24nLFxuICAnQ29uZGl0aW9uJyxcbiAgJ0NvbmZ1c2lvbicsXG4gICdDb25uZWN0aW9uJyxcbiAgJ0NvbnNlcXVlbmNlJyxcbiAgJ0NvbnN0cnVjdGlvbicsXG4gICdDb250YWN0JyxcbiAgJ0NvbnRleHQnLFxuICAnQ29udHJhY3QnLFxuICAnQ29udHJpYnV0aW9uJyxcbiAgJ0NvbnRyb2wnLFxuICAnQ29udmVyc2F0aW9uJyxcbiAgJ0Nvb2tpZScsXG4gICdDb3VudHJ5JyxcbiAgJ0NvdW50eScsXG4gICdDb3VyYWdlJyxcbiAgJ0NvdXJzZScsXG4gICdDb3VzaW4nLFxuICAnQ3JhZnQnLFxuICAnQ3JlZGl0JyxcbiAgJ0NyaXRpY2lzbScsXG4gICdDdWx0dXJlJyxcbiAgJ0N1cnJlbmN5JyxcbiAgJ0N1c3RvbWVyJyxcbiAgJ0N5Y2xlJyxcbiAgJ0RhZCcsXG4gICdEYXRhJyxcbiAgJ0RhdGFiYXNlJyxcbiAgJ0RhdGUnLFxuICAnRGF5JyxcbiAgJ0RlYWxlcicsXG4gICdEZWF0aCcsXG4gICdEZWJ0JyxcbiAgJ0RlY2lzaW9uJyxcbiAgJ0RlZmluaXRpb24nLFxuICAnRGVsaXZlcnknLFxuICAnRGVtYW5kJyxcbiAgJ0RlcGFydG1lbnQnLFxuICAnRGVwYXJ0dXJlJyxcbiAgJ0RlcHJlc3Npb24nLFxuICAnRGVwdGgnLFxuICAnRGVzY3JpcHRpb24nLFxuICAnRGVzaWduJyxcbiAgJ0Rlc2snLFxuICAnRGV2ZWxvcG1lbnQnLFxuICAnRGV2aWNlJyxcbiAgJ0RpYW1vbmQnLFxuICAnRGlmZmVyZW5jZScsXG4gICdEaWZmaWN1bHR5JyxcbiAgJ0Rpbm5lcicsXG4gICdEaXJlY3Rpb24nLFxuICAnRGlyZWN0b3InLFxuICAnRGlydCcsXG4gICdEaXNhc3RlcicsXG4gICdEaXNjaXBsaW5lJyxcbiAgJ0Rpc2N1c3Npb24nLFxuICAnRGlzZWFzZScsXG4gICdEaXNrJyxcbiAgJ0Rpc3RyaWJ1dGlvbicsXG4gICdEb2cnLFxuICAnRHJhbWEnLFxuICAnRHJhd2VyJyxcbiAgJ0RyYXdpbmcnLFxuICAnRHJpdmVyJyxcbiAgJ0VhcicsXG4gICdFYXJ0aCcsXG4gICdFY29ub21pY3MnLFxuICAnRWNvbm9teScsXG4gICdFZGl0b3InLFxuICAnRWR1Y2F0aW9uJyxcbiAgJ0VmZmVjdCcsXG4gICdFZmZpY2llbmN5JyxcbiAgJ0VmZm9ydCcsXG4gICdFZ2cnLFxuICAnRWxlY3Rpb24nLFxuICAnRWxldmF0b3InLFxuICAnRW1vdGlvbicsXG4gICdFbXBoYXNpcycsXG4gICdFbXBsb3llZScsXG4gICdFbXBsb3llcicsXG4gICdFbXBsb3ltZW50JyxcbiAgJ0VuZCcsXG4gICdFbmVyZ3knLFxuICAnRW5naW5lJyxcbiAgJ0VudGVydGFpbm1lbnQnLFxuICAnRW50aHVzaWFzbScsXG4gICdFbnRyeScsXG4gICdFbnZpcm9ubWVudCcsXG4gICdFcXVpcG1lbnQnLFxuICAnRXJyb3InLFxuICAnRXN0YWJsaXNobWVudCcsXG4gICdFc3RhdGUnLFxuICAnRXZlbnQnLFxuICAnRXhhbScsXG4gICdFeGFtaW5hdGlvbicsXG4gICdFeGFtcGxlJyxcbiAgJ0V4Y2hhbmdlJyxcbiAgJ0V4Y2l0ZW1lbnQnLFxuICAnRXhlcmNpc2UnLFxuICAnRXhwZXJpZW5jZScsXG4gICdFeHBsYW5hdGlvbicsXG4gICdFeHByZXNzaW9uJyxcbiAgJ0V4dGVudCcsXG4gICdFeWUnLFxuICAnRmFjZScsXG4gICdGYWN0JyxcbiAgJ0ZhaWx1cmUnLFxuICAnRmFtaWx5JyxcbiAgJ0Zhcm1lcicsXG4gICdGYXQnLFxuICAnRmVhdHVyZScsXG4gICdGZWVkYmFjaycsXG4gICdGaWVsZCcsXG4gICdGaWd1cmUnLFxuICAnRmlsbScsXG4gICdGaW5kaW5nJyxcbiAgJ0ZpcmUnLFxuICAnRmlzaCcsXG4gICdGbGlnaHQnLFxuICAnRm9jdXMnLFxuICAnRm9vZCcsXG4gICdGb290YmFsbCcsXG4gICdGb3JjZScsXG4gICdGb3JtJyxcbiAgJ0ZvcnR1bmUnLFxuICAnRm91bmRhdGlvbicsXG4gICdGcmFtZScsXG4gICdGcmVlZG9tJyxcbiAgJ0ZyaWVuZHNoaXAnLFxuICAnRnVuJyxcbiAgJ0Z1bmVyYWwnLFxuICAnRnV0dXJlJyxcbiAgJ0dhbWUnLFxuICAnR2FyYmFnZScsXG4gICdHYXJkZW4nLFxuICAnR2F0ZScsXG4gICdHZW5lJyxcbiAgJ0dpZnQnLFxuICAnR2lybCcsXG4gICdHaXJsZnJpZW5kJyxcbiAgJ0dvYWwnLFxuICAnR292ZXJubWVudCcsXG4gICdHcmFuZG1vdGhlcicsXG4gICdHcm9jZXJ5JyxcbiAgJ0dyb3VwJyxcbiAgJ0dyb3d0aCcsXG4gICdHdWVzdCcsXG4gICdHdWlkYW5jZScsXG4gICdHdWlkZScsXG4gICdHdWl0YXInLFxuICAnSGFpcicsXG4gICdIYWxmJyxcbiAgJ0hhbGwnLFxuICAnSGFuZCcsXG4gICdIYXQnLFxuICAnSGVhZCcsXG4gICdIZWFsdGgnLFxuICAnSGVhcmluZycsXG4gICdIZWFydCcsXG4gICdIZWF0JyxcbiAgJ0hlaWdodCcsXG4gICdIaWdod2F5JyxcbiAgJ0hpc3RvcmlhbicsXG4gICdIaXN0b3J5JyxcbiAgJ0hvbWUnLFxuICAnSG9tZXdvcmsnLFxuICAnSG9uZXknLFxuICAnSG9wZScsXG4gICdIb3NwaXRhbCcsXG4gICdIb3RlbCcsXG4gICdIb3VzZScsXG4gICdIb3VzaW5nJyxcbiAgJ0ljZScsXG4gICdJZGVhJyxcbiAgJ0ltYWdlJyxcbiAgJ0ltYWdpbmF0aW9uJyxcbiAgJ0ltcGFjdCcsXG4gICdJbXBvcnRhbmNlJyxcbiAgJ0ltcHJlc3Npb24nLFxuICAnSW1wcm92ZW1lbnQnLFxuICAnSW5jb21lJyxcbiAgJ0luZGVwZW5kZW5jZScsXG4gICdJbmRpY2F0aW9uJyxcbiAgJ0luZHVzdHJ5JyxcbiAgJ0luZmxhdGlvbicsXG4gICdJbmZvcm1hdGlvbicsXG4gICdJbml0aWF0aXZlJyxcbiAgJ0luanVyeScsXG4gICdJbnNlY3QnLFxuICAnSW5zaWRlJyxcbiAgJ0luc3BlY3Rpb24nLFxuICAnSW5zcGVjdG9yJyxcbiAgJ0luc3RhbmNlJyxcbiAgJ0luc3RydWN0aW9uJyxcbiAgJ0luc3VyYW5jZScsXG4gICdJbnRlbnRpb24nLFxuICAnSW50ZXJhY3Rpb24nLFxuICAnSW50ZXJlc3QnLFxuICAnSW50ZXJuZXQnLFxuICAnSW50cm9kdWN0aW9uJyxcbiAgJ0ludmVzdG1lbnQnLFxuICAnSXNzdWUnLFxuICAnSXRlbScsXG4gICdKb2InLFxuICAnSnVkZ21lbnQnLFxuICAnS2V5JyxcbiAgJ0tpbmQnLFxuICAnS2luZycsXG4gICdLbm93bGVkZ2UnLFxuICAnTGFiJyxcbiAgJ0xhZGRlcicsXG4gICdMYWR5JyxcbiAgJ0xha2UnLFxuICAnTGFuZ3VhZ2UnLFxuICAnTGF3JyxcbiAgJ0xlYWRlcicsXG4gICdMZWFkZXJzaGlwJyxcbiAgJ0xlbmd0aCcsXG4gICdMZXZlbCcsXG4gICdMaWJyYXJ5JyxcbiAgJ0xpZmUnLFxuICAnTGlnaHQnLFxuICAnTGluZScsXG4gICdMaW5rJyxcbiAgJ0xpc3QnLFxuICAnTGl0ZXJhdHVyZScsXG4gICdMb2NhdGlvbicsXG4gICdMb3NzJyxcbiAgJ0xvdmUnLFxuICAnTWFjaGluZScsXG4gICdNYWdhemluZScsXG4gICdNYWludGVuYW5jZScsXG4gICdNYWxsJyxcbiAgJ01hbicsXG4gICdNYW5hZ2VtZW50JyxcbiAgJ01hbmFnZXInLFxuICAnTWFudWZhY3R1cmVyJyxcbiAgJ01hcCcsXG4gICdNYXJrZXQnLFxuICAnTWFya2V0aW5nJyxcbiAgJ01hcnJpYWdlJyxcbiAgJ01hdGVyaWFsJyxcbiAgJ01hdGgnLFxuICAnTWF0dGVyJyxcbiAgJ01lYWwnLFxuICAnTWVhbmluZycsXG4gICdNZWFzdXJlbWVudCcsXG4gICdNZWF0JyxcbiAgJ01lZGlhJyxcbiAgJ01lZGljaW5lJyxcbiAgJ01lZGl1bScsXG4gICdNZW1iZXInLFxuICAnTWVtYmVyc2hpcCcsXG4gICdNZW1vcnknLFxuICAnTWVudScsXG4gICdNZXNzYWdlJyxcbiAgJ01ldGFsJyxcbiAgJ01ldGhvZCcsXG4gICdNaWRuaWdodCcsXG4gICdNaW5kJyxcbiAgJ01peHR1cmUnLFxuICAnTW9kZScsXG4gICdNb2RlbCcsXG4gICdNb20nLFxuICAnTW9tZW50JyxcbiAgJ01vbmV5JyxcbiAgJ01vbnRoJyxcbiAgJ01vb2QnLFxuICAnTW9ybmluZycsXG4gICdNb3VzZScsXG4gICdNb3ZpZScsXG4gICdNdWQnLFxuICAnTXVzaWMnLFxuICAnTmFtZScsXG4gICdOYXRpb24nLFxuICAnTmF0dXJlJyxcbiAgJ05lZ290aWF0aW9uJyxcbiAgJ05ldHdvcmsnLFxuICAnTmV3cycsXG4gICdOZXdzcGFwZXInLFxuICAnTmlnaHQnLFxuICAnTm90ZScsXG4gICdOb3RoaW5nJyxcbiAgJ051bWJlcicsXG4gICdPYmplY3QnLFxuICAnT2JsaWdhdGlvbicsXG4gICdPZmZpY2UnLFxuICAnT2lsJyxcbiAgJ09wZXJhdGlvbicsXG4gICdPcGluaW9uJyxcbiAgJ09wcG9ydHVuaXR5JyxcbiAgJ09yYW5nZScsXG4gICdPcmRlcicsXG4gICdPcmdhbml6YXRpb24nLFxuICAnT3V0Y29tZScsXG4gICdPdXRzaWRlJyxcbiAgJ092ZW4nLFxuICAnT3duZXInLFxuICAnUGFnZScsXG4gICdQYWludCcsXG4gICdQYWludGluZycsXG4gICdQYXBlcicsXG4gICdQYXJ0JyxcbiAgJ1Bhc3NlbmdlcicsXG4gICdQYXNzaW9uJyxcbiAgJ1BhdGllbmNlJyxcbiAgJ1BheW1lbnQnLFxuICAnUGVuYWx0eScsXG4gICdQZW9wbGUnLFxuICAnUGVyY2VudGFnZScsXG4gICdQZXJjZXB0aW9uJyxcbiAgJ1BlcmZvcm1hbmNlJyxcbiAgJ1BlcmlvZCcsXG4gICdQZXJtaXNzaW9uJyxcbiAgJ1BlcnNvbicsXG4gICdQZXJzb25hbGl0eScsXG4gICdQZXJzcGVjdGl2ZScsXG4gICdQaGlsb3NvcGh5JyxcbiAgJ1Bob25lJyxcbiAgJ1Bob3RvJyxcbiAgJ1BoeXNpY3MnLFxuICAnUGlhbm8nLFxuICAnUGljdHVyZScsXG4gICdQaWUnLFxuICAnUGllY2UnLFxuICAnUGl6emEnLFxuICAnUGxhY2UnLFxuICAnUGxhbicsXG4gICdQbGF0Zm9ybScsXG4gICdQbGF5ZXInLFxuICAnUG9lbScsXG4gICdQb2V0JyxcbiAgJ1BvZXRyeScsXG4gICdQb2ludCcsXG4gICdQb2xpY2UnLFxuICAnUG9saWN5JyxcbiAgJ1BvbGl0aWNzJyxcbiAgJ1BvbGx1dGlvbicsXG4gICdQb3B1bGF0aW9uJyxcbiAgJ1Bvc2l0aW9uJyxcbiAgJ1Bvc3Nlc3Npb24nLFxuICAnUG9zc2liaWxpdHknLFxuICAnUG9zdCcsXG4gICdQb3QnLFxuICAnUG90YXRvJyxcbiAgJ1Bvd2VyJyxcbiAgJ1ByYWN0aWNlJyxcbiAgJ1ByZWZlcmVuY2UnLFxuICAnUHJlcGFyYXRpb24nLFxuICAnUHJlc2VuY2UnLFxuICAnUHJlc2VudGF0aW9uJyxcbiAgJ1ByZXNpZGVudCcsXG4gICdQcmVzc3VyZScsXG4gICdQcmljZScsXG4gICdQcmlvcml0eScsXG4gICdQcm9ibGVtJyxcbiAgJ1Byb2NlZHVyZScsXG4gICdQcm9jZXNzJyxcbiAgJ1Byb2R1Y3QnLFxuICAnUHJvZmVzc2lvbicsXG4gICdQcm9mZXNzb3InLFxuICAnUHJvZml0JyxcbiAgJ1Byb2dyYW0nLFxuICAnUHJvbW90aW9uJyxcbiAgJ1Byb3BlcnR5JyxcbiAgJ1Byb3Bvc2FsJyxcbiAgJ1Byb3RlY3Rpb24nLFxuICAnUHN5Y2hvbG9neScsXG4gICdQdXJwb3NlJyxcbiAgJ1F1YWxpdHknLFxuICAnUXVhbnRpdHknLFxuICAnUXVlZW4nLFxuICAnUXVlc3Rpb24nLFxuICAnUmFkaW8nLFxuICAnUmFuZ2UnLFxuICAnUmF0ZScsXG4gICdSYXRpbycsXG4gICdSZWFjdGlvbicsXG4gICdSZWFsaXR5JyxcbiAgJ1JlYXNvbicsXG4gICdSZWNlcHRpb24nLFxuICAnUmVjaXBlJyxcbiAgJ1JlY29nbml0aW9uJyxcbiAgJ1JlY29tbWVuZGF0aW9uJyxcbiAgJ1JlY29yZCcsXG4gICdSZWNvcmRpbmcnLFxuICAnUmVmbGVjdGlvbicsXG4gICdSZWZyaWdlcmF0b3InLFxuICAnUmVnaW9uJyxcbiAgJ1JlbGF0aW9uJyxcbiAgJ1JlbGF0aW9uc2hpcCcsXG4gICdSZXBsYWNlbWVudCcsXG4gICdSZXB1YmxpYycsXG4gICdSZXB1dGF0aW9uJyxcbiAgJ1JlcXVpcmVtZW50JyxcbiAgJ1Jlc2VhcmNoJyxcbiAgJ1Jlc29sdXRpb24nLFxuICAnUmVzb3VyY2UnLFxuICAnUmVzcG9uc2UnLFxuICAnUmVzcG9uc2liaWxpdHknLFxuICAnUmVzdGF1cmFudCcsXG4gICdSZXN1bHQnLFxuICAnUmV2ZW51ZScsXG4gICdSZXZpZXcnLFxuICAnUmV2b2x1dGlvbicsXG4gICdSaXNrJyxcbiAgJ1JpdmVyJyxcbiAgJ1JvYWQnLFxuICAnUm9jaycsXG4gICdSb2xlJyxcbiAgJ1Jvb20nLFxuICAnUnVsZScsXG4gICdTYWZldHknLFxuICAnU2FsYWQnLFxuICAnU2FsdCcsXG4gICdTYW1wbGUnLFxuICAnU2F0aXNmYWN0aW9uJyxcbiAgJ1NjYWxlJyxcbiAgJ1NjZW5lJyxcbiAgJ1NjaG9vbCcsXG4gICdTY2llbmNlJyxcbiAgJ1NjcmVlbicsXG4gICdTZWNyZXRhcnknLFxuICAnU2VjdGlvbicsXG4gICdTZWN0b3InLFxuICAnU2VjdXJpdHknLFxuICAnU2VsZWN0aW9uJyxcbiAgJ1NlbnNlJyxcbiAgJ1NlcmllcycsXG4gICdTZXJ2aWNlJyxcbiAgJ1Nlc3Npb24nLFxuICAnU2V0dGluZycsXG4gICdTaGFwZScsXG4gICdTaGFyZScsXG4gICdTaGlydCcsXG4gICdTaWRlJyxcbiAgJ1NpZ24nLFxuICAnU2lnbmF0dXJlJyxcbiAgJ1NpZ25pZmljYW5jZScsXG4gICdTaW5nZXInLFxuICAnU2lyJyxcbiAgJ1Npc3RlcicsXG4gICdTaXRlJyxcbiAgJ1NpdHVhdGlvbicsXG4gICdTaXplJyxcbiAgJ1NraWxsJyxcbiAgJ1NvY2lldHknLFxuICAnU29mdHdhcmUnLFxuICAnU29pbCcsXG4gICdTb2x1dGlvbicsXG4gICdTb24nLFxuICAnU29uZycsXG4gICdTb3VuZCcsXG4gICdTb3VwJyxcbiAgJ1NvdXJjZScsXG4gICdTcGFjZScsXG4gICdTcGVha2VyJyxcbiAgJ1NwZWVjaCcsXG4gICdTcG9ydCcsXG4gICdTcXVhcmUnLFxuICAnU3RhbmRhcmQnLFxuICAnU3RhcicsXG4gICdTdGF0ZScsXG4gICdTdGF0ZW1lbnQnLFxuICAnU3RlYWsnLFxuICAnU3RlcCcsXG4gICdTdG9jaycsXG4gICdTdG9yYWdlJyxcbiAgJ1N0b3JlJyxcbiAgJ1N0b3J5JyxcbiAgJ1N0cmFuZ2VyJyxcbiAgJ1N0cmF0ZWd5JyxcbiAgJ1N0cmVzcycsXG4gICdTdHJ1Y3R1cmUnLFxuICAnU3R1ZGVudCcsXG4gICdTdHVkaW8nLFxuICAnU3R1ZHknLFxuICAnU3R5bGUnLFxuICAnU3ViamVjdCcsXG4gICdTdWNjZXNzJyxcbiAgJ1N1Z2dlc3Rpb24nLFxuICAnU3VuJyxcbiAgJ1N1cGVybWFya2V0JyxcbiAgJ1N1cmdlcnknLFxuICAnU3ltcGF0aHknLFxuICAnU3lzdGVtJyxcbiAgJ1RhYmxlJyxcbiAgJ1RhbGUnLFxuICAnVGFzaycsXG4gICdUYXgnLFxuICAnVGVhJyxcbiAgJ1RlYWNoZXInLFxuICAnVGVjaG5vbG9neScsXG4gICdUZWxldmlzaW9uJyxcbiAgJ1RlbXBlcmF0dXJlJyxcbiAgJ1Rlbm5pcycsXG4gICdUZW5zaW9uJyxcbiAgJ1Rlcm0nLFxuICAnVGVzdCcsXG4gICdUaGFua3MnLFxuICAnVGhlb3J5JyxcbiAgJ1RoaW5nJyxcbiAgJ1Rob3VnaHQnLFxuICAnVGhyb2F0JyxcbiAgJ1RpbWUnLFxuICAnVG9uZ3VlJyxcbiAgJ1Rvb2wnLFxuICAnVG9vdGgnLFxuICAnVG9wJyxcbiAgJ1RvcGljJyxcbiAgJ1Rvd24nLFxuICAnVHJhZGUnLFxuICAnVHJhZGl0aW9uJyxcbiAgJ1RyYWluZXInLFxuICAnVHJhaW5pbmcnLFxuICAnVHJhbnNwb3J0YXRpb24nLFxuICAnVHJ1dGgnLFxuICAnVHdvJyxcbiAgJ1R5cGUnLFxuICAnVW5jbGUnLFxuICAnVW5kZXJzdGFuZGluZycsXG4gICdVbmlvbicsXG4gICdVbml0JyxcbiAgJ1VuaXZlcnNpdHknLFxuICAnVXNlcicsXG4gICdWYWx1ZScsXG4gICdWYXJpYXRpb24nLFxuICAnVmFyaWV0eScsXG4gICdWZWhpY2xlJyxcbiAgJ1ZlcnNpb24nLFxuICAnVmlkZW8nLFxuICAnVmlldycsXG4gICdWaWxsYWdlJyxcbiAgJ1ZpcnVzJyxcbiAgJ1ZvaWNlJyxcbiAgJ1ZvbHVtZScsXG4gICdXYXInLFxuICAnV2FybmluZycsXG4gICdXYXRlcicsXG4gICdXYXknLFxuICAnV2Vha25lc3MnLFxuICAnV2VhbHRoJyxcbiAgJ1dlYXRoZXInLFxuICAnV2ViJyxcbiAgJ1dlZGRpbmcnLFxuICAnV2VlaycsXG4gICdXaGlsZScsXG4gICdXaWZlJyxcbiAgJ1dpbmQnLFxuICAnV2lubmVyJyxcbiAgJ1dvbWFuJyxcbiAgJ1dvb2QnLFxuICAnV29yZCcsXG4gICdXb3JrJyxcbiAgJ1dvcmtlcicsXG4gICdXb3JsZCcsXG4gICdXcml0ZXInLFxuICAnV3JpdGluZycsXG4gICdZZWFyJyxcbiAgJ1lvdXRoJyxcbl07XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIGpzb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyB1c2VyQ29va2llIH0gZnJvbSAnfi9jb29raWVzLnNlcnZlcic7XG5pbXBvcnQgZGIgZnJvbSAnfi9kYi5zZXJ2ZXInO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VybmFtZSA9IChhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCkpLmdldCgndXNlcm5hbWUnKTtcbiAgaWYgKCF1c2VybmFtZSB8fCB0eXBlb2YgdXNlcm5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGpzb24oeyBlcnJvcjogJ01pc3NpbmcgdXNlcm5hbWUnIH0pO1xuICB9XG4gIHRyeSB7XG4gICAgYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIG5hbWU6IHVzZXJuYW1lLFxuICAgICAgfSxcbiAgICAgIHJlamVjdE9uTm90Rm91bmQ6IHRydWUsXG4gICAgfSk7XG4gICAgcmV0dXJuIGpzb24oXG4gICAgICB7IG9rOiB0cnVlIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IHVzZXJDb29raWUuc2VyaWFsaXplKHVzZXJuYW1lKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgcmV0dXJuIGpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGpzb24oeyBlcnJvcjogJ1Vua25vd24gZXJyb3InIH0pO1xuICB9XG59O1xuIiwgImltcG9ydCB7IFByaXNtYSwgUmF3RGF0YSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEsIHVzZVRyYW5zaXRpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgUGFnZSBmcm9tICd+L2NvbXBvbmVudHMvUGFnZSc7XG5pbXBvcnQgZGIgZnJvbSAnfi9kYi5zZXJ2ZXInO1xuaW1wb3J0IHsgZ2V0RW52IH0gZnJvbSAnfi91dGlscy9lbnZzJztcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICd+L3V0aWxzL2ludGwnO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogJ1JhdyBEYXRhIC0gUGFydHliaWxkZXInIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSk6IFByb21pc2U8UmF3RGF0YVtdPiA9PiB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICBjb25zdCBzZWFyY2ggPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnc2VhcmNoJykgfHwgJyc7XG5cbiAgY29uc3QgaW1hZ2VzID0gYXdhaXQgZGIucmF3RGF0YS5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIE9SOiBbXG4gICAgICAgIHsgcGFydHk6IHsgY29udGFpbnM6IHNlYXJjaCwgbW9kZTogUHJpc21hLlF1ZXJ5TW9kZS5pbnNlbnNpdGl2ZSB9IH0sXG4gICAgICAgIHsgY2l0eTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiBQcmlzbWEuUXVlcnlNb2RlLmluc2Vuc2l0aXZlIH0gfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB0YWtlOiAzMDAsXG4gIH0pO1xuICByZXR1cm4gaW1hZ2VzO1xufTtcblxuY29uc3QgUmF3RGF0YSA9ICgpID0+IHtcbiAgY29uc3QgaW1hZ2VzID0gdXNlTG9hZGVyRGF0YTxSYXdEYXRhW10+KCk7XG4gIGNvbnN0IHsgc3RhdGUgfSA9IHVzZVRyYW5zaXRpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHNtOnB4LTYgbWQ6cHgtMFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+UmF3IERhdGE8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBtZDpweC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiPlxuICAgICAgICAgIDx1bFxuICAgICAgICAgICAgcm9sZT1cImxpc3RcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAteC00IGdhcC15LTggc206Z3JpZC1jb2xzLTMgc206Z2FwLXgtNiBsZzpncmlkLWNvbHMtNCB4bDpnYXAteC04XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3RhdGUgIT09ICdpZGxlJyA/IChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCBhc3BlY3Qtdy0xMCBhc3BlY3QtaC0xMCBibG9jayB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYmctZ3JheS0xMDAgZm9jdXMtd2l0aGluOnJpbmctMiBmb2N1cy13aXRoaW46cmluZy1za3ktNTAwIGZvY3VzLXdpdGhpbjpyaW5nLW9mZnNldC0yIGZvY3VzLXdpdGhpbjpyaW5nLW9mZnNldC1ncmF5LTEwMFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgbXQtMiBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj57J2ltYWdlLnBhcnR5J308L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj57J2ltYWdlLnBhcnR5ZGF0ZSd9PC9wPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbWFnZS5pZH0gY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgYXNwZWN0LXctMTAgYXNwZWN0LWgtMTAgYmxvY2sgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGJnLWdyYXktMTAwIGZvY3VzLXdpdGhpbjpyaW5nLTIgZm9jdXMtd2l0aGluOnJpbmctc2t5LTUwMCBmb2N1cy13aXRoaW46cmluZy1vZmZzZXQtMiBmb2N1cy13aXRoaW46cmluZy1vZmZzZXQtZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Z2V0RW52KCdNSU5JT19CQVNFX1VSTCcpICsgaW1hZ2UudXJsLnJlcGxhY2UoJ2h0dHA6Ly93d3cuYmlucGFydHlnZWlsLmRlLycsICcvZG93bmxvYWRzLycpfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBvYmplY3QtY292ZXIgZ3JvdXAtaG92ZXI6b3BhY2l0eS03NVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17aW1hZ2UudXJsLnJlcGxhY2UoJ2h0dHA6Ly93d3cuYmlucGFydHlnZWlsLmRlLycsICcvZG93bmxvYWRzLycpfVxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIG10LTIgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZS5wYXJ0eX0gaW57JyAnfVxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1hdXRvIGN1cnNvci1wb2ludGVyIHRleHQtc2t5LTcwMCB1bmRlcmxpbmUtb2Zmc2V0LTIgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZS5jb3VudHJ5fSAtIHtpbWFnZS5jaXR5fVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZShpbWFnZS5wYXJ0eWRhdGUpfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj57aW1hZ2UuaWR9PC9wPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmF3RGF0YTtcbiIsICJpbXBvcnQgeyBJbWFnZSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IEltYWdlTGlzdCBmcm9tICd+L2NvbXBvbmVudHMvSW1hZ2VMaXN0JztcbmltcG9ydCBQYWdlIGZyb20gJ34vY29tcG9uZW50cy9QYWdlJztcbmltcG9ydCBkYiBmcm9tICd+L2RiLnNlcnZlcic7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KTogUHJvbWlzZTxJbWFnZVtdPiA9PiB7XG4gIGNvbnN0IGltYWdlczogSW1hZ2VbXSA9IGF3YWl0IGRiLiRxdWVyeVJhd2BTRUxFQ1QgKiBmcm9tIFwiSW1hZ2VcIiBPUkRFUiBCWSByYW5kb20oKSBMSU1JVCAxMmA7XG4gIHJldHVybiBpbWFnZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgaW1hZ2VzID0gdXNlTG9hZGVyRGF0YTxJbWFnZVtdPigpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2Ugbm9TZWFyY2g+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBtZDpweC0wXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5adWZcdTAwRTRsbGlnZSBCaWxkZXI8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8SW1hZ2VMaXN0IGltYWdlcz17aW1hZ2VzfSB0b1BhcnR5IGlzUmFuZG9tIC8+XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgdW5zdGFibGVfc2hvdWxkUmVsb2FkID0gKCkgPT4gZmFsc2U7XG4iLCAiaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIEZvcm0sXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VTZWFyY2hQYXJhbXMsXG4gIHVzZVRyYW5zaXRpb24sXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGF1dGhDb29raWUgfSBmcm9tICd+L2Nvb2tpZXMuc2VydmVyJztcbmltcG9ydCBkYiBmcm9tICd+L2RiLnNlcnZlcic7XG5pbXBvcnQgeyBhbm9ueW1pemUgfSBmcm9tICcuL3VzZXIvJHVzZXJJZCc7XG5cbnR5cGUgQWN0aW9uUmV0dXJuVHlwZSA9IHsgd3JvbmdQYXNzd29yZDogYm9vbGVhbjsgcmVkaXJlY3RQYXRoOiBzdHJpbmcgfSB8IG51bGw7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KTogUHJvbWlzZTxBY3Rpb25SZXR1cm5UeXBlIHwgUmVzcG9uc2U+ID0+IHtcbiAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgcGFzc3dvcmQgPSBib2R5LmdldCgncGFzc3dvcmQnKTtcbiAgY29uc3QgcmVkaXJlY3RQYXRoID0gYm9keS5nZXQoJ3JlZGlyZWN0Jyk/LnRvU3RyaW5nKCkgfHwgJy8nO1xuICBpZiAocGFzc3dvcmQgPT09IHByb2Nlc3MuZW52LkFQUF9QQVNTV09SRCkge1xuICAgIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFBhdGgsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBhdXRoQ29va2llLnNlcmlhbGl6ZSh0cnVlKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHsgd3JvbmdQYXNzd29yZDogdHJ1ZSwgcmVkaXJlY3RQYXRoIH07XG59O1xuXG50eXBlIExvYWRlclJldHVyblR5cGUgPSB7IHRpdGxlPzogc3RyaW5nIH0gfCBudWxsO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSk6IFByb21pc2U8TG9hZGVyUmV0dXJuVHlwZT4gPT4ge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHJlcXVlc3QudXJsLnNwbGl0KCc/JylbMV0pO1xuXG4gIC8vIGlmIHJlZGlyZWN0IG1hdGNoZXMgJ2ltYWdlLyRpbWFnZUlkJ1xuICBpZiAoc2VhcmNoUGFyYW1zLmdldCgncmVkaXJlY3QnKT8uc3RhcnRzV2l0aCgnL2ltYWdlLycpKSB7XG4gICAgY29uc3QgaW1hZ2VJZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ3JlZGlyZWN0Jyk/LnNwbGl0KCcvJylbMl07XG4gICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBkYi5pbWFnZS5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IGltYWdlSWQsXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBwYXJ0eTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHsgdGl0bGU6IGltYWdlPy5wYXJ0eS5uYW1lIH07XG4gIH1cblxuICAvLyBpZiByZWRpcmVjdCBtYXRjaGVzICdwYXJ0aWVzLyRwYXJ0eUlkJ1xuICBpZiAoc2VhcmNoUGFyYW1zLmdldCgncmVkaXJlY3QnKT8uc3RhcnRzV2l0aCgnL3BhcnRpZXMvJykpIHtcbiAgICBjb25zdCBwYXJ0eUlkID0gc2VhcmNoUGFyYW1zLmdldCgncmVkaXJlY3QnKT8uc3BsaXQoJy8nKVsyXTtcbiAgICBjb25zdCBwYXJ0eSA9IGF3YWl0IGRiLnBhcnR5LmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogcGFydHlJZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHsgdGl0bGU6IHBhcnR5Py5uYW1lIH07XG4gIH1cblxuICAvLyBpZiByZWRpcmVjdCBtYXRjaGVzICdjaXRpZXMvJGNpdHlJZCdcbiAgaWYgKHNlYXJjaFBhcmFtcy5nZXQoJ3JlZGlyZWN0Jyk/LnN0YXJ0c1dpdGgoJy9jaXRpZXMvJykpIHtcbiAgICBjb25zdCBjaXR5SWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdyZWRpcmVjdCcpPy5zcGxpdCgnLycpWzJdO1xuICAgIGNvbnN0IGNpdHkgPSBhd2FpdCBkYi5jaXR5LmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogY2l0eUlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4geyB0aXRsZTogY2l0eT8ubmFtZSB9O1xuICB9XG5cbiAgLy8gaWYgcmVkaXJlY3QgbWF0Y2hlcyAndXNlci8kdXNlcklkJ1xuICBpZiAoc2VhcmNoUGFyYW1zLmdldCgncmVkaXJlY3QnKT8uc3RhcnRzV2l0aCgnL3VzZXIvJykpIHtcbiAgICBjb25zdCB1c2VySWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdyZWRpcmVjdCcpPy5zcGxpdCgnLycpWzJdO1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogdXNlcklkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4geyB0aXRsZTogdXNlcj8ubmFtZSA/IGFub255bWl6ZSh1c2VyLm5hbWUpIDogdW5kZWZpbmVkIH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IGAke2RhdGE/LnRpdGxlIHx8ICdMb2dpbid9IC0gUGFydHliaWxkZXJgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUFjdGlvbkRhdGE8QWN0aW9uUmV0dXJuVHlwZT4oKTtcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgeyBzdGF0ZSB9ID0gdXNlVHJhbnNpdGlvbigpO1xuXG4gIGNvbnN0IHJlZGlyZWN0ID0gZGF0YT8ucmVkaXJlY3RQYXRoIHx8IHNlYXJjaFBhcmFtcy5nZXQoJ3JlZGlyZWN0JykgfHwgJy8nO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgYmctZ3JheS01MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4czpweC02IGZsZXggbWluLWgtZnVsbCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBweS0xMiBsZzpweC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieHM6bXgtYXV0byB4czp3LWZ1bGwgeHM6bWF4LXctbWQgeHM6cHgtMCBweC00XCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJteC1hdXRvIGgtMTIgdy1hdXRvXCIgc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwiV29ya2Zsb3dcIiAvPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC02IHRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDBcIj5QYXNzd29ydCBlcmZvcmRlcmxpY2g8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICBEaWVzZSBTZWl0ZSB3aXJkIGF1c3NjaGxpZVx1MDBERmxpY2ggcHJpdmF0IHZlcndlbmRldCB1bmQgaXN0IGRhZlx1MDBGQ3IgcGFzc3dvcnRnZXNjaFx1MDBGQ3R6dC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieHM6bXgtYXV0byB4czp3LWZ1bGwgeHM6bWF4LXctbWQgbXQtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieHM6cm91bmRlZC1sZyB4czpweC0xMCBiZy13aGl0ZSBweS04IHB4LTQgc2hhZG93XCI+XG4gICAgICAgICAgICB7ZGF0YT8ud3JvbmdQYXNzd29yZCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1yZWQtNTAwXCI+XG4gICAgICAgICAgICAgICAgRGFzIFBhc3N3b3J0IGlzdCBmYWxzY2guIEJpdHRlIHZlcnN1Y2hlIGVzIGVybmV1dC5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJzcGFjZS15LTZcIiBkaXNhYmxlZD17c3RhdGUgIT09ICdpZGxlJ30+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgUGFzc3dvcnRcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmVkaXJlY3RcIiB2YWx1ZT17cmVkaXJlY3R9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3hzOnRleHQtc20gYmxvY2sgdy1mdWxsIGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcHgtMyBweS0yIHBsYWNlaG9sZGVyLWdyYXktNDAwIHNoYWRvdy1zbSBmb2N1czpib3JkZXItc2t5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1za3ktNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBiZy1za3ktNjAwIHB5LTIgcHgtNCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLXNreS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXNreS01MDAgZm9jdXM6cmluZy1vZmZzZXQtMlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzdGF0ZSAhPT0gJ2lkbGUnID8gJ1x1MjAyNicgOiAnTGFzcyBtaWNoIHJlaW4nfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgSGVhcnRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdC9yb3V0ZU1vZHVsZXMnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IEltYWdlTGlzdCBmcm9tICd+L2NvbXBvbmVudHMvSW1hZ2VMaXN0JztcbmltcG9ydCBQYWdlIGZyb20gJ34vY29tcG9uZW50cy9QYWdlJztcbmltcG9ydCBVc2VyTG9naW4gZnJvbSAnfi9jb21wb25lbnRzL1VzZXJMb2dpbic7XG5pbXBvcnQgZGIgZnJvbSAnfi9kYi5zZXJ2ZXInO1xuaW1wb3J0IHsgQm9va21hcmtEYXRhIH0gZnJvbSAnfi91dGlscy90eXBlcy1hbmQtZW51bXMnO1xuXG5leHBvcnQgY29uc3QgYW5vbnltaXplID0gKHN0cjogc3RyaW5nKSA9PlxuICBzdHJcbiAgICAuc3BsaXQoJyAnKVxuICAgIC5tYXAoKHdvcmQpID0+IHdvcmQuc2xpY2UoMCwgMikgKyAnKioqKionKVxuICAgIC5qb2luKCcgJyk7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IGAke2RhdGE/LnVzZXI/Lm5hbWUgPyBhbm9ueW1pemUoZGF0YS51c2VyLm5hbWUpIDogJ051dHplcid9IC0gUGFydHliaWxkZXJgIH07XG59O1xuXG50eXBlIExvYWRlclJldHVyblR5cGUgPSB7IHVzZXI6IFVzZXIgJiB7IGJvb2ttYXJrczogQm9va21hcmtEYXRhW10gfSB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KTogUHJvbWlzZTxMb2FkZXJSZXR1cm5UeXBlPiA9PiB7XG4gIGNvbnN0IHsgdXNlcklkIH0gPSBwYXJhbXM7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcbiAgICBpbmNsdWRlOiB7IGJvb2ttYXJrczogeyBpbmNsdWRlOiB7IGltYWdlOiB0cnVlIH0sIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSB9IH0sXG4gIH0pO1xuXG4gIGlmICghdXNlcikge1xuICAgIHRocm93IG5ldyBFcnJvcignVXNlciBub3QgZm91bmQnKTtcbiAgfVxuXG4gIHJldHVybiB7IHVzZXI6IHsgLi4udXNlciwgbmFtZTogYW5vbnltaXplKHVzZXIubmFtZSkgfSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJSZXR1cm5UeXBlPigpO1xuICBjb25zdCBbb3BlbkxvZ2luLCBzZXRPcGVuTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNDb3BpZWQsIHNldElzQ29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyByZXNldCBpc0NvcGllZCBhZnRlciBhIHNlY29uZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0NvcGllZCkge1xuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gc2V0SXNDb3BpZWQoZmFsc2UpLCAxMDAwKTtcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgfVxuICB9LCBbaXNDb3BpZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5vU2VhcmNoPlxuICAgICAgPFVzZXJMb2dpbiBvcGVuPXtvcGVuTG9naW59IG9uQ2xvc2U9eygpID0+IHNldE9wZW5Mb2dpbihmYWxzZSl9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlbiBzcGFjZS14LTIgcHgtNCBzbTpweC02IG1kOnB4LTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlByb2ZpbCB2b248L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPnt1c2VyLm5hbWV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgeyEhdXNlci5ib29rbWFya3MubGVuZ3RoID8gKFxuICAgICAgICA8SW1hZ2VMaXN0IGltYWdlcz17dXNlci5ib29rbWFya3MubWFwKChib29rbWFyaykgPT4gYm9va21hcmsuaW1hZ2UpfSB0b0ltYWdlIGFsbG93Q2FuY2VsaW5nRGVsZXRlQm9va21hcmsgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IG1kOnB4LTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTQgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItZ3JheS0zMDAgcHgtNCBweS0xMiB0ZXh0LWNlbnRlciBob3Zlcjpib3JkZXItZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6cmluZy1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPEhlYXJ0SWNvbiBjbGFzc05hbWU9XCJteC1hdXRvIGgtMTIgdy0xMiB0ZXh0LWdyYXktMjAwXCIgLz5cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtNCBibG9jayB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICBEaWVzZXIgTnV0emVyIGhhdCBub2NoIGtlaW5lIEJpbGRlciBhdWYgZGVyIE1lcmtsaXN0ZS5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvUGFnZT5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IEVycm9yQm91bmRhcnkgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2Ugbm9TZWFyY2g+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBtZDpweC0wXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5OdXR6ZXIgbmljaHQgZ2VmdW5kZW48L2gxPlxuICAgICAgPC9kaXY+XG4gICAgPC9QYWdlPlxuICApO1xufTtcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidmZTRkYjBhMScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtRUVPNEhIVkkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUlOM0cyTFRJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzRNUEtGVVQuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUhRMlY3Q1ZWLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2F1dGgnOnsnaWQnOidyb3V0ZXMvYXV0aCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgtRkhWNUNGMlIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVNKUkkyTVJFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR0ZMT1pNVVUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ENFBYUFA1Vy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVk0RERXRzZFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSEtLSkk3VjIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ib29rbWFya3MvY3JlYXRlJzp7J2lkJzoncm91dGVzL2Jvb2ttYXJrcy9jcmVhdGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYm9va21hcmtzL2NyZWF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ib29rbWFya3MvY3JlYXRlLUJQUEpGTkxaLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1IS0tKSTdWMi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ib29rbWFya3MvZGVsZXRlJzp7J2lkJzoncm91dGVzL2Jvb2ttYXJrcy9kZWxldGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYm9va21hcmtzL2RlbGV0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ib29rbWFya3MvZGVsZXRlLU1TQlhJRlNCLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1IS0tKSTdWMi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ib29rbWFya3MvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYm9va21hcmtzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jvb2ttYXJrcycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYm9va21hcmtzL2luZGV4LVVJTjJORDROLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HRkxPWk1VVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUQ0UFhQUDVXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWTRERFdHNkUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IS0tKSTdWMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jaXRpZXMvJGNpdHlJZCc6eydpZCc6J3JvdXRlcy9jaXRpZXMvJGNpdHlJZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjaXRpZXMvOmNpdHlJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jaXRpZXMvJGNpdHlJZC00MjVVU1RSSi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRk5ORDdXUFUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XTUVPVjdQTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTc2N1MyUk9ZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWTRERFdHNkUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IS0tKSTdWMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jaXRpZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY2l0aWVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NpdGllcycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2l0aWVzL2luZGV4LVVTUTNBVlVHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XTUVPVjdQTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVk0RERXRzZFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSEtLSkk3VjIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW1hZ2UvJGltYWdlSWQnOnsnaWQnOidyb3V0ZXMvaW1hZ2UvJGltYWdlSWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonaW1hZ2UvOmltYWdlSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW1hZ2UvJGltYWdlSWQtN0FLV0JIQk8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUQ0UFhQUDVXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNzY3UzJST1kuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZNEREV0c2RS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhLS0pJN1YyLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LTRYTU9WT0pXLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ENFBYUFA1Vy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVk0RERXRzZFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSEtLSkk3VjIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGFydGllcy8kcGFydHlJZCc6eydpZCc6J3JvdXRlcy9wYXJ0aWVzLyRwYXJ0eUlkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BhcnRpZXMvOnBhcnR5SWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGFydGllcy8kcGFydHlJZC1BQkZTTDVZWS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRDRQWFBQNVcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03NjdTMlJPWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVk0RERXRzZFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSEtLSkk3VjIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGFydGllcy9pbmRleCc6eydpZCc6J3JvdXRlcy9wYXJ0aWVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BhcnRpZXMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BhcnRpZXMvaW5kZXgtRzNVNUI3VE4uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUZOTkQ3V1BVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV01FT1Y3UEwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03NjdTMlJPWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVk0RERXRzZFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSEtLSkk3VjIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmF3LWRhdGEnOnsnaWQnOidyb3V0ZXMvcmF3LWRhdGEnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmF3LWRhdGEnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmF3LWRhdGEtTkZPT0k2SkguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTc2N1MyUk9ZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWTRERFdHNkUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IS0tKSTdWMi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy91c2VyLyR1c2VySWQnOnsnaWQnOidyb3V0ZXMvdXNlci8kdXNlcklkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3VzZXIvOnVzZXJJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy91c2VyLyR1c2VySWQtQ0VQUkNIM00uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVNKUkkyTVJFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRDRQWFBQNVcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZNEREV0c2RS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhLS0pJN1YyLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvdXNlci9jcmVhdGUnOnsnaWQnOidyb3V0ZXMvdXNlci9jcmVhdGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzondXNlci9jcmVhdGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdXNlci9jcmVhdGUtSklCMkNRUTIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdGTE9aTVVVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSEtLSkk3VjIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdXNlci9sb2dpbic6eydpZCc6J3JvdXRlcy91c2VyL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3VzZXIvbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdXNlci9sb2dpbi1QNVFBQ1pLRC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstR0ZMT1pNVVUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1IS0tKSTdWMi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtRkU0REIwQTEuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVB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Q0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUE7QUFHSyxJQUFNLFFBQVE7QUFBQSxFQUNuQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxF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
