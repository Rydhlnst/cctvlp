"use client";

import * as React from "react";
import {
  ArrowUpRight,
  Building2,
  Camera,
  ChevronRight,
  Cpu,
  HardHat,
  Hotel,
  Landmark,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Sun,
  Truck,
  Users,
  Warehouse,
  Wrench,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";
import { cn } from "@/lib/utils";
import { ADMIN_WA_DISPLAY, waUrl } from "@/lib/whatsapp";

const PRODUCT_ITEMS = [
  { icon: Camera, title: "Security System", tag: "CCTV & Alarm", desc: "Instalasi CCTV & alarm untuk melindungi aset." },
  { icon: Zap, title: "Electrical Works", tag: "MV & LV", desc: "Panel MV/LV, cubicle, trafo, PJU, lift, genset." },
  { icon: Cpu, title: "Industrial PLC", tag: "Automation", desc: "PLC, Mikrotik, server, otomasi & robotika." },
  { icon: Building2, title: "Building Construction", tag: "Design & Build", desc: "Bangunan baru, renovasi, interior & eksterior." },
  { icon: Wrench, title: "Mechanical Plumbing", tag: "MEP", desc: "HVAC, hydran, pipa & fitting, pompa, gas." },
  { icon: Sun, title: "Solar Power (PLTS)", tag: "Renewable", desc: "Instalasi & pemeliharaan PLTS." },
  { icon: Truck, title: "Heavy Equipment", tag: "Service", desc: "Servis backhoe, crane, excavator, grader." },
  { icon: HardHat, title: "Electronic Service", tag: "Repair", desc: "AC, pompa, gerbang otomatis, elektronik." },
  { icon: Users, title: "Suppliers & SDM", tag: "Outsourcing", desc: "SDM bersertifikasi + barang & jasa." },
];

const SOLUTION_ITEMS = [
  { icon: Warehouse, title: "Industri & Pabrik" },
  { icon: Landmark, title: "Perbankan" },
  { icon: ShoppingBag, title: "Retail & F&B" },
  { icon: Hotel, title: "Perhotelan" },
  { icon: Building2, title: "Perkantoran" },
  { icon: HardHat, title: "Konstruksi" },
];

const SIMPLE_LINKS = [
  { label: "Paket", href: "#paket" },
  { label: "Galeri", href: "#galeri" },
  { label: "Tentang", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

function MegaLink({
  icon: Icon,
  title,
  desc,
  tag,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc?: string;
  tag?: string;
  href: string;
}) {
  return (
    <NavigationMenuLink asChild>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
      >
        <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Icon className="size-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <div className="truncate text-sm font-semibold text-foreground">
              {title}
            </div>
            {tag && (
              <Badge variant="secondary" className="text-[10px]">
                {tag}
              </Badge>
            )}
          </div>
          {desc && (
            <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
              {desc}
            </p>
          )}
        </div>
        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
    </NavigationMenuLink>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const THRESHOLD = 80;
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > THRESHOLD);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      aria-hidden={!(scrolled || open)}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        scrolled || open
          ? "translate-y-0 border-b border-border/60 bg-background/85 shadow-sm backdrop-blur-md"
          : "pointer-events-none -translate-y-full opacity-0"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
        <Logo />

        {/* Desktop nav */}
        <NavigationMenu className="hidden lg:flex" viewport={false}>
          <NavigationMenuList className="gap-1">
            {/* Produk mega menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 bg-transparent px-3 text-sm">
                Produk
              </NavigationMenuTrigger>
              <NavigationMenuContent className="left-0 !w-[720px] p-4">
                <div className="mb-3 flex items-center justify-between px-2">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    9 lini bisnis
                  </div>
                  <a
                    href="#produk"
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    Lihat semua →
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {PRODUCT_ITEMS.map((item) => (
                    <MegaLink
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      desc={item.desc}
                      tag={item.tag}
                      href={waUrl(item.title, "consult")}
                    />
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Solusi mega menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 bg-transparent px-3 text-sm">
                Solusi
              </NavigationMenuTrigger>
              <NavigationMenuContent className="!w-[360px] p-3">
                <div className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Per industri
                </div>
                <div className="grid gap-1">
                  {SOLUTION_ITEMS.map((s) => (
                    <MegaLink
                      key={s.title}
                      icon={s.icon}
                      title={s.title}
                      href={waUrl(`Solusi: ${s.title}`, "consult")}
                    />
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {SIMPLE_LINKS.map((l) => (
              <NavigationMenuItem key={l.href}>
                <NavigationMenuLink
                  asChild
                  className="h-9 rounded-md px-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  <a href={l.href}>{l.label}</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right CTAs */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="lg"
            className="hidden md:inline-flex"
            asChild
          >
            <a href={`tel:+${ADMIN_WA_DISPLAY.replace(/[^\d]/g, "")}`}>
              <Phone />
              Telepon
            </a>
          </Button>
          <Button size="lg" asChild>
            <a
              href={waUrl("Konsultasi Umum", "consult")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
              Chat Admin
            </a>
          </Button>

          {/* Mobile trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-lg"
                className="lg:hidden"
                aria-label="Buka menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 pb-6">
                <MobileGroup title="Produk">
                  {PRODUCT_ITEMS.map((p) => (
                    <MobileRow
                      key={p.title}
                      icon={p.icon}
                      title={p.title}
                      href={waUrl(p.title, "consult")}
                      onNavigate={() => setOpen(false)}
                    />
                  ))}
                </MobileGroup>

                <MobileGroup title="Solusi">
                  {SOLUTION_ITEMS.map((s) => (
                    <MobileRow
                      key={s.title}
                      icon={s.icon}
                      title={s.title}
                      href={waUrl(`Solusi: ${s.title}`, "consult")}
                      onNavigate={() => setOpen(false)}
                    />
                  ))}
                </MobileGroup>

                <MobileGroup title="Lainnya">
                  {SIMPLE_LINKS.map((l) => (
                    <MobileRow
                      key={l.href}
                      title={l.label}
                      href={l.href}
                      internal
                      onNavigate={() => setOpen(false)}
                    />
                  ))}
                </MobileGroup>
              </div>

              <div className="border-t border-border p-4">
                <SheetClose asChild>
                  <Button className="w-full" size="lg" asChild>
                    <a
                      href={waUrl("Konsultasi Umum", "consult")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle />
                      Chat Admin
                    </a>
                  </Button>
                </SheetClose>
                <div className="mt-3 text-center text-xs text-muted-foreground">
                  {ADMIN_WA_DISPLAY}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MobileGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </div>
      <div className="grid gap-1">{children}</div>
    </div>
  );
}

function MobileRow({
  icon: Icon,
  title,
  href,
  internal,
  onNavigate,
}: {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  href: string;
  internal?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <a
      href={href}
      target={internal ? undefined : "_blank"}
      rel={internal ? undefined : "noopener noreferrer"}
      onClick={onNavigate}
      className={cn(
        "flex items-center justify-between rounded-md border border-border/60 bg-background p-3 transition-colors hover:border-primary/40"
      )}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Icon className="size-4" />
          </div>
        )}
        <span className="text-sm font-medium">{title}</span>
      </div>
      <ChevronRight className="size-4 text-muted-foreground" />
    </a>
  );
}
