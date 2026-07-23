const R2_BASE = process.env.NEXT_PUBLIC_R2_URL?.replace(/\/+$/, "") ?? "";

export function r2(path: string): string {
  if (!R2_BASE) return path;
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${R2_BASE}/${clean}`;
}
