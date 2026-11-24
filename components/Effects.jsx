'use client';
// Header line on scroll + gentle reveal of sections. Everything is still visible without JavaScript.
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector('.site-header');
    const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const items = document.querySelectorAll('.reveal:not(.in)');
    let io;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }), { rootMargin: '0px 0px -40px 0px' });
      items.forEach((el) => io.observe(el));
    } else {
      items.forEach((el) => el.classList.add('in'));
    }
    return () => { window.removeEventListener('scroll', onScroll); io?.disconnect(); };
  }, [pathname]);

  return null;
}
