import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import RecentBookings from "./(components)/recent-bookings";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col space-x-3 ">
        <h2>Dashboard</h2>
        <div className="flex flex-col md:flex-row py-5">
          <Card className="max-w-[340px] m-5 p-2">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    Users
                  </h4>
                </div>
              </div>
              <Button
                className="bg-transparent text-foreground border-default-200"
                color="primary"
                radius="full"
                size="sm"
                variant={"bordered"}
                // onPress={}
              >
                View
              </Button>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p>322</p>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">22</p>
                <p className=" text-default-400 text-small">Last Month</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  120%
                </p>
                <p className="text-default-400 text-small">Growth</p>
              </div>
            </CardFooter>
          </Card>
          <Card className="max-w-[340px] m-5 p-2">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    Bookings
                  </h4>
                </div>
              </div>
              <Button
                className="bg-transparent text-foreground border-default-200"
                color="primary"
                radius="full"
                size="sm"
                variant={"bordered"}
                // onPress={}
              >
                View
              </Button>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p>140</p>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">20</p>
                <p className=" text-default-400 text-small">Last Month</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  120%
                </p>
                <p className="text-default-400 text-small">Growth</p>
              </div>
            </CardFooter>
          </Card>
          <Card className="max-w-[340px] m-5 p-2">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    Revenue
                  </h4>
                </div>
              </div>
              <Button
                className="bg-transparent text-foreground border-default-200"
                color="primary"
                radius="full"
                size="sm"
                variant={"bordered"}
                // onPress={}
              >
                View
              </Button>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p>$300K</p>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  $22k
                </p>
                <p className=" text-default-400 text-small">Last Month</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  120%
                </p>
                <p className="text-default-400 text-small">Growth</p>
              </div>
            </CardFooter>
          </Card>
          <Card className="max-w-[340px] m-5 p-2">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    Users
                  </h4>
                </div>
              </div>
              <Button
                className="bg-transparent text-foreground border-default-200"
                color="primary"
                radius="full"
                size="sm"
                variant={"bordered"}
                // onPress={}
              >
                View
              </Button>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p>322</p>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">22</p>
                <p className=" text-default-400 text-small">Last Month</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  120%
                </p>
                <p className="text-default-400 text-small">Growth</p>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col px-2 py-2 gap-4">
          <h2>Recent Bookings</h2>
          <RecentBookings />
        </div>
      </div>
    </>
  );
}
