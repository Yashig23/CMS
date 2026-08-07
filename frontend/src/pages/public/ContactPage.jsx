export default function ContactPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Contact</h1>
        <p className="mb-10 text-slate-400">
          Have a question or want to get started? Send us a message.
        </p>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-500 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-indigo-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
