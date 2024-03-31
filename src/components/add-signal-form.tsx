"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import prisma from "../../prisma/client"

const formSchema = z.object({
    imageUrl: z.string().min(6, {
        message: "Image url must be at least 6 characters.",
    }),
    pair: z.string().min(5, {
        message: "Pair must be at least 5 characters.",
    }),
    description: z.string().min(20, {
        message: "Description must be at least 20 characters.",
    }),
})

export function AddSignalForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            imageUrl: "",
            pair: "",
            description: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // try {
        //     // Create the analysis using the form values
        //     const createdAnalysis = await prisma.analysis.create({
        //         data: {
        //             imageUrl: values.imageurl,
        //             description: values.description,
        //             pair: values.pair,
        //         }
        //     });
        //     console.log('Analysis created:', createdAnalysis);
        // } catch (error) {
        //     console.error('Error creating analysis:', error);
        // }
        const response = await fetch('/api/analysis', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          });
        //   return await response.json(); 
        const data = await response.json();
        console.log(data);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add signal</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <FormField
                            control={form.control}
                            name="pair"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Pair" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Select currency pair.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Analysis</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Analysis image url" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Add analysis chart url here form tradingview.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Analysis</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Description of analysis" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Add Description of analysis.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
