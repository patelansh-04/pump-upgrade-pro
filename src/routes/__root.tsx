import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { QuoteWidget } from "@/components/quote-widget";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary mt-6">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try again</button>
          <a href="/" className="btn-outline">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Paarth Solar Pumps — Solar & Conventional Pumping Since 1991" },
      { name: "description", content: "Paarth Solar Pumps Pvt. Ltd. — IEC, MNRE & ISO 9001:2015 certified manufacturer of solar submersible, surface, controller and conventional pumps. 42,000+ supplied across India." },
      { name: "author", content: "Paarth Solar Pumps" },
      { property: "og:title", content: "Paarth Solar Pumps — Solar & Conventional Pumping Since 1991" },
      { property: "og:description", content: "Paarth Solar Pumps Pvt. Ltd. — IEC, MNRE & ISO 9001:2015 certified manufacturer of solar submersible, surface, controller and conventional pumps. 42,000+ supplied across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Paarth Solar Pumps — Solar & Conventional Pumping Since 1991" },
      { name: "twitter:description", content: "Paarth Solar Pumps Pvt. Ltd. — IEC, MNRE & ISO 9001:2015 certified manufacturer of solar submersible, surface, controller and conventional pumps. 42,000+ supplied across India." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c07ae795-8e96-4002-94be-b785ce44f3de/id-preview-0112a26f--92f95752-c1f7-4201-ab35-9244a9199695.lovable.app-1779686085695.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c07ae795-8e96-4002-94be-b785ce44f3de/id-preview-0112a26f--92f95752-c1f7-4201-ab35-9244a9199695.lovable.app-1779686085695.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
      <QuoteWidget />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}
