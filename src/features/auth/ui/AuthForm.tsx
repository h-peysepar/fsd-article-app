import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useState } from "react";
import { useAuth } from "../model";

export const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, isLoading } = useAuth();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm w-full mx-auto">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          disabled={isLoading}
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          disabled={isLoading}
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button disabled={isLoading} type="submit" className="w-full">
        Auth
      </Button>
    </form>
  );
};
