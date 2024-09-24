import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const protectedRoute = [
    "account-information",
    "address-book",
    "order-history",
  ];
  let verify = req.cookies.get("CENNOLLIOWEB_COOKIE_PERSISTENCE__auth_token");
  const placeOrder: any = req.cookies.get(
    "CENNOLLIOWEB_COOKIE_PERSISTENCE__order-placed"
  );

  const cartItemCookies = req.cookies.get(
    "CENNOLLIOWEB_COOKIE_PERSISTENCE__empty-cart"
  );
  const isPlaceOrder =
    placeOrder?.value && JSON.parse(placeOrder?.value)?.value === "true";

  const hasCartItems =
    cartItemCookies?.value &&
    JSON.parse(cartItemCookies?.value)?.value === "true";

  let url = req.url;

  const currentURL = url.split("/")[3];

  if (!verify && protectedRoute.includes(currentURL)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!isPlaceOrder && currentURL === "thank-you") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!hasCartItems && currentURL === "checkout") {
    return NextResponse.redirect(new URL("/cart", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
