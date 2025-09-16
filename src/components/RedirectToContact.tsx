"use client"
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';

export default function RedirectToContact() {
    const router = useRouter();
  return (
    <section className='grid place-items-center gap-5'>
        <h4 className='text-3xl font-[600]  max-md:text-2xl'>Still have questions? Let’s talk!</h4>
        <Button
            className="group relative cursor-pointer overflow-hidden rounded-md bg-gradient-to-r from-[#A632F2] to-[#FBA325] px-4 py-2 text-white"
            onClick={() => router.push("/contactus")}
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 z-0 bg-gradient-to-b from-[#A632F2] to-[#FBA325] opacity-0 transition-opacity duration-700 group-hover:opacity-100"></span>
          </Button>
    </section>
  )
}
