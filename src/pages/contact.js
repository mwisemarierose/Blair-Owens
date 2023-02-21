import React from "react";
import Navbar from "../Components/NavBar";
import { Filter } from "../Components/Filter";
import LoginForm from "./login";
import { ChatSection } from '../Components/ChatBox/chat';
import { Footer } from "../Components/Footer/Footer";
import LoadingSpinner from "../Components/spinner/LoadingSpinner";

export function Contact() {
 
  return (
    <div>
      <ChatSection />
      <LoginForm />
      <Navbar />
      <Filter />
      <Footer />
      < LoadingSpinner />
    </div>
  );
}
