import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Mic, Video, PenTool, Zap, Shield, DollarSign, FileText, Wand2, Upload } from 'lucide-react'
/* import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/"
 */import { auth } from "@clerk/nextjs/server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";


export default async function Banner() {
  const { userId } = await auth()
  return (
    <section className="lg:max-w-6xl mx-auto flex flex-col z-0 items-center justify-center py-4 sm:pt-8 transition-all animate-in">
      <main className="flex-1">
        <section className="w-full py-2 md:py-4 lg:py-8 xl:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Transform Your Audio & Video into Engaging Blog Posts
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Harness the power of AI to convert your audio and video content into SEO-friendly blog posts in seconds.
                </p>
              </div>
              <div className="space-x-4">
                {userId ? (
                  <Button
                  variant={"link"}
                  className="mt-6 text-xl rounded-full px-12 py-8 lg:mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-bold shadow-lg hover:no-underline"
                >
                  <Link href="/#pricing" className="flex gap-2 items-center">
                    <span className="relative">Get BlogGenius </span>
                    <ArrowRight className="animate-pulse" />
                  </Link>
                </Button>
                ) : (
                  <Button asChild>
                    <Link href="/sign-up">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Video className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Audio & Video Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Upload audio or video files up to 25MB and let our AI do the rest.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <PenTool className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>AI-Powered Blog Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Our advanced AI transforms your content into well-structured, engaging blog posts.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Get your blog posts generated in seconds, not hours.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>How accurate is the AI-generated content?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Our AI model is highly accurate, but we always recommend reviewing and editing the generated content for optimal results.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Can I edit the generated blog posts?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Yes, we provide a built-in editor that allows you to refine and customize your AI-generated blog posts.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What file formats are supported?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>We support common audio formats (MP3, WAV, M4A) and video formats (MP4, MOV, AVI) up to 25MB.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Is my content secure?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>We take security seriously. All uploaded files and generated content are encrypted and securely stored.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
