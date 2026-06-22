"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import UseCases from "@/components/UseCases";
import Differentials from "@/components/Differentials";
import Timeline from "@/components/Timeline";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <Problem />
        <Solution />
        <UseCases />
        <Differentials />
        <Timeline />
        <FinalCTA onOpenModal={() => setModalOpen(true)} />
      </main>
      <Footer />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
