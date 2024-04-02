import { ReloadIcon, RocketIcon } from "@radix-ui/react-icons"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export function SkeletonCard() {
    return (
        <div className="h-screen m-auto w-1/2 mt-12">
            <Alert>
            <RocketIcon className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription className="flex items-center gap-2">
                <ReloadIcon className="h-4 w-4 animate-spin" />
                Loading
            </AlertDescription>
        </Alert>
        </div>
    )
}
