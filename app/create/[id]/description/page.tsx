import { CreateDescription } from "@/app/actions";
import BottomBar from "@/components/BottomBar/BottomBar";
import Counter from "@/components/Counter/Counter";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className="w-3/5  mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          {" "}
          Please describe your home as good as you can!
        </h2>
      </div>
      <form action={CreateDescription} className="mx-auto mt-10 flex flex-col  mb-36">
        <input   type="hidden" name="homeId" value={params.id} />
        <div className="mx-auto w-3/5 mt-10 flex flex-col gap-y-5 mb-36">
          <div className="flex flex-col gap-y-2">
            <Label>Title</Label>
            <Input required  name="title"  placeholder="short and simple " />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Descrpition </Label>
            <Textarea
              name="Descrpition"
              required
              placeholder="please describe your Home  "
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Price </Label>

            <Input required 
              min={10}
              name="Price"
              type="number"
        
              placeholder="Price per night per USD  "
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Image </Label>

            <Input required  min={10} name="Image" type="file"  />
          </div>
          <Card className="flex flex-col gap-y-2">
            <CardHeader className="flex flex-col ">
              <div className="flex items-center justify-between">
                <h3 className="underline font-medium">Guests</h3>
                <p className="text-muted-foreground tex-sm ">
                  How many guests do you want?
                </p>
                <Counter name="Guests" />
              </div>
            </CardHeader>
            <CardHeader className="   flex flex-col ">
              <div className="flex items-center justify-between">
                <h3 className="underline font-medium">Rooms</h3>
                <p className="text-muted-foreground tex-sm ">
                  How many rooms do you want?
                </p>
                <Counter name="Rooms" />
              </div>
            </CardHeader>
            <CardHeader className=" flex flex-col ">
              <div className="flex items-center justify-between">
                <h3 className="underline font-medium">bathrooms</h3>
                <p className="text-muted-foreground tex-sm ">
                  How many bathrooms do you want?
                </p>
                <Counter name="bathrooms" />
              </div>
            </CardHeader>
          </Card>
        </div>

        <BottomBar />
      </form>
    </>
  );
};

export default page;
