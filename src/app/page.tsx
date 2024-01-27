import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import {ArrowDownToLine, CheckCircle, Leaf} from "lucide-react";

const caption = [
    {
        name: "History",
        icon: ArrowDownToLine,
        description: "Download all your plant History"
    },
    {
        name: "Apartments ",
        icon: CheckCircle,
        description: "Navigate all your apartments"
    },
    {
        name: "Plant Schedules",
        icon: Leaf,
        description: "Brows plants scheduled for watering"
    }
];

export default function Home() {
  return (
      <>
          <MaxWidthWrapper>
            <div className={"py-20 mx-auto text-center flex flex-col items-center max-w-3xl"}>
                <h1 className={"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"}>
                    Your House Plant Management :
                    <span className={"text-green-600"}> Web Application </span>
                </h1>
                <p className={"mt-6 text-lg max-w-prose text-muted-foreground"}>
                    Welcome to Plant Management.
                    A web application allowing users to add the different plants in their apartment or
                    house and track the water needs for each (for example: 1L of water, every 3 days).
                </p>
                <div className={"flex flex-col sm:flex-row gap-4 mt-6"}>
                    <Link href={"/plants"} className={buttonVariants()}>
                        Plants
                    </Link>
                    <Button variant={"ghost"}>
                        Apartments &rarr;
                    </Button>
                </div>
            </div>
              {/*TODO: List Products here..*/}
          </MaxWidthWrapper>

          <section className={"border-t border-gray-200 bg-gray-50"}>
              <MaxWidthWrapper className={"py-20"}>
                  <div className={"grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"}>
                      {caption.map((caption) => (
                          <div key={caption.name}
                               className={"text-center md:flex md:items-start md:text-left lg:block lg:text-center"}>
                              <div className={"md:flex-shrink-0 flex justify-center"}>
                                  <div
                                      className={"h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900"}>
                                      {<caption.icon className={"w-1/3 h-1/3"}/>}
                                  </div>
                              </div>

                              <div className={"mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6"}>
                                  <h3 className={"text-base font-medium text-gray-900"}>
                                      {caption.name}
                                  </h3>
                                  <p className={"mt-3 text-sm text-muted-foreground"}>
                                      {caption.description}
                                  </p>
                              </div>
                          </div>
                      ))}
                  </div>
              </MaxWidthWrapper>
          </section>
      </>
  );
}
