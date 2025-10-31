import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div>
      <div className="p-2 flex-row space-y-4">
        <Button variant={"elevated"}>Hello</Button>
        <Input placeholder="Enter some text"></Input>
        <Progress value={50}></Progress>
        <Textarea placeholder="Enter anything"></Textarea>
        <Checkbox></Checkbox>
      </div>
    </div>
  );
}
