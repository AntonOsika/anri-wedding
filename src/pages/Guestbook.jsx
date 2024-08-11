import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Guestbook = () => {
  const [messages, setMessages] = useState([
    { name: "Emma", message: "Can't wait for the laser tag showdown!" },
    { name: "Liam", message: "Congratulations! Your love story is as unique as Budapest itself." },
  ]);
  const [newMessage, setNewMessage] = useState({ name: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      setMessages([...messages, newMessage]);
      setNewMessage({ name: '', message: '' });
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Guestbook</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Leave a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Your Name"
              value={newMessage.name}
              onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
              className="mb-4"
            />
            <Textarea
              placeholder="Your Message"
              value={newMessage.message}
              onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
              className="mb-4"
            />
            <Button type="submit">Send Message</Button>
          </form>
        </CardContent>
      </Card>
      <div className="grid gap-4">
        {messages.map((msg, index) => (
          <Card key={index}>
            <CardContent className="pt-4">
              <p className="font-bold">{msg.name}</p>
              <p>{msg.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;
