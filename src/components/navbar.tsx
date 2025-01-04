"use client"

import { LINKS } from '@/constants/links';
import { cn } from '@/lib/utils';
import { FileTextIcon } from "lucide-react";
import Link from 'next/link';
import { buttonVariants } from "./ui/button";
import { Dock, DockIcon } from "./ui/dock";
import Icons from "./ui/icons";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const RESUME_LINK = process.env.NEXT_PUBLIC_RESUME_LINK;

const DATA = {
    navbar: LINKS,
    contact: {
        social: {
            github: {
                name: "Github",
                url: "https://github.com/Shreyas-29",
                icon: Icons.github,
            },
            linkedin: {
                name: "LinkedIn",
                url: "https://linkedin.com/in/shreyas-sihasane-441b95238/",
                icon: Icons.linkedin,
            },
            resume: {
                name: "Resume",
                url: RESUME_LINK as string,
                icon: FileTextIcon,
            },
        },
    },
};

const Header = () => {
    return (
        <header className="z-[99999] flex justify-center items-center w-full fixed bottom-6 inset-x-0">

            <div className="w-full h-20 bg-gradient-to-t from-background absolute -bottom-8 inset-x-0 -z-10"></div>
            <TooltipProvider delayDuration={0}>
                <Dock direction="middle" className="relative">
                    {DATA.navbar.map((item) => (
                        <DockIcon key={item.name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        aria-label={item.name}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-10 rounded-xl",
                                        )}
                                    >
                                        <item.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent sideOffset={10} className="px-2 py-1 text-xs">
                                    <p>{item.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full" />
                    {Object.entries(DATA.contact.social).map(([name, social]) => (
                        <DockIcon key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={social.url!}
                                        target="_blank"
                                        aria-label={social.name}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-xl",
                                        )}
                                    >
                                        <social.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{social.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                </Dock>
            </TooltipProvider>

        </header>
    )
}

export default Header
