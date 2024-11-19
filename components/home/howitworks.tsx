import { FileText, Wand2, Upload } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          How It Works
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-6 w-6" />
                1. Upload Your Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Simply upload your audio or video file (up to 25MB) to our secure platform.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="h-6 w-6" />
                2. AI Processing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our advanced AI transcribes your content and generates a well-structured blog post.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6" />
                3. Edit and Publish
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Review, edit, and customize your AI-generated blog post before publishing.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
