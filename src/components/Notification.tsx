"use client"

import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Bell} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import Image from "next/image";

const Notification = () => {

    const notificationCount = 0;

    return <Sheet>
        <SheetTrigger className={"group -m-2 flex items-center p-2"}>
            <Bell
                aria-hidden={"true"}
                className={"h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"}
            />
            <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
              {0}
            </span>
        </SheetTrigger>

        <SheetContent className={"flex w-full flex-col pr-0 sm:max-w-lg"}>
            <SheetHeader className='space-y-2.5 pr-6'>
                <SheetTitle>Water Plant Reminder</SheetTitle>
            </SheetHeader>
            {notificationCount > 0
                ? (
                    <>
                        <div className={"flex w-full flex-col pr-6"}>
                            {/* Add Notification logic */}
                            Notification List
                        </div>
                        <div className={"space-y-4 pr-6"}>
                            <Separator />
                            <div className={"space-y-1.5 pr-6"}>
                                <div className={"flex"}>
                                    <span className={"flex-1"}>Title</span>
                                    <span>message</span>
                                </div>
                            </div>
                        </div>
                    </>
                )
                : (
                    <div className='flex h-full flex-col items-center justify-center space-y-1'>
                        <div
                            aria-hidden='true'
                            className='relative mb-4 h-60 w-60 text-muted-foreground'>
                            <Image
                                src='/hippo-empty-cart.png'
                                fill
                                alt='empty shopping cart hippo'
                            />
                        </div>
                        <div className='text-xl font-semibold'>
                            Notification is empty
                        </div>
                    </div>
                )
            }
        </SheetContent>

    </Sheet>
}

export default Notification;