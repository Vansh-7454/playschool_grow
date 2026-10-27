import React from "react";
import { Metadata } from "next";
import { siteContent } from "@/content/site";
import { GalleryView } from "@/components/GalleryView";

export const metadata: Metadata = {
  title: siteContent.pages.gallery.title,
  description: siteContent.pages.gallery.description,
};

export default function GalleryPage() {
  return <GalleryView />;
}
