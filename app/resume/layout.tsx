import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thays Pritchard - Resume | thayspritchard.com",
  description: "Resume and experience for Thays Pritchard, Senior Product Manager.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
