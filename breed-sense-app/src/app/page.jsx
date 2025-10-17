"use client"
import React, { useState } from 'react'
import Navbar from '@/Components/Header/page';
import Main from '@/Components/main/page';
import Footer from '@/Components/footer/footer';

export default function Home() {
  return (
    <div>
     <Navbar />
     <Main />
     <Footer />
    </div>
  );
}

