/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/cR7c5bwGXv7
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    <>
      <div className="bg-gray-50/90 border-t border-gray-200 dark:border-gray-800">
        <div className="container py-4">
          <div className="grid items-center gap-4 grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center space-x-4">
              <img
                alt="Logo"
                className="rounded-lg"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="grid gap-1.5">
                <h1 className="text-xl font-bold tracking-tighter sm:text-2xl">ASL Academy</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Learn American Sign Language (ASL) with ease</p>
              </div>
            </div>
            <ul className="flex items-center justify-center gap-4 flex-wrap text-sm font-medium">
              <li>
                <Link className="text-gray-900 dark:text-gray-100" href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-gray-900 dark:text-gray-100" href="#">
                  Lessons
                </Link>
              </li>
              <li>
                <Link className="text-gray-900 dark:text-gray-100" href="#">
                  Practice
                </Link>
              </li>
              <li>
                <Link className="text-gray-900 dark:text-gray-100" href="#">
                  Progress
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="grid items-center w-full py-12 gap-4 text-center lg:py-24">
        <div className="container flex flex-col items-center justify-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">Learn ASL with Ease</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Accessible, fun, and effective sign language learning for everyone.
          </p>
        </div>
        <div className="space-y-4">
          <Link
            className="mx-auto max-w-[300px] inline-block w-full rounded-md bg-gray-900 px-8 py-3 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 sm:max-w-[200px] dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
            href="#"
          >
            Start Learning
          </Link>
          <Link
            className="mx-auto max-w-[300px] inline-block w-full rounded-md border border-gray-200 bg-white px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 sm:max-w-[200px] dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:border-gray-800"
            href="#"
          >
            Tour the Platform
          </Link>
        </div>
      </header>
      <section className="grid items-center w-full py-12 gap-4 text-center lg:py-24">
        <div className="container space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Interactive Lessons</h2>
          <p className="max-w-3xl mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Dive into engaging lessons that make learning ASL enjoyable. Our interactive approach lets you practice
            signs and sentences while having fun.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-4 px-4 items-start sm:grid-cols-2 md:gap-8 lg:max-w-5xl lg:grid-cols-2">
          <div className="flex flex-col gap-2">
            <img
              alt="Lesson 1"
              className="rounded-lg object-cover aspect-video"
              height="250"
              src="/placeholder.svg"
              width="400"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Greetings</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Learn how to greet others using ASL. Master common phrases and gestures.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="Lesson 2"
              className="rounded-lg object-cover aspect-video"
              height="250"
              src="/placeholder.svg"
              width="400"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Family Signs</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Explore signs related to family members. Practice vocabulary and expressions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 lg:py-24 dark:bg-gray-800">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learn Anytime, Anywhere</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Access your ASL lessons on the go. Our platform is designed to work on all your devices, allowing you to
                practice signing anywhere, anytime.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 items-start sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Interactive Lessons</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Dive into engaging lessons that make learning ASL enjoyable. Practice signs and sentences while having
                fun.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Progress Tracking</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our platform lets you track your progress as you learn ASL. See your improvement over time.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Mobile-Friendly</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Access your ASL lessons on the go. Our platform is designed to work on all your devices.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Community Support</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Connect with other learners and native signers in our community. Get tips, feedback, and support.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid items-center w-full py-12 gap-4 text-center lg:py-24">
        <div className="container space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hear from Our Learners</h2>
          <p className="max-w-3xl mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            See what our users have to say about their ASL learning experience.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-3">
          <div className="flex flex-col gap-2">
            <img
              alt="User 1"
              className="rounded-full object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Emily</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                "Learning ASL with the ASL Academy has been an amazing experience. The lessons are engaging and the
                platform is easy to use. I feel more confident in my signing skills thanks to this platform."
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="User 2"
              className="rounded-full object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Alex</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                "The ASL Academy makes learning sign language fun and interactive. I love the video lessons and the
                ability to practice my signing with the quizzes. It feels like I have a personal tutor guiding me
                through the lessons."
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img
              alt="User 3"
              className="rounded-full object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Liam</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                "I have been using the ASL Academy to learn sign language and I am impressed by the quality of the
                lessons. The platform is user-friendly and the instructors are excellent. I highly recommend this
                platform to anyone who wants to learn ASL."
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid items-center w-full py-12 gap-4 text-center lg:py-24">
        <div className="container space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Plan</h2>
          <p className="max-w-3xl mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Access all the features of the ASL Academy with a subscription. Pick the plan that works best for you.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-4 lg:grid-cols-3">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-2xl font-bold">$9.99/mo</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Subscription</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-2xl font-bold">$99/yr</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Annual Subscription</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-2xl font-bold">Free</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Access to limited content</p>
          </div>
          <form className="mx-auto max-w-sm space-y-4">
            <div className="grid max-w-xs gap-1.5">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="Enter your email" />
            </div>
            <Button className="w-full" type="submit">
              Get Started
            </Button>
          </form>
        </div>
      </section>
      <footer className="bg-gray-50/90 border-t border-gray-200 dark:border-gray-800">
        <div className="container grid gap-6 py-8 text-sm lg:grid-cols-3">
          <div className="space-y-4">
            <Link className="font-medium" href="#">
              About Us
            </Link>
            <Link className="font-medium" href="#">
              Terms of Service
            </Link>
            <Link className="font-medium" href="#">
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 lg:col-start-2 lg:justify-center lg:space-x-4 lg:col-span-2 dark:text-gray-400">
            <span>© 2023 ASL Academy. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-4 justify-end lg:space-x-2">
            <Link className="text-gray-900 dark:text-gray-100" href="#">
              <TwitterIcon className="w-4 h-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link className="text-gray-900 dark:text-gray-100" href="#">
              <FacebookIcon className="w-4 h-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link className="text-gray-900 dark:text-gray-100" href="#">
              <InstagramIcon className="w-4 h-4" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}