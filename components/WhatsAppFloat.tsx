import { brand } from "@/lib/content";

export function WhatsAppFloat() {
  const number = brand.whatsapp.replace(/\D/g, "");
  return (
    <a
      href={`https://wa.me/${number}?text=${encodeURIComponent("Hi Meraki — I'd like to learn more about your services.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Meraki on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute right-16 top-1/2 -translate-y-1/2 hidden md:inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-[12px] text-bone shadow-soft opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat on WhatsApp
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform hover:scale-105">
        <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.626 3.41 4.553 4.34.616.302 2.197.99 2.876.99.575 0 2.49-.546 2.49-1.964 0-.245-.044-.487-.115-.717-.214-.32-1.65-1.02-2.018-1.219-.13-.072-.263-.115-.4-.115Zm-2.96 7.062c-1.59 0-3.137-.515-4.395-1.42L7 24.522l1.787-4.71a8.075 8.075 0 0 1-.937-3.78c0-4.515 3.7-8.215 8.214-8.215 4.512 0 8.213 3.7 8.213 8.214 0 4.512-3.7 8.214-8.213 8.214Z" />
        </svg>
      </span>
    </a>
  );
}
