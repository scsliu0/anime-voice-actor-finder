import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Anime Voice Actor Finder
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover which characters share the same voice actor
          </p>
        </div>

        {/* Search Card */}
        <Card>
          <CardHeader>
            <CardTitle>Search Anime</CardTitle>
            <CardDescription>
              Find an anime to explore its characters and voice actors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter anime name..." 
                className="flex-1"
              />
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>

        {/* Status Card */}
        <Card>
          <CardHeader>
            <CardTitle>Setup Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                TanStack Start configured
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Tailwind CSS working
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                shadcn/ui components installed
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Convex connected
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}