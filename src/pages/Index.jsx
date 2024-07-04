import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Index = () => {
  const threads = [
    {
      title: "How to learn React?",
      description: "Share your tips and resources for learning React.",
      author: "John Doe",
      replies: 12,
      lastReply: "2023-10-01",
    },
    {
      title: "Best practices for Node.js",
      description: "Discuss the best practices for developing with Node.js.",
      author: "Jane Smith",
      replies: 8,
      lastReply: "2023-10-02",
    },
    // Add more threads here
  ];

  return (
    <div className="space-y-4">
      {threads.map((thread, index) => (
        <Card key={index} className="mx-auto max-w-4xl">
          <CardHeader>
            <CardTitle>{thread.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{thread.description}</p>
            <p className="text-sm text-muted-foreground">
              By {thread.author} | {thread.replies} replies | Last reply on {thread.lastReply}
            </p>
          </CardContent>
        </Card>
      ))}
      <Pagination className="mx-auto max-w-4xl">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Index;