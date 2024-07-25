import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
import { links } from "@/utils/links";

function LinksDropdown() {
  return (
    <DropdownMenu>
      {/* Trigger Component */}
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>

      {/* Drop Down Content */}
      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        {/* All the Items in the DropDown Menu are below */}
        {links.map((link, index) => {
          return (
            <DropdownMenuItem key={link.href}>
              <Link
                href={link.href}
                className={`capitalize w-full ${
                  index % 2 === 0 ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
