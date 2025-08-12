import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
import { HERO } from "@/lib/content/landing";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  BarChart3,
  Zap,
} from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-amber-50"
      id="home"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content - Enhanced with Yellow Theme */}
        <Reveal delayMs={80}>
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-800 text-sm font-medium">
              <Zap className="size-4" />
              <span>Trusted by UM Digos College</span>
            </div>

            {/* Main Headline with Yellow "Effortlessly" */}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              <span className="text-gray-900">Modernizing Assembly</span>
              <br />
              <span className="text-gray-900">Attendance, </span>
              <span className="text-yellow-500">Effortlessly.</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              {HERO.subheadline}
            </p>

            {/* Enhanced Feature List with Yellow Theme */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-100">
                <div className="size-6 rounded-full bg-yellow-400 flex items-center justify-center">
                  <Clock className="size-3 text-black" />
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  Real‑time attendance tracking
                </span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-100">
                <div className="size-6 rounded-full bg-yellow-400 flex items-center justify-center">
                  <CheckCircle className="size-3 text-black" />
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  QR code check‑ins
                </span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-100">
                <div className="size-6 rounded-full bg-yellow-400 flex items-center justify-center">
                  <Users className="size-3 text-black" />
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  One dashboard for every event
                </span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-100">
                <div className="size-6 rounded-full bg-yellow-400 flex items-center justify-center">
                  <BarChart3 className="size-3 text-black" />
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  Exportable reports
                </span>
              </li>
            </ul>

            {/* Enhanced CTA Button with Real Arrow */}
            <div className="pt-2">
              <Button
                className="h-12 px-6 text-base bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg hover:shadow-xl transition-all duration-200 group"
                asChild
              >
                <Link href={HERO.ctaHref}>
                  Join Now
                  <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Right Content - Original Image with Floating Elements */}
        <Reveal direction="left" delayMs={160} className="relative">
          <div className="relative">
            {/* Original Image Container */}
            <div className="relative aspect-[4/3] w-full rounded-xl border bg-neutral-50 overflow-hidden shadow-xl">
              <Image
                src={HERO.imageSrc}
                alt="Attendance dashboard preview"
                fill
                priority
                className="object-cover object-bottom"
              />
            </div>

            {/* Floating Stats Cards */}
            <div
              className="absolute -top-4 -left-6 bg-white rounded-lg p-3 shadow-lg border animate-bounce z-10"
              style={{ animationDuration: "3s" }}
            >
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="size-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">98%</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -right-6 bg-white rounded-lg p-3 shadow-lg border animate-bounce z-10"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Clock className="size-4 text-yellow-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">&lt;5s</div>
                  <div className="text-xs text-gray-500">Check-in</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/4 -right-8 bg-white rounded-lg p-2 shadow-lg border animate-pulse z-10">
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="size-3 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-500">Users</div>
                </div>
              </div>
            </div>

            {/* Background Floating Elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl animate-pulse" />
            <div
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-amber-400/20 rounded-full blur-lg animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
