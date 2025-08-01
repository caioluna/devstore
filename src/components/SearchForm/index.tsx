'use client'

import {Search} from "lucide-react";
import {FormEvent} from "react";
import {useRouter, useSearchParams} from "next/navigation";

export function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`);
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex bg-zinc-900 w-[320px] rounded-full h-[44px] px-5 py-3 gap-3 items-center ring-zinc-700">

      <Search className="text-zinc-500 w-5 h-5"/>

      <input
        name='q'
        defaultValue={query ?? ''}
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
        required
      />
    </form>
  )
}