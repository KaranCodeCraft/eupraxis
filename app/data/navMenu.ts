interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

export const NavMenu: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'About us', href: '#about', current: false },
    { name: 'Our services and Expertise', href: '#services', current: false },
    { name: 'Contact Us', href: '#contact', current: false },
];