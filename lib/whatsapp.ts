export const ADMIN_WA = "6287760737847";
export const ADMIN_WA_DISPLAY = "+62 877 6073 7847";

type Intent = "order" | "consult" | "quote";

const INTENT_LABEL: Record<Intent, string> = {
  order: "memesan",
  consult: "berkonsultasi mengenai",
  quote: "meminta penawaran untuk",
};

export function waUrl(product: string, intent: Intent = "consult") {
  const body =
    `Halo Admin PT. Pakar Inspeksi Indonesia,\n\n` +
    `Saya tertarik ${INTENT_LABEL[intent]}: *${product}*.\n\n` +
    `Mohon informasi lebih lanjut mengenai proses & pembayarannya.\n` +
    `Terima kasih.`;
  return `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(body)}`;
}
