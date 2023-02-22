import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div>
            <h1 class="text-red-500">Welcome to Qwik</h1>
            <p>thisi is a music app</p>
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
