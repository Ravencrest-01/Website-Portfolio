export function Footer() {
    return (
        <footer className="py-8 border-t border-border bg-card/50">
            <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
                <p className="text-sm text-muted-foreground text-center md:text-left">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
                <div className="flex gap-4">
                    {/* Social links could act as footer links too */}
                </div>
            </div>
        </footer>
    );
}
