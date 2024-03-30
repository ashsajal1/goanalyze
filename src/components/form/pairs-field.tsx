"use client"

import { pairs } from '@/lib/paris'

import { Button } from "@/components/ui/button"
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
export default function ParisFiled({form}:{form:any}) {
    return (
        <FormField
            control={form.control}
            name="pair"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>Pairs</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                        "w-[200px] justify-between",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value
                                        ? pairs.find(
                                            (pair) => pair === field.value
                                        )
                                        : "Select pairs"}
                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                                <CommandInput
                                    placeholder="Search pairs..."
                                    className="h-9"
                                />
                                <CommandEmpty>No pairs found.</CommandEmpty>
                                <CommandGroup>
                                    <CommandItems Pair />
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <FormDescription>
                        This is the language that will be used in the dashboard.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

const CommandItems = ({ pairs, form, field, CheckIcon }: any) => {
    if (!Array.isArray(pairs)) {
        return null;
    }

    const commandItems = [];

    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        commandItems.push(
            <CommandItem
                value={pair}
                key={pair}
                onSelect={() => {
                    form.setValue("pair", pair);
                }}
            >
                {pair}
                <CheckIcon
                    className={cn(
                        "ml-auto h-4 w-4",
                        pair === field.value ? "opacity-100" : "opacity-0"
                    )}
                />
            </CommandItem>
        );
    }

    return commandItems;
};

