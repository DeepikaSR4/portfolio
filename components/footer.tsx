export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-serif font-bold text-xl text-primary">Portfolio</div>

          <div className="text-muted-foreground text-sm text-center md:text-right">
            <p>© 2024 Creative Professional. All rights reserved.</p>
            <p className="mt-1">Built with passion and modern web technologies.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
