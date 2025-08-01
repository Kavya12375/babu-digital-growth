import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu, Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";
import logo from "@/assets/logo.webp";
import { ScheduleModal } from "./ScheduleModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "SEO Optimization", href: "https://aesthetic-sherbet-152275.netlify.app/" },
        { name: "Facebook Growth Ads", href: "https://earnest-sawine-814933.netlify.app/" },
        { name: "Instagram Growth Ads", href: "https://earnest-sawine-814933.netlify.app/" },
      ]
    },
    { name: "Packages", href: "/packages" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faqs" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Babu Digital Media" className="h-10 w-10" width="40" height="40" loading="eager" fetchPriority="high" />
            <span className="text-xl font-bold text-primary">Babu Digital Media</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <Link
                      to={item.href}
                      className={`text-foreground hover:text-brand-orange transition-colors duration-300 font-medium ${
                        location.pathname === item.href ? 'text-brand-orange' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          target={subItem.href.startsWith('http') ? '_blank' : '_self'}
                          rel={subItem.href.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="block px-4 py-3 text-sm text-foreground hover:text-brand-orange hover:bg-muted transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-foreground hover:text-brand-orange transition-colors duration-300 font-medium ${
                      location.pathname === item.href ? 'text-brand-orange' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="cta">
                  <Calendar className="h-4 w-4" />
                  Schedule Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <ScheduleModal />
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <Link to="/" className="flex items-center space-x-3 pb-4 border-b border-border" onClick={() => setIsOpen(false)}>
                  <img src={logo} alt="Babu Digital Media" className="h-8 w-8" width="32" height="32" loading="lazy" />
                  <span className="text-lg font-bold text-primary">Babu Digital Media</span>
                </Link>
                
                {navItems.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <Link
                      to={item.href}
                      className={`block text-lg font-medium text-foreground hover:text-brand-orange transition-colors ${
                        location.pathname === item.href ? 'text-brand-orange' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            target={subItem.href.startsWith('http') ? '_blank' : '_self'}
                            rel={subItem.href.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="block text-sm text-muted-foreground hover:text-brand-orange transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="cta" className="w-full mt-6">
                      <Calendar className="h-4 w-4" />
                      Schedule Demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <ScheduleModal />
                  </DialogContent>
                </Dialog>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;