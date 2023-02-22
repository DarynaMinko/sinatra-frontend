import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/shared/button";

export default component$(() => {
    return (
        <div class={`container mx-auto`}>
            <h1 class="text-red-500 text-">What's hot this weekend</h1>
            <p>thisi is a music app</p>
            <Button>primary</Button>
            <Button intent="secondary">Secondary</Button>
        </div>
    );
});

export const head = {
    title: "Sinatra | High Fidelity audio streaming",
    meta: [
        {
            name: "High Fidelity audio streaming",
            content: "High Fidelity audio streaming"
        }
    ]
} satisfies DocumentHead;
