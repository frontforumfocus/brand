
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

import Image from 'next/image'


export default function Home() {
  return (
    <>
                <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800">
        <Link href="#">
        <Image src="/logo.jpeg" alt="logo" width={30} height={30} />
              <div className="font-bold text-lg">frontforumfocus</div>
          
          <span className="sr-only">FrontForumFocus</span>
        </Link>
        <nav className="space-x-4">
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="#">
            About
          </Link>
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="#">
            Features
          </Link>
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="#">
            Pricing
          </Link>
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="#">
            Contact
          </Link>
        </nav>
        <Button className="px-6 py-2 text-sm text-white bg-blue-600 hover:bg-blue-500">
        <a href="/api/auth/login">Get Started</a>
          
        </Button>
      </header>

      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/design.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Empowering Impact Through SDGs
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Frontforumfocus connects you to networks and projects that need your skills, passions, and education
                    to make a real impact.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">Why FrontForumFocus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Match with Projects</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Our tool matches you to networks and projects based on your skills, passions, and education.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Create & Collaborate</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Work on existing projects or create new ones. Collaborate with peers globally.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Track Your Impact</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Measure the impact of your work and contribution towards the SDGs. Make your efforts count.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Podcasts for Awareness</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Tune into our podcast aimed at raising awareness about the SDGs, the challenges communities face, and the
              solutions being developed.
            </p>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="https://podcasters.spotify.com/pod/show/21-givenchy"
              >
                Listen Now
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="https://www.youtube.com/@frontforumfocus"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </section>
      
    </main>
    <footer className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800">
        <p className="text-gray-600 dark:text-gray-300">© frontforumfocus Copyright © 2023 All rights reserved.</p>
        <nav className="space-x-4">
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="#">
            Privacy Policy
          </Link>
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </>
  )
}
